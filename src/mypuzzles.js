import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

class Backgroundrect2 extends React.Component {
    render() {
      const rect2 = { width: "100%", height: "300px", position: "relative" };
      return (
        <div>
          <img style={rect2} src="https://live.staticflickr.com/65535/53078766822_85648ea542_w.jpg" alt="Background 2"></img>
        </div>
      );
    }
  }
  
  class Printscapeslogo extends React.Component {
    render() {
      const printscapesdivstyle = {
        display: "flex",
        justifyContent: "center",
        position: "relative",
        top: "-340px"
      };
  
      return (
        <div style={printscapesdivstyle}>
          <img src="https://www.printscapes.com/Portals/1/LogoImages/BlackPrintscapesLogoSmaller.png" alt="Printscapes Logo"></img>
        </div>
      );
    }
  }
  
  class Backgroundrect extends React.Component {
    render() {
      const rect = {
        position: "relative",
        zIndex: "-1",
        height: "380px",
        width: "100%",
        maxWidth: "100%",
        maxHeight: "100%"
      };
  
      return (
        <div>
          <img style={rect} src="https://live.staticflickr.com/65535/53079634768_78c563808f_w.jpg" alt="Background"></img>
        </div>
      );
    }
  }
  
  class Puzzlestext extends React.Component {
    render() {
      const puzzlestextstyle = {
        display: "block",
        color: "rgb(11,68,68)",
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        opacity: "60%"
      };
  
      const puzzletextsdivstyle = {
        display: "flex",
        justifyContent: "center",
        position: "relative",
        top: "-330px"
      };
  
      return (
        <div style={puzzletextsdivstyle}>
          <h1 style={puzzlestextstyle}>Puzzles</h1>
        </div>
      );
    }
  }
  
  function Mypuzzles1() {
    return (
      <div>
        <Backgroundrect/>
        <Printscapeslogo/>
        <Puzzlestext/>
        <Backgroundrect2/>
      </div>
    );
  }
  
  export default Mypuzzles1;
  
  document.body.style.overflowX = "hidden";