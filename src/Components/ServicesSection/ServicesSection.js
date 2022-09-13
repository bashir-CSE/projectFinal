import React from "react";
import Firstaid from "../../Pages/Firstaid/Firstaid";
import HospitalNearMe from "../../Pages/HospitalNearMe/HospitalNearMe";
import MedicalProfile from "../../Pages/MedicalProfile/MedicalProfile";
import MyfamilyPage from "../../Pages/MyfamilyPage/MyfamilyPage";
import MyRecord from "../../Pages/MyRecord/MyRecord";
import PharmecyNearMe from "../../Pages/PharmecyNearMe/PharmecyNearMe";

function ServicesSection() {
	return (
		<div>
			<h3>our services</h3>
			<>
				<MedicalProfile />
				<MyRecord />
				<MyfamilyPage />
				<Firstaid />
				<HospitalNearMe />
				<PharmecyNearMe />
			</>
		</div>
	);
}

export default ServicesSection;
