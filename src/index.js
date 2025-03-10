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
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu.</p>
      )}
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
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to serve you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
};

const Order = ({ closeHour }) => {
  return (
    <div className="order">
      <p>We're open until {closeHour}:00. Come visit us or oder online.</p>
      <button className="btn">Order</button>
    </div>
  );
};

function Pizza({ pizzaObj }) {
  if (pizzaObj.soldOut) return null;
  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price}</span>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
