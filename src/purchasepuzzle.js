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



class Purchasepuzzletext extends React.Component {
    render() {
        return (
            <div>
                <div style = {{display: "flex", justifyContent: "center", position: "relative", top: "-200px"}}>
                    <h1 style = {{display: "block",  color: "rgb(11, 68, 68)", fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", opacity: "60%"}}>Purchase Puzzle</h1>
                </div>
            </div>

        );
    
    }


}


class Logo extends React.Component {
    render() {
        const amounttext = {
            color: "white",
            backgroundColor: "rgb(11, 68, 68,0.8)",
            borderColor: "rgb(11, 68, 68, 0.8)",
            borderRadius: "30%",
            padding: "1%",
            position: "relative",
            left: "1%"
        };
        return(
            <div style = {{display: "flex", justifyContent: "center", position: "relative", top: "-180px", right: "0%"}}>
                <div>
                    <img  style = {{width: "65px", height: "65px", position:"relative"}} src = "https://freepngimg.com/thumb/coin/75078-trademark-symbol-dollar-us-yellow-coin.png"></img>
                </div>
                <h4 style={amounttext}>Amount</h4>
            </div>





        )

    }


}


class Imgandpurchase extends React.Component {
    render() {
        const button = {
            height: "40px",
            width: "400px",
            color: "white",
            backgroundColor: "rgb(3, 58, 58,0.8)",
            borderRadius: "20%",
            borderColor: "rgb(3, 58, 58,0.8)",
            boxShadow: "none",
            fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif'",
            fontSize: "25px",
            padding: "1%",
            width: "150px",
            position: "relative", 
            left: "22.5%" 

        }

        return(
            <div>
                <div style = {{display: "flex", justifyContent: "center", position: "relative", top: "-170px", left: "0px;"}}>
                <br></br>
                <div>
                    <img style = {{width: "280px", height:"200px;"}}></img>
                    <br></br>
                    <br></br>
                    <button style={button} type = "button">Purchase</button>
                </div>
                <br></br>
                <br></br>
                <br></br>
                </div>
            </div>

        );

    }


}






const App = () => {
    return (
        <React.Fragment>
            <Backgroundrect />
            <Printscapeslogo />
            <Purchasepuzzletext />
            <Logo />
            <Imgandpurchase />
            <Backgroundrect2 />
            
        </React.Fragment>

    );


}


document.body.style.overflowX = "hidden";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

