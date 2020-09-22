import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderDish({ dishs }) {
  if (dishs != null)
    return (
      <Card key={dishs.id}>
        <CardImg top src={dishs.image} alt={dishs.name} />
        <CardBody>
          <CardTitle>{dishs.name}</CardTitle>
          <CardText>{dishs.description}</CardText>
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
  if (comments != null) {
    return <h1 className="mb-2">Comments</h1>;
  } else {
    return <div></div>;
  }
}

const DishDetail = (props) => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dishs={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderHeading comments={props.comments} />
          <RenderComments comments={props.comments} />
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
