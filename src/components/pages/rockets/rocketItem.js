function rocketItem({ company, description, image }) {
	return (
		<div className="rocket-container">
			<div className="image">
				<img src="{image}" alt="" />
			</div>
			<div className="rocket-details">
				<h4>{company}</h4>
				<p>{description}</p>
				<button type="button">Reserve</button>
			</div>
		</div>
	);
}

export default rocketItem;
