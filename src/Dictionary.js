import React, {useState}from "react";
import "./Dictionary.css";
export default function Dictionary(){
    let[keyword,setKeyword]=useState("");
    function search(event){event.preventDefault();
    alert(`Searching for ${keyword} definition`);}
    function handleKeyWordChange(event){
        setKeyword(event.target.value);
    }
    
    
    return <div className="Dictionary"><form onSubmit={search} onChange={handleKeyWordChange}><input type="search" autoFocus={true}/></form></div>;}