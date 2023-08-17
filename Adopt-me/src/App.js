const pet = (props) =>{
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.city),
    React.createElement("h3", {}, props.state),
  ])
};
const App = () => {
  return React.createElement(
    "div", 
    {},[
    React.createElement("h1", {}, "i love you"),
    React.createElement(pet, {
      name: "Codie",
      city: "Nairobi",
      state: "Westlands",
    }), 
    React.createElement(pet, {
      name: "kitty",
      city: "Nairobi",    
      state: "Parklands"
    })  ]
  );
}; 

const root = document.getElementById("root");
const container = ReactDOM.createRoot(root);
container.render(React.createElement(App))

