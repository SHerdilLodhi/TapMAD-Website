import React, { useState } from 'react';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import { submitBlog } from '../../../services/CreateBlogService';

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [heading1, setHeading1] = useState('');
    const [image1, setImage1] = useState('');
    const [detail1, setDetail1] = useState('');
    const [heading2, setHeading2] = useState('');
    const [image2, setImage2] = useState('');
    const [detail2, setDetail2] = useState('');
    const [heading3, setHeading3] = useState('');

    const handleSubmit = async () => {

        const emptyFields = [];
        if (!title) { emptyFields.push('Title'); }
        if (!heading1) { emptyFields.push('Heading 1'); }
        if (!detail1) { emptyFields.push('Details 1'); }

        if (emptyFields.length > 0) {
            alert(`Please fill in the following required fields: ${emptyFields.join(', ')}`);
            return;
        }

        const formData = {
            title,
            heading1,
            image1,
            detail1,
            heading2,
            image2,
            detail2,
            heading3
        };

        console.log('Form Data:', formData);
            try {
                const blogsData = await submitBlog(formData);
                alert(blogsData.message)
                console.log('Success:', blogsData);
            } catch (error) {
                console.error('Error:', error);
            }
    };

    return (
        <Card>

            <Card.Body>
                <h5>Create Blog</h5>
                <hr />
                <Row>
                    <Col md={6}>
                        <Form>
                            <Form.Group controlId="formTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                            </Form.Group>

                            <Form.Group controlId="formHeading1">
                                <Form.Label>Heading 1</Form.Label>
                                <Form.Control type="text" placeholder="Enter Heading 1" value={heading1} onChange={(e) => setHeading1(e.target.value)} required />
                            </Form.Group>

                            <Form.Group controlId="formImage1">
                                <Form.Label>Image 1</Form.Label>
                                <Form.Control type="text" placeholder="Enter Image 1" value={image1} onChange={(e) => setImage1(e.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="formDetail1">
                                <Form.Label>Details 1</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Enter Details 1" value={detail1} onChange={(e) => setDetail1(e.target.value)} required />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col md={6}>
                        <Form>
                            <Form.Group controlId="formHeading2">
                                <Form.Label>Heading 2</Form.Label>
                                <Form.Control type="text" placeholder="Enter Heading 2" value={heading2} onChange={(e) => setHeading2(e.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="formImage2">
                                <Form.Label>Image 2</Form.Label>
                                <Form.Control type="text" placeholder="Enter Image 2" value={image2} onChange={(e) => setImage2(e.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="formDetail2">
                                <Form.Label>Details 2</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Enter Details 2" value={detail2} onChange={(e) => setDetail2(e.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="formHeading3">
                                <Form.Label>Heading 3</Form.Label>
                                <Form.Control type="text" placeholder="Enter Heading 3" value={heading3} onChange={(e) => setHeading3(e.target.value)} />
                            </Form.Group>

                            <Button variant="primary" onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default CreateBlog;
