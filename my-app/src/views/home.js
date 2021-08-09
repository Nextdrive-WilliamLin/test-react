import React from "react";
import MoButton from "components-modules/dist/MoButton";
import MoAccordion from "components-modules/dist/MoAccordion";
import {Link} from "react-router-dom";

function Home (){

    const accordionData = [{
        title: "a",
        content: <Link to="/a"><MoButton color="primary">aa</MoButton></Link>
    },
        {
            title: "b",
            content: <Link to="/b"><MoButton color="primary">BBB</MoButton></Link>
        },
        {
            title: "c",
            content: <MoButton color="primary">CCCCCCC</MoButton>
        }
    ]

    return  (
        <div>
            <MoAccordion data={accordionData}></MoAccordion>
        </div>
    )
}

export default Home;