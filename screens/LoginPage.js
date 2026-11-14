import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Platform} from 'react-native';
import {TextInput,Button} from "react-native-paper";
import {saveToken} from "../utils/tokenStorage";
export default function LoginPage({navigation,user,setUser}) {
  const[Email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  async function submit(){
    try{
      const call= await fetch("https://tradeguidebackend-production.up.railway.app/login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email:Email,password:password})
      });
      const reply=await call.json();
      if (reply.loginSucess==true){
        await saveToken(reply.token);
        setUser(reply);
      }
      else{
        return;
      }
    }
    catch(error){
      console.log("an error has occured");
    }
  }
  function CreateAccount(){
    navigation.navigate('SignupPage');
  }
  return (
    <View style={styles.background}>
    <StatusBar style="auto" />
      <View style={styles.header}>
      <Text style={styles.title}>TradeGuide</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.Prompt}>
          <Text>Email</Text>
          <TextInput style={styles.Email} value={Email} onChangeText={setEmail}></TextInput>
          <Text>Password</Text>
          <TextInput style={styles.Password} value={password} onChangeText={setPassword}></TextInput>
          <Button style={styles.Submit} labelStyle={styles.SubmitLabel} onPress={submit}>Submit</Button>
          <Button style={styles.CreateAccountButton} labelStyle={styles.SubmitLabel} onPress={CreateAccount}>Create Account</Button>
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#64c3a0',
    alignItems: 'center',
    justifyContent: 'center',
  },
header:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    paddingTop:200
},
title:{
    fontSize:44,
    fontWeight:'bold',
    color:'#1b4332',
    textAlign:'center'
},
  content: {
    flex:6,
    alignContent:'center',
    justifyContent:'center'
  },
  Prompt: {
    flex:2,
    alignContent:'center',
    justifyContent:'center'
  },
  Email: {
    marginBottom:15,
    height:40,
    width:200
  },
  Password: {
    marginBottom:15,
    height:40,
    width:200
  },
  Submit:{
    height:40,
    width:200,
    backgroundColor:'#39becf',
    marginBottom:15
  },
  SubmitLabel: {
    color:'#000000',
    fontSize:20,
    fontWeight:"bold"
  },
  CreateAccountButton: {
    height:40,
    width:200,
    backgroundColor:'#39becf'
  }
});
