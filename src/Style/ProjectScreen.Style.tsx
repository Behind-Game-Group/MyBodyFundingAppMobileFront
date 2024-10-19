import styled from "styled-components/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { theme } from "./Theme.Style";
import { Link } from "react-router-native";

export const ScreenContainer = styled.View`
	background-color: ${theme.colors.softWhite};
	flex: 2;
`;

export const CentredContainer = styled.View`
	justify-content: center;
	flex: 2;
`;

export const ProjectContainer = styled.View`
	justify-content: center;
	justify-items: center;
	margin: ${theme.sizes.xxl};
	border: 3px solid ${theme.colors.backgroundblue};
	border-radius: 15;
`;
export const ImageProject = styled.Image`
	height: 200;
	padding: 0;
	border-radius: 15;
`;
export const InfoProjectContainer = styled.View`
	justify-content: center;
	justify-items: center;
	background-color: linear-gradient(blue, #ba2929);
`;
export const TitleProject = styled.Text`
	font-family: ${theme.fonts.inter.bold};
	font-size: ${theme.sizes.l};
	color: ${theme.colors.backgroundblue};
`;
