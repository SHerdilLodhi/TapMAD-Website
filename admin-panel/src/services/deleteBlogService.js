// services/updateBlogService.js

import { backendUrl } from "./const";

const deleteBlog = async (blogId) => {
    try {
        const response = await fetch(`${backendUrl}/blog/delete-blog/${blogId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const data = await response.json();
            if (data.message) {
                throw new Error(data.message);
            } else {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error deleting blog:', error);
        alert(`${error.message}`);
        throw error;
    }
};

export { deleteBlog };
