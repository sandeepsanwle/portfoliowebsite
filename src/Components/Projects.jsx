import React from 'react';
import vsmsimg from '../images/vsms.png';
import cryptoimg from '../images/cryptoproject.png';
import uncommonimg from '../images/uncommonclicks.png';

function projects() {
   const backgroundImages = [vsmsimg,cryptoimg,uncommonimg];

    const project = [
        {
             
            name: 'VSMS',
            desc: 'The Web based Vehicle Service Management System is to provide customers to online booking for their vehicle from their places.',
        },
        {
             
            name: 'CryptoUpdates',
            desc: 'Website for displaying latest news about crypto and different cryptocurriency prices with the help of API'
        },
        {
             
            name: 'Uncommonclicks',
            desc: 'In this website user can upload photos based on different groups and also do like and comment on other users uploaded photos'
        }

    ]

    return (
        <div id="projectsdiv" className="projectsdiv alldiv">
            <h2 style={{ fontFamily: 'Fredoka One', marginBottom: '40px' }} className="pageheading" >My Projects</h2>
           
                {project.map((e,i) => {
                    return (
                        <>
                         <div className="project1" >
                <div className="projectimgdiv" style={{backgroundImage:`url(${backgroundImages[i]})`}}></div>
                <div className="projectdiscpdiv">
                <h4>{e.name}</h4>
                <p>{e.desc}</p>
                <a href="link"><i class="fas fa-external-link-alt"></i></a>  
                </div>
                </div>
                        </>

                    )
                })
                }
            </div>

        
    );
}

export default projects;
