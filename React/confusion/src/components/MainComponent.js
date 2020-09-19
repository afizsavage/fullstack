import React, { Component } from "react";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
      dishComments: [],
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  onDishComments(dishComnts) {
    this.setState({ dishComments: dishComnts });
  }

  render() {
    return (
      <div>
        <Header />
        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
          renCom={(dishComnts) => this.onDishComments(dishComnts)}
        />
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
          comments={this.state.dishComments}
        />
        <Footer />
      </div>
    );
  }
}

export default Main;
