import { View, Text } from "react-native";
import React from "react";
import { CentredContainer, ImageProject, InfoProjectContainer, ProjectContainer, ScreenContainer, TitleProject } from "../Style/ProjectScreen.Style";
import MenuBar from "./MenuBar";
import NavigBar from "./NavigBar";
import {NavButton, TextInputContainer } from "../Style/Login.Style";
import { del, get, patch, post } from "../Lib/Backend";
import { Params } from "../Type/Api.Type";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Test() {
	

	const test1 = async () => {
		const jwt = await AsyncStorage.getItem("jwtToken");
		var body = 	{
			idCreator: 2,
			title: "string",
			intro: "string",
			short_url: "string",
			json_url: "string",
			url: "string",
			start_date: "20-02-2000",
			end_date: "25-02-2000",
			image_large: "string", 
			image_thumb: "string",
			video: "string",
			currency: "string",
			target: 0,
			funding_type: "string"
		}
		if(jwt){
			var param3: Params  = {baseUrl: "http://localhost:8080/api/myBodyFunding/v0.3/project/", token: jwt};

			const data = await post(param3, body);
			if(!data){
				console.log("no data");
			}
			console.log(data);
		}
	}

	const test2 = async () => {

		const jwt = await AsyncStorage.getItem("jwtToken");
		if(jwt){
			var param1 : Params = {baseUrl:"http://localhost:8080/api/myBodyFunding/v0.3/project/7", token: jwt};

			const data = await del(param1);
			if(!data){
				console.log("no data");
			}
			console.log(data);
		}
	}

	const test3 = async () => {

		const jwt = await AsyncStorage.getItem("jwtToken");
		if(jwt){
			var param3: Params  = {baseUrl: "http://localhost:8080/api/myBodyFunding/v0.3/user/findAll", token: jwt};

			const data = await get(param3);
			if(!data){
				console.log("no data");
			}
			console.log(data);
		}
	}

	const test4 = async () => {
		const jwt = await AsyncStorage.getItem("jwtToken");
		var body = 	{
			idCreator: 3, 	
			title: "Test PATCH",
			intro: "Test PATCH",
			short_url: "Test PATCH",
			json_url: "Test PATCH",
			url: "string",
			start_date: "20-02-2000",
			end_date: "25-02-2000",
			image_large: "string", 
			image_thumb: "string",
			video: "string",
			currency: "string",
			target: 0,
			funding_type: "string"
		}

		/*   "idCreator": 3,
  "title": "TEST",
  "intro": "string",
  "short_url": "string",
  "json_url": "string",
  "url": "string",
  "start_date": "20-02-2000",
  "end_date": "25-02-2000",
  "image_large": "string",
  "image_thumb": "string",
  "video": "string",
  "currency": "string",
  "target": 0,
  "funding_type": "string" */
		if(jwt){
			var param3: Params  = {baseUrl: "http://localhost:8080/api/myBodyFunding/v0.3/project/2", token: jwt};

			const data = await patch(param3, body);
			if(!data){
				console.log("no data");
			}
			console.log(data);
		}
	}

	return (
		<ScreenContainer>
			<MenuBar />
			<NavButton onPress={async () =>{await test1()}}>
				<TextInputContainer> POST</TextInputContainer>
                </NavButton>

				<NavButton onPress={async () =>{await test2()}}>
				<TextInputContainer> DEL</TextInputContainer>
				</NavButton>

				<NavButton onPress={async () =>{await test3()}}>
				<TextInputContainer> GET</TextInputContainer>
                </NavButton>

				
				<NavButton onPress={async () =>{await test4()}}>
				<TextInputContainer> PUT </TextInputContainer>
                </NavButton>
			<NavigBar />
		</ScreenContainer>
	);
}
