import { action, map } from "nanostores";
import { IconAide, LoginScreenState, User } from "../Type/LoginScreen.Type";
import { loginIn, loginInWithAsyncStorage, logoutOfApi } from "../Lib/Backend";
import { EMAIL_TEST, PASSWORD_TEST } from "../Util/Constant";
/**
 * Store contenant l'état de la connexion
 */
export const LoginScreenStore = map<LoginScreenState>({
	sending: false,
	user: undefined,
	email: {
		value: "",
		error: undefined,
	},
	password: {
		value: "",
		error: undefined,
	},
});
export const InfoAide = map<IconAide>({
	value: false,
});

export const toggleInfo = action(InfoAide, "toggleInfo", (store, valeur) => {
	const { value } = store.get();
	store.setKey("value", !value);
});

/**
 * Action permettant de changer l'email
 */
export const setEmail = action(LoginScreenStore, "setEmail", (store, newemail: string) => {
	store.setKey("email", { value: newemail, error: "" });
	validatEmail();
});

/**
 * Action permettant de changer le mot de passe
 */
export const setPassword = action(LoginScreenStore, "setPassword", (store, newpassword: string) => {
	store.setKey("password", { value: newpassword, error: "" });
	validatPassword();
});

/**
 * Valide un email contenue dans notre store
 */
export const validatEmail = action(LoginScreenStore, "validateEmail", (store) => {
	const { email } = store.get();
	const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

	if (!re.test(email.value)) {
		store.setKey("email", { ...email, error: `l'email n'est pas valide` });
	}
});
/**
 * Valide un mot de passe contenue dans notre store
 */
export const validatPassword = action(LoginScreenStore, "validatPassword", (store) => {
	const { password } = store.get();
	const re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

	if (!re.test(password.value)) {
		store.setKey("password", { ...password, error: `le mot de passe n'est pas valide` });
	}
});

/**
 * Action qui envoie le formulaire de connexion à notre bdd
 */
export const sendLogin = action(LoginScreenStore, "sendLogin", async (store) => {
	// on affiche le bouton de chargement
	store.setKey("sending", true);

	const { email, password } = store.get();
	const data = await loginIn(email.value, password.value);

	if (!data) {
		store.setKey('sending', false);
		store.setKey("password", {value: "", error: ""})
		store.setKey("password", {value:"", error:"Erreur d'authentification"})
		return;
	}
	store.setKey("user", data);
});

/**
 * Action lancé au démarrage du login permettant de récupérer
 * un utilisateur si ce dernier est contenu dans le AsyncStorage
 * de votre téléphone
 */
export const initLoginScreen = action(LoginScreenStore, "initLoginScreen", async (store) => {
	// On fait charger le composant
	store.setKey("sending", true);

    const user = await loginInWithAsyncStorage();
	if (!user) {
		store.setKey("sending", false);
		return;
	}
	store.setKey("sending", false);
	store.setKey("user", user);
});

/**
 * Déconnecte un utilisateur connécté
 */
export const logout = action(LoginScreenStore, "logout", async (store) => {

	  // on récupére l'utilisateur dans le state
	  const { user } = store.get()
	  console.log("hohé hohé capitaine abandonné")
	  // Si il n'y dèja pas d'utilisateur on ne fait rien
	  if (!user) {
		return
	  }
	
	await logoutOfApi();
	store.setKey('sending', false)
	store.setKey('user', undefined)
});
