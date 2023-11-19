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



//API (Galleries and GalleryImages)

const PhotoGalleries = () => {
  const url1 = "http://puzzleapi.printscapes.com/api/Galleries?UserID=1533914573ccd0ffa6-9d22-4a33-9c4d-68da1ae10243&GalleryType=0";
  const [data, setData] = useState([]);
  const [imageones, setImageones] = useState([]);
  
  useEffect(() => {
    axios
      .get(url1)
      .then((res) => setData(res.data))
      .catch((error) => handleAxiosError("Error fetching data", error));
  }, []);

  const textones = [];
  const url2 =
    "https://puzzleapi.printscapes.com/api/GalleryImages";
  const gallerylist = [];
  data.forEach((gallery) => {
    gallerylist.push(String(gallery.GalleryID));
    textones.push(String(gallery.GalleryName));
  });

  useEffect(() => {
    setData([]);
    const requests = gallerylist.map((id) => {
      return axios.get(`${url2}?GalleryID=${id}&PageSize=25&CurrentPage=1&UserID=1533914573ccd0ffa6-9d22-4a33-9c4d-68da1ae10243`);
    });

    Promise.all(requests)
      .then((responses) => {
        const images = responses.map((res) => {
          if (res.data && res.data.length > 0) {
            return url2 + String(res.data[0].ThumbVirtualPath);
          }
          return null;
        });
        setImageones(images);
      })
      .catch((error) => handleAxiosError("Error fetching data", error));
  }, [gallerylist]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
        top: "-300px",
      }}
    >
      <ul style={{ listStyleType: "none" }}>
        <br />
        <br />
        <li>
          <img
            style={{ width: "90px", height: "90px" }}
            src={imageones[0]}
            alt="Gallery Image"
          />
          &nbsp;&nbsp;&nbsp;
          <a style={{ fontSize: "20px" }} href="allpuzzles.html">
            {textones[0]}
          </a>
        </li>
        <br />
    
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

const handleAxiosError = (message, error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    console.error(`${message} - Response data:`, error.response.data);
    console.error(`${message} - Response status:`, error.response.status);
    console.error(`${message} - Response headers:`, error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    console.error(`${message} - Request data:`, error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error(`${message} - Error message:`, error.message);
  }
  console.error(`${message} - Error config:`, error.config);
};











