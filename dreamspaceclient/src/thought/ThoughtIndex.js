import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ThoughtCreate from './ThoughtCreate';
import ThoughtEdit from './ThoughtEdit';
import ThoughtVault from './ThoughtVault';

class ThoughtIndex extends Component {

    constructor(props) {
        super(props)
        this.state = {
            thoughts: [],
            updatePressed: false,
            thoughtToUpdate: {}
        }
    }

    componentWillMount() {
        this.fetchThoughts()
    }

    fetchThoughts = () => {
        fetch("http://localhost:3000/api/thought/get", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                console.log(logData)
                return this.setState({ thoughts: logData })
            })
    }

    thoughtDelete = (event) => {
        fetch(`http://localhost:3000/api/thought/delete/${event.target.id}`, {
            method: 'DELETE',
            body: JSON.stringify({ thought: { id: event.target.id } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => this.fetchThoughts())
    }

    thoughtUpdate = (event, thought) => {
        fetch(`http://localhost:3000/api/thought/update/${thought.id}`, {
            method: 'PUT',
            body: JSON.stringify({ thought: thought }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => {
                this.fetchThoughts();
                this.setState({ updatePressed: false })
            })
    }

    setUpdatedThought = (event, thought) => {
        this.setState({
            thoughtToUpdate: thought,
            updatePressed: true
        })
    }


    render() {

        return (
            <Container>
                <Row>
                    <Col xs='12'>
                        <ThoughtCreate token={this.props.token} updateThoughtsArray={this.fetchThoughts} />
                    </Col>
                </Row>
                <Col md="12">
                    {
                        this.state.updatePressed ? <ThoughtEdit t={this.state.updatePressed} update={this.thoughtUpdate} thought={this.state.thoughtToUpdate} />
                            : <div></div>
                    }
                </Col>
                <Row>
                    <Col md="9">
                        <ThoughtVault thoughts={this.state.thoughts} delete={this.thoughtDelete} update={this.setUpdatedThought} />
                    </Col>
                </Row>
            </Container>
        )

    }
}

export default ThoughtIndex;