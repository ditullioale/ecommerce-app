import React from "react";
import "./SectionCardIphone.css";
import { sectionTitle } from "../helpers/data";

const SectionCardMac = () => {
	return (
		<div className="container-SectionCard">
			<h3>{sectionTitle.title2}</h3>
			<div className="cards">
				<p>Card 1</p>
				<p>Card 2</p>
				<p>Card 3</p>
				<p>Card 4</p>
			</div>
		</div>
	);
};

export default SectionCardMac;
