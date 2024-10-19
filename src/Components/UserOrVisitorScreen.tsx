import React from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";
import {
  AcceptConsent,
  LabelButtonAcceptConsent,
  LabelButtonRefuseConsent,
  RefuseConsent,
} from "../Style/Consentement.Style";
import { ArrowButton, CentredContainer, LogoContainer, LogoImage, LogoText, NavBtnContainer, NavButton, ScreenContainer, TitleText } from "../Style/UserOrVisitorScreen.Style";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function UserOrVisitorScreen() {
  const navigate = useNavigate();
  return (
    <ScreenContainer>
      <CentredContainer>
      <LogoContainer>
          <LogoImage source={require("../../assets/LOGO.png")} />
          <LogoText>Financement participatif</LogoText>
        </LogoContainer>
            <TitleText>
              VOUS ETES
            </TitleText>
          <AcceptConsent>
            <LabelButtonAcceptConsent onPress={() => navigate("/signIn")}>
              Visiteur
            </LabelButtonAcceptConsent>
          </AcceptConsent>
          <RefuseConsent>
            
            <LabelButtonRefuseConsent onPress={() => navigate("/signIn")}>
              
              Créateur
            </LabelButtonRefuseConsent>
          </RefuseConsent>
          <NavBtnContainer>
             <NavButton onPress={() => navigate("/consentement")}>
              <ArrowButton icon={faArrowLeft} />
            </NavButton>
            {/* <NavButton onPress={() => navigate("/geolocalisation")}>
              <ArrowButton icon={faArrowRight} />
            </NavButton> */}
        </NavBtnContainer>
      </CentredContainer>
    </ScreenContainer>
  );
}

