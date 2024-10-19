import styled from "styled-components/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { theme } from "./Theme.Style";
import { Link } from "react-router-native";

export const ScreenContainer = styled.View`
  background-color: ${theme.colors.backgroundblue};
  flex: 2;
`;

export const CentredContainer = styled.View`
  justify-content: center;
  flex: 2;
`;
export const LogoContainer = styled.View`
  align-items: center;
  padding-bottom: 100;
`;
export const LogoImage = styled.Image`
  width:304;
  height: 165;
`;
export const LogoText = styled.Text`
  text-align: "center";
  font-family: ${theme.fonts.inter.semiBold};
  padding: ${theme.sizes.m};
  color: ${theme.colors.white};
  font-size: ${theme.sizes.l};
`;
export const ButtonContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${theme.sizes.xl};
`;

export const FbButton = styled.TouchableOpacity`
  background-color: ${theme.colors.fbBlue};
  padding: ${theme.sizes.m} ${theme.sizes.l};
  width: 85%;
  border-radius: 20;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin: ${theme.sizes.l};
`;
export const GoogleButton = styled.TouchableOpacity`
  background-color: ${theme.colors.white};
  padding: ${theme.sizes.m} ${theme.sizes.l};
  width: 85%;
  border-radius: 20;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin: ${theme.sizes.l};
`;
export const BlackButton = styled.TouchableOpacity`
  background-color: ${theme.colors.black};
  padding: ${theme.sizes.m} ${theme.sizes.l};
  width: 85%;
  border-radius: 20;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin: ${theme.sizes.l};
`;
export const LinkContainer = styled(Link)`
  flex-direction: row;
  flex: 1;
`;

export const LabelButtonWhite = styled.Text`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.inter.semiBold};
  font-size: ${theme.sizes.xl};
  text-align: center;
  padding-right: ${theme.sizes.m};
  flex: 1;
`;
export const LabelButtonBlack = styled.Text`
  color: ${theme.colors.black};
  font-family: ${theme.fonts.inter.semiBold};
  font-size: ${theme.sizes.xl};
  text-align: center;
  padding-right: ${theme.sizes.m};
  flex: 1;
`;
export const IconWhiteButton = styled(FontAwesomeIcon)`
  color: ${theme.colors.white};
  font-size: ${theme.iconSizes.xl};
  padding: ${theme.sizes.s} ${theme.sizes.m};
  align-self: flex-start;
`;
export const IconGoogleButton = styled(FontAwesomeIcon)`
  color: ${theme.colors.black};
  font-size: ${theme.iconSizes.xl};
  padding: ${theme.sizes.s} ${theme.sizes.m};
  align-self: flex-start;
`;
export const CreateCompteText = styled.Text`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.inter.regular};
  font-size: ${theme.sizes.l};
  text-align: center;
`;
export const CreateCompteLink = styled.Text`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.inter.regular};
  font-size: ${theme.sizes.l};
  text-align: center;
  text-decoration: white underline;
`;
export const Ligne = styled.View`
  border: 1px solid black;
  margin: ${theme.sizes.xxl};
`;
export const RedText = styled.Text`
  color: ${theme.colors.red};
  font-family: ${theme.fonts.inter.regular};
  font-size: ${theme.sizes.l};
  text-align: center;
  text-decoration: red underline;
`;
export const ImageBackground = styled.Image`
  width: 100%;
  resize-mode: cover;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

