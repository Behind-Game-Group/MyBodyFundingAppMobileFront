import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  ArrowButton,
  ButtonContainer,
  ButtonContainerPropperties,
  CalendarButtonContainer,
  CentredContainer,
  ConsentText,
  Container,
  InputContainer,
  LabelContainer,
  LabelText,
  LogoContainer,
  LogoImage,
  LogoText,
  NavBtnContainer,
  NavButton,
  // RadioButton,
  RadioButtonLabel,
  RadioButtonLabelPropperties,
  ScreenContainer,
} from "../Style/FamilyStatus.Style";
import { RadioButton } from "react-native-paper";
import { theme } from "../Style/Theme.Style";

export default function FamilyStatusScreen() {
  const navigate = useNavigate();
  const [selectedStatus, setSelectedStatus] = React.useState("");

  return (
    <ScreenContainer>
      <CentredContainer>
        <LogoContainer>
          <LogoImage source={require("../../assets/LOGO.png")} />
          <LogoText>Financement participatif</LogoText>
        </LogoContainer>

        <ConsentText>
          Pour des raisons de législations, tous investisseur doit renseigner si
          il sont mariés ainsi que si vos biens sont partagés ou séparé.
        </ConsentText>


        {/* Container pour le status familiale */}
        <Container>
          <LabelContainer>
            <LabelText>Vous êtes:</LabelText>
          </LabelContainer>
          <View style={{ flexDirection: "row" }}>
            <ButtonContainer>
              <RadioButton
                value="célibataire"
                status={selectedStatus === "célibataire" ? "checked" : "unchecked"}
                onPress={() => setSelectedStatus("célibataire")}
                color={theme.colors.fbBlue}
              />
              <RadioButtonLabel>Célibataire</RadioButtonLabel>
            </ButtonContainer>
            <ButtonContainer>
              <RadioButton
                value="marié"
                status={selectedStatus === "marié" ? "checked" : "unchecked"}
                onPress={() => setSelectedStatus("marié")}
                color={theme.colors.fbBlue}
              />
              <RadioButtonLabel>Marié</RadioButtonLabel>
            </ButtonContainer>
          </View>
        </Container>

        {/* Container pour les biens */}
        <Container>
          <LabelContainer>
            <LabelText>Vos biens sont:</LabelText>
          </LabelContainer>
          <View style={{ marginLeft: 20 }}>
          
            <ButtonContainerPropperties>
              <RadioButton
                value="biens séparés"
                status={selectedStatus === "biens séparés" ? "checked" : "unchecked"}
                onPress={() => setSelectedStatus("biens séparés")}
                color={theme.colors.fbBlue}
              />
              <RadioButtonLabelPropperties>Biens séparés</RadioButtonLabelPropperties>
            </ButtonContainerPropperties>
            <ButtonContainerPropperties>
              <RadioButton
                value="communauté des biens"
                status={selectedStatus === "communauté des biens" ? "checked" : "unchecked"}
                onPress={() => setSelectedStatus("communauté des biens")}
                color={theme.colors.fbBlue}
              />
              <RadioButtonLabelPropperties>Communauté des biens</RadioButtonLabelPropperties>
            </ButtonContainerPropperties>
            <ButtonContainerPropperties>
              <RadioButton
                value="biens réduit aux acquets"
                status={selectedStatus === "biens réduit aux acquets" ? "checked" : "unchecked"}
                onPress={() => setSelectedStatus("biens réduit aux acquets")}
                color={theme.colors.fbBlue}
              />
              <RadioButtonLabelPropperties>Biens réduit aux acquets</RadioButtonLabelPropperties>
            </ButtonContainerPropperties>
          </View>
        </Container>
        <NavBtnContainer>
          <NavButton onPress={() => navigate("/genderDoB")}>
            <ArrowButton icon={faArrowLeft} />
          </NavButton>
          <NavButton onPress={() => navigate("/geolocalisation")}>
            <ArrowButton icon={faArrowRight} />
          </NavButton>
        </NavBtnContainer>
      </CentredContainer>
    </ScreenContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  labelContainer: {
    marginBottom: 10,
  },
  labelText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    backgroundColor: "black",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    textAlign: "center",
  },
  inputContainer: {},
  calendarButtonContainer: {},
});
