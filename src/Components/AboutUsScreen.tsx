import React from "react";
import { Text } from "react-native";
import { useNavigate } from "react-router-native";

import {
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { ArrowButton, CentredContainer, ConsentText, LogoContainer, LogoImage, NavBtnContainer, NavButton, ScreenContainer, TitleText } from "../Style/AboutUsScreen.Style";

export default function AboutUsScreen() {
  const navigate = useNavigate();
  return (
    <ScreenContainer>
      <CentredContainer>
        <LogoContainer>
          <LogoImage source={require("../../assets/LOGO.png")} />
        </LogoContainer>
        <TitleText>Découvrez nous</TitleText>
        <ConsentText>
          MY BODY GROUP est une société holding basée à Amsterdam, aux Pays-Bas,
          destinée à créer des infrastructures et à débloquer des capitaux,
          offrant des opportunités d'investissement précoces aux startups. Les
          activités du siège sont essentiellement la gestion des marques, des
          licences, de la finance et placements, ainsi que l'information et
          l'animation des pactes d'actionnaires. ​ Notre objectif est de
          démocratiser les investissements. Rejoignez et commencez à investir
          dans nos valeurs et notre plateforme internet dédiée au crowdfunding.
        </ConsentText>

        <NavBtnContainer>
          <NavButton onPress={() => navigate("/welcome")}>
            <ArrowButton icon={faArrowLeft} />
          </NavButton>
          <NavButton onPress={() => navigate("/project")}>
            <ArrowButton icon={faArrowRight} />
          </NavButton>
        </NavBtnContainer>
      </CentredContainer>
    </ScreenContainer>
  );
}
