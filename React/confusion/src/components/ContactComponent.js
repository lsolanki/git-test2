import React, { Component } from 'react';
import { Form, FormGroup, Label, Col, Input, Button, FormFeedback } from 'reactstrap';

class Contact extends Component {

    constructor(props){
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    validate(firstname, lastname, telnum, email){
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        }

        if (this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'First Name should be > 3 charactors';
        else if(this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be < 10 charactors';

        if (this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be > 3 charactors';
        else if (this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last Name should be < 10 charactors';

        const reg = /^\d+$/
        if(this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Contact type should be numbers';
        else if(this.state.touched.telnum && telnum.length < 10)
            errors.telnum = 'Contact type should be 10 charactors'

        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1) 
            errors.email = 'Email should contain a @';


        return errors;
    }

    handleSubmit(event){
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]:true },
        });
    }


    render() {

        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);

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

                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor='firstname' md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name='firstname' placeholder='First Name' 
                                    value={this.state.firstname} onChange={this.handleInputChange} 
                                    valid={errors.firstname === ''} invalid={errors.firstname !== ''} 
                                    onBlur={this.handleBlur('firstname')} />
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor='lastname' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type='text' id='lastname' name='lastname' placeholder='Last Name' 
                                    value={this.state.lastname} onChange={this.handleInputChange} 
                                    valid={errors.lastname === ''} invalid={errors.lastname !== ''} 
                                    onBlur={this.handleBlur('lastname')} />
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor='telnum' md={2}>Contsct Tel. Number</Label>
                                <Col md={10}>
                                    <Input type='tel' id='telnum' name='telnum' placeholder='Tel. No.' 
                                    value={this.state.telnum} onChange={this.handleInputChange} 
                                    valid={errors.telnum === ''} invalid={errors.telnum !== ''} 
                                    onBlur={this.handleBlur('telnum')} />
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor='email' md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type='email' id='email' name='email' placeholder='Email' 
                                    value={this.state.email} onChange={this.handleInputChange} 
                                    valid={errors.email === ''} invalid={errors.email !== ''} 
                                    onBlur={this.handleBlur('email')} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md={{size: 4, offset:2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type='checkbox' id='agree' name='agree' value={this.state.agree} 
                                            onChange={this.handleInputChange} /> 
                                            { } <strong>May we call you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset:3}}>
                                    <Input type='select' id='contactType' name='contactType' value={this.state.contactType} 
                                     onChange={this.handleInputChange} >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor='message' md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type='textarea' id='message' name='message' value={this.state.message} 
                                    row={12} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md={{size: 2, offset:2}}>
                                    <Button type='submit' color='primary'>Submit</Button>
                                </Col>
                            </FormGroup>

                        </Form>

                    </div>

                </div>

            </div>

        );
    }
}


export default Contact;