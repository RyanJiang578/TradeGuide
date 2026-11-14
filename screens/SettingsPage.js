import {StatusBar} from 'expo-status-bar';
import {useState} from 'react';
import {StyleSheet,Text,View,Alert,ScrollView,Platform} from 'react-native';
import {TextInput,Button,IconButton} from 'react-native-paper';
import Slider from '@react-native-community/slider';
import {getToken,deleteToken} from "../utils/tokenStorage";

export default function SettingsPage({navigation,user,setUser}){
    const[riskLevel,setRiskLevel]=useState(user.riskLevel);
    const[timeFrame,setTimeFrame]=useState(user.timeFrame);
    const[username,setusername]=useState("");
    const[message,setMessage]=useState("");

    async function savechanges(){
        const call=await fetch("https://tradeguidebackend-production.up.railway.app/changesettings",{
            method:"POST",
            headers:{"Content-Type":"application/json","Authorization":`Bearer ${user.token}`},
            body:JSON.stringify({riskLevel:riskLevel,timeFrame:timeFrame,name:username,email:user.email})
        });
        const response=await call.json();
        if(response==1){
            setMessage("an error has occured");
        }
        else{
            setMessage("changes saved");
            setUser({...user,riskLevel:riskLevel,timeFrame:timeFrame,username:username.trim()||user.username});
        }
    }
    function deleteAccount(){
        if (Platform.OS === "web") {
            if (window.confirm("Permanently delete your TradeGuide account?")) {
            confirmDelete();
            }
        return;
        }
        Alert.alert(
            "Delete Account",
            "Are you sure you want to permanently delete your account? All your account information and evaluation history will be deleted. This cannot be undone.",
            [
                {text:"Cancel",style:"cancel"},
                {text:"Delete",style:"destructive",onPress:confirmDelete}
            ]
        );
    }
    async function confirmDelete(){
        try{
            const token=await getToken();
            const call=await fetch("https://tradeguidebackend-production.up.railway.app/deleteAccount",{
                method:"DELETE",
                headers:{"Authorization":`Bearer ${token}`}
            });
            if(!call.ok){
                Alert.alert("Error","Unable to delete account. Please try again.");
                return;
            }
            await deleteToken();
            setUser(null);
        }
        catch(error){
            console.log("Account deletion error:",error);
        }
    }
async function logout(){
    try{
        await deleteToken();
        setUser(null);
    }
    catch(error){
        console.log("Logout error:",error);
        Alert.alert("Error","Unable to log out. Please try again.");
    }
}
    return (
        <View style={styles.background}>
            <StatusBar style="auto"/>

            <View style={styles.header}>
                <IconButton icon="arrow-left" iconColor="#1b4332" size={28}
                    style={styles.backButton} onPress={()=>navigation.goBack()}/>
                <Text style={styles.title}>Settings</Text>
            </View>

            <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={true} keyboardShouldPersistTaps="handled">

                <View style={styles.settingsCard}>
                    <Text style={styles.sectionTitle}>Investment Preferences</Text>

                    <View style={styles.sliderContainer}>
                        <View style={styles.labelRow}>
                            <Text style={styles.sliderLabel}>Risk Level</Text>
                            <Text style={styles.sliderValue}>{riskLevel} / 5</Text>
                        </View>
                        <Slider style={styles.slider} minimumValue={1} maximumValue={5} step={1}
                            value={riskLevel} onValueChange={setRiskLevel}
                            minimumTrackTintColor="#1b4332" maximumTrackTintColor="#cbd5d1"
                            thumbTintColor="#1b4332"/>
                        <View style={styles.rangeLabels}>
                            <Text style={styles.rangeText}>Conservative</Text>
                            <Text style={styles.rangeText}>Aggressive</Text>
                        </View>
                    </View>

                    <View style={styles.sliderContainer}>
                        <View style={styles.labelRow}>
                            <Text style={styles.sliderLabel}>Investment Timeframe</Text>
                            <Text style={styles.sliderValue}>{timeFrame} months</Text>
                        </View>
                        <Slider style={styles.slider} minimumValue={1} maximumValue={60} step={1}
                            value={timeFrame} onValueChange={setTimeFrame}
                            minimumTrackTintColor="#1b4332" maximumTrackTintColor="#cbd5d1"
                            thumbTintColor="#1b4332"/>
                        <View style={styles.rangeLabels}>
                            <Text style={styles.rangeText}>1 month</Text>
                            <Text style={styles.rangeText}>60 months</Text>
                        </View>
                    </View>

                    <Text style={styles.sectionTitle}>Account Settings</Text>
                    <Text style={styles.inputLabel}>Username</Text>

                    <TextInput mode="outlined" style={styles.usernameInput}
                        value={username} onChangeText={setusername}
                        placeholder={user?.username||"Enter new username"}
                        outlineColor="#b8cdc4" activeOutlineColor="#1b4332"
                        left={<TextInput.Icon icon="account-outline"/>}/>

                    <Button mode="contained" buttonColor="#1b4332" textColor="#ffffff"
                        icon="content-save-outline" style={styles.submitButton}
                        contentStyle={styles.submitContent} labelStyle={styles.submitLabel}
                        onPress={savechanges}>
                        Save Changes
                    </Button>

                    {message!==""&&(
                        <Text style={styles.message}>{message}</Text>
                    )}
                    <View style={styles.logoutSection}>
                    <Button mode="outlined" icon="logout" textColor="#1b4332" style={styles.logoutButton} contentStyle={styles.logoutContent}
                    onPress={logout}>Log Out</Button>
                    </View>
                    <View style={styles.deleteSection}>
                        <Text style={styles.deleteTitle}>Account Management</Text>
                        <Text style={styles.deleteDescription}>
                            Permanently delete your TradeGuide account and all associated evaluation history.
                            This action cannot be undone.
                        </Text>
                        <Button mode="outlined" icon="delete-outline" textColor="#c62828"
                            style={styles.deleteButton} contentStyle={styles.deleteContent}
                            onPress={deleteAccount}>
                            Delete Account
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles=StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:"#64c3a0",
        paddingHorizontal:20
    },
    header:{
        marginTop:60,
        marginBottom:30,
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
    backButton:{
        position:"absolute",
        left:0,
        top:0,
        margin:0,
        zIndex:1
    },
    settingsCard:{
        backgroundColor:"#ffffff",
        borderRadius:16,
        padding:22,
        elevation:3,
        shadowColor:"#000000",
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.12,
        shadowRadius:5
    },
    sectionTitle:{
        fontSize:20,
        fontWeight:"bold",
        color:"#1b4332",
        marginBottom:22
    },
    sliderContainer:{
        marginBottom:30
    },
    labelRow:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:10
    },
    sliderLabel:{
        fontSize:16,
        fontWeight:"600",
        color:"#333333"
    },
    sliderValue:{
        fontSize:16,
        fontWeight:"bold",
        color:"#1b4332"
    },
    slider:{
        width:"100%",
        height:40
    },
    rangeLabels:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    rangeText:{
        fontSize:12,
        color:"#777777"
    },
    inputLabel:{
        fontSize:16,
        fontWeight:"600",
        color:"#333333",
        marginBottom:10
    },
    usernameInput:{
        backgroundColor:"#ffffff",
        marginBottom:30
    },
    submitButton:{
        borderRadius:10,
        elevation:2
    },
    submitContent:{
        height:50
    },
    submitLabel:{
        fontSize:16,
        fontWeight:"bold"
    },
    message:{
        marginTop:18,
        fontSize:15,
        fontWeight:"500",
        textAlign:"center",
        color:"#1b4332"
    },
    scroll:{
        flex:1
    },
    scrollContent:{
        paddingBottom:40
    },
    deleteSection:{
        marginTop:30,
        borderTopWidth:1,
        borderTopColor:"#dddddd",
        paddingTop:20
    },
    deleteTitle:{
        fontSize:18,
        fontWeight:"bold",
        color:"#1b4332",
        marginBottom:10
    },
    deleteDescription:{
        fontSize:14,
        color:"#666666",
        lineHeight:20,
        marginBottom:15
    },
    deleteButton:{
        borderColor:"#c62828",
        borderRadius:10
    },
    deleteContent:{
        height:48
    },
    logoutSection:{
    marginTop:45
},
logoutButton:{
    borderColor:"#1b4332",
    borderRadius:10
},
logoutContent:{
    height:48
}
});
