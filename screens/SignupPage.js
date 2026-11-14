import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {TextInput,Button,Checkbox} from "react-native-paper";
export default function SignupPage({navigation}){
    const[Email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[username,setUsername]=useState("");
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    async function submit(){
    if (!acceptedTerms) {
    return;
    }
    try{
      const call= await fetch("https://tradeguidebackend-production.up.railway.app/signup",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email:Email,password:password,username:username})
      });
        const reply=Number(await call.text());
        if (reply==0){
            console.log("backend working");
        }
        else{
            redirectToLogin();
            
        }
        }
        catch(error){
        console.log("an error has occured",error);
        }
  }
  function redirectToLogin(){
    navigation.navigate('LoginPage');
  }

return (
    <View style={styles.background}>
        <StatusBar style="auto" />

        <View style={styles.header}>
            <Text style={styles.title}>Sign Up</Text>
        </View>

        <View style={styles.content}>
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.Email}
                value={Email}
                onChangeText={setEmail}
                mode="outlined"
                autoCapitalize="none"
                keyboardType="email-address"
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.Password}
                value={password}
                onChangeText={setPassword}
                mode="outlined"
                secureTextEntry={true}
            />

            <Text style={styles.label}>Username</Text>
            <TextInput style={styles.Username} value={username} onChangeText={setUsername} mode="outlined"/>
        <View style={styles.termsContainer}>
    <View style={styles.checkboxWrapper}>
        <Checkbox.Android
            status={acceptedTerms ? "checked" : "unchecked"}
            onPress={() => setAcceptedTerms(!acceptedTerms)}
            color="#1b4332"
            uncheckedColor="#1b4332"
        />
    </View>

    <Text style={styles.termsText}>
        I agree to the{" "}
        <Text
            style={styles.termsLink}
            onPress={() => navigation.navigate("TOSPage")}
        >
            Terms of Service
        </Text>
        {" and acknowledge the "}
        <Text
            style={styles.termsLink}
            onPress={() => navigation.navigate("PrivacyPolicyPage")}
        >
            Privacy Policy
        </Text>
        .
    </Text>
</View>
<Button style={styles.CreateAccount} labelStyle={styles.ButtonFont} disabled={!acceptedTerms} onPress={submit}>
        Create Account
    </Button>
    <Button  style={styles.BackToLogin} labelStyle={styles.ButtonFont} onPress={redirectToLogin}>
        Back to Login</Button></View>
    </View>
);
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#64c3a0",
        alignItems: "center",
        justifyContent: "center"
    },
    header: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 80
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#1b4332"
    },
    content: {
        flex: 6,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#1b4332",
        width: 280,
        marginBottom: 5
    },
    Email: {
        marginBottom: 15,
        height: 45,
        width: 280,
        backgroundColor: "#ffffff"
    },
    Password: {
        marginBottom: 15,
        height: 45,
        width: 280,
        backgroundColor: "#ffffff"
    },
    Username: {
        marginBottom: 20,
        height: 45,
        width: 280,
        backgroundColor: "#ffffff"
    },
termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 280,
    marginBottom: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#1b4332"
},
checkboxWrapper: {
    backgroundColor: "#e8f5ee",
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: "#1b4332",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center"
},
termsText: {
    fontSize: 14,
    color: "#1b4332",
    flexShrink: 1,
    lineHeight: 21
},
termsLink: {
    color: "#0056b3",
    fontWeight: "bold",
    textDecorationLine: "underline"
},
CreateAccount: {
    height: 40,
    width: 200,
    backgroundColor: "#39becf",
    marginBottom: 15,
    alignSelf: "center"
},
BackToLogin: {
    height: 40,
    width: 200,
    backgroundColor: "#39becf",
    marginBottom: 15,
    alignSelf: "center"
},
ButtonFont: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold"
}
});
