import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col, Card } from "reactstrap";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div>
			<FaArrowCircleRight
				onClick={onClick}
				className={className}
				style={{ color: "#b8adf3", fontSize: 25 }}
			/>
		</div>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div>
			<FaArrowCircleLeft
				onClick={onClick}
				className={className}
				style={{ color: "#b8adf3", fontSize: 25 }}
			/>
		</div>
	);
}

export default function Carousel(props) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};
	return (
		<Container>
			<Col
				style={{
					margin: "40px 0",
					alignItems: "center",
					borderRadius: 10,
				}}
			>
				<Slider {...settings}>
					<div style={{ borderRadius: 10 }}>
						<img
							style={{
								width: 560,
								height: 400,
								borderTopLeftRadius: 10,
								borderBottomLeftRadius: 10,
							}}
							src="https://c4.wallpaperflare.com/wallpaper/157/695/606/dogs-corgi-dog-flower-pet-hd-wallpaper-preview.jpg"
						/>
					</div>
					<div>
						<img
							style={{
								width: 560,
								height: 400,
								borderTopRightRadius: 10,
								borderBottomRightRadius: 10,
							}}
							src="https://res.cloudinary.com/maivw/image/upload/v1596440700/MoonLight/Screen_Shot_2020-08-03_at_3.42.32_AM_x9s0dy.png"
						/>
					</div>

					<div>
						<img
							style={{
								width: 560,
								height: 400,
								borderTopRightRadius: 10,
								borderBottomRightRadius: 10,
							}}
							src="https://wallup.net/wp-content/uploads/2017/03/29/492172-face-animals-flowers-plants-dog-purple_flowers-748x499.jpg"
						/>
					</div>
					<div>
						<img
							style={{
								width: 560,
								height: 400,
								borderTopLeftRadius: 10,
								borderBottomLeftRadius: 10,
							}}
							src="https://cache.desktopnexus.com/thumbseg/1149/1149514-bigthumbnail.jpg"
						/>
					</div>
					<div>
						<img
							style={{
								width: 560,
								height: 400,

								borderTopRightRadius: 10,
								borderBottomRightRadius: 10,
							}}
							src="https://www.desktopbackground.org/download/2560x1440/2014/02/13/716345_dogs-french-bulldog-animal-purple-white-fur-puppy-pink-dog-catel_2600x1719_h.jpg"
						/>
					</div>
					<div>
						<img
							style={{
								width: 560,
								height: 400,
								borderTopRightRadius: 10,
								borderBottomRightRadius: 10,
							}}
							src="https://i.pinimg.com/originals/76/15/12/7615125f481a722a13c7627e8082482b.png"
						/>
					</div>
				</Slider>
			</Col>
		</Container>
	);
}
