import React, { useState } from "react";
import { render } from "react-dom";

import "./App.css";

function CRUD(){
    const [name,setName]=useState("")
    const [age,setAge] =useState("");
    const [allData,setAllData]=useState([])
   
    const handleAdd=()=>{
        if(name.length!==0){
        setAllData(newData=>[...newData,age,name])
        setName("")
        }
    }


    
    return(
        <div>
            {/* <h1>CRUD Insert, Update and Delete</h1><br/>
            <h1>CRUD Insert, Update and Delete</h1><br/>
             
           <br/>

           
            <h2>Name Of Student</h2>
            <input value={name} onChange={(e)=>setName(e.target.value)} /><br/>

            <h2>Age</h2>
           <input value={age} type="number" maxLength={2} onChange={(e)=>setAge(e.target.value)} /><br/><br/>
           
      
            <button onClick={handleAdd}>Add</button><br/><br/>

            {

              [...allData].reverse().map((val, i) =>
                <div>
                    
                  <h4 className = "hh">{val}</h4>
             
                </div>
                )
            } */}
        </div>
    );
}
export default CRUD; 