import React from "react";
import { useNavigate } from "react-router-native";

import {
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { ArrowButton, CentredContainer, LogoContainer, LogoImage, NavBtnContainer, NavButton, ScreenContainer, TitleText } from "../Style/WelcomeScreen.Style";


export default function WelcomeScreen() {
  const navigate = useNavigate();
  return (
    <ScreenContainer>
      <CentredContainer>
      <TitleText>BIENVENUE VISITEUR SUR</TitleText>
      <LogoContainer>
              <LogoImage source={require("../../assets/Login.png")} />
            </LogoContainer>
        <NavBtnContainer>
          <NavButton onPress={() => navigate("/validate")}>
            <ArrowButton icon={faArrowLeft} />
          </NavButton>
          <NavButton onPress={() => navigate("/aboutUs")}>
            <ArrowButton icon={faArrowRight} />
          </NavButton>
        </NavBtnContainer>
      </CentredContainer>
    </ScreenContainer>
  );
}
