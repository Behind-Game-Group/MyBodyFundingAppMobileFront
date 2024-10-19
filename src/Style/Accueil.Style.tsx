import styled from "styled-components/native";
import { theme } from "./Theme.Style";
import { Project } from "../Type/WelcomeScreen.Type";


export const ScreenContainer = styled.View`
	background-color: ${theme.colors.softWhite};
	flex: 2;
`;

export const CentredContainer = styled.View`
	flex: 2;
`;
export const ProjectContainer = styled.View`
	justify-content: center;
	justify-items: center;
	margin: ${theme.sizes.xxl};
	
`;
export const ImageProject = styled.Image`
	height: 200;
	padding: 0;
	border-radius: 15;
`;

export const StyledFlatList = styled.FlatList<any>`


`