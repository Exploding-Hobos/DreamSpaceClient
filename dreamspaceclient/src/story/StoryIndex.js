import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import StoryCreate from './StoryCreate';
import StoryEdit from './StoryEdit';
import StoryVault from './StoryVault';

class StoryIndex extends Component {

    constructor(props) {
        super(props)
        this.state = {
            storys: [],
            updatePressed: false,
            storyToUpdate: {}
        }
    }

    componentWillMount() {
        this.fetchStorys()
    }

    fetchStorys = () => {
        fetch("http://localhost:3000/api/story/get", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                console.log(logData)
                return this.setState({ storys: logData })
            })
    }

    storyDelete = (event) => {
        fetch(`http://localhost:3000/api/story/delete/${event.target.id}`, {
            method: 'DELETE',
            body: JSON.stringify({ story: { id: event.target.id } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => this.fetchStorys())
    }

    storyUpdate = (event, story) => {
        fetch(`http://localhost:3000/api/story/update/${story.id}`, {
            method: 'PUT',
            body: JSON.stringify({ story: story }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => {
                this.fetchStorys();
                this.setState({ updatePressed: false })
            })
    }

    setUpdatedStory = (event, story) => {
        this.setState({
            storyToUpdate: story,
            updatePressed: true
        })
    }


    render() {

        return (
            <Container>
                <Row>
                    <Col xs='12'>
                        <StoryCreate token={this.props.token} updateStorysArray={this.fetchStorys} />
                    </Col>
                </Row>
                <Col md="12">
                    {
                        this.state.updatePressed ? <StoryEdit t={this.state.updatePressed} update={this.storyUpdate} story={this.state.storyToUpdate} />
                            : <div></div>
                    }
                </Col>
                <Row>
                    <Col md="9">
                        <StoryVault storys={this.state.storys} delete={this.storyDelete} update={this.setUpdatedStory} />
                    </Col>
                </Row>
            </Container>
        )

    }
}

export default StoryIndex;