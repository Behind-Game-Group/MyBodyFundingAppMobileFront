import styled from "styled-components/native";
import { theme } from "./Theme.Style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export const ScreenContainer = styled.View`
  flex: 1;
  background-color: ${theme.colors.backgroundblue};
  align-items: center;
  justify-content: center;
`;

export const CentredContainer = styled.View`
  flex: 1;
  justify-content: center; 
  align-items: center;
`;

export const ConsentText = styled.Text`
  color: ${theme.colors.white};
  text-align: center;
  margin-top: ${theme.sizes.xl};
  margin-horizontal: ${theme.sizes.xl};
  font-size: ${theme.sizes.xl};
`;

export const AcceptConsent = styled.TouchableOpacity`
  background-color: ${theme.colors.white};
  padding: ${theme.sizes.m} ${theme.sizes.l};
  width: 85%;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-top: ${theme.sizes.l};
`;

export const LabelButtonAcceptConsent = styled.Text`
  color: ${theme.colors.fbBlue};
  font-family: ${theme.fonts.inter.semiBold};
  font-size: ${theme.sizes.xl};
  text-align: center;
`;

export const RefuseConsent = styled.TouchableOpacity`
  background-color: ${theme.colors.black};
  padding: ${theme.sizes.m} ${theme.sizes.l};
  width: 85%;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-top: ${theme.sizes.l};
`;

export const LabelButtonRefuseConsent = styled.Text`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.inter.semiBold};
  font-size: ${theme.sizes.xl};
  text-align: center;
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