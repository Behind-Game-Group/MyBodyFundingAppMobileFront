import { View, Text } from "react-native";
import React from "react";
import { BottomNav, BottomNavContainer, BottomNavIcon } from "../Style/NavBar.Style";

import { faBars, faBolt, faEnvelope, faHeart, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-native";

export default function NavigBar() {
	return (
		<BottomNavContainer>
			<BottomNav>
				<Link to="/menu">
					<BottomNavIcon icon={faBolt} size={30}></BottomNavIcon>
				</Link>
				<Link to="/menu">
					<BottomNavIcon icon={faEnvelope} size={30}></BottomNavIcon>
				</Link>
				<Link to="/menu">
					<BottomNavIcon icon={faHome} size={35}></BottomNavIcon>
				</Link>
				<Link to="/menu">
					<BottomNavIcon icon={faHeart} size={30}></BottomNavIcon>
				</Link>
				<Link to="/menu">
					<BottomNavIcon icon={faUser} size={30}></BottomNavIcon>
				</Link>
			</BottomNav>
		</BottomNavContainer>
	);
}
