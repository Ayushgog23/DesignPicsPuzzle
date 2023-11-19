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


class Selectedpuzzletext extends React.Component {
    render() {
        return (
            <div>
                <div style = {{display: "flex", justifyContent: "center", position: "relative", top: "-200px"}}>
                    <h1 style = {{display: "block",  color: "rgb(11, 68, 68)", fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", opacity: "60%"}}>Selected Puzzle</h1>
                </div>

            </div>

        );
    
    }


}


class Img extends React.Component {

    render() {
        return(
            <div style = {{display: "flex", justifyContent: "center", position: "relative", top: "-160px", left: "0px;"}}>
            <br></br>
                <img style = {{width:"280px", height:"200px"}} ></img>
            </div>
        )

    }

}


class Buttons extends React.Component {
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
            fontSize: "25px",
            width: "150px"

        }
        return(
            <div>
            <div style = {{display: "flex", justifyContent: "center", position: "relative", top: "-140px", left: "0px;"}}>
                <div style = {{display: "block", position: "relative", left: "0%;"}}>
                <br></br>
                <br></br>
                    <div>
                        <button style={buttonstyle} type = "button">Pieces left</button>
                    </div>
                <br></br>
                <br></br>   
                </div>

            </div>

            <div style = {{display: "flex", justifyContent: "center", position: "relative", top: "-120px", left: "0px"}}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
                <div>
                    <button style = {buttonstyle} type = "button">Continue</button>
                </div>
            <br></br>
            <br></br>
            <br></br>
            </div>
            </div>

        )
    }

}



const App = () => {
    return (
        <React.Fragment>
            <Backgroundrect />
            <Printscapeslogo />
            <Selectedpuzzletext />
            <Img/>
            <Button />
            <Backgroundrect2 />
            
        </React.Fragment>

    );


}


document.body.style.overflowX = "hidden";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);