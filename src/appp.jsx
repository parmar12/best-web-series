import React from 'react';
import ReactDom from 'react-dom';
import Card from "./Card";
import Sdata from "./Sdata";
import './index.css'

function ncard(val,){
    return(
        <Card
        key={val.id}
        imgsrc={val.imgscr}
        title={val.title}
        sname={val.sname}
        link={val.link}
        />
    );
}
ReactDom.render(
<>
    <div className="navbar">
    <h1 className="heading">List of Top 5 Hindi Web Series </h1>
    </div>
        {Sdata.map(ncard)}
</>,
    document.getElementById("root")
);