import React, { Component } from 'react';
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
                                    <Card key={dish.id}
                                        onClick={() => this.props.onClick(dish.id)}>
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
                
            </div>
        );
    }
}
export default Menu