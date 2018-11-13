import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: ''
        };
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        console.log(this.state)
        fetch("http://localhost:3000/api/user/login", {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)
        })
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h1>SignIn</h1>
                <h6>Fill Out The Form To Return To Your DReam SPace</h6>
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input id="li_username" type='text' name='userName' placeholder='EntEr YouR USerName' onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input id='li_password' type='password' name='password' placeholder="EntEr PaSSwoRd" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="sumbit">ReCast</Button>
                </Form>
            </div>
        )
    }
}
export default SignIn;