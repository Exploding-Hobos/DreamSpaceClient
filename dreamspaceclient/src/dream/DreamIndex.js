import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import DreamCreate from './DreamCreate';
import DreamEdit from './DreamEdit';
import DreamVault from './DreamVault';

class DreamIndex extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dreams: [],
            updatePressed: false,
            dreamToUpdate: {}
        }
    }

    componentWillMount() {
        this.fetchDreams()
    }

    fetchDreams = () => {
        fetch("http://localhost:3000/api/dream/get", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                console.log(logData)
                return this.setState({ dreams: logData })
            })
    }

    dreamDelete = (event) => {
        fetch(`http://localhost:3000/api/dream/delete/${event.target.id}`, {
            method: 'DELETE',
            body: JSON.stringify({ dream: { id: event.target.id } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => this.fetchDreams())
    }

    dreamUpdate = (event, dream) => {
        fetch(`http://localhost:3000/api/dream/update/${dream.id}`, {
            method: 'PUT',
            body: JSON.stringify({ dream: dream }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => {
                this.fetchDreams();
                this.setState({ updatePressed: false })
            })
    }

    setUpdatedDream = (event, dream) => {
        this.setState({
            dreamToUpdate: dream,
            updatePressed: true
        })
    }


    render() {

        return (
            <Container>
                <Row>
                    <Col xs='12'>
                        <DreamCreate token={this.props.token} updateDreamsArray={this.fetchDreams} />
                    </Col>
                </Row>
                <Col md="12">
                    {
                        this.state.updatePressed ? <DreamEdit t={this.state.updatePressed} update={this.dreamUpdate} dream={this.state.dreamToUpdate} />
                            : <div></div>
                    }
                </Col>
                <Row>
                    <Col md="9">
                        <DreamVault dreams={this.state.dreams} delete={this.dreamDelete} update={this.setUpdatedDream} />
                    </Col>
                </Row>
            </Container>
        )

    }
}

export default DreamIndex;