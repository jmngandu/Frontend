import React from "react";
import { preprocessCSS } from "vite";
import "./SectionMain.css"

export default function SectionMain(props) {
    return(
        <div className="wrapper">
            <div className="cars">
            <img src={props.img} />
            </div>
            <h3 className="brand">{props.brand}</h3>
            <h4 className="type">{props.type}</h4>
            <h5 className="cost">{props.cost}</h5>
        </div>
    )
}