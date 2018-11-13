import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class WorkoutCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
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
        event.preventDefault();
        fetch(`http://localhost:3000/api/story`, {
            method: 'POST',
            body: JSON.stringify({ story: this.sate}),
            headers: new Headers({
                'Content-Type': 'application.json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                this.props.updateStorysArray()
                this.setState({
                    id: '',
                    title: '',
                    body: '',
                    date: ''
                })
            })
    }


    render() {
        return(

            <div>
                <h3>Log a Workout</h3>
                <hr />
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="result">Result</Label>
                        <Input id="result" type='text' name="result" value={this.state.result} placeholder="enter result" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="def">Type</Label>
                        <Input type="select" name='definition' id='definition' value={this.state.definition} onChange={this.handleChange} placeholder="Type">
                            <option></option>
                            <option value="Title">Title</option>
                            <option value="Body">Body</option>
                            <option value="Date">Date</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Notes</Label>
                        <Input id="description" type="text" name="desciption" value={this.state.description} placeholder="enter desciption" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit" color="primary"> Submit </Button>
                </Form>
            </div>
        )
        }

    
}

export default WorkoutCreate;