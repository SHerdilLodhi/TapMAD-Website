// services/formService.js

import { backendUrl } from "./const";


const getForms = async () => {
    try {
        const response = await fetch((`${backendUrl}/form/get-forms`), {
            method: 'GET', // Change the method to GET for fetching forms
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
        console.error('Error fetching forms:', error);
        alert(`${error.message}`);
        throw error;
    }
};

export { getForms };
