import React from "react";
import { Text } from "react-native";
import { useNavigate } from "react-router-native";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  AcceptConsent,
  ArrowButton,
  CentredContainer,
  ConsentText,
  LabelButtonAcceptConsent,
  LogoContainer,
  LogoImage,
  LogoText,
  NavBtnContainer,
  NavButton,
  NumberLink,
  ScreenContainer,
  TitleText,
} from "../Style/VerificationScreen.Style";

export default function VerificationScreen() {
  const navigate = useNavigate();
  return (
    <ScreenContainer>
      <CentredContainer>
        <LogoContainer>
          <LogoImage source={require("../../assets/LOGO.png")} />
          <LogoText>Financement participatif</LogoText>
        </LogoContainer>
        <TitleText>VERIFICATION</TitleText>
        <ConsentText>
          Pour des raisons de sécurité veuillez confirmer votre compte avec
          l’aide du code qui vous a été envoyé par SMS au numéro suivant :
          00.11.22.33.44
          </ConsentText>

        <AcceptConsent>
          {" "}
          <LabelButtonAcceptConsent> qs54d6113 </LabelButtonAcceptConsent>{" "}
        </AcceptConsent>
        <NumberLink>
              Renvoyé le code
            </NumberLink>

            <NumberLink  onPress={() => navigate("/signIn")}>
              Changé de numéro de Tel.
            </NumberLink>


        <NavBtnContainer>
          <NavButton onPress={() => navigate("/signIn")}>
            <ArrowButton icon={faArrowLeft} />
          </NavButton>
          <NavButton onPress={() => navigate("/genderDoB")}>
            <ArrowButton icon={faArrowRight} />
          </NavButton>
        </NavBtnContainer>
      </CentredContainer>
    </ScreenContainer>
  );
}
