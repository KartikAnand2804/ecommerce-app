import React from 'react';

export default function FirstGrid(){
    return(
        <div className ="firstgrid" style={{display: 'inline-block'}}>
            <div className="container">
                 <div className="phone2"style={{display: 'inline-block', width:'25%',textAlign:'center',justifyContent:'center'}}>

                <img alt="timer" src={require('./images/phone2.png')} />
                <p>Nord Series</p>
                </div>

                <div className="phone2"style={{display: 'inline-block', width:'25%',textAlign:'center',justifyContent:'center'}}>
                <img alt="timer" src={require('./images/TV.png')} />
                <p>TV</p>
                </div>

                <div className="watches"style={{display: 'inline-block', width:'25%', textAlign:'center',justifyContent:'center'}}>
                <img alt="timer" src={require('./images/watches.png')} />
                <p>Wearables</p>
                </div>
                
                <div className="watches"style={{display: 'inline-block', width:'25%',textAlign:'center',justifyContent:'center'}}>
                <img alt="timer" src={require('./images/Accesories.png')} />
                <p>Accessories</p>
                </div>
                </div>    
            
        </div>
    )
}