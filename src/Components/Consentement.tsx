import React from "react";
import { useNavigate } from "react-router-native";
import {
  ScreenContainer,
  ConsentText,
  AcceptConsent,
  LabelButtonAcceptConsent,
  RefuseConsent,
  LabelButtonRefuseConsent,
  CentredContainer,
  LogoContainer,
  LogoImage,
} from "../Style/Consentement.Style";

export default function Consentement() {
  const navigate = useNavigate();

  return (
    <ScreenContainer>
      <CentredContainer>
      <LogoContainer>
          <LogoImage source={require("../../assets/Warning.png")} />
        </LogoContainer>

        <ConsentText>
          En créant un compte, vous acceptez nos conditions d'utilisation, notre
          politique en matière de cookies. Ces deux dernières politiques
          décrivent comment nous utilisons vos données pour proposer, améliorer
          et faire la promotion de nos services et de notre site, ainsi que les
          droits dont vous disposez pour contrôler cette utilisation et comment
          les exercer.
        </ConsentText>

        <AcceptConsent onPress={() => navigate("/userOrVisitor")}>
          <LabelButtonAcceptConsent>J'accepte</LabelButtonAcceptConsent>
        </AcceptConsent>

        <RefuseConsent onPress={() => navigate("/")}>
          <LabelButtonRefuseConsent>Je refuse</LabelButtonRefuseConsent>
        </RefuseConsent>
      </CentredContainer>
    </ScreenContainer>
  );
}
