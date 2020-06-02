import { AsyncStorage } from "react-native";

export const userService = {
    async login(username, password){
        await AsyncStorage.setItem('user', JSON.stringify({username}));
        return {username}
    },
    async logout(){
        await AsyncStorage.removeItem('user');
    }
}