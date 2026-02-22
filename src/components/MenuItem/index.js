import React from "react";

//We create a function that will collect the name, price, and the description of the menu item
function MenuItem(menuItemData) {

  //im creating variables to store the menu item price and name to use later in the code
  let itemName = menuItemData.items.itemName;
  let itemPrice = menuItemData.items.itemPrice;

  //Im putting the description of the item into an array to use later with .map()
  let descriptionArray = [menuItemData.items.itemDescription];

  //we check if the item has a name
  //we store it in displayAll
  //if there is its okay to display
  //if not we dont display it
  let displayAll = true;
  if (!itemName) {
    displayAll = false;
  }

  //we take the description of the menu item, and index of the description since its in an an array (for .map later)
  //we then wrap the description(descript)in <p elements so we can display it
  function displayDescription(descirpt, i) {
    return (
      <p key={i} className="menuItemDescription">
        {descirpt}
      </p>
    );
  }

  // If the item is missing a name we completley stop the code and return an empty box
  if (!displayAll) {
    return (
      <div className="menu-item">
        {/* nothing will show since it did not have a name */}
      </div>
    );
  }

  //we display the container with item name, price, and description of each item.
  return (

    //We display the outer container for the menu item
    <div className="menu-item" id={`menu-item-${menuItemData.items.itemId}`}>

      {/*we display the data INSIDE the contaier*/ }
      <div className="menuItemContent">

        {/*We display item price in with a $ sign in front in a span element*/ }
        <span>${itemPrice}</span>

        {/*we display the name in an h2 element*/ }
        <h2 className="menuItemH2">{itemName}</h2>

        {/*We call on the function and use map that displays the description in p tags*/ }
        {descriptionArray.map(displayDescription)}

        {/*button to add to cart*/ }
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default MenuItem;