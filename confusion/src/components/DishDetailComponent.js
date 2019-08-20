import React, { Fragment } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';
function DishDetail(props) {
    let { image, name, description, comments } = props.dish;
    console.log(props);
    return (

        <Fragment>
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
                <ul className="comments-list">
                    {
                        comments.map(comment => {
                            return (
                                <li key={comment.id} className="list-item">
                                    {comment.comment}
                                    <br />
                                    --{comment.author} , {dateFormat(comment.date)}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </Fragment>
    )
}

function dateFormat(date) {
    let x = new Date(date);
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return monthNames[x.getMonth()] + " " + x.getDate() + ", " + x.getFullYear();
}
export default DishDetail