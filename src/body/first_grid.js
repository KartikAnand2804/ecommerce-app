import React from 'react';

export default function FirstGrid(){
    return(
        <div className ="firstgrid" style={{display: 'inline-block'}}>
            <div className="container">
                 <div className="phone2"style={{display: 'inline-block', width:'25%',textAlign:'center',justifyContent:'center'}}>

                <img alt="timer" src="https://oasis.opstatics.com/content/dam/oasis/page/homepage/new-in/nav-render/Pickle-60x60.png" />
                <p>Nord Series</p>
                </div>

                <div className="phone2"style={{display: 'inline-block', width:'25%',textAlign:'center',justifyContent:'center'}}>
                <img alt="timer" src="https://oasis.opstatics.com/content/dam/oasis/page/homepage/new-in/nav-render/Karen-green-160x160_1.png" />
                <p>TV</p>
                </div>

                <div className="watches"style={{display: 'inline-block', width:'25%', textAlign:'center',justifyContent:'center'}}>
                <img alt="timer" src="https://oasis.opstatics.com/content/dam/oasis/page/homepage/new-in/nav-render/Wearable.png" />
                <p>Wearables</p>
                </div>
                
                <div className="watches"style={{display: 'inline-block', width:'25%',textAlign:'center',justifyContent:'center'}}>
                <img alt="timer" src="https://oasis.opstatics.com/content/dam/oasis/page/homepage/new-in/nav-render/Power-Cables.png"/>
                <p>Accessories</p>
                </div>
                </div>    
            
        </div>
    )
}