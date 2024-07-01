import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PostData } from "./Post";
import Spinner from "./Spinner";

export default function Posts() {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState<PostData[]>([]);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((json) => setPosts(json))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <ul className="list-disc ml-8">
            {posts.map((post, index) => (
                <li key={index}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    );
}
