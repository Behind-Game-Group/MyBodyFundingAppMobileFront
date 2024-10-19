export type User = {
	id: string;
	email: string;
	username: string;
};

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
export type LoginScreenState = {
	sending: boolean;
	user?: User;
	email: TextInputState;
	password: TextInputState;
};
