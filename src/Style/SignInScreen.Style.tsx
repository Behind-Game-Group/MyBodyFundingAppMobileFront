import styled from "styled-components/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { theme } from "./Theme.Style";

export const ScreenContainer = styled.View`
  background-color: ${theme.colors.backgroundblue};
  flex: 1;
  justify-content: flex-start;
  padding: 20px;
`;

export const CentredContainer = styled.View`
  justify-content: center;
  flex: 2;
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


export const TextInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${theme.colors.softWhite};
  border-radius: 5px;
  margin: 0px ${theme.sizes.xxl};
  margin-top: 40px;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding: ${theme.sizes.m};
  color: ${theme.colors.softBlack};
  font-size: ${theme.sizes.l};
//   margin-bottom: 20px;
  align-items: center;
`;

export const ButtonInfo = styled.TouchableOpacity``;

export const InputMarckIcon = styled(FontAwesomeIcon)`
  color: ${theme.colors.softBlack};
  size: ${theme.iconSizes.m};
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin: ${theme.sizes.xl};
`;

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

export const TextError = styled.Text`
  color: ${theme.colors.red};
  text-decoration: underline red;
  margin: 0px ${theme.sizes.xxl};
`;
export const TextInformation = styled.Text`
  color: ${theme.colors.softWhite};
  margin: 0px ${theme.sizes.xxl};
  font-size: ${theme.sizes.s};
`;
