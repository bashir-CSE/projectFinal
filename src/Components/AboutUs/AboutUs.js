import React, { Component } from "react";
import "./AboutUs.css";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const friends = [
	{
		name: "sanjida habib ritu",
		email: "rsanjidahabib776@gmail.com",
		phone: "01680520596",
		reg: `G/CE-2611/18`,
		roll: `1003 (G2)`,
		department: `department of computer science and engineering`,
		fb: `https://www.facebook.com/sanjidahabib.ritu.5`,
		// linkedin: `ffcbcv`,
		image: `https://mail.google.com/mail/u/0?ui=2&ik=816d7c2ab4&attid=0.1&permmsgid=msg-f%3A1723856001357067201&th=17ec5de65cd033c1&view=fimg&realattid=17ec5dd23f5ef8beff41&disp=thd&attbid=ANGjdJ8nNkyZ5MKlepLdHicDxeXEUJ4fQSZQiatpbKldkw2icqwPvBVKl_whVktBmfDQvm1SL9txIKTQEUYzg03Ko-nb1QvSA5do6vnKNHk74Kz3AWtpYHyzZBFaMKA&ats=2524608000000&sz=w180-h120-df-p-nu`,
	},
	{
		name: "farzana akter",
		email: "farzananure12@gmail.com",
		phone: " 01688440507",
		reg: `G/CE-2606/18`,
		roll: `999 (G2)`,
		department: `department of computer science and engineering`,
		fb: `https://www.facebook.com/farzana.farzana.5817`,
		// linkedin: `ffcbcv`,
		image: `https://mail.google.com/mail/u/0?ui=2&ik=816d7c2ab4&attid=0.1&permmsgid=msg-f:1723897044402633943&th=17ec833a70f6fcd7&view=att&disp=safe&realattid=17ec833532ecd80f5741`,
	},
	{
		name: "Abdul Kader Zilany",
		email: "zilanychoudhuryii@gmail.com",
		phone: "01630422423",
		reg: `G/CE-2609/18`,
		roll: `1001 (G2)`,
		department: `department of computer science and engineering`,
		fb: `https://www.facebook.com/zilany.choudhuryii`,
		linkedin: `https://www.linkedin.com/in/abdul-kader-zilany-1583b51b1`,
		image: `https://mail.google.com/mail/u/0?ui=2&ik=816d7c2ab4&attid=0.1&permmsgid=msg-f:1723854245736829804&th=17ec5c4d99b1536c&view=att&disp=safe&realattid=17ec5c487996934a1931`,
	},
	{
		name: "dipu paul",
		email: "pauldipu01723@gmail.com",
		phone: "0123456789",
		reg: `G/CE-2575/18`,
		roll: `969 (G1)`,
		department: `department of computer science and engineering`,
		fb: `https://www.facebook.com/paul.dipu.9`,
		linkedin: `ffcbcv`,
		image: `https://mail.google.com/mail/u/0?ui=2&ik=816d7c2ab4&attid=0.1&permmsgid=msg-f:1723914236475598628&th=17ec92dd485de724&view=att&disp=safe&realattid=17ec92b7f4f5bbf3e0c1`,
		designation: "designer and developer",
	},
	{
		name: "md bashir ahmed",
		email: "babashir8811@gmail.com",
		phone: "01881170578",
		reg: `G/CE-2573/18`,
		roll: `967 (G1)`,
		department: `department of computer science and engineering`,
		fb: `https://www.facebook.com/md.bashir.ahmed.1042032/`,
		linkedin: `ffcbcv`,
	},
];
export default class PauseOnHover extends Component {
	render() {
		var settings = {
			dots: false,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 5000,
			pauseOnHover: true,
		};
		return (
			<div>
				<div className='text-center'>
					<h1>OUR TEAM</h1>
					<p>
						Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
						gentrify, subway tile poke farm-to-table. Franzen you probably
						haven't heard of them.
					</p>
				</div>
				<div>
					<Slider  {...settings}>
						{friends.map((friend, index) => {
							const {
								name,
								email,
								roll,
								department,
								reg,
								fb,
								linkedin,
								phone,
								designation,
								image,
							} = friend;
							return (
								<div class='col'>
									<div class='card'>
										<div className='img_container'>
											<img src={image} class='my-2 card-img-top' alt='...' />
										</div>
										<div class='card-body text-capitalize text-start'>
											<h3 class=' text-capitalize'>{name}</h3>
											<p>Roll: {roll}</p>
											<p>email: {email}</p>
											<p>phone:{phone}</p>
											<small class=' text-muted '>{department}</small>
										</div>
									</div>
								</div>
							);
						})}
					</Slider>
				</div>
			</div>
		);
	}
}

// import React from "react";
// import ritu from "./imgs/ritu.png";
// import zilany from "./imgs/zilany.jpeg";
// import "./AboutUs.css";
// import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
// import { Link } from "react-router-dom";
// function AboutUs() {
//
// 	return (
// 		<div className='container'>
// 			<div className='text-center'>
// 				<h1>OUR TEAM</h1>
// 				<p>
// 					Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
// 					gentrify, subway tile poke farm-to-table. Franzen you probably haven't
// 					heard of them.
// 				</p>
// 			</div>
// 			<div class='row'>
// 				{friends.map((friend, index) => {
// 					const {
// 						name,
// 						email,
// 						roll,
// 						department,
// 						reg,
// 						fb,
// 						linkedin,
// 						phone,
// 						designation,
// 						image,
// 					} = friend;
// 					return (
// 						<div class='col-sm-4 mb-4'>
// 							<div class='card'>
// 								<div className='img_container'>
// 									<img src={image} class='my-2 card-img-top' alt='...' />
// 								</div>
// 								<div class='card-body text-capitalize text-start'>
// 									<h3 class=' text-capitalize'>{name}</h3>
// 									<p>Roll: {roll}</p>
// 									<p>email: {email}</p>
// 									<p>phone:{phone}</p>
// 									<small class=' text-muted '>{department}</small>
// 									<div className='card-footer icon d-flex justify-content-center gap-2'>
// 										<a href={fb} target='_blank'>
// 											<FaFacebook />
// 										</a>

// 										<FaLinkedinIn />
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					);
// 				})}
// 			</div>
// 		</div>
// 	);
// }

// export default AboutUs;
