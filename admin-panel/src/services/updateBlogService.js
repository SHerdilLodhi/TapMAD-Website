// services/updateBlogService.js

import { backendUrl } from "./const";

const updateBlog = async (formData) => {
    try {
        const response = await fetch(`${backendUrl}/blog/update-blog/${formData.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
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
        console.error('Error updating blog:', error);
        alert(`${error.message}`);
        throw error;
    }
};

export { updateBlog };
