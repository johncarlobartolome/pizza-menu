import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzas = [
  {
    name: "Margherita",
    ingredients: "Tomato, Mozzarella, Basil",
    price: 8,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pepperoni",
    ingredients: "Tomato, Mozzarella, Pepperoni",
    price: 10,
    photoName: "pizzas/pepperoni.jpg",
    soldOut: false,
  },
  {
    name: "Hawaiian",
    ingredients: "Tomato, Mozzarella, Ham, Pineapple",
    price: 11,
    photoName: "pizzas/hawaiian.jpg",
    soldOut: false,
  },
  {
    name: "Veggie Delight",
    ingredients: "Tomato, Mozzarella, Bell Peppers, Olives, Onions, Mushrooms",
    price: 9,
    photoName: "pizzas/veggie-delight.jpg",
    soldOut: true,
  },
  {
    name: "BBQ Chicken",
    ingredients: "BBQ Sauce, Mozzarella, Chicken, Red Onions, Cilantro",
    price: 12,
    photoName: "pizzas/bbq-chicken.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  // const style = { color: "red", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
};

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Margherita Pizza"
        ingredients="Tomato, Mozzarella, Basil"
        photoName="pizzas/margherita.jpg"
        price="8"
      />
      <Pizza
        name="Hawaiian"
        ingredients="Tomato, Mozzarella, Ham, Pineapple"
        photoName="pizzas/hawaiian.jpg"
        price="11"
      />
    </main>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  console.log(isOpen);

  return (
    <footer class="footer">
      {new Date().toLocaleTimeString()}, We're currently open
    </footer>
  );
};

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
