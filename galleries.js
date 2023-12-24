import React, { useState, useEffect } from "react";
import axios from "axios";

//Galleries page


//Rectangular design at the bottom of the page
class Backgroundrect2 extends React.Component {
  render() {
    const rect2 = { width: "100%", height: "300px", position: "relative" };
    return (
      <div>
        <img
          style={rect2}
          src="https://live.staticflickr.com/65535/53078766822_85648ea542_w.jpg"
          alt="Background"
        />
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
        maxHeight: "100%",
    };

    return (
      <div>
        <img
          style={rect}
          src="https://live.staticflickr.com/65535/53079634768_78c563808f_w.jpg"
          alt="Background"
        />
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
        top: "-340px",
    };

    return (
      <div style={printscapesdivstyle}>
        <img
          src="https://www.printscapes.com/Portals/1/LogoImages/BlackPrintscapesLogoSmaller.png"
          alt="Printscapes Logo"
        />
      </div>
    );
  }
}

//Puzzles text
class Puzzlestext extends React.Component {
  render() {
    const puzzlestextstyle = {
        display: "block",
        color: "rgb(11,68,68)",
        fontFamily:
          "Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        opacity: "60%",
    };

    const puzzletextsdivstyle = {
        display: "flex",
        justifyContent: "center",
        position: "relative",
        top: "-330px",
    };

    return (
      <div style={puzzletextsdivstyle}>
        <h1 style={puzzlestextstyle}>Galleries</h1>
      </div>
    );
  }
}



//list all the galleries
const PhotoGalleries = () => {
  const url1 =
    "https://puzzleapi.printscapes.com/api/Galleries?UserID=1533914573ccd0ffa6-9d22-4a33-9c4d-68da1ae10243&GalleryType=0";
  const [data, setData] = useState([]);
  const [imageslist, setImagesList] = useState([]); // New state for images

  const button = {
    height: "40px",
    width: "300px",
    color: "white",
    backgroundColor: "rgb(113, 151, 173)",
    borderRadius: "30%",
    borderColor: "rgb(113, 151, 173)",
    fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
    fontSize: "17px",
    marginBottom: "30px",
  };

  useEffect(() => {
    axios.get(url1).then((res) => setData(res.data));
  }, []);



  
  const getimages = (galleryID) => {
    const url2 = `https://puzzleapi.printscapes.com/api/GalleryImages?GalleryID=${galleryID}&PageSize=10&CurrentPage=1&UserID=1533914573ccd0ffa6-9d22-4a33-9c4d-68da1ae10243`;

    axios.get(url2)
      .then((res) => setImagesList(res.data))
      .catch((error) => console.error("Error fetching images:", error));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
        top: "-250px",
      }}
    >
      <ul style={{ listStyleType: "none" }}>
        {data.map((item, i) => (
          <li key={i}>
            <img
              src={`https://puzzleapi.printscapes.com${item.Thumbnail}`}
              alt="Gallery Thumbnail"
            />
            
            &nbsp;&nbsp;
            <button style={button} onClick={() => getimages(item.GalleryID)}>
              {item && item.GalleryName}
            </button>
          </li>
        ))}
      </ul>

      <ul style={{ listStyleType: "none" }}>
        {imageslist.map((image, index) => (
          <li key={index}>
             <img src={`https://puzzleapi.printscapes.com${image.ThumbVirtualPath}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};


const Galleries1 = () => {
  return (
    <React.Fragment>
      <Backgroundrect />
      <Printscapeslogo />
      <Puzzlestext />
      <PhotoGalleries />
      <Backgroundrect2 />
    </React.Fragment>
  );
};

export default Galleries1;

document.body.style.overflowX = "hidden";













