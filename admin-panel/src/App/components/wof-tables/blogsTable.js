import React, { useEffect, useState } from 'react';
import { Card, Table, Spinner } from 'react-bootstrap';
import { getBlogs } from '../../../services/BlogService';
import  './wof.css'
const BlogsTable = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getBlogsData();
    }, []);

    async function getBlogsData() {
        try {
            const blogsData = await getBlogs();
            setData(blogsData);
            setLoading(false);
            console.log('Success:', blogsData);
        } catch (error) {
            console.error('Error:', error);
            setLoading(false);
        }
    }



    return (
        <Card>
            <Card.Header>
                <Card.Title as="h5">Submitted Blogs Table</Card.Title>
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
                                <th>id</th>
                                <th>Title</th>
                                <th>Heading 1</th>
                                <th>Image 1 </th>
                                <th>Detail 1</th>
                                <th>Heading 2</th>
                                <th>Image 2 </th>
                                <th>Detail 2</th>
                                <th>Detail 3</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((obj, index) => (
                                <React.Fragment key={index}>
                                    <tr>
                                        <td style={{border:"1px solid #ccc"}}>{obj._id}</td>
                                        <td style={{border:"1px solid #ccc"}}>{obj.title}</td>
                                        <td style={{border:"1px solid #ccc"}}>{obj.heading1}</td>
                                        <td className="border-cell">{obj.img1}</td>
                                        <td className="border-cell">{obj.detail1}</td>
                                        <td className="border-cell">{obj.heading2}</td>
                                        <td className="border-cell">{obj.img2}</td>
                                        <td className="border-cell">{obj.detail2}</td>
                                        <td className="border-cell">{obj.detail3}</td>
                                    </tr>

                                </React.Fragment>
                            ))}
                        </tbody>
                    </Table>
                )}
            </Card.Body>
        </Card>
    );
};

export default BlogsTable;
