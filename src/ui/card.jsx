import React from "react";

import { YnsLink } from "@/ui/yns-link";

export const Card = ({ image, name, description, date = "", link = "", variant = "card" }) => {
	const cardThumbClasses = variant === "event" ? "card-thumb card-thumb-event" : "card-thumb";
	const cardInfoClasses = variant === "event" ? "card-info card-event" : "card-info";
	const renderCardInfo = () => (
		<>
			<div className={cardThumbClasses}>
				<img src={image} alt={name} />
				<div className="card-overlay" />
			</div>
			<div className={cardInfoClasses}>
				<h2 className="card-name">{name}</h2>
				<div>
					<div className="card-designation">{description}</div>
					<div className="card-designation">{date}</div>
				</div>
			</div>
		</>
	);

	const renderCardWithLink = () => <YnsLink href={link}>{renderCardInfo()}</YnsLink>;

	const renderCard = link >= "a" ? renderCardWithLink() : renderCardInfo();

	return <div className="card">{renderCard}</div>;
};
