import React, {useEffect, useState} from "react";

const Posts: React.FC = () => {
    return (
        <div>
            {loading ? (
                <p>Ładowanie danych...</p>
            ) : (
                <div>
                    <ul style={{listStyleType: "none"}}>
                        {data.map((item, index) => (
                            <li key={index}>
                                <div>
                                    Tytuł: {item.title}
                                </div>
                                <div>
                                    {item.text}
                                </div>
                                <hr/>
                            </li>

                        ))}
                    </ul>
                </div>
            )}
        </div>
    );

}

const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3100/api/posts');
            const result = await response.json();

            console.log(result)

            setData(result);
            setLoading(false);
        } catch (error) {
            console.error('Błąd podczas pobierania danych:', error);
            setLoading(false);
        }
    };

    fetchData();
}, []);
export default Posts;
