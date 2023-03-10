import React from 'react';
function Certificates() {
    const certificate = [
        {
            name: 'SQL(Basics)',
            url: 'https://www.hackerrank.com/certificates/904aab975aa6',

        },
        {
            name: 'Accenture Nordics Developer',
            url: 'https://www.theforage.com/achievements?ref=4sqm8jGixaWMq8z4P',

        },
        {
            name: 'C/C++(Quiz)',
            url: 'https://drive.google.com/drive/folders/1A_ExCOAImaTTap4AUbn9q7VFPjXGoaSV?usp=sharing',
        },
        {
            name: 'Javascript/React',
            url: 'https://drive.google.com/drive/folders/1A_ExCOAImaTTap4AUbn9q7VFPjXGoaSV?usp=sharing',
        }

    ]
    return (
        <div id="certificatesdiv" className="certificatesdiv alldiv" >
            <h2 style={{ fontFamily: 'Fredoka One' }} className="pageheading">My Certificates</h2>
            <div className="certificate " style={{ marginTop: '40px' }}>

                {certificate.map((e) => {
                    return (<div className="certi1 fancy-border">
                        <h6 style={{ fontWeight: 'bold', color: 'black' }}>{e.name}</h6>
                        <a target="_blank" rel="noopener noreferrer" className='certilink' href={e.url}>View</a>
                    </div>)
                })}

            </div>
        </div>
    );
}

export default Certificates;
