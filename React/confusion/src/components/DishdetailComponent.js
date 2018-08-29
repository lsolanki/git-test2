import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody } from 'reactstrap';
import _ from 'lodash';


class DishDetail extends Component {
	constructor(props) {
		super(props);

		this.state = {
			detailSelectedDish:null
		}
	}

	onSelectDetailDish(dish){
		this.setState({detailSelectedDish: dish})
	}

	renderDetailDish(dish){
		if (dish != null) {
			return(
				<Card>
					<CardImg width="100%" src={dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
			);
		}
		else{
			return(
				<div></div>
			);
		}
	}

	showComments(){
		if (this.state.detailSelectedDish !== null) {
						
			return _.map(this.state.detailSelectedDish.comments, dish => {
	    		return (
	      			<div key={dish.id}>
	          			<h5 className="m-1 mt-3">{dish.comment}</h5>
          				<div className="row">
          					<p className="col-md-5 col-12"><small><strong>Author:</strong> {dish.author}</small></p>
          					<p className="col-md-7 col-12"><small><strong>Date:</strong> {dish.date}</small></p>
	      				</div>
	      			</div>
	    		);
	  		});
		}else{
			return(
				<div></div>
			);
		}
	}


	render() {
		

		const dishDetail = this.props.dishes.map((dish) => {
			return(
				<div key={dish.id} className="col-12 col-md-5 m-1 mt-5">
					<Card onClick={() => this.onSelectDetailDish(dish)}>
						<CardImg width="100%" src={dish.image} alt={dish.name} />
						<CardImgOverlay>
							<CardTitle>{dish.name}</CardTitle>
						</CardImgOverlay>
					</Card>
				</div>
			);
		});

		if (this.state.detailSelectedDish !== null) {
			var comment_heading = <h3>Comments:</h3>;
		}
		return(
			<div className="container">
				<div className="row">
					{dishDetail}
				</div>

				<div className="row mt-5">
					<div className="col-md-6 col-12">
						{this.renderDetailDish(this.state.detailSelectedDish)}
					</div>
					<div className="col-md-6 col-12">
						{comment_heading}
						{this.showComments()}
					</div>

				</div>

			</div>
		);
	}
}


export default DishDetail;