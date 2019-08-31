import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
class DishDetail extends Component {

    render() {

        let { image, name, description } = this.props.dish;
        let { comments } = this.props;
        console.log(comments);
        const listStyle = {
            'listStyleType': 'none',
            'fontSize': 'large',
            'fontWeight': 600
        }
        const listItemStyle = {
            'marginTop': '0.7em'
        }

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{this.props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={image} alt={name} />
                            <CardBody>
                                <CardTitle>{name}</CardTitle>
                                <CardText>{description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h3> Comments</h3>
                        <ul style={listStyle}>
                            {
                                comments.map(comment => {
                                    return (
                                        <li key={comment.id} style={listItemStyle}>
                                            {comment.comment}
                                            <br />
                                            --{comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )

    }
}


export default DishDetail