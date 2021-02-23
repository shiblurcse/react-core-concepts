import logo from './logo.svg';
import './App.css';

function App() {
  const name = ['Shiblur Rahman Lipu', 'Shakib Al Hasan', 'Money Heist', 'Breaking Bad']
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'XD', price: '$40.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I am a React Expert
        </p>
        <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product>
        <Product product= {products[2]}></Product>
        <Person name={name[0]} title={'React Developer'}></Person>
        <Person name={name[1]} title={'Number One Alrounder'}></Person>
        <Person name={name[2]} title={'Best Heist TV Series'}></Person>
        <Person name={name[3]} title={'Top IMDB Rating TV Series'}></Person>      
      </header>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "10px",
    backgroundColor: "lightgray",
    color: "black",
    height: "250px",
    width: "250px",
    margin: "10px",
    float: "left"
  }
  const button = {
    background: "yellow", 
    color: "black", 
    border: "none", 
    cursor: "pointer"
  }
  const {name, price} = props.product;
  return (
    <div style = {productStyle}>
      <h2>{name}</h2>
      <p>{price}</p>
      <button style = {button}>Buy Now</button>
    </div>
  )
}

function Person(props) {
  const style = {
    color: "red",
    backgroundColor: "yellow",
    border: "2px solid red",
    width: "650px",
    margin: "10px",
    padding: "10px",
    borderRadius: "20px",
  }
  return (
    <div style= {style}>
        <h1>Name: {props.name} </h1>
        <p style = {{color: "black"}}>Title: {props.title} </p>
    </div>
  )
}

export default App;
