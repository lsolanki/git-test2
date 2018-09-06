import React from 'react';

function Contact(props){
	return(

		<div className="container">
            <div className="row row-content">
                <div className="col-12">
                <h2 className="text-center"><strong>Location Information</strong></h2>
                </div>
                <div className="col-12 col-sm-12 col-md-12 text-center">
                        <h4><strong><u>Our Address</u></strong></h4>
                        <address>
                        	<p>
		                        121, Clear Water Bay Road<br />
		                        Clear Water Bay, Kowloon<br />
		                        HONG KONG<br />
		                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
		                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
		                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
		                    </p>
                        </address>
                </div>
                <div className="col-12 col-sm-12 text-center">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
        </div>

	);
}


export default Contact;