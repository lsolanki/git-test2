import React, { Component } from 'react';
import { Input, Form, FormGroup, Label, Col, Button } from 'reactstrap';

class Contact extends Component {

    constructor(props){
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            telnum: '',
            agree: false,
            contactType: 'Tel.',
            message: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleSubmit(event){
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
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
                    <div className="col-12 col-md-2"></div>
                    <div className="col-12 col-md-8">
                        <div className="row">
                            
                            <div className="col-12">
                                <h3>Send Us Your Feedback</h3>
                            </div>
                            <div className="col-12 col-md-12">

                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup row>
                                        <Label htmlFor='firstname' md={2}>First Name</Label>
                                        <Col md={10}>
                                            <Input type="text" id='firstname' name='firstname' value={this.state.firstname} 
                                            onChange={this.handleInputChange} /> 
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label htmlFor='lastname' md={2}>Last Name</Label>
                                        <Col md={10}>
                                            <Input type='text' id='lastname' name='lastname' value={this.state.lastname} 
                                            onChange={this.handleInputChange} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor='email' md={2}>Email</Label>
                                        <Col md={10}>
                                            <Input type="email" id='email' name='email' value={this.state.email} 
                                            onChange={this.handleInputChange} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor='telnum' md={2}>Contact Tel.</Label>
                                        <Col md={10}>
                                            <Input type="tel" id='telnum' name='telnum' value={this.state.telnum} 
                                            onChange={this.handleInputChange} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md={{size: 6, offset: 2}}>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type='checkbox' id='agree' name='agree' checked={this.state.agree} 
                                                    onChange={this.handleInputChange} /> 
                                                    {' '} <strong>May we contact you?</strong>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col md={{size: 3, offset: 1}}>
                                            <Input type='select' name='contactType' checked={this.state.contactType} 
                                            onChange={this.handleInputChange} >
                                                <option>Tel.</option>
                                                <option>Email</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label md={2} htmlFor='message'>Your Feedback</Label>
                                        <Col md={10}>
                                            <Input type='textarea' name='message' id='message' row='12' value={this.state.message} 
                                            onChange={this.handleInputChange} ></Input>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col md={{size: 3, offset: 2}}>
                                            <Button type="submit" color="primary">Send Feedback</Button>
                                        </Col>
                                    </FormGroup>

                                </Form>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

       );
    }
}


export default Contact;