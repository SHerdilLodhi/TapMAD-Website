import React, { useEffect, useState } from 'react';
import { Card, Table, Spinner } from 'react-bootstrap';
import { getForms } from '../../../services/FormService';

const SubmittedFormsTable = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [expandedRow, setExpandedRow] = useState(null);

    useEffect(() => {
        getFormsData();
    }, []);

    async function getFormsData() {
        try {
            const formData = await getForms();
            setData(formData.data);
            setLoading(false);
            console.log('Success:', formData);
        } catch (error) {
            console.error('Error:', error);
            setLoading(false);
        }
    }

    const handleRowClick = (index) => {
        setExpandedRow(expandedRow === index ? null : index);
    };

    return (
        <Card>
            <Card.Header>
                <Card.Title as="h5">Submitted Forms Table</Card.Title>
            </Card.Header>
            <Card.Body>
                {loading ? (
                    <div className="text-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                ) : (
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((obj, index) => (
                                <React.Fragment key={index}>
                                    <tr onClick={() => handleRowClick(index)}>
                                        <td>{obj._id}</td>
                                        <td>{obj.fullName}</td>
                                        <td>{obj.email}</td>
                                        <td>{obj.phone}</td>
                                        <td><a className="label theme-bg text-white f-12" style={{ marginLeft: "-5px", cursor: "pointer" }} >Click To See Message</a></td>
                                    </tr>
                                    {expandedRow === index && (
                                        <tr>
                                            <td colSpan="5" style={{ fontWeight: 'bold', textAlign: 'center', border:"1px solid" }}>Message: {obj.message}</td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </Table>
                )}
            </Card.Body>
        </Card>
    );
};

export default SubmittedFormsTable;
