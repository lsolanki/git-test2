import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';

function RenderDish({dish}) {
	return(
		<div className='mt-4 mb-4'>
			<Card>
				<CardImg top src={dish.image} alt={dish.name} />
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
		</div>
	);
}


function RenderComments({comments}) {
	if (comments !== null)
		return(
			<div className='mt-4 mb-4'>
				<h4>Comments</h4>
				<hr/>
				<ul className='list-unstyled'>
					{comments.map((comment) => {
						return (
							<li key={comment.id}>
								<p>{comment.comment}</p>
								<p><small>-- {comment.author} <span className='pull-right'>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</span></small></p>
								<hr/>
							</li>
						);
					})}
				</ul>
			</div>
		);
	else
		return(
			<div></div>
		);
}


const DishDetail = (props) => {
	if (props.dish != null)
		return (
			<div class="container">
				<div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
			</div>
		);
	else
		return(
			<div></div>
		);
}


export default DishDetail;