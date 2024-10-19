import styled from "styled-components/native";
import { theme } from "./Theme.Style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export const BottomNavContainer = styled.View`
	flex-direction: column;
	justify-content: space-between;
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
`;
export const Title = styled.Text`
	color: ${theme.colors.backgroundblue};
	font-size: ${theme.sizes.xxl};
	font-weight: bold;
`;

/**
 * Contient l'icon de menu du bas
 */
export const BottomNavIcon = styled(FontAwesomeIcon)`
	color: ${theme.colors.backgroundblue};
	size: ${theme.sizes.l};
	font-family: ${theme.fonts.inter.bold};
`;
