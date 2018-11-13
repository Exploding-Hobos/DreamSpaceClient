import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import WorkoutCreate from './WorkoutCreate';
import WorkoutsTable from './WorkoutTable';
import WorkoutEdit from './WorkoutEdit';

class WorkoutIndex extends Component{

    constructor(props) {
        super(props)
        this.state = {
            storys: []
        }
    }

    componentWillMount() {
        this.fetchStorys()
    }

    fetchStorys = () => {
        fetch("http://localhost:3000/api/story", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                return this.setState({ storys: logData})
            })
    }

    storyDelete = (event) => {
        fetch(`http://localhost:3000/api/story/${event.target.id}`, {
            method: 'DELETE',
            body: JSON.stringify({ story: { id: event.target.id } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => this.fetchStorys())
    }

    render() {
        const storys = this.state.storys.length >= 1 ?
            <WorkoutsTable storys={this.state.storys} delete={this.storyDelete} update={this.setUpdatedWorkout} /> :
            <h2>Log a workout to see table</h2>

        return (
            <Container>
                <Row>
                    <Col md='3'>
                        <WorkoutCreate token={this.props.token} updateStorysArray={this.fetchWorkouts}/>
                    </Col>
                    <Col md="9">
                        {storys}
                    </Col>
                </Row>
                <Col md="12">
                {
                    this.state.updatePressed ? <WorkoutEdit t={this.state.updatePressed} update={this.workoutUpdate} workout={this.state.workoutToUpdate} />
                    : <div></div>
                }
                </Col>
            </Container>
        )
    }
}

export default WorkoutIndex;