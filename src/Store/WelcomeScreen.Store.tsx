import { action, map } from "nanostores";
import { InfoStateWelcomeScreen, Project } from "../Type/WelcomeScreen.Type";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Params } from "../Type/Api.Type";
import { get } from "../Lib/Backend";


export const InfoWelcomePage = map<InfoStateWelcomeScreen>({
    numberOfDonator: 0,
	sumOfInvestment: 0,
    personnalInvestment: 0,
    projectRecommendation: []
});



/**
 * Action permettant de changer le nom
 */
export const updateInfoWelcomePage = action(InfoWelcomePage, "updateInfoWelcomePage",async (store) => {
	
    const jwt = await AsyncStorage.getItem("jwtToken");
    const idUser = await AsyncStorage.getItem("userId");

    var numberOfDonatorRequest : Params = {baseUrl: "http://localhost:8080/api/myBodyFunding/v0.3/investment/sumOfCollaborator", token: jwt};
    var sumOfInvestmentRequest : Params = {baseUrl: "http://localhost:8080/api/myBodyFunding/v0.3/investment/sumOfInvestment", token: jwt};
    var sumOfInvestmentForAUserRequest : Params = {baseUrl: "http://localhost:8080/api/myBodyFunding/v0.3/user/" + idUser +"/investment", token: jwt};
    var recommendationProjectRequest : Params = {baseUrl: "http://localhost:8080/api/myBodyFunding/v0.3/project/projectRecommendation", token: jwt};


    var dataofDonatorRequest = await get(numberOfDonatorRequest);
    if(dataofDonatorRequest){
       store.setKey("numberOfDonator", dataofDonatorRequest);
    } 

    var dataOfSumOfInvestmentRequest = await get(sumOfInvestmentRequest);
    if(dataOfSumOfInvestmentRequest){
        store.setKey("sumOfInvestment", dataOfSumOfInvestmentRequest);
     } 

     var dataOfInvestmentForAUser = await get(sumOfInvestmentForAUserRequest);
     if(dataOfInvestmentForAUser){
        console.log(dataOfInvestmentForAUser);
         store.setKey("personnalInvestment", dataOfInvestmentForAUser);
      } 

      var dataOfRecommendationProject: Project[] = await get(recommendationProjectRequest);

      if(dataOfRecommendationProject){
        store.setKey("projectRecommendation", dataOfRecommendationProject);
      }
});
