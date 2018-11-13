import React from 'react';
import { Table, Button } from 'reactstrap';
import './Dream.css';

const DreamVault = (props) => {

    return (
        <div>
            <h3>Dream Vault</h3>
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
                        props.dreams.map((dream, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{dream.id}</th>
                                    <td>{dream.title}</td>
                                    <td id="upDatebody" >{dream.body}</td>
                                    <td>{dream.date}</td>
                                    <td>
                                        <Button id={dream.id} onClick={props.delete} color="danger">Delete</Button>
                                        <Button id={dream.id} onClick={e => props.update(e, dream)} color="warning">Update</Button>
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

export default DreamVault;