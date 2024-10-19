import styled from "styled-components/native";
import { theme } from "./Theme.Style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export const ScreenContainer = styled.View`
  flex: 1;
  background-color: ${theme.colors.backgroundblue};
  align-items: center;
  justify-content: flex-start;
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

export const IconContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${theme.sizes.xxl};
  font-size: 300px;
`;

export const IconWhite = styled(FontAwesomeIcon)`
  color: ${theme.colors.white};
  // font-size: 300px;
  margin-bottom: ${theme.sizes.xl};
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

export const TitleText = styled.Text`
  font-size: ${theme.sizes.xxl};
  font-family: ${theme.fonts.inter.bold};
  color: ${theme.colors.white};
  text-align: center;
  margin-Bottom: 20px;
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