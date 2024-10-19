import { View, Text } from "react-native";
import React from "react";
import { CentredContainer, ImageProject, InfoProjectContainer, ProjectContainer, ScreenContainer, TitleProject } from "../Style/ProjectScreen.Style";
import MenuBar from "./MenuBar";
import NavigBar from "./NavigBar";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../Style/Theme.Style";
import { LogoContainer, LogoImage, LogoText } from "../Style/Login.Style";

export default function ProjectScreen() {
	return (
		<>
		<ScreenContainer>
			<MenuBar />
			<CentredContainer>
			<LogoContainer>
          <LogoImage source={require("../../assets/LOGO.png")} />
          <LogoText>Financement participatif</LogoText>
        </LogoContainer>
				<ProjectContainer>
				<ImageProject source={require("../../assets/projet_exemple.png")} />
					<LinearGradient colors={[theme.colors.backgroundblue, "white"]} start={{ x: 0.5, y: 0.7 }}>
						<InfoProjectContainer>
							<TitleProject>Script Funding For Major New Netflix Series</TitleProject>
						</InfoProjectContainer>
					</LinearGradient>
				</ProjectContainer>
			</CentredContainer>
			<NavigBar />
		</ScreenContainer>
		</>
	);
}
