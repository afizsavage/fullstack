import React, { Component } from "react";
import DishDetail from "./DishdetailComponent";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null,
      dishComments: [],
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  onDishComments(dishComnts) {
    this.setState({ dishComments: dishComnts });
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card
            key={dish.id}
            onClick={() => {
              this.onDishSelect(dish);
              this.onDishComments(dish.comments);
            }}
          >
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <DishDetail
          selectedDish={this.state.selectedDish}
          comments={this.state.dishComments}
        />
      </div>
    );
  }
}

export default Menu;
