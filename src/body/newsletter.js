import React from 'react';

export default function NewsLetter(){
    return(
        <>
        <div className="header">
    <h1>Always be the first to know.</h1>

<div className="home-newsletter">
<div className="container">
<div className="row">
<div className="col-sm-12">
	<div className="single">
		<h3>Sign up for our newsletter!</h3>
	<div className="input-group" class="mt-5">
         <input type="email" className="form-control" style={{justifycontent:"center", height:"30px", width: "22pc", borderColor: "#ffffff", borderRadius:"2px 0px 0px 2px"}} placeholder="Enter your email"/>
         <span className="input-group-btn"></span>
         <button className="btn" type="submit" style={{minHeight: "42px", width: "11pc" , BorderRadius:"0", background:"#243c4f", color:"#fff", fontWeight:"300"}}>Subscribe</button>
          </div>
        </div>
        <div className="link">
        <a className="unsubscribe-link" href="">Subscribe to receive marketing information</a>
        </div>
	</div>
</div>
</div>
</div>
</div>
</>

       
    )  
}