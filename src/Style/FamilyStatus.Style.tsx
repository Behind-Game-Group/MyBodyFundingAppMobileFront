import styled from "styled-components/native";
import { theme } from "./Theme.Style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export const ScreenContainer = styled.View`
  flex: 1;
  background-color: ${theme.colors.backgroundblue};
  justify-content: flex-start;
`;

export const CentredContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LogoContainer = styled.View`
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  align-items: center;
  padding: 20px 0;
`;

export const LogoImage = styled.Image`
  width: 300px;
  height: 150px;
  resizeMode: contain;
`;

export const LogoText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${theme.colors.softWhite};
  margin-top: 10px;
`;
export const Container = styled.View`
  background-color:${theme.colors.softWhite};
  border-radius: 10px;
  margin-vertical: 10px;
  padding-horizontal: 20px;
  padding-vertical: 10px;
  width:85%;
`;

export const LabelContainer = styled.View`
  margin-bottom: 10px;
`;

export const LabelText = styled.Text`
font-size: ${theme.sizes.xl};
  font-weight: bold;
`;

export const ButtonContainer = styled.View`
flex-direction: row;
flex:1;
align-items: center;
justify-content: center;
margin-bottom: 10px;
`;

export const ButtonContainerPropperties = styled.View`
flex-direction: row;
align-items: center;
justify-content: center;
margin-bottom: 10px;
`;

export const RadioButton = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border-width: 2px;
  border-color: black;
  margin-right: 10px;
`;

export const RadioButtonLabel = styled.Text`
  font-size: ${theme.sizes.xl};
  color: ${theme.colors.fbBlue};
  flex:2;
`;

export const RadioButtonLabelPropperties = styled.Text`
  font-size: ${theme.sizes.xl};
  color: ${theme.colors.fbBlue};
`;


export const InputContainer = styled.View``;

export const CalendarButtonContainer = styled.View``;

export const NavButton = styled.TouchableOpacity`
  background-color: ${theme.colors.softWhite};
  padding: ${theme.sizes.m} ${theme.sizes.l};
  border-radius: 50px;
  margin: ${theme.sizes.xl};
`;
export const ArrowButton = styled(FontAwesomeIcon)`
  color: ${theme.colors.backgroundblue};
  size: ${theme.iconSizes.m};
`;

export const NavBtnContainer = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 30;
  width: 100%;
  justify-content: space-between;
`;
export const ConsentText = styled.Text`
  color: ${theme.colors.white};
  text-align: center;
  margin-top: ${theme.sizes.xl};
  margin-horizontal: ${theme.sizes.xl};
  font-size: ${theme.sizes.l};
`;