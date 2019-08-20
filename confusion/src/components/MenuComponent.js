import React, { Component } from 'react';
import DishDetial from './DishDetailComponent';
import {
    Card, CardImg, CardImgOverlay,
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

                    {this.state.selectedDish ?
                       
                            <DishDetial dish={this.state.selectedDish} />
                        
                        :
                        <div></div>
                    }

                </div>
            </div>
        );
    }
}
export default Menu