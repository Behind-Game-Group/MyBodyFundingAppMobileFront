import React from "react";
import { View } from "react-native";
import { useNavigate } from "react-router-native";

import {
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { ReCAPTCHA } from "react-google-recaptcha";
import { ArrowButton, CaptchaImage, CentredContainer, LogoContainer, LogoImage, LogoText, NavBtnContainer, NavButton, ScreenContainer } from "../Style/CaptchaScreen.Style";

export default function MapScreen() {
  const navigate = useNavigate();
  return (
    <ScreenContainer>
      <CentredContainer>
        <LogoContainer>
          <LogoImage source={require("../../assets/LOGO.png")} />
          <LogoText>Financement participatif</LogoText>
        </LogoContainer>

        <View>
        <CaptchaImage source={require("../../assets/captcha_exemple.png")} />
        <ReCAPTCHA sitekey="6LcO1C0nAAAAAO1huaSPKf6H8DF27k_PwbSNIcVf" />
        </View>
        
        
        <NavBtnContainer>
          <NavButton onPress={() => navigate("/addPicture")}>
            <ArrowButton icon={faArrowLeft} />
          </NavButton>
          <NavButton onPress={() => navigate("/validate")}>
            <ArrowButton icon={faArrowRight} />
          </NavButton>
        </NavBtnContainer>
      </CentredContainer>
    </ScreenContainer>
  );
}
