import React from 'react';


function Footer(props) {
    return(
    <div className="footer" style={{backgroundColor : 'khaki' ,width : '100%'}}>
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-7 col-sm-5">
                    <h5><u>Our Address :</u></h5>
                    <address>
		              INT_MAX, Nonamed Road<br />
		              Shoot for the moon, Gazin the stars.<br />
		              Planet - Earth. <br />
		              <i className="fa fa-phone fa-lg"></i>: INT_MAX/100+36587+24<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                         someone@gmail.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                <div className="col-auto text-danger">
                    <p>© Copyright 2022 Project Team</p>
                </div>
                </div>
            </div>
          
        </div>
    </div>
    )
}

export default Footer;