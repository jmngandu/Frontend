const pet = () =>{
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "codie"),
    React.createElement("h2", {}, "12 years"),
    React.createElement("h3", {}, "German shepherd")
  ])
};
const App = () => {
  return React.createElement(
    "div", 
    {},[
    React.createElement("h1", {}, "i love you"),
    React.createElement(pet)]
  );
}; 

const root = document.getElementById("root");
const container = ReactDOM.createRoot(root);
container.render(React.createElement(App))
