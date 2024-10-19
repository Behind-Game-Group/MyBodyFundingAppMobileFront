import React from "react";
import { useNavigate } from "react-router-native";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  ScreenContainer,
  CentredContainer,
  LogoContainer,
  LogoImage,
  LogoText,
  LabelContainer,
  LabelText,
  ButtonContainer,
  // RadioButton,
  RadioButtonLabel,
  NavBtnContainer,
  NavButton,
  ArrowButton,
  GenderContainer,
  DoBContainer,
} from "../Style/GenderDoBScreen.Style";
import { SignInScreenStore } from "../Store/SignInScreen.Store";
import { useStore } from "@nanostores/react";
import { RadioButton } from "react-native-paper";
import DatePicker from "react-native-datepicker";
import { theme } from "../Style/Theme.Style";
import { TouchableOpacity, View,Text } from "react-native";

export default function GenderDoBScreen() {
  const { dateOfBirth, gender } = useStore(SignInScreenStore);
  const navigate = useNavigate();
  const [selectedGender, setSelectedGender] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [showDatePicker, setShowDatePicker] = React.useState(false);

  return (
    <ScreenContainer>
      <CentredContainer>
        <LogoContainer>
          <LogoImage source={require("../../assets/LOGO.png")} />
          <LogoText>Financement participatif</LogoText>
        </LogoContainer>


        <GenderContainer>
          <LabelContainer>
            <LabelText>Genre:</LabelText>
          </LabelContainer>
          <View style={{ flexDirection: "row" }}>
          <ButtonContainer>
            <RadioButton
              value="homme"
              status={selectedGender === "homme" ? "checked" : "unchecked"}
              onPress={() => setSelectedGender("homme")}
              color={theme.colors.fbBlue}
            />
            <RadioButtonLabel>Homme</RadioButtonLabel>
          </ButtonContainer>
          <ButtonContainer>
            <RadioButton
              value="femme"
              status={selectedGender === "femme" ? "checked" : "unchecked"}
              onPress={() => setSelectedGender("femme")}
              color={theme.colors.fbBlue}
            />
            <RadioButtonLabel>Femme</RadioButtonLabel>
          </ButtonContainer>
          </View>
        </GenderContainer>

        <DoBContainer>
          <LabelContainer>
            <LabelText>Date de naissance:</LabelText>
          </LabelContainer>
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <Text>{selectedDate.toLocaleDateString()}</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DatePicker
              style={{ width: "100%" }}
              date={selectedDate}
              mode="date"
              placeholder="Sélectionner une date"
              format="DD-MM-YYYY"
              minDate="1900-01-01"
              maxDate={new Date()}
              confirmBtnText="Confirmer"
              cancelBtnText="Annuler"
              customStyles={{
                dateInput: {
                  borderWidth: 0,
                  alignItems: "flex-start",
                },
                dateText: {
                  fontSize: 16,
                },
                placeholderText: {
                  fontSize: 16,
                  color: "#999999",
                },
              }}
              onDateChange={(date) => {
                setSelectedDate(new Date(date));
                setShowDatePicker(false);
              }}
            />
          )}
        </DoBContainer>
        <NavBtnContainer>
          <NavButton onPress={() => navigate("/verification")}>
            <ArrowButton icon={faArrowLeft} />
          </NavButton>
          <NavButton onPress={() => navigate("/familyStatus")}>
            <ArrowButton icon={faArrowRight} />
          </NavButton>
        </NavBtnContainer>
      </CentredContainer>
    </ScreenContainer>
  );
}
