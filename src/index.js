import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Shop1 from './shop';
import Galleries1 from './galleries';
import Settings1 from './settings';
import Achiev1 from './achievements';
import Mypuzzles1 from "./mypuzzles";

//Index Page


//Rectangular design at the bottom of the page
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

//Printscapes logo
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

//Rectangular design at the top of the page
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

//Puzzlestext
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


//API (Carousel)
function APIImages() {
  const url = "https://puzzleapi.printscapes.com/api/CarouselImages";
  const [data, setData] = useState([]);
  const button = {
    height: "40px",
    width: "400px",
    color: "white",
    backgroundColor: "rgb(3, 58, 58,0.8)",
    borderRadius: "20%",
    borderColor: "rgb(3, 58, 58,0.8)",
    boxShadow: "none",
    fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
    fontSize: "25px"
  }

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(url)
      .then((res) => setData(res.data))
      .catch(error => console.error("Error fetching data: " + error));
  }, []);

  const handleShopButtonClick = () => {
    navigate('/Shop');
  };

  const handleGalleriesButtonClick = () => {

    navigate('/galleries');

  };

  const handleSettingsButtonClick = () => {

    navigate('/settings');
  }

  const handleAchievButtonClick = () => {
    navigate('/achievmements')
  }

  const handleMyPuzzlesButtonClick = () => {
    navigate("/mypuzzles")
  }
  return (
    <div>
      <div style={{ position: "relative", right: "95%", left: "95%" }}>
        <div>
          <div style={{ position: "relative", justifyContent: "center", top: "-250px", right: "60%" }}>
            <div>
              <div style={{ display: "inline-block" }}><img style={{ height: "200px", width: "200px" }} src={data[0] && data[0].ImageURL} alt="Image 1"></img></div>
              <div style={{ display: "inline-block" }}><img style={{ height: "200px", width: "200px" }} src={data[1] && data[1].ImageURL} alt="Image 2"></img></div>
            </div>
            <div></div>
            <div>
              <div style={{ display: "inline-block" }}><img style={{ height: "200px", width: "200px" }} src={data[2] && data[2].ImageURL} alt="Image 3"></img></div>
              <div style={{ display: "inline-block" }}><img style={{ height: "200px", width: "200px" }} src={data[3] && data[3].ImageURL} alt="Image 4"></img></div>
            </div>
            <div>
              <br></br>
              <br></br>
              <div style={{ display: "block", position: "relative", left: "0" }}><button onCLick={handleGalleriesButtonClick} style={button}>Galleries</button></div>
              <br></br>
              <div style={{ display: "block", position: "relative", left: "0%" }}><button onClick={handleShopButtonClick} style={button}>Shop</button></div>
              <br></br>
              <div style={{ display: "block", position: "relative", left: "0%" }}><button onClick={handleSettingsButtonClick}style={button}>Settings</button></div>
              <br></br>
              <div style={{ display: "block", position: "relative", left: "0%" }}><button onClick={handleAchievButtonClick} style={button}>Achievements</button></div>
              <br></br>
              <div style={{ display: "block", position: "relative", left: "0%" }}><button onClick={handleMyPuzzlesButtonClick} style={button}>My Puzzles</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//All the component calls for each page
function HomePage() {
  return (
    <div>
      <Backgroundrect />
      <Printscapeslogo />
      <Puzzlestext />
      <APIImages />
      <Backgroundrect2 />
    </div>
  );
}

function ShopPage() {
  return (
    <div>
      <Shop1 />
      
    </div>
  );
}

function GalleriesPage() {

    return (
        <div>
           <Galleries1 />
        </div>
    )
}

function SettingsPage() {
    return (
        <div>
            <Settings1 />
        </div>
    )
}

function AchievPage() {
    return (
        <div>
            <Achiev1 />
        </div>
    )
}

function MyPuzzlesPage() {
    return (
        <div>
            <Mypuzzles1 />
        </div>
    )
}

//Final Component displaying all components
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Shop" element={<ShopPage />} />
          <Route path="/galleries" element={<GalleriesPage />} />
          <Route path="/settings" element={<SettingsPage/>} />
          <Route path="/achievements" element={<AchievPage/>} />
          <Route path="/mypuzzles" element={<MypuzzlesPage/>} />
        </Routes>
      </Router>
    </div>
  );
}



document.body.style.overflowX = "hidden";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);








