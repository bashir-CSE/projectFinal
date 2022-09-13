import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HomePages from "./Components/HomePages/HomePages";
import Firstaid from "./Pages/Firstaid/Firstaid";
import HospitalNearMe from "./Pages/HospitalNearMe/HospitalNearMe";
import MyfamilyPage from "./Pages/MyfamilyPage/MyfamilyPage";
import MyRecord from "./Pages/MyRecord/MyRecord";
import PharmecyNearMe from "./Pages/PharmecyNearMe/PharmecyNearMe";

import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./Components/LoginPage/LoginPage";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import DisisDitails from "./Components/LandPage/DisisDitails";
import EditProfile from "./Pages/EditProfile/EditProfile";
import MedicalProfile from "./Pages/MedicalProfile/MedicalProfile";
import Medicine from "./Pages/Medicine/Medicine";
import VaccinePage from "./Pages/VaccinePage/VaccinePage";
import { FaArrowUp } from "react-icons/fa";
import DoctorsAppoint from "./Pages/DoctorsAppoint/DoctorsAppoint";
import Register from "./Components/LoginPage/Register/Register";
import AboutUs from "./Components/AboutUs/AboutUs";
import DoctorPage from "./Pages/doctorPage/DoctorPage";
import BackBtn from "./BackBtn/BackBtn";
function App() {
	return (
		<div className='App position-relative' id='home'>
			<AuthProvider>
				<BrowserRouter>
					<Header />
					<Switch>
						<Route exact path='/'>
							<HomePages />
						</Route>
						<PrivateRoute exact path='/MyfamilyPage'>
							<MyfamilyPage />
						</PrivateRoute>
						<PrivateRoute exact path='/MyRecord'>
							<MyRecord />
						</PrivateRoute>
						<PrivateRoute exact path='/MedicalProfile'>
							<MedicalProfile />
						</PrivateRoute>
						<Route exact path='/Firstaid'>
							<Firstaid />
						</Route>
						<Route exact path='/HospitalNearMe'>
							<HospitalNearMe />
						</Route>
						<Route exact path='/PharmecyNearMe'>
							<PharmecyNearMe />
						</Route>
						<PrivateRoute exact path='/EditProfile'>
							<EditProfile />
						</PrivateRoute>
						<PrivateRoute exact path='/Medicine'>
							<Medicine />
						</PrivateRoute>
						<PrivateRoute exact path='/vaccinePage'>
							<VaccinePage />
						</PrivateRoute>
						<PrivateRoute exact path='/DoctorsAppoint'>
							<DoctorsAppoint />
						</PrivateRoute>
						<Route exact path='/disisdetails/:id'>
							<DisisDitails />
						</Route>
						<Route exact path='/login'>
							<LoginPage />
						</Route>
						<Route exact path='/register'>
							<Register />
						</Route>
						<Route exact path='/DoctorPage'>
							<DoctorPage />
						</Route>
					</Switch>
					{/* <Footer /> */}
				</BrowserRouter>
			</AuthProvider>
			<div className='btn up-btn'>
				{/* <BackBtn /> */}
				<a href='#home ' className='btn ms-1 btn-outline-primary'>
					<FaArrowUp />
				</a>
			</div>
		</div>
	);
}

export default App;
