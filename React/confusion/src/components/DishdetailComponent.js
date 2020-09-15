import React, { Component  } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class DishDetail extends Component {
  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

<<<<<<< HEAD
  renderComments(commnts) {
     commnts = this.props.comments.map((comnt) => {
    return(<div><ul className="list-unstyled"><li key={comnt.id}>{comnt.author}</li></ul></div>)
    });
  return(<div className="col-12 col-md-5 m-1">{commnts}</div>)
  }

=======
>>>>>>> 5a94c9b46a05f53077a4352e1d0ebbd1dde27592
  render(){
    return(<div className="row">
    <div className="col-12 col-md-5 m-1">
      {this.renderDish(this.props.selectedDish)}
    </div>
<<<<<<< HEAD
    {this.renderComments()}
=======
>>>>>>> 5a94c9b46a05f53077a4352e1d0ebbd1dde27592
  </div>)
  }
}

<<<<<<< HEAD

=======
>>>>>>> 5a94c9b46a05f53077a4352e1d0ebbd1dde27592
export default DishDetail;