import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            userName: '',
            password: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        fetch("http://localhost:3000/api/user/createuser", {
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
                <h1>Sign Up</h1>
                <h6>Cast In Your InFo To Be Welcomed into The DReam SPace</h6>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input id="email" type="text" name="email" placeholder="EntEr INa Email"  onChange={this.handleChange} ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input id="userName" type="text" name="userName" placeholder="EntEr INa USername" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="su_password" type="password" name="password" placeholder="EntEr PaSSwoRd" onChange={this.handleChange}/>
                    </FormGroup>
                    <Button type="submit">Cast</Button>
                </Form>
            </div>
        )
    }
}
export default SignUp;