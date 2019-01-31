import React, { Component } from 'react';
import { Label, Col, Button, Row } from 'reactstrap';

import { Control, LocalForm, Errors } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {

    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(values){
        console.log('Current state is: ' + JSON.stringify(values));
        alert('Current state is: ' + JSON.stringify(values));
        //event.preventDefault();
    }



    render() {

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

                <div className="row row-content">
                    <div className="col-12 text-center">
                        <h3>Share us your Feedback</h3>
                    </div>

                    <div className="col-md-8 col-12 offset-2">

                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor='firstname' md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name='firstname' placeholder='First Name' 
                                    className="form-control" 
                                        validators={{ required, maxLength:maxLength(15), minLength:minLength(3) }}
                                    />
                                    <Errors 
                                        className='text-danger'
                                        model='.firstname'
                                        show='touched'
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor='lastname' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model='.lastname' id='lastname' name='lastname' placeholder='Last Name' 
                                    className="form-control" 
                                        validators={{ required, maxLength:maxLength(15), minLength:minLength(3) }}
                                    />
                                    <Errors 
                                        className='text-danger'
                                        model='.lastname'
                                        show='touched'
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor='telnum' md={2}>Contact Tel. Number</Label>
                                <Col md={10}>
                                    <Control.text model='.telnum' id='telnum' name='telnum' placeholder='Tel. No.' 
                                    className="form-control" 
                                        validators={{ required, minLength:minLength(10), maxLength:maxLength(10), isNumber }}
                                    />
                                    <Errors 
                                        className='text-danger'
                                        model='.telnum'
                                        show='touched'
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 9 characters',
                                            maxLength: 'Must be 10 characters',
                                            isNumber: 'Must be a numbers'
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor='email' md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model='.email' id='email' name='email' placeholder='Email' 
                                    className="form-control"
                                     validators={{ required, validEmail }}
                                    />
                                    <Errors 
                                        className='text-danger'
                                        model='.email'
                                        show='touched'
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{size: 4, offset:2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model='.agree' id='agree' name='agree' 
                                            className="form-check-input" /> 
                                            { } <strong>May we call you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3, offset:3}}>
                                    <Control.select model='.contactType' id='contactType' name='contactType' 
                                    className="form-control" >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor='message' md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model='.message' id='message' name='message' 
                                    className="form-control" />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{size: 2, offset:2}}>
                                    <Button type='submit' color='primary'>Submit</Button>
                                </Col>
                            </Row>

                        </LocalForm>

                    </div>

                </div>

            </div>

        );
    }
}


export default Contact;