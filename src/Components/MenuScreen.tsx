import { useNavigate } from "react-router-native";
import { CloseButton, CloseButtonContainer, MenuContainer, MenuHeaderContainer, MenuItemContainer, MenuItemIcon, MenuItemLabel, MenuTitle, MiniLogo, RedMenuItemContainer } from "../Style/Menu.Style";
import { faCirclePlus, faCircleXmark, faGear, faHandHoldingDollar, faHome, faRightFromBracket, faRightToBracket, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useStore } from "@nanostores/react";
import { LoginScreenStore, logout } from "../Store/LoginScreen.Store";

export default function MenuScreen() {

	return (
		<MenuContainer>
			{/* Affiche le header du menu */}
			<MenuHeaderContainer>
				<MiniLogo source={require("../../assets/miniLogo.png")} />
				<MenuTitle>Menu</MenuTitle>
				<CloseButtonContainer to="/">
					<CloseButton icon={faXmark} size={40}></CloseButton>
				</CloseButtonContainer>
			</MenuHeaderContainer>

			{/* Affiche les items du menu */}
			<MenuItemContainer to="/test">
				<>
					<MenuItemIcon icon={faHome} size={30}></MenuItemIcon>
					<MenuItemLabel>Accueil</MenuItemLabel>
				</>
			</MenuItemContainer>

			<MenuItemContainer to="/" onPress={logout}>
				<>
					<MenuItemIcon icon={faRightToBracket} size={30}></MenuItemIcon>
					<MenuItemLabel>Se deconnecter</MenuItemLabel>
				</>
			</MenuItemContainer>
			<MenuItemContainer to="/project">
				<>
					<MenuItemIcon icon={faHandHoldingDollar} size={30}></MenuItemIcon>
					<MenuItemLabel>Investissement</MenuItemLabel>
				</>
			</MenuItemContainer>
			<MenuItemContainer to="/">
				<>
					<MenuItemIcon icon={faGear} size={30}></MenuItemIcon>
					<MenuItemLabel>Paramétres</MenuItemLabel>
				</>
			</MenuItemContainer>
		</MenuContainer>
	);
}
