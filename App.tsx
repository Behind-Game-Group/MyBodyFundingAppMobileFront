import { NativeRouter, Route, Routes } from "react-router-native";
import {
  useFonts as useInter,
  Inter_400Regular,
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import LoginScreen from "./src/Components/LoginScreen";
import SignInScreen from "./src/Components/SignInScreen";
import MenuScreen from "./src/Components/MenuScreen";
import AllLogin from "./src/Components/AllLogin";
import ProjectScreen from "./src/Components/ProjectScreen";
import Accueil from "./src/Components/Accueil";
import Consentement from "./src/Components/Consentement";
import IdentificationScreen from "./src/Components/IdentificationScreen";
import { MainContainer } from "./src/Style/App.Style";
import UserOrVisitorScreen from "./src/Components/UserOrVisitorScreen";
import VerificationScreen from "./src/Components/VerificationScreen";
import GenderDoBScreen from "./src/Components/GenderDoBScreen";
import FamilyStatusScreen from "./src/Components/FamilyStatus";
import GeolocalisationScreen from "./src/Components/GeolocalisationScreen";
import MapScreen from "./src/Components/MapScreen";
import AddPictureScreen from "./src/Components/AddPictureScreen";
import CaptchaScreen from "./src/Components/CaptchaScreen";
import ValidateProfileScreen from "./src/Components/ValidateProfileScreen";
import WelcomeScreen from "./src/Components/WelcomeScreen";
import AboutUsScreen from "./src/Components/AboutUsScreen";
import Test from "./src/Components/Test";

export default function App() {
  const interReady = useInter({
    Inter_400Regular,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium,
  });

  if (!interReady) {
    return;
  }
  return (
    <NativeRouter>
      <MainContainer>
        <Routes>
          {/* <Route path="/" element={<AllLogin />}> */}
          <Route path="/" element={<AllLogin/>}>
            <Route path="identification" element={<IdentificationScreen />} />
            <Route path="" element={<Accueil />} />
            <Route path="test" element={<Test />} />
            <Route path="project" element={<ProjectScreen />} />
            <Route path="menu" element={<MenuScreen />} />
          </Route>
          <Route path="loginEmail" element={<LoginScreen />} />
          <Route path="consentement" element={<Consentement />} />
          <Route path="signIn" element={<SignInScreen />} />
          <Route path="userOrVisitor" element={<UserOrVisitorScreen />} />
          <Route path="verification" element={<VerificationScreen />} />
          <Route path="genderDoB" element={<GenderDoBScreen />} />
          <Route path="familyStatus" element={<FamilyStatusScreen />} />
          <Route path="geolocalisation" element={<GeolocalisationScreen />} />
          <Route path="map" element={<MapScreen />} />
          <Route path="addPicture" element={<AddPictureScreen />} />
          <Route path="captcha" element={<CaptchaScreen />} />
          <Route path="validate" element={<ValidateProfileScreen />} />
          <Route path="welcome" element={<WelcomeScreen />} />
          <Route path="aboutUs" element={<AboutUsScreen />} />


          
        </Routes>
      </MainContainer>
    </NativeRouter>
  );
}
