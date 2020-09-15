import React, { Component } from "react";
import DishDetail from './DishdetailComponent'
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
} from "reactstrap";

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

<<<<<<< HEAD
  onDishComments(dishComnts) {
    this.setState({dishComments : dishComnts});
  }

=======
>>>>>>> 5a94c9b46a05f53077a4352e1d0ebbd1dde27592
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card key={dish.id} onClick={() => {
            this.onDishSelect(dish);
            this.onDishComments(dish.comments)
          }}>
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
<<<<<<< HEAD
        <DishDetail selectedDish = {this.state.selectedDish} comments = {this.state.dishComments}/>
=======
        <DishDetail selectedDish = {this.state.selectedDish} />
>>>>>>> 5a94c9b46a05f53077a4352e1d0ebbd1dde27592
      </div>
    );
  }
}

export default Menu;
