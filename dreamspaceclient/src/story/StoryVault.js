import React from 'react';
import { Table, Button } from 'reactstrap';
import './Story.css';

const StoryVault = (props) => {

    return (
        <div>
            <h3>Story Vault</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.storys.map((story, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{story.id}</th>
                                    <td>{story.title}</td>
                                    <td id="upDatebody" >{story.body}</td>
                                    <td>{story.date}</td>
                                    <td>
                                        <Button id={story.id} onClick={props.delete} color="danger">Delete</Button>
                                        <Button id={story.id} onClick={e => props.update(e, story)} color="warning">Update</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default StoryVault;