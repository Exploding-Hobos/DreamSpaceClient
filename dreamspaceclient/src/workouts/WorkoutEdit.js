import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

class WorkoutEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            title: '',
            body: '',
            date: '',
        };
    }

    componentWillMount() {
        this.setState({
            id: this.props.story.id,
            title: this.props.story.title,
            body: this.props.story.body,
            date: this.props.story.date
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }

    render() {
        return (
        <div>
           <Modal isOpen={true} >
            <ModalHeader >Log A Workout</ModalHeader>
            <ModalBody>
                    <Form onSubmit={this.handleSubmit} >
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input id="title" type='text' name="title" value={this.state.title} placeholder="enter result" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="body">Body</Label>
                            <Input type="select" name='body' id='body' value={this.state.body} onChange={this.handleChange} placeholder="Type">
                                <option></option>
                                <option value="Time">Time</option>
                                <option value="Weight">Weight</option>
                                <option value="Distance">Distance</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="date">Date</Label>
                            <Input id="date" type="text" name="date" value={this.state.date} placeholder="enter date" onChange={this.handleChange} />
                        </FormGroup>
                        <Button type="submit" color="primary"> Submit </Button>
                    </Form>
            </ModalBody>
        </Modal>
        </div>
        )
    }

}

export default WorkoutEdit;