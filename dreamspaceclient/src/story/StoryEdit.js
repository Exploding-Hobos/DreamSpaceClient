import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';

class StoryEdit extends React.Component {
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
            <ModalHeader >Uhh..</ModalHeader>
            <ModalBody>
                <Row>
                    <Col xs='12'>
                        <h1>Lets Write A Story...</h1>
                        <p>Everybody Loves Stories</p>
                        <Form onSubmit={this.handleSubmit}>
                             <FormGroup>
                                 <Label for="title">Go ahead give this baby a Title</Label>
                                  <Input id="title" type="text" name="title" value={this.state.title} placeholder="10000 words into a few" onChange={this.handleChange}></Input>
                             </FormGroup>
                             <FormGroup>
                                 <Label for="body">Now lets create...</Label>
                                  <Input  id="body" type="textarea" name="body" value={this.state.body} placeholder="?" onChange={this.handleChange}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="date">Date this baby</Label>
                                 <Input id="date" type="date" name="date" value={this.state.date} onChange={this.handleChange}></Input>
                             </FormGroup>
                             <Button type="submit" color="primary">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </ModalBody>
        </Modal>
        </div>
        )
    }

}

export default StoryEdit;