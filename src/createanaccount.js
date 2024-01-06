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

class CreateAnAccountText extends React.Component {
    render() {
        return(
            <div style = {{display: "flex", justifyContent: "center",position: "relative", top: "-200px"}}>
                <h1 style = {{display: "block", color: "rgb(11, 68, 68)", fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", opacity: "60%"}}>Create an account</h1>
                <br></br>
                <br></br>
                <br></br>
                

            </div>


        );



    }


}

class Firstandlastbox extends React.Component {
    render() {
        const inputtext = {
            color: "rgb(11, 68, 68)", 
            fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
            opacity: "60%",
            width: "10px",
            paddingRight: "10px"
        };

        return(
            <div>
            <div style = {{display: "grid", gridTemplateColumns: "5% 5%", columnGap: "200px", justifyContent: "center", position: "relative", top: "-180px", left: "0px"}}> 
                <h4 style={inputtext} >First Name:</h4>
                <h4 style= {inputtext}>Last Name:</h4>
            </div>
            <br></br>
            <br></br>
            <div style = {{display: "grid", gridTemplateColumns: "300px 300px", columnGap: "20px", justifyContent: "center", position: "relative", top: "-190px", left: "12px"}}> 
                <input type = "text" size = "40"></input>
                <input type = "text" size = "40"></input>
            </div>
            </div>


        );

    }

}


class EmailBox extends React.Component {
    render() {
        const inputtext = {
            color: "rgb(11, 68, 68)", 
            fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
            opacity: "60%",
            width: "10px",
            paddingRight: "10px"
        };
        return(
            <div>
            <div style = {{display: "flex", justifyContent: "center", position: "relative", top: "-190px"}}> 
                <h4 style={inputtext}>Email:</h4></div>
            <div style = {{display: "flex", justifyContent: "center", position: "relative", top: "-190px", left: "12px" }}>
                <input type = "text" size = "87.5"></input>
            </div>
            </div>

        )

    }
}

class Username extends React.Component {
    render() {
        const inputtext = {
            color: "rgb(11, 68, 68)", 
            fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
            opacity: "60%",
            width: "10px",
            paddingRight: "10px"
        };
        return(
            <div>
            <div style = {{display: "flex", justifyContent: "center", position: "relative", top: "-180px", right: "10px"}}> 
                <h4 style={inputtext}>Username:</h4></div>
            <div style = {{display: "flex", justifyContent: "center", position: "relative", top: "-180px", left: "12px"}}>
                <input type = "text" size = "87.5"></input>
            </div>
            </div>

        )


    }


}

class Password extends React.Component {
    render() {
        const inputtext = {
            color: "rgb(11, 68, 68)", 
            fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
            opacity: "60%",
            width: "10px",
            paddingRight: "10px"
        };
        return(
        <div>
        <div style = {{display: "flex inline", justifyContent: "center", position: "relative", top: "-170px", left: "49%"}}> 
            <h4 style={inputtext}>Password:</h4></div>
        <div style = {{display: "flex", justifyContent: "center", position: "relative", top: "-160px", left: "1%"}} >
            <input type = "text" size = "87.5"></input>
        </div>
        </div>
        );

    }
}

class PFPandIMGoutput extends React.Component {
    render() {
        const inputtext = {
            color: "rgb(11, 68, 68)", 
            fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
            opacity: "60%",
            width: "10px",
            paddingRight: "10px"
        };
        return(
            <div>
            <div style = {{display: "flex inline", justifyContent: "center", position: "relative", top: "-150px", left: "48%"}}> 
                <h4 style={inputtext}>Profile Picture:</h4></div>
            <div style = {{display: "flex", justifyContent: "center", position: "relative", top: "-90px", left: "4%"}} >
                <input type = "file" accept = ".png .jpg .jpeg"></input>
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
            <CreateAnAccountText />
            <Firstandlastbox />
            <EmailBox />
            <Username />
            <Password />
            <PFPandIMGoutput />
            <Backgroundrect2 />
            
        </React.Fragment>

    );


}


document.body.style.overflowX = "hidden";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);