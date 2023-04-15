import React from "react";
import "../../styles/LandingPage.css"
import {NavBar}  from "../NavBar.jsx";
import {Jumbotrom} from "../Jumbotron.jsx";
import {Card} from "../Card.jsx";


//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const LandingPage = () => {

	return (
		<>
		<div className="col-12 p-2"> 
			<NavBar/>
			<Jumbotrom/>
			<div className="row m-auto d-flex"  > 
				<Card title="Lorem Ipsum" descripcion="Nulla vel tempus tellus. Maecenas condimentum iaculis erat, vel gravida metus posuere at. Vivamus ullamcorper nisi nibh, eget iaculis nulla consequat non." img="https://loremipsum.io/assets/images/lorem-ipsum-generator-custom-placeholder-text.jpg" />
				<Card title="Marco Tulio Cicerón" descripcion="En los extremos del bien y del mal" img="https://loremipsum.io/assets/images/lorem-ipsum-generator-cicero-engraving.png"/>
				<Card title="NOTICIAS DE LOREM IPSUM" descripcion="transferencia seca de Letraset" img="https://loremipsum.io/assets/images/lorem-ipsum-generator-letraset-transfer-sheet.png"/>
				<Card titte="DE IMPRESIÓN A ESCRITORIO A WEB" descripcion="el texto ficticio de Lorem Ipsum para ayudar con el establecimiento del contenido de la página" img= "https://loremipsum.io/assets/images/lorem-ipsum-generator-word-processor.png"/>
			</div>
		</div>
		</>
	);

};

export default LandingPage;
