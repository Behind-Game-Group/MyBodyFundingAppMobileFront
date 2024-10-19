import React from "react";
import { Text } from "react-native";
import { useNavigate } from "react-router-native";
import {
  AcceptConsent,
  CentredContainer,
  LabelButtonAcceptConsent,
  ScreenContainer,
  TitleText,
} from "../Style/GeolocalisationScreen.Style";
import {
  faMapLocationDot,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  LogoContainer,
  LogoImage,
  LogoText,
  NavBtnContainer,
  NavButton,
  ArrowButton,
} from "../Style/Login.Style";

export default function GeolocalisationScreen() {
  const navigate = useNavigate();
  return (
    <ScreenContainer>
      <CentredContainer>
        <LogoContainer>
          <LogoImage source={require("../../assets/LOGO.png")} />
          <LogoText>Financement participatif</LogoText>
        </LogoContainer>
        <TitleText>Autorisez la géolocalisation</TitleText>
        <FontAwesomeIcon icon={faMapLocationDot} color="white" size={150} />
        <AcceptConsent onPress={() => navigate("/map")}>
        <LabelButtonAcceptConsent>
          J'accepte
        </LabelButtonAcceptConsent>
        </AcceptConsent>

        <NavBtnContainer>
          <NavButton onPress={() => navigate("/familyStatus")}>
            <ArrowButton icon={faArrowLeft} />
          </NavButton>
          <NavButton onPress={() => navigate("/map")}>
            <ArrowButton icon={faArrowRight} />
          </NavButton>
        </NavBtnContainer>
      </CentredContainer>
    </ScreenContainer>
  );
}
