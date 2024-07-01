import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PostData } from "./Post";
import Spinner from "./Spinner";

export default function Posts() {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState<PostData[]>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true);
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then((response) => response.json())
                .then((json) => setPosts(json))
                .catch((err: Error) => {
                    setError(err);
                })
                .finally(() => setIsLoading(false));
        }, 1000);
    }, []);

    if (isLoading) {
        return <Spinner />;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <>
            <ul className="list-disc ml-8">
                {posts.map((post, index) => (
                    <li key={index}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
