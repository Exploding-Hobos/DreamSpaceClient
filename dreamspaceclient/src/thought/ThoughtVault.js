import React from 'react';
import { Table, Button } from 'reactstrap';
import './Thought.css';

const ThoughtVault = (props) => {

    return (
        <div>
            <h3>Thought Vault</h3>
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
                        props.thoughts.map((thought, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{thought.id}</th>
                                    <td>{thought.title}</td>
                                    <td id="upDatebody" >{thought.body}</td>
                                    <td>{thought.date}</td>
                                    <td>
                                        <Button id={thought.id} onClick={props.delete} color="danger">Delete</Button>
                                        <Button id={thought.id} onClick={e => props.update(e, thought)} color="warning">Update</Button>
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

export default ThoughtVault;