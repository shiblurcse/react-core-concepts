import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const name = [
    "Shiblur Rahman Lipu",
    "Shakib Al Hasan",
    "Money Heist",
    "Breaking Bad",
    "Vikings",
  ];
  const title = [
    "React Developer",
    "Number One Alrounder",
    "Best Heist TV Series",
  ];
  const products = [
    { name: "Photoshop", price: "$90.99" },
    { name: "Illustrator", price: "$60.99" },
    { name: "XD", price: "$40.99" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I am a React Expert</p>
        <Counter></Counter>
        {/* mapping for insert dynamic value */}
        <ul>
          {name.map((fullname) => (
            <li>{fullname}</li>
          ))}
          {products.map((product) => (
            <li>{product.name}</li>
          ))}
        </ul>

        {products.map((productBox) => (
          <Product productBox={productBox}></Product>
        ))}

        {/* call the html file and make it dynamic  */}

        {/* <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product>
        <Product product= {products[2]}></Product> */}
        <Person name={name[0]} title={title[0]}></Person>
        <Person name={name[1]} title={title[1]}></Person>
        <Person name={name[2]} title={title[2]}></Person>
        <Person name={name[3]} title={"Top IMDB Rating TV Series"}></Person>
      </header>
    </div>
  );
}

// dynamic data call from API
function Users() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      <h4>Dynamic User: {users.length} </h4>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

// dynamically set state and count from a button by EventListener
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Users></Users>
    </div>
  );
}

function Product(props) {
  // dynamic css part
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "10px",
    backgroundColor: "lightgray",
    color: "black",
    height: "250px",
    width: "250px",
    margin: "10px",
    float: "left",
  };
  const button = {
    background: "yellow",
    color: "black",
    border: "none",
    cursor: "pointer",
  };

  // destructuring
  const { name, price } = props.productBox;

  // dynamic html part
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <p>{price}</p>
      <button style={button}>Buy Now</button>
    </div>
  );
}

function Person(props) {
  // dynamic css part
  const style = {
    color: "red",
    backgroundColor: "yellow",
    border: "2px solid red",
    width: "650px",
    margin: "10px",
    padding: "10px",
    borderRadius: "20px",
  };
  return (
    // dynamic html part
    <div style={style}>
      <h1>Name: {props.name} </h1>
      <p style={{ color: "black" }}>Title: {props.title} </p>
    </div>
  );
}

export default App;
