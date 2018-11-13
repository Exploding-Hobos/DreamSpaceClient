import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

class DreamCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: '',
            date: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        fetch(`http://localhost:3000/api/dream/create`, {
            method: 'POST',
            body: JSON.stringify({ dream: this.state}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                this.props.updateDreamsArray()
                this.setState({
                    title: '',
                    body: '',
                    date: ''
                })
            })
    }


    render() {
        return(
            <Container className='main'>
                <Row>
                    <Col xs='12'>
                        <h1>Remember That Dream..?</h1>
                        <p>Log It</p>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="title">Go ahead give this baby a Title</Label>
                                <Input id="title" type="text" name="title" placeholder="10000 words into a few" onChange={this.handleChange}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="body">Now lets create...</Label>
                                <Input  id="body" type="textarea" name="body" placeholder="?" onChange={this.handleChange}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="date">Date this baby</Label>
                                <Input id="date" type="date" name="date" onChange={this.handleChange}></Input>
                            </FormGroup>
                            <Button type="submit" color="primary">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>        
        )
        }

    
}

export default DreamCreate;