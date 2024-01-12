import React, { useState, useEffect } from 'react';

interface Post {
    title: string;
    text: string;
    image: string;
}

const AddPost: React.FC = () => {
    const [postData, setPostData] = useState<Post>({ title: '', text: '', image: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPostData({
            ...postData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Wysłanie danych do API (fetch) za pomocą metody POST
            const response = await fetch('http://localhost:3100/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });

            if (response.ok) {
                console.log('Dane zostały wysłane pomyślnie!');
            } else {
                console.error('Błąd podczas wysyłania danych.');
            }
        } catch (error) {
            console.error('Błąd podczas wysyłania danych:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" name="title" value={postData.title} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Text:
                    <input type="text" name="text" value={postData.text} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Image:
                    <input type="text" name="image" value={postData.image} onChange={handleInputChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddPost;

