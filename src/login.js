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

class Logintext extends React.Component {
    render() {
        return(
            <div style = {{display: "flex", justifyContent: "center",position: "relative", top: "-200px"}}>
                <h1 style = {{display: "block", color: "rgb(11, 68, 68)", fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", opacity: "60%"}}>Login</h1>
                <br></br>
                <br></br>
                <br></br>
                

            </div>


        );



    }


}


class Userandpass extends React.Component  {
    render() {
        const inputtext = {
            color: "rgb(11, 68, 68)",
            fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", 
            opacity: "60%",
            textAlign: "center"
        }

        return(
            
            <div>
                <div style = {{position: "relative", top: "-190px"}}>
                    <h4 style = {inputtext}>Username:</h4>
                </div>

                <div style = {{display: "flex", justifyContent: "center", position: "relative", top: "-180px"}}>
                    <input type = "text" size = "40"></input>
                </div>


                <div style = {{position: "relative", top: "-190px"}}>
                    <h4 style = {inputtext} >Password:</h4>
                </div>

                <div style = {{display: "flex", justifyContent: "center", position: "relative", top: "-190px"}}>
                    <input type = "text" size = "40"></input>
                </div>

                <br></br>
                <br></br>
                <br></br>
                <div style = {{display: "flex", justifyContent: "center", position: "relative", top: "-200px"}}>
                    <input type = "submit"></input>
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
            <Logintext />
            <Userandpass />
            <Backgroundrect2 />
            
        </React.Fragment>

    );


}


document.body.style.overflowX = "hidden";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);















