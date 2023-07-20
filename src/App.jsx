import React from "react"
import Navbar from "./components/Navbar.jsx"
import Card from "./components/Card.jsx"
import dataArray from "./data.jsx"

let newDataArray = dataArray.map((element) => {
    return (
        <Card key = {element.id} item = {element} />
    );
});

const App = (props) => {
    return (
        <>
            <Navbar />
            {newDataArray}
        </>
    );
};

export default App;
