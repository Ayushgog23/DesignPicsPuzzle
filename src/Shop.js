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

class Shoptext extends React.Component {
    render() {
        return (
            <div>
                <div style = {{display: "flex", justifyContent: "center", position: "relative", top: "-200px"}}>
                    <h1 style = {{display: "block",  color: "rgb(11, 68, 68)", fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", opacity: "60%"}}>Shop</h1>
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


class Premiumgallerytext extends React.Component {
    render() {
        return(
            <div style = {{display: "flex", justifyContent: "center", position: "relative", top: "-140px", right: "0%"}}>
                <p style = {{fontSize: "25px", color:"rgb(54, 47, 3, 0.5)"}}><a>&lt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>Premium Gallery<a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;</a></p>
            </div>

        )



    }

}


const Shop1 = () => {
    return (
        <React.Fragment>
            <Backgroundrect />
            <Printscapeslogo />
            <Shoptext />
            <Logo />
            <Premiumgallerytext />
            <Backgroundrect2 />
        </React.Fragment>

    );


}

export default Shop1;



document.body.style.overflowX = "hidden";

