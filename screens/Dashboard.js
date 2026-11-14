import {StatusBar} from 'expo-status-bar';
import {useState,useCallback} from 'react';
import {Button,IconButton} from 'react-native-paper';
import {FlatList,StyleSheet,Text,View,TouchableOpacity,Modal,ScrollView} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {getToken} from "../utils/tokenStorage";

export default function Dashboard({navigation}){
    const[history,setHistory]=useState([]);
    const[selected,setSelected]=useState(null);
    const[visible,setVisible]=useState(false);

    async function loadHistory(){
        try{
            const token=await getToken();
            const call=await fetch("https://tradeguidebackend-production.up.railway.app/loadHistory",{
                method:"GET",
                headers:{"Authorization":`Bearer ${token}`}
            });
            if(!call.ok){
                console.log("Failed to load history");
                return;
            }
            const reply=await call.json();
            setHistory(reply);
        }
        catch(error){
            console.log("An error has occurred",error);
        }
    }

    useFocusEffect(
        useCallback(()=>{
            loadHistory();
        },[])
    );

    function openHistory(item){
        setSelected(item);
        setVisible(true);
    }

    return (
        <View style={styles.background}>
            <StatusBar style="auto"/>

            <View style={styles.header}>
                <Text style={styles.title}>Dashboard</Text>
                <IconButton icon="cog-outline" iconColor="#1b4332" size={28}
                    style={styles.settingsButton} onPress={()=>navigation.navigate("SettingsPage")}/>
            </View>

            <Button mode="contained" icon="magnify" buttonColor="#1b4332"
                textColor="#ffffff" contentStyle={styles.searchContent}
                style={styles.searchButton} labelStyle={styles.searchLabel}
                onPress={()=>navigation.navigate("AIPage")}>
                Search
            </Button>

            <Text style={styles.historyTitle}>Evaluation History</Text>

            <FlatList style={styles.list} data={history}
                keyExtractor={(item)=>item.id.toString()}
                renderItem={({item})=>(
                    <TouchableOpacity style={styles.historyItem} onPress={()=>openHistory(item)}>
                        <Text style={styles.symbol}>{item.symbol}</Text>
                        <Text style={styles.date}>{item.date}</Text>
                    </TouchableOpacity>
                )}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>No recent evaluations</Text>
                }
            />

            <Modal visible={visible} transparent={true} animationType="fade"
                onRequestClose={()=>setVisible(false)}>
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        {selected&&(
                            <>
                                <ScrollView style={styles.modalScroll} showsVerticalScrollIndicator={true}>
                                    <Text style={styles.modalTitle}>{selected.symbol}</Text>
                                    <Text style={styles.modalDate}>{selected.date}</Text>

                                    <Text style={styles.modalLabel}>Current Value</Text>
                                    <Text style={styles.modalText}>${selected.currentValue}</Text>

                                    <Text style={styles.modalLabel}>Projected Value</Text>
                                    <Text style={styles.modalText}>${selected.projectedValue}</Text>

                                    <Text style={styles.modalLabel}>AI Analysis</Text>
                                    <Text style={styles.modalText}>{selected.information}</Text>
                                </ScrollView>

                                <Button mode="outlined" textColor="#1b4332"
                                    style={styles.closeButton} onPress={()=>setVisible(false)}>
                                    Close
                                </Button>
                            </>
                        )}
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles=StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:"#64c3a0",
        padding:20
    },
    header:{
        marginTop:40,
        marginBottom:25,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        position:"relative"
    },
    title:{
        fontSize:30,
        fontWeight:"bold",
        color:"#1b4332",
        textAlign:"center"
    },
    settingsButton:{
        position:"absolute",
        right:0,
        top:0,
        margin:0
    },
    searchButton:{
        borderRadius:12,
        elevation:3,
        overflow:"hidden"
    },
    searchContent:{
        height:52
    },
    searchLabel:{
        fontSize:17,
        fontWeight:"bold"
    },
    historyTitle:{
        fontSize:23,
        fontWeight:"bold",
        color:"#1b4332",
        marginTop:30,
        marginBottom:15
    },
    list:{
        flex:1
    },
    historyItem:{
        backgroundColor:"#ffffff",
        padding:15,
        marginBottom:10,
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        elevation:2
    },
    symbol:{
        fontSize:18,
        fontWeight:"bold",
        color:"#1b4332"
    },
    date:{
        fontSize:14,
        color:"#666666"
    },
    emptyText:{
        textAlign:"center",
        marginTop:30,
        color:"#1b4332"
    },
    modalBackground:{
        flex:1,
        backgroundColor:"rgba(0,0,0,0.4)",
        justifyContent:"center",
        alignItems:"center"
    },
    modalContent:{
        backgroundColor:"#ffffff",
        width:"90%",
        maxHeight:"75%",
        padding:20,
        borderRadius:12
    },
    modalScroll:{
        flexShrink:1
    },
    modalTitle:{
        fontSize:26,
        fontWeight:"bold",
        color:"#1b4332"
    },
    modalDate:{
        fontSize:14,
        color:"#666666",
        marginTop:5,
        marginBottom:20
    },
    modalLabel:{
        fontSize:18,
        fontWeight:"bold",
        color:"#1b4332",
        marginTop:15,
        marginBottom:5
    },
    modalText:{
        fontSize:15,
        lineHeight:23,
        color:"#333333"
    },
    closeButton:{
        marginTop:20,
        borderColor:"#1b4332",
        borderRadius:8
    }
});