import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

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

  renderComments(commnts) {
    if (commnts != null)
      return commnts.map((comnt) => {
        return (
          <div>
            <ul className="list-unstyled">
              <li className="mb-2" key={comnt.id}>
                {comnt.comment}
              </li>
              <li>
                --{comnt.author},
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comnt.date)))}
              </li>
            </ul>
          </div>
        );
      });
    else return <div></div>;
  }

  renderHeading(props) {
    if (props.length <= 0) {
      return [];
    } else {
      return <h1 className="mb-2">Comments</h1>;
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.dish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          {this.renderHeading(this.props.comments)}
          {this.renderComments(this.props.comments)}
        </div>
      </div>
    );
  }
}

export default DishDetail;
