import React, { useEffect } from "react";
import {
  ButtonContainer,
  ButtonInfo,
  CentredContainer,
  Input,
  InputMarckIcon,
  ArrowButton,
  LogoContainer,
  LogoImage,
  LogoText,
  NavButton,
  PasswordForget,
  ScreenContainer,
  TextError,
  TextInformation,
  TextInputContainer,
  NavBtnContainer,
} from "../Style/Login.Style";

import {
  faArrowLeft,
  faArrowRight,
  faCircleCheck,
  faCircleInfo,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { Navigate, Outlet, useNavigate } from "react-router-native";
import { useStore } from "@nanostores/react";
import {
  InfoAide,
  LoginScreenStore,
  initLoginScreen,
  sendLogin,
  setEmail,
  setPassword,
  toggleInfo,
} from "../Store/LoginScreen.Store";


const siteKey = "725af811-cf86-408b-a723-de70fca55543";
const baseUrl = "https://hcaptcha.com";

export default function LoginScreen() {
  // On récupére l'état du composant de connexion
  const { user, sending, email, password } = useStore(LoginScreenStore);
  const { value } = useStore(InfoAide);
  const navigate = useNavigate();

  // Utilisation d'un effet à l'affichage du composant afin
  // de connécté automatiquement l'utilisateur

  if (user) {
    return <Navigate to="/identification" />;
  }

    return (
      <ScreenContainer>
        <CentredContainer>
          <LogoContainer>
            <LogoImage source={require("../../assets/LOGO.png")} />
            <LogoText>Financement participatif</LogoText>
          </LogoContainer>
          <TextInputContainer>
            <Input
              placeholder="Email"
              keyboardType="email-address"
              value={email.value}
              onChangeText={setEmail}
            />
            {email.error ? (
              <InputMarckIcon icon={faXmark} color="red" />
            ) : (
              <InputMarckIcon icon={faCircleCheck} />
            )}
          </TextInputContainer>
          {email.error ? <TextError>{email.error}</TextError> : null}
          <TextInputContainer>
            <Input
              placeholder="Password"
              secureTextEntry={true}
              value={password.value}
              onChangeText={setPassword}
            />
            {password.error ? (
              <ButtonInfo onPress={toggleInfo}>
                <InputMarckIcon icon={faCircleInfo} />
              </ButtonInfo>
            ) : (
              <InputMarckIcon icon={faCircleCheck} />
            )}
          </TextInputContainer>
          {password.error ? <TextError>{password.error}</TextError> : null}
          {value ? (
            <>
              <TextInformation>
                Formé d'un minimum de 8 caractères
              </TextInformation>
              <TextInformation>Au moins une lettre majuscule.</TextInformation>
              <TextInformation>Au moins une lettre minuscule.</TextInformation>
              <TextInformation>Au moins un chiffre.</TextInformation>
              <TextInformation> Au moins un caractère spécial.</TextInformation>
            </>
          ) : null}
          <PasswordForget>Mot de passe oublié ?</PasswordForget>
          <NavBtnContainer>
            <NavButton onPress={() => navigate("/")}>
              <ArrowButton icon={faArrowLeft} />
            </NavButton>
            <NavButton onPress={sendLogin}>
              <ArrowButton icon={faArrowRight} />
            </NavButton>
          </NavBtnContainer>

        </CentredContainer>
      </ScreenContainer>
    );
  }

