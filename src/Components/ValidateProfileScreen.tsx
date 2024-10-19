import React from "react";
import { View } from "react-native";
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
} from "../Style/ValidateProfileScreen.Style";

export default function ValidateProfileScreen() {
  const navigate = useNavigate();

  return (
    <ScreenContainer>
      <CentredContainer>
        <TitleText>VOTRE IDENTITÉ A BIEN ÉTÉ CONFIRMÉE</TitleText>
        <FontAwesomeIcon icon={faCircleCheck} color="white" size={250} />
        <NavBtnContainer>
          <NavButton onPress={() => navigate("/captcha")}>
            <ArrowButton icon={faArrowLeft} />
          </NavButton>
          <NavButton onPress={() => navigate("/welcome")}>
            <ArrowButton icon={faArrowRight} />
          </NavButton>
        </NavBtnContainer>
      </CentredContainer>
    </ScreenContainer>
  );
}
