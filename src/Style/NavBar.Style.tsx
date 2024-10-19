import styled from "styled-components/native";
import { theme } from "./Theme.Style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export const BottomNavContainer = styled.View`
	flex-direction: column;
	justify-content: space-between;
	// position: fixed;
	// bottom:0;
`;
/**
 * Contient la barre de navigation principal en bas de l'écran
 */
export const BottomNav = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	background-color: ${theme.colors.softWhite};
	border: 1px solid ${theme.colors.softBlack};
	border-top-left-radius: 20;
	border-top-right-radius: 20;
`;

/**
 * Contient l'icon de menu du bas
 */
export const BottomNavIcon = styled(FontAwesomeIcon)`
	color: ${theme.colors.backgroundblue};
`;
