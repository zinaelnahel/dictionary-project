import React, {useState}from "react";
import "./Dictionary.css";
export default function Dictionary(){
    let[keyword,setKeyword]=useState("");
    function search(event){event.preventDefault();
    alert("Searching");}
    function handleKeyWordChange(event){
        console.log(event);
    }
    
    
    return <div className="Dictionary"><form onSubmit={search} onChange={handleKeyWordChange}><input type="search" autoFocus={true}/></form></div>;}