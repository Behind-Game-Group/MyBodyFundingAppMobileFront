import { action, map } from "nanostores";
import { IconAide, SignInScreenState } from "../Type/SignInScreen.Type";
import { loginIn, loginInWithAsyncStorage, logoutOfApi, register } from "../Lib/Backend";
/**
 * Store contenant l'état de la connexion
 */
export const SignInScreenStore = map<SignInScreenState>({
	sending: false,
	user: undefined,
	lastname: {
		value: "",
		error: undefined,
	},
	firstname: {
		value: "",
		error: undefined,
	},
	username: {
		value: "",
		error: undefined,
	},
    email: {
		value: "",
		error: undefined,
	},
    phonenumber: {
		value: "",
		error: undefined,
	},
	phoneVerification: true,
	gender: "",
	dateOfBirth: "",
	familyStatus : "",
	typeOfEstate: "",
    telephoneOfRelated: {
		value: "",
		error: undefined,
	},
	nationality: "",
	avatar: "",
});
export const InfoAide = map<IconAide>({
	value: false,
});

export const toggleInfo = action(InfoAide, "toggleInfo", (store, valeur) => {
	const { value } = store.get();
	store.setKey("value", !value);
});

/**
 * Action permettant de changer le nom
 */
export const setLastname = action(SignInScreenStore, "setLastname", (store, newlastname: string) => {
	store.setKey("lastname", { value: newlastname, error: undefined });
	validatLastname();
});

/**
 * Valide le nom contenue dans notre store
 */
export const validatLastname = action(SignInScreenStore, "validatLastname", (store) => {
	const { lastname } = store.get();
	const re = /^[A-Za-z.éèê-]{2,30}$/;

	if (!re.test(lastname.value)) {
		store.setKey("lastname", { ...lastname, error: `le nom n'est pas valide` });
	}
});

/**
 * Action permettant de changer le prénom
 */
export const setFirstname = action(SignInScreenStore, "setFirstname", (store, newfirstname: string) => {
	store.setKey("firstname", { value: newfirstname, error: undefined });
	validatFirstname();
});

/**
 * Valide le prénom contenue dans notre store
 */
export const validatFirstname = action(SignInScreenStore, "validatFirstname", (store) => {
	const { firstname } = store.get();
	const re = /^[A-Za-z.éèê-]{2,30}$/;

	if (!re.test(firstname.value)) {
		store.setKey("firstname", { ...firstname, error: `le prénom n'est pas valide` });
	}
});

/**
 * Action permettant de changer le nom d'utilisateur
 */
export const setUsername = action(SignInScreenStore, "setUsername", (store, newUsername: string) => {
	store.setKey("username", { value: newUsername, error: undefined });
	validateUsername();
});

/**
 * Valide le nom d'utilisateur contenu dans notre store
 */
export const validateUsername = action(SignInScreenStore, "validateUsername", (store) => {
	const { username } = store.get();
	const re = /^[A-Za-z0-9_-]{3,16}$/;

	if (!re.test(username.value)) {
		store.setKey("username", { ...username, error: "Le nom d'utilisateur n'est pas valide" });
	}
});

/**
 * Action permettant de changer l'email
 */
export const setEmail = action(SignInScreenStore, "setEmail", (store, newEmail: string) => {
	store.setKey("email", { value: newEmail, error: undefined});
	validateEmail();
});

/**
 * Valide un email contenu dans notre store
 */
export const validateEmail = action(SignInScreenStore, "validateEmail", (store) => {
	const { email } = store.get();
	const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

	console.log("hey !");
	if (!re.test(email.value)) {
		store.setKey("email", { ...email, error: "L'email n'est pas valide" });
	}
});

/**
 * Action permettant de changer le numéro de téléphone
 */
export const setPhoneNumber = action(SignInScreenStore, "setPhoneNumber", (store, newPhoneNumber: string) => {
	store.setKey("phonenumber", { value: newPhoneNumber, error: undefined });
	validatePhoneNumber();
});

/**
 * Valide le numéro de téléphone contenu dans notre store
 */
export const validatePhoneNumber = action(SignInScreenStore, "validatePhoneNumber", (store) => {
	const { phonenumber } = store.get();
	const re = /^\d{10}$/;

	if (!re.test(phonenumber.value)) {
		store.setKey("phonenumber", { ...phonenumber, error: "Le numéro de téléphone n'est pas valide" });
	}
});


/**
 * Action permettant de changer le status de la vérification par sms
 */
export const setPhoneVerification = action(SignInScreenStore, "setPhoneVerification", (store) => {
	store.setKey("phoneVerification", 	validatePhoneVerification());
});

/**
 * Valide la confirmation par sms
 */
export const validatePhoneVerification = action(SignInScreenStore, "validatePhoneVerification", (store) => {
	return true;
});



/**
 * Action permettant de changer le genre de l'utilisateur
 */
export const setGender = action(SignInScreenStore, "setGender", (store, genderSetter : string) => {
	store.setKey("gender",genderSetter);
});


export const setDateOfBirth = action(SignInScreenStore, "setDateOfBirth", (store, dateOfBirthSetter : string) => {
	store.setKey("dateOfBirth",dateOfBirthSetter);
});

export const setTypeOfEstate = action(SignInScreenStore, "setTypeOfEstate", (store, typeOfEstateSetter : string) => {
	store.setKey("typeOfEstate",typeOfEstateSetter);
});


export const setFamilyStatus = action(SignInScreenStore, "setFamilyStatus", (store, familyStatusSetter : string) => {
	store.setKey("familyStatus",familyStatusSetter);
});


export const setTelephoneRelated = action(SignInScreenStore, "setTelephoneRelated", (store, telephoneRelatedSetter : string) => {
	store.setKey("telephoneOfRelated",{value: telephoneRelatedSetter, error: ""});
	validateTelephoneRelated();
});


export const validateTelephoneRelated = action(SignInScreenStore, "validateTelephoneRelated", (store) => {
	const { phonenumber } = store.get();
	const re = /^\d{10}$/;

	if (!re.test(phonenumber.value)) {
		store.setKey("telephoneOfRelated", { ...phonenumber, error: "Le numéro de téléphone n'est pas valide" });
	}
});

export const setNationality = action(SignInScreenStore, "setNationality", (store, nationalitySetter : string) => {
	store.setKey("nationality", nationalitySetter);
	validateTelephoneRelated();
});

export const setAvatar = action(SignInScreenStore, "setAvatar", (store, avatarSetter : string) => {
	store.setKey("avatar", avatarSetter);
	validateTelephoneRelated();
});




/**
 * Check si tous les élements pour la première page d'inscription sont remplies 
 */

export const checkIfFirstPageElementAreFilled = action(SignInScreenStore, "checkIfFirstPageElementAreFilled", (store => {

	const {lastname, firstname, username, email, phonenumber} = store.get();
	return (lastname.value && lastname.error == undefined) 
	&& (firstname.value && firstname.error == undefined)
	&& (username.value && username.error == undefined)
	&& (email.value && email.error == undefined)
	&& (phonenumber.value && phonenumber.error == undefined)
})) 


export const checkIfGenderAndBirthAreFilled = action(SignInScreenStore, "checkIfGenderAndBirthAreFilled", (store => {
	const {dateOfBirth, gender} = store.get();
	return dateOfBirth&&gender;
}));

export const checkIfFamilyStatusPageAreFilled = action(SignInScreenStore, "checkIfFamilyStatusPageAreFilled", (store => {
	const {familyStatus, typeOfEstate, telephoneOfRelated} = store.get();
	if(familyStatus == "M") return true;
	else {
		return familyStatus&&typeOfEstate&&telephoneOfRelated;
	}
}));



/**
 * Action qui envoie le formulaire d'enregistrement à notre bdd
 */
export const sendRegister = action(SignInScreenStore, "sendRegister", async (store) => {
	// on affiche le bouton de chargement
	store.setKey("sending", true);

	const {lastname, firstname, email, username, phonenumber, gender, dateOfBirth, familyStatus, nationality} = store.get();
	if(familyStatus == "M"){
		const {typeOfEstate, telephoneOfRelated} = store.get();
	}
	const data = "aa";
	//const dataOfRegisterRequest = register();
	if(!data) {
		store.setKey('sending', false);
	}
	//store.setKey("user", data);
});
