import React from "react";
import ReactDOM from "react-dom";

// jsx(transpiled before it reaches the js) - parcel -Babel

const heading =(<h1 className="head">Namste React using JSX</h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

// COMPONENT COMPOSITION

const Title =()=>(
    <h1>Harsh raj</h1>
);

const HeadingComponent =()=>(
    <div>
         <Title/>
        <h1>Nayan krishna</h1>
       
        </div>
        
    
);

root.render(<HeadingComponent />);




// HOW TO ADD ELEMENT INTO FUNTIONAL COMPONENT

const title = (
    <h1>AGE = 14</h1>
);

const MyComponent = () => (
    <div>
        

        <h1>Nayan Krishna</h1>
        {title}
    </div>
);

root.render(<MyComponent />);











