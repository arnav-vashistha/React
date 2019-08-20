import React, { Component } from 'react';

import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';
class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    

    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        this.props.dishes.map((dish) => {
                            return (
                                <div className="col-12 col-md-5 m-1" key={dish.id}>
                                    <Card 
                                        onClick={() => this.onDishSelect(dish)}>
                                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                                        <CardImgOverlay>
                                            <CardTitle>{dish.name}</CardTitle>
                                        </CardImgOverlay>
                                    </Card>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.state.selectedDish ? 
                        <Card>
                            <CardImg top src={this.state.selectedDish.image} alt={this.state.selectedDish.name} />
                            <CardBody>
                                <CardTitle>{this.state.selectedDish.name}</CardTitle>
                                <CardText>{this.state.selectedDish.description}</CardText>
                            </CardBody>
                        </Card> :
                         <div></div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default Menu