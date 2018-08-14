import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText, CardImgOverlay, CardBody } from 'reactstrap';


import { BrowserRouter, Route, Link } from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish:null
        }
    }


    onDishSelect(dish){
        debugger;
        this.setState({selectedDish: dish});
    }

    renderDish(dish){
        if (dish != null) {
            return(
                <div className="col-12 col-md-6">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-3">
                    <Card onClick ={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        }); 

        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>

                <div className="row mt-5">
                    <div className="col-md-6 col-12">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                </div>

            </div>
        );
    }
}


export default Menu;