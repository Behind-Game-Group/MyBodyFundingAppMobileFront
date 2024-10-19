import { View, Text } from "react-native";
import React from "react";
import { BottomNav, BottomNavContainer, BottomNavIcon, Title } from "../Style/MenuBar.Style";
import { Link } from "react-router-native";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { MenuTitle } from "../Style/Menu.Style";

export default function MenuBar() {
	return (
		<BottomNavContainer>
			<BottomNav>
				<Link to="/menu">
					<BottomNavIcon icon={faBars} size={30}></BottomNavIcon>
				</Link>
				<Link to="/menu">
					<Title>MY BODY FUNDING</Title>
				</Link>
				<Link to="/menu">
					<BottomNavIcon icon={faSearch} size={30}></BottomNavIcon>
				</Link>
			</BottomNav>
		</BottomNavContainer>
	);
}
