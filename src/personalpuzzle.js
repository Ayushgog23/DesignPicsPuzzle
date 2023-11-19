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

class Diffipiecestext extends React.Component {
    render() {
        return (
            <div>
                <div style = {{display: "flex", justifyContent: "center", position: "relative", top: "-200px"}}>
                    <h1 style = {{display: "block",  color: "rgb(11, 68, 68)", fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", opacity: "60%"}}>Difficulty</h1>
                </div>

                <div style = {{display: "flex", justifyContent: "center", position: "relative", top: "-180px"}}>
                    <h3 style = {{fontSize: "23px", display: "block", color: "rgba(100, 90, 44, 0.6)", fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>Pieces</h3>
                </div>
            </div>

        );
    
    }


}

class InputBar extends React.Component {
    render() {
        return(
        <div>
            <br></br> 
            <br></br>
            <br></br>
            <div style = {{display: "flex", justifyContent: "center", position: "relative", top: "-225px"}}>
                <input style={{width:"500px"}} type="range" step="1" min="1" max="10"></input>
            </div>
        </div>

        );

    }

}

class PhototextandImg extends React.Component {

    render() {
        const button = {
            height: "40px",
            width: "200px",
            color: "white",
            backgroundColor: "rgb(3, 58, 58,0.8)",
            borderRadius: "20%",
            borderColor: "rgb(3, 58, 58,0.8)",
            boxShadow: "none",
            fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
            fontSize: "25px"
        
        }
        return(
            <div>
            <div style = {{display: "flex", justifyContent: "center", position: "relative", top: "-200px"}}>
            <h2 style = {{color: "rgb(11, 68, 68)", fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", opacity: "60%"}}>Photo</h2>
            <br></br>
            </div>

            <div style = {{display: "flex", justifyContent: "center", position: "relative", top: "-180px", left: "0px"}}>
    
            <br></br>
            <img style = {{width:"280px",height:"200px"}}></img>
            </div>
            <br></br>
            <br></br>


            <br></br>
            <br></br>
            <div style = {{display: "block", position: "relative", left: "35%", top: "-140px"}}>
            <div><input style = {{display: "block"}} type="file"></input></div>
            <br></br>
            <br></br>
                <a href="puzzlecreation.html">
                    <button style = {button}>Start Puzzle</button>
                </a>
            </div>


            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>
        


        );


    }

}

const App = () => {
    return (
        <React.Fragment>
            <Backgroundrect />
            <Printscapeslogo />
            <Diffipiecestext />
            <InputBar />
            <PhototextandImg />
            <Backgroundrect2 />
            
        </React.Fragment>

    );


}


document.body.style.overflowX = "hidden";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
