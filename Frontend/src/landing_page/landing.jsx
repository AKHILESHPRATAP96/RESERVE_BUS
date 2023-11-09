import React from "react";

import Navbar from "../navbar/navbar";
import SearchPannel from "./searchBus";
import Crousel from "./crousel";

 function Landing(){
return(<div className="container-fluid  ">
    <Navbar/>
    <SearchPannel/>
    <Crousel/>
</div>)
}

export default Landing