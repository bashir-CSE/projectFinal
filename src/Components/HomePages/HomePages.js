import React from "react";
import { Container } from "react-bootstrap";
import BannerPage from "../BannerPage/BannerPage";
import Footer from "../Footer/Footer";
import Disis from "../LandPage/Disis";
import ExploreMore from "../LandPage/ExploreMore";
import InfoPage from "../LandPage/InfoPage";

import AboutUs from "../AboutUs/AboutUs";

import "./HomePages.css";

function HomePages() {
	return (
		<div>
			<BannerPage />
			<Container>
				<ExploreMore />
				<InfoPage />
				<AboutUs />
				<Disis />
			</Container>
			<Footer />
		</div>
	);
}

export default HomePages;
