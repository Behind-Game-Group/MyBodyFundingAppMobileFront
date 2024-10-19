import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { User } from "./LoginScreen.Type";

export type InfoStateWelcomeScreen = {
	numberOfDonator: number;
	sumOfInvestment: number;
    personnalInvestment: number;
	projectRecommendation: Project[];

};

export type Project = {
	id: number;
	title: string;
	introduction: string;
	short_url: string;
	json_url: string;
	url: string;
	start_date:string;
	end_date: string;
	image_large: string;
	image_thumb: string;
	video?: string;
	currency: string;
	target: number;
	pledged?: string;
	percent?:number;
	updates?:number;
	funding_types?:string;
	numberOfBackers:number;
	projectStatus:string;
	createur: User;
}