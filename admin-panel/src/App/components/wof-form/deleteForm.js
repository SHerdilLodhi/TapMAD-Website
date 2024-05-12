import React, { useState } from 'react';
import { Card, Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { deleteBlog } from '../../../services/deleteBlogService';

const DeleteForm = () => {
    const [id, setId] = useState('');

    const handleSubmit = async () => {
        if (!id) {
            alert(`Please fill in the required field: ID`);
            return;
        }

        try {
            const responseData = await deleteBlog(id);
            alert(responseData.message);
            console.log('Success:', responseData);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Card>
            <Card.Header>
                <Card.Title as="h5">Delete Blog from Database</Card.Title>
            </Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group controlId="formId">
                        <Form.Label>ID</Form.Label>
                        <InputGroup>
                            <FormControl
                                placeholder="Enter ID"
                                aria-label="Enter ID"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                            />
                            <InputGroup.Append>
                                <Button variant="danger" onClick={handleSubmit}>Delete</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default DeleteForm;
