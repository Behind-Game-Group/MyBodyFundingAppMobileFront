import React from "react";
import { useNavigate } from "react-router-native";
import MapView from "react-native-maps";
import { faArrowLeft, faArrowRight, faEarthEurope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  ArrowButton,
  CentredContainer,
  IconContainer,
  LogoContainer,
  LogoImage,
  LogoText,
  MapImage,
  NavBtnContainer,
  NavButton,
  ScreenContainer,
  TitleText,
} from "../Style/MapScreen.Style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function MapScreen() {
  const navigate = useNavigate();
  return (
    <ScreenContainer>
      <CentredContainer>
        <LogoContainer>
          <LogoImage source={require("../../assets/LOGO.png")} />
          <LogoText>Financement participatif</LogoText>
        </LogoContainer>
        <TitleText>Vous êtes localisé</TitleText>
        <IconContainer>
          <FontAwesomeIcon
              icon={faLocationDot}
              color="white"
              size={150}
            />
            <FontAwesomeIcon
             icon={faEarthEurope}
             color="white"
              size={150}
               />
        </IconContainer>


        {/* <MapImage source={require("../../assets/map_exemple.png")} /> */}
        {/* <MapView
          style={{ flex: 1, height: 200 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        /> */}
        <NavBtnContainer>
          <NavButton onPress={() => navigate("/geolocalisation")}>
            <ArrowButton icon={faArrowLeft} />
          </NavButton>
          <NavButton onPress={() => navigate("/addPicture")}>
            <ArrowButton icon={faArrowRight} />
          </NavButton>
        </NavBtnContainer>
      </CentredContainer>
    </ScreenContainer>
  );
}