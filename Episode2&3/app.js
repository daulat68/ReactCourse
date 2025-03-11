import React from "react";
import ReactDOM from "react-dom/client";


const heading= React.createElement("h1", {id: "heading"}, "Namaste React");

console.log(heading)




// JSX - javascript and xml, html like structure or xml like structure
// JSX (transpiled before it reaches the JSX) - Babel.
// It is build when we built parcel in our app.
// THe below JSX code is converted into React.createElement then it is converted by babel.
const jsxHeading = (<h1 className="heading" tabIndex="1">Heading by JSX</h1>)
console.log(jsxHeading); 

// REACT Functional Component
const HeadingComponent1= ()=> {
    return (<div id="container">
        <h1>Hello Function component</h1>
        <HeadingComponent2 />
    </div>
    )
}

const HeadingComponent2= ()=> {
    return <h1>Hello Function component by second</h1>
}

// REACT ELEMENT
const h= (
    <h1>Hello Function component</h1>
)
// COMPONENT COMPOSITION is using a component inside another component

const root= ReactDOM.createRoot(document.getElementById("root"));

// REACT ELEMENT RENDER
// root.render(heading);

// REACT COMPONENT RENDER
// root.render(<HeadingComponent1 />);
root.render(<HeadingComponent1 > </HeadingComponent1>);

