 
import React from "react";
 
 
function About(){
 /*   const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'resume.pdf';
                alink.click();
            })
        })
    }*/
    return(
        <div id="aboutdiv" className="aboutdiv alldiv">
        <div className="imgdiv"></div>
        <div className="aboutmediv">
            <div>
            <h6 style={{fontFamily: 'Gaegu'}}>Who AM I ?</h6>
            <h1 style={{fontFamily: 'Fredoka One'}}>About Me</h1>
                <p style={{margin:'40px 0',fontFamily:'Open Sans'}}>
                Hi my name is sandeep sanwle I am a frontend Web Developer based in india.<br/>
                  I love to develop websites which are easy to use and has a clean UI.<br/>I belong
                  to Indore and I am pursuing MCA from IIPS,DAVV Indore.
                </p> 
                   
                  <a className="resumebtn" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/folders/1yoxk4U0_rpdS7AuayX7IKBJYwzxmCOwE?usp=sharing">Download Resume</a>
            </div>
           
        </div>
        </div>
    );

    }
export default About;
