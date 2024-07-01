import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";

export interface PostData {
    id: number;
    title: string;
    body: string;
}

export default function Post(): React.JSX.Element {
    const { id } = useParams();
    const [data, setData] = useState<PostData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        // setTimeout(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((result: PostData) => {
                setData(result);
            })
            .catch((err: Error) => {
                setError(err);
            })
            .finally(() => setIsLoading(false));
        // }, 1000); // Delay of 1 second
    }, [id]);

    if (isLoading) {
        return <Spinner />;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <>
            {data && (
                <>
                    <header>
                        <h1 className="text-2xl">{data.title}</h1>
                    </header>
                    <article>
                        <section>
                            <p>{data.body}</p>
                        </section>
                    </article>
                </>
            )}
        </>
    );
}
