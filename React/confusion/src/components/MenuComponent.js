import React, { Component } from 'react';
import DishDetail from './DishdetailComponent'


class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish:null
        }
    }




    render() {

        return(
            <div className="container">
                <div className="row">
                    <DishDetail dishes={this.props.dishes} />
                </div>

            </div>
        );
    }
}


export default Menu;