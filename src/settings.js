import React from 'react';
import ReactDOM from 'react-dom/client';

class Backgroundrect2 extends React.Component {
    render() {
        const rect2 = {width: "100%", height: "300px", position: "relative"};
        return (
            <div>
                <img style={rect2} src="https://live.staticflickr.com/65535/53078766822_85648ea542_w.jpg"></img>
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
          <img style={rect} src="https://live.staticflickr.com/65535/53079634768_78c563808f_w.jpg"></img>
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
        <div style ={printscapesdivstyle}>
            <img  src = "https://www.printscapes.com/Portals/1/LogoImages/BlackPrintscapesLogoSmaller.png" ></img>
        </div>
        
    );

}

}

class Settings extends React.Component {
    render() {
        return (
            <div>
                <div style = {{display: "flex", justifyContent: "center", position: "relative", top: "-200px"}}>
                    <h1 style = {{display: "block",  color: "rgb(11, 68, 68)", fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", opacity: "60%"}}>Settings</h1>
                </div>
            </div>

        );
    
    }


}

class Iconandbuttons extends React.Component {
    render() {
        const buttonstyle = {
            height: "40px",
            width: "400px",
            color: "white",
            backgroundColor: "rgb(3, 58, 58,0.8)",
            borderRadius: "20%",
            borderColor: "rgb(3, 58, 58,0.8)",
            boxShadow: "none",
            fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif'",
            fontSize: "25px"
        }
        return(
        <div style = {{display: "flex", justifyContent: "center"}}>
            <div style = {{position: "relative", top: "-180px"}}>
                <div style = {{display: "block", position: "relative", left: "35%;"}}>
                <img style = {{position: "relative", left: "35%",width: "120px", height: "100px"}} src ="https://www.pngarts.com/files/10/Default-Profile-Picture-Transparent-Image.png"></img>
                </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
                <div style = {{display: "block", position: "relative", left: "0%"}}><a href=""><button style = {buttonstyle} type = "button">Create an account</button></a></div>
                <br></br>
                <div style = {{display: "block", position: "relative", left: "0%"}}><a href=""><button style = {buttonstyle} type = "button">Sound</button></a></div>
                <br></br>
                <div style = {{display: "block", position: "relative", left: "0%"}}><a href=""><button style = {buttonstyle} type = "button">Music</button></a></div>
                <br></br>
                <div style = {{display: "block", position: "relative", left: "0%"}}><a href=""><button style = {buttonstyle} type = "button">Brightness</button></a></div>
                <br></br>
                <div style = {{display: "block", position: "relative", left: "0%"}}><a href=""><button style = {buttonstyle} type = "button">Remove Ads</button></a></div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

            </div>
        </div>


        )

    }

}


const Settings1 = () => {
    return (
        <React.Fragment>
            <Backgroundrect />
            <Printscapeslogo />
            <Settings />
            <Iconandbuttons />
            <Backgroundrect2 />
            
        </React.Fragment>

    );


}

export default Settings1;

document.body.style.overflowX = "hidden";


