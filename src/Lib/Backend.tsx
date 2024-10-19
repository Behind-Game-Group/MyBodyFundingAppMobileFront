import { User } from "../Type/LoginScreen.Type";
import axios from "axios";
import { BASE_URL } from "../Util/Constant";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Params } from "../Type/Api.Type";
import * as SecureStore from 'expo-secure-store';
import { SignInToApi } from "../Type/SignInScreen.Type";




/**
 * 
 * Method to call when you want to login someone
 * 
 * 
 */

export async function loginIn(email: string, password: string){
	try {
		const response = await axios.post("http://localhost:8080/api/myBodyFunding/v0.3/user/login", {
				email: email,
				password: password,
			})

		if (!response) {
			console.log("erreur");
			throw new Error();
			}

		const user = response.data;

		await AsyncStorage.setItem('userEmail', email)
		await AsyncStorage.setItem('userPassword', password)
		await AsyncStorage.setItem('userId', user["id"])
		// For mobile app :  ---- await SecureStore.setItemAsync('token', user.jwtToken);
		
		/* Only for local test, not in prod /!\ */
		await AsyncStorage.setItem('jwtToken', "Bearer " + user.jwtToken);

		return {
			id: user["id"],
			email: user["email"],
			username: user["username"],
		} as User

	} catch (e) {
		await AsyncStorage.removeItem('userEmail')
		await AsyncStorage.removeItem('userPassword')
		await AsyncStorage.removeItem('userId')
		await AsyncStorage.removeItem('jwtToken');
		return null;
	}
}

/**
 * Connect un utilisateur en utilisant les données stocké
 * dans le AsyncStorage
 */
export async function loginInWithAsyncStorage() {
	// On récupére l'email / password
	const email = await AsyncStorage.getItem('userEmail')
	const password = await AsyncStorage.getItem('userPassword')
	const token = await AsyncStorage.getItem('jwtToken');
	console.log(email);
	// Si aucun des deux n'éxiste
	if (!email || !password || !token) {
	  // On supprime le async storage
	  await AsyncStorage.removeItem('userEmail')
	  await AsyncStorage.removeItem('userPassword')
	  await AsyncStorage.removeItem('jwtToken');
	  await AsyncStorage.removeItem('userId');
	  return
	}
	return loginIn(email, password);
}

/**
 * Enregistre un utilisateur en utilisant les données stocké
 * dans le AsyncStorage
 */
export async function register(userToRegister : SignInToApi) {
	try{
		const response = await axios.post("http://localhost:8080/api/myBodyFunding/v0.3/user/register", userToRegister);
		if(!response){
			console.log("erreur");
			throw(Error);
		}
	}catch(e){

	}
}

  

/**
 * METHODE DE CONNEXION AVEC LE BACK, MERCI DE LES UTILISER !!!!!! SI BUG RAPPORTER A pierre.ribollet@gmail.com 
 */


/**
 * Method to get all data
 * @param path of the ressource
 * @returns data of the ressource
 */

export async function get(parameter : Params){
	try {

		const data = await axios.get(parameter.baseUrl,
			{ headers: {"Authorization" : parameter.token,'Content-Type': 'application/json'}})
			.then(function (response) {
				return response.data;
			})
			.catch(function (error) {
				console.log(error);
				return null;
			});
			return data;	
	} catch (e) {
		console.log(e);
		return null;
	}
}

export async function post(parameter: Params, bodyParameter: any){
	
	try {
		const data = await axios.post(parameter.baseUrl, bodyParameter, { headers: {"Authorization" : parameter.token, 'Content-Type': 'application/json'}})
			.then(function (response) {
				return response.data;
			})
			.catch(function (error) {
				return null;
			});
			return data;	
	} catch (e) {
		console.log(e);
		return null;
	}
}

export async function patch(parameter: Params, bodyParameter: any){
	try{
		const data = await axios.put(parameter.baseUrl, bodyParameter , { headers: {"Authorization" : parameter.token,'Content-Type': 'application/json'}})
			.then(function (response) {return response.data;})
			.catch(function (error) {return null;});
		return data;	
	}catch(e){
		console.log(e);
		return null;
	}
}

export async function del(parameter: Params){
	try{
		await axios.delete(parameter.baseUrl, {headers: {"Authorization" : parameter.token }});
	}catch(e){
		console.log(e);
		return null;
	}
}


export async function logoutOfApi() {
	//await SecureStore.deleteItemAsync("JwtToken");
	return await AsyncStorage.clear();
  }