import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

import { useNavigate } from "react-router-native";
import {
  ArrowButton,
  CentredContainer,
  NavBtnContainer,
  NavButton,
  ScreenContainer,
  TitleText,
} from "../Style/IdentificationScreen.Style";


export default function IdentificationScreen() {
  const navigate = useNavigate();

  return (
    <ScreenContainer>
      <CentredContainer>
        <TitleText>VOTRE IDENTITÉ A BIEN ÉTÉ CONFIRMÉE</TitleText>
        <FontAwesomeIcon icon={faCircleCheck} color="white" size={250} />
        <NavBtnContainer>
          <NavButton onPress={() => navigate("/login")}>
            <ArrowButton icon={faArrowLeft} />
          </NavButton>
          <NavButton onPress={() => navigate("/")}>
            <ArrowButton icon={faArrowRight} />
          </NavButton>
        </NavBtnContainer>
      </CentredContainer>
    </ScreenContainer>
  );
}
