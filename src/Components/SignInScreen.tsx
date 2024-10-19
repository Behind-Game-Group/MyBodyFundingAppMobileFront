import React from "react";
import {
  faArrowLeft,
  faArrowRight,
  faCircleCheck,
  faCircleInfo,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  ArrowButton,
  ButtonInfo,
  CentredContainer,
  Input,
  InputMarckIcon,
  LogoContainer,
  LogoImage,
  LogoText,
  NavBtnContainer,
  NavButton,
  ScreenContainer,
  TextError,
  TextInformation,
  TextInputContainer,
} from "../Style/SignInScreen.Style";

import { useNavigate } from "react-router-native";

import {
  InfoAide,
  SignInScreenStore,
  setPhoneNumber,
  setUsername,
  toggleInfo,
} from "../Store/SignInScreen.Store";
import { useStore } from "@nanostores/react";
import { setLastname, setFirstname, setEmail, checkIfFirstPageElementAreFilled } from "../Store/SignInScreen.Store";


export default function SignInScreen() {

  const {email, lastname, firstname, username, phonenumber} =
    useStore(SignInScreenStore);
  const { value } = useStore(InfoAide);

  const navigate = useNavigate();

  return (
    <ScreenContainer>
      <CentredContainer>
        <LogoContainer>
          <LogoImage source={require("../../assets/LOGO.png")} />
          <LogoText>Financement participatif</LogoText>
        </LogoContainer>
        <TextInputContainer>
          <Input
            placeholder="Nom"
            keyboardType="default"
            value={lastname.value}
            onChangeText={setLastname}
          />
          {lastname.error ? (
            <ButtonInfo onPress={toggleInfo}>
              <InputMarckIcon icon={faCircleInfo} />
            </ButtonInfo>
          ) : (
            <InputMarckIcon icon={faCircleCheck} />
          )}
        </TextInputContainer>
        {lastname.error ? <TextError>{lastname.error}</TextError> : null}
        {value ? (
          <>
            <TextInformation style={{ fontSize: 16 }}>
              Formé d'un minimum de 2 caractères
            </TextInformation>
          </>
        ) : null}
        <TextInputContainer>
          <Input
            placeholder="Prénom"
            keyboardType="default"
            value={firstname.value}
            onChangeText={setFirstname}
          />
          {lastname.error ? (
            <ButtonInfo onPress={toggleInfo}>
              <InputMarckIcon icon={faCircleInfo} />
            </ButtonInfo>
          ) : (
            <InputMarckIcon icon={faCircleCheck} />
          )}
        </TextInputContainer>
        {firstname.error ? <TextError>{firstname.error}</TextError> : null}
        {value ? (
          <>
            <TextInformation style={{ fontSize: 16 }}>
              Formé d'un minimum de 2 caractères
            </TextInformation>
          </>
        ) : null}

        <TextInputContainer>
          <Input placeholder="Nom d'utilisateur"
            value={username.value}
            onChangeText={setUsername}
          />
          {username.error ? (
            <InputMarckIcon icon={faXmark} color="red" />
          ) : (
            <InputMarckIcon icon={faCircleCheck} />
          )}
        </TextInputContainer>
        {username.error ? <TextError>{username.error}</TextError> : null}

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
          <Input placeholder="N° Teléphone"
            value={phonenumber.value}
            keyboardType="phone-pad"
            onChangeText={setPhoneNumber}
          />
          {phonenumber.error ? (
            <InputMarckIcon icon={faXmark} color="red" />
          ) : (
            <InputMarckIcon icon={faCircleCheck} />
          )}
        </TextInputContainer>
        {phonenumber.error ? <TextError>{phonenumber.error}</TextError> : null}
        <TextInformation style={{ fontSize: 16 }}>
              Champs obligatoires
            </TextInformation>
        <NavBtnContainer>
          <NavButton onPress={() => navigate("/userOrVisitor")}>
            <ArrowButton icon={faArrowLeft} />
          </NavButton>

          {checkIfFirstPageElementAreFilled() ?
          <NavButton onPress={() => navigate("/verification")}>
            <ArrowButton icon={faArrowRight} />
          </NavButton> : null
        }
        </NavBtnContainer>
      </CentredContainer>
    </ScreenContainer>
  );
}
