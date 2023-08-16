const App = () => {
  return React.createElement(
    "div", 
    {}, 
    React.createElement("h1", {}, "i love you")
  );
};

const root = document.getElementById("root");
const container = ReactDOM.createRoot(root);
container.render(React.createElement(App))
