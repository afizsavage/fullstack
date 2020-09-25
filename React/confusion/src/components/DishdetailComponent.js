import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Row,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
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

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleSubmit(values) {
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
    // event.preventDefault();
  }

  render() {
    return (
      <div>
        <Button outline onClick={this.toggleModal}>
          <i class="fa fa-pencil" aria-hidden="true"></i> Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={this.handleSubmit}>
              <Row className="form-group ml-1 mr-1">
                <Label htmlFor="rating">Rating</Label>
                <Control.select
                  model=".rating"
                  name="rating"
                  className="form-control"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </Row>
              <Row className="form-group ml-1 mr-1">
                <Label htmlFor="name">Your Name</Label>
                <Control.text
                  model=".name"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".name"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </Row>
              <Row className="form-group ml-1 mr-1">
                <Label htmlFor="comment">Comment</Label>
                <Control.textarea
                  model=".comment"
                  id="comment"
                  name="comment"
                  rows="6"
                  className="form-control"
                />
              </Row>
              <Row className="form-group ml-1 mr-1">
                <Button type="submit" value="submit" color="primary">
                  Submit
                </Button>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
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
          <CommentForm />
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
