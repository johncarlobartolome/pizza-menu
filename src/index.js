import React from "react";
import ReactDOM from "react-dom/client";

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
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  return <h1>Fast React Pizza Co.</h1>;
};

const Menu = () => {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  console.log(isOpen);

  return (
    <footer>{new Date().toLocaleTimeString()}, We're currently open</footer>
  );
};

function Pizza() {
  return (
    <div>
      <img src="pizzas/margherita.jpg" alt="Margherita Pizza" />
      <h2>Margherita Pizza</h2>
      <p>Tomato, Mozzarella, Basil</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
