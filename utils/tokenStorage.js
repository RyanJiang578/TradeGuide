import { Platform } from "react-native";
import * as SecureStore from "expo-secure-store";

export async function getToken() {
    if (Platform.OS === "web") {
        return sessionStorage.getItem("jwtToken");
    }
    return await SecureStore.getItemAsync("jwtToken");
}

export async function saveToken(token) {
    if (Platform.OS === "web") {
        sessionStorage.setItem("jwtToken", token);
        return;
    }
    await SecureStore.setItemAsync("jwtToken", token);
}

export async function deleteToken() {
    if (Platform.OS === "web") {
        sessionStorage.removeItem("jwtToken");
        return;
    }
    await SecureStore.deleteItemAsync("jwtToken");
}