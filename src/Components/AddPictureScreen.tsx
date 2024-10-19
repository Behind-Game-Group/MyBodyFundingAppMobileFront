import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigate } from "react-router-native";
import {
  ScreenContainer,
  CentredContainer,
  LogoContainer,
  LogoImage,
  LogoText,
  TitleText,
  ArrowButton,
  NavBtnContainer,
  NavButton,
  ButtonContainer,
  BlackButton,
  IconContainer,
} from "../Style/AddPictureScreen.Style";
import {
  faArrowLeft,
  faArrowRight,
  faCamera,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconWhiteButton, LabelButtonWhite } from "../Style/AllLogin.Style";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export default function AddPictureScreen() {
  const navigate = useNavigate();
  return (
    <ScreenContainer>
      <CentredContainer>
        <LogoContainer>
          <LogoImage source={require("../../assets/LOGO.png")} />
          <LogoText>Financement participatif</LogoText>
        </LogoContainer>
        <TitleText>Ajouter une photo</TitleText>
        <IconContainer>
        <LogoImage source={require("../../assets/Photo_Profil.png")} />
        </IconContainer>
        <ButtonContainer>
          <BlackButton>
            <IconWhiteButton icon={faDownload} />

            <LabelButtonWhite>Importer une image</LabelButtonWhite>
          </BlackButton>
          <BlackButton>
            <IconWhiteButton icon={faCamera} />

            <LabelButtonWhite>Prendre une photo</LabelButtonWhite>
          </BlackButton>
          <BlackButton>
            <IconWhiteButton icon={faFacebook} />

            <LabelButtonWhite>Meta (Facebook)</LabelButtonWhite>
          </BlackButton>
        </ButtonContainer>

        <NavBtnContainer>
          <NavButton onPress={() => navigate("/map")}>
            <ArrowButton icon={faArrowLeft} />
          </NavButton>
          <NavButton onPress={() => navigate("/captcha")}>
            <ArrowButton icon={faArrowRight} />
          </NavButton>
        </NavBtnContainer>
      </CentredContainer>
    </ScreenContainer>
  );
}
