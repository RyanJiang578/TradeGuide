import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useState} from 'react';
import LoginPage from './screens/LoginPage';
import SignupPage from './screens/SignupPage';
import Dashboard from './screens/Dashboard';
import AIPage from './screens/AIPage';
import SettingsPage from './screens/SettingsPage';
import TOSPage from "./screens/TOSPage";
import PrivacyPolicyPage from "./screens/PrivacyPolicyPage";

const Stack = createNativeStackNavigator();

export default function App() {
  const[user, setUser] = useState(null);
  return (
    <NavigationContainer>
      {user === null ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LoginPage">{(props)=>(
          <LoginPage {...props} user={user} setUser={setUser}/>)}</Stack.Screen>
          <Stack.Screen name="SignupPage" component={SignupPage}/>
          <Stack.Screen name="TOSPage" component={TOSPage}/>
          <Stack.Screen name="PrivacyPolicyPage" component={PrivacyPolicyPage}/>
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Dashboard">{(props)=>(
          <Dashboard {...props} user={user}/>)}</Stack.Screen>
          <Stack.Screen name="AIPage">{(props)=>(
          <AIPage {...props} user={user} setUser={setUser}/>)}</Stack.Screen>
          <Stack.Screen name="SettingsPage">{(props)=>(
          <SettingsPage {...props} user={user} setUser={setUser}/>)}</Stack.Screen>
          <Stack.Screen name="TOSPage" component={TOSPage}/>
          <Stack.Screen name="PrivacyPolicyPage" component={PrivacyPolicyPage}/>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
