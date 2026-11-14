import {StatusBar} from 'expo-status-bar';
import {useRef,useState} from 'react';
import {Pressable,ScrollView,StyleSheet,Text,View,Keyboard} from 'react-native';
import {TextInput,Button} from 'react-native-paper';

export default function AIPage({navigation,route,user}){
    const[text,settext]=useState("");
    const[valid,setvalid]=useState(false);
    const[list,setList]=useState([]);
    const[message,setMessage]=useState("");
    const[result,setResult]=useState(null);
    const[resultSymbol,setResultSymbol]=useState("");
    const requestId=useRef(0);

    async function AIprompt(stock){
        if(!valid){
            setMessage("Please select a stock from the suggestions.");
            return;
        }
        requestId.current++;
        setList([]);
        Keyboard.dismiss();
        setMessage("");

        try{
            const call=await fetch("https://tradeguidebackend-production.up.railway.app/evalStock",{
                method:"POST",
                headers:{"Content-Type":"application/json","Authorization":`Bearer ${user.token}`},
                body:JSON.stringify({name:stock,riskLevel:user.riskLevel,timeFrame:user.timeFrame,email:user.email})
            });
            if(!call.ok){
                setMessage("Network error");
                return;
            }
            const data=await call.json();
            if(data.responseCode===1){
                setMessage("Usage limit reached for today.");
            }
            else if(data.responseCode===0){
                setResult(data);
                setResultSymbol(stock);
            }
            else{
                setMessage("Unable to evaluate stock.");
            }
        }
        catch(error){
            console.log("An error has occurred",error);
            setMessage("Unable to connect to server.");
        }
    }

    async function tryAutoFill(value){
        const currentRequest=++requestId.current;
        settext(value);
        setvalid(false);
        setList([]);

        if(value.trim().length<2){
            return;
        }
        try{
            const call=await fetch("https://tradeguidebackend-production.up.railway.app/autofill",{
                method:"POST",
                headers:{"Content-Type":"text/plain"},
                body:value
            });
            if(!call.ok)return;
            const suggestions=await call.json();
            if(currentRequest!==requestId.current){
                return;
            }
            setList(Array.isArray(suggestions)?suggestions:[]);
        }
        catch(error){
            console.log("Autocomplete error",error);
        }
    }

    function selectStock(stock){
        requestId.current++;
        settext(stock.symbol);
        setvalid(true);
        setList([]);
        setMessage("");
        Keyboard.dismiss();
    }

    return (
        <View style={styles.background}>
            <StatusBar style="auto"/>

            <View style={styles.header}>
                <Text style={styles.title}>TradeGuideAI</Text>
            </View>

            <Pressable style={styles.backButton} onPress={()=>navigation.navigate("Dashboard")}>
                <Text style={styles.backArrow}>‹</Text>
            </Pressable>

            <ScrollView style={styles.scroll} contentContainerStyle={styles.content}
                keyboardShouldPersistTaps="handled">

                <View style={styles.maintextinput}>
                    <TextInput value={text} onChangeText={tryAutoFill}/>
                    <Button style={styles.Submit} labelStyle={styles.SubmitLabel}
                        onPress={()=>AIprompt(text)}>
                        Submit
                    </Button>
                </View>

                {message!==""&&(
                    <Text style={styles.message}>{message}</Text>
                )}

                {list.length>0&&(
                    <View style={styles.suggestionsContainer}>
                        {list.map((stock)=>(
                            <Pressable key={stock.symbol} style={styles.suggestion}
                                onPress={()=>selectStock(stock)}>
                                <Text>({stock.symbol}) {stock.name}</Text>
                            </Pressable>
                        ))}
                    </View>
                )}

                {result!==null&&list.length===0&&(
                    <ScrollView style={styles.resultContainer}
                        contentContainerStyle={styles.resultContent}
                        nestedScrollEnabled={true} showsVerticalScrollIndicator={true}>
                        <Text style={styles.resultTitle}>Stock Evaluation: {resultSymbol}</Text>
                        <Text style={styles.resultText}>Current Price: ${result.currentValue}</Text>
                        <Text style={styles.resultText}>Projected Price: ${result.projectedValue}</Text>
                        <Text style={styles.resultText}>AI Analysis: {result.information}</Text>
                    </ScrollView>
                )}
            </ScrollView>
        </View>
    );
}

const styles=StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:"#64c3a0"
    },
    scroll:{
        flex:1
    },
    content:{
        flexGrow:1,
        paddingTop:180,
        paddingBottom:40,
        alignItems:"center"
    },
    backButton:{
        position:"absolute",
        top:50,
        left:20,
        zIndex:10,
        padding:10
    },
    backArrow:{
        fontSize:36,
        color:"#000000"
    },
    maintextinput:{
        width:250,
        alignSelf:"center"
    },
    suggestionsContainer:{
        width:300,
        marginTop:12
    },
    suggestion:{
        width:"100%",
        backgroundColor:"#ffffff",
        borderWidth:1,
        borderColor:"#333333",
        borderRadius:8,
        padding:12,
        marginBottom:2
    },
    resultContainer:{
        backgroundColor:"#ffffff",
        borderRadius:15,
        marginTop:35,
        width:300,
        maxHeight:350,
        flexGrow:0
    },
    resultContent:{
        padding:20
    },
    resultTitle:{
        fontSize:20,
        fontWeight:"bold",
        marginBottom:15
    },
    resultText:{
        fontSize:16,
        marginBottom:10
    },
    message:{
        marginTop:12,
        textAlign:"center"
    },
    Submit:{
        height:40,
        width:200,
        backgroundColor:"#39becf",
        marginTop:10,
        marginBottom:2,
        alignSelf:"center"
    },
    SubmitLabel:{
        color:"#000000",
        fontSize:20,
        fontWeight:"bold"
    },
    header:{
        position:"absolute",
        top:80,
        width:"100%",
        alignItems:"center",
        justifyContent:"center"
    },
    title:{
        fontSize:30,
        fontWeight:"bold",
        color:"#1b4332",
        textAlign:"center"
    }
});
