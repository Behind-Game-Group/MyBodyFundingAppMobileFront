import { User } from "./LoginScreen.Type";

export type TextInputState = {
	value: string;
	error?: string;
};
export type IconAide = {
	value: boolean;
};

/**
 * Représente l'état du composant de connexion
 */
export type SignInScreenState = {
	sending: boolean;
	user?: User;
	lastname: TextInputState;
	firstname: TextInputState;
	username: TextInputState;
    email: TextInputState;
	phonenumber: TextInputState;
	phoneVerification: boolean;
	gender: string;
	dateOfBirth: string;
	familyStatus : string;
	typeOfEstate?: string;
	telephoneOfRelated?: TextInputState;
	nationality?: string;
	avatar?: string;
};

export type SignInToApi = {
	lastname: TextInputState;
	firstname: TextInputState;
	username: TextInputState;
    email: TextInputState;
	phonenumber: TextInputState;
	gender: string;
	dateOfBirth: string; // yyyy-mm-dd
	familyStatus : string; 
	typeOfEstate? : string;
	telephoneOfRelated?: TextInputState;
	nationality?: string;
	avatar?: string;
}
