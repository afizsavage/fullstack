import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
  if (dish != null)
    return (
      <Card key={dish.id}>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  else return <div></div>;
}

function RenderComments({ comments }) {
  if (comments != null)
    return comments.map((comnt) => {
      return (
        <div key={comnt.id}>
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

function RenderHeading({ comments }) {
  if (comments.length <= 0) {
    return [];
  } else {
    return <h1 className="mb-2">Comments</h1>;
  }
}

const DishDetail = (props) => {
  return (
    <div className="row">
      <div className="col-12 col-md-5 m-1">
        <RenderDish dish={props.dish} />
      </div>
      <div className="col-12 col-md-5 m-1">
        <RenderHeading comments={props.comments} />
        <RenderComments comments={props.comments} />
      </div>
    </div>
  );
};

export default DishDetail;
