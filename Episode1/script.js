
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div", 
        { id: "child" }, 
        [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h1 tag")
        ]
)
);

const heading = React.createElement(
    "h1",
    {}, 
    "It is a heading")

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)