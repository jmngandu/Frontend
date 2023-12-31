import React from "react";
import "./SectionMain.css"

export default function SectionMain(props) {
    return(
        <div className="wrapper">
            <img src={props.img} className="cars"/>
            <h3 className="brand">{props.brand}</h3>
            <h4 className="type">{props.type}</h4>
            <h5 className="cost">{props.cost}</h5>
        </div>
    )
}