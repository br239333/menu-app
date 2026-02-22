import Menu from "../Menu"

const MenuApp = () => {

  let menuItem = [
    {
      itemId: 1,
      itemPrice: "12",
      itemName: "Lasagne",
      itemDescription: "Meat and cheese layered between house-made pasta with bell peppers and onions."
    },
    {
      itemId: 2,
      itemPrice: "7",
      itemName: "Cesear Salad",
      itemDescription: "Green salad, with cheese, chicken, tomatoes, crutons and cesar dressing."
    },
    {
      itemId: 3,
      itemPrice: "14",
      itemName: "Baked Ziti",
      itemDescription: "Ziti Pasta, with meat sauce, blended cheeses, baked golden."
    },
    {
      itemId: 4,
      itemPrice: "12",
      itemName: "Spaghetti",
      itemDescription: "Spaghetti pasta served in meat sauce, with meatballs, with cheese sprinkled on top"
    }
  ];

  return (
    <div className="App">
      <Menu menuName="Dinner" menuItems={menuItem} />
    </div>
  )
}

export default MenuApp