import React from "react";
import MenuItem from "../MenuItem";

export default class Menu extends React.Component {
    //this shows up data on screen (data inside)
  render() {

    //Creating an array to put all the components of menu items
    let menuItemArray = [];

    // we loop through every item in menuitems
    for (let i = 0; i < this.props.menuItems.length; i++) {

      //we make a variable to store the current item at the current index
      let currentItem = this.props.menuItems[i];

      //we make a the current item a MenuItem and add it to the array with .push
      menuItemArray.push(
        <MenuItem key={i} items={currentItem} />
      );
    }

    return (
      <div>
        {/*We show the menu name in a h1 element at the top in a h1 tag*/}
        <h1>{this.props.menuName} Menu</h1>

        {/* then we show the menu items BELOW it */}
        {menuItemArray}
      </div>
    );
  }
}