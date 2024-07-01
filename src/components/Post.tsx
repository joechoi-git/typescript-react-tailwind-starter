import React, { useEffect, useState } from "react";
import { Spinner } from "./Spinner";

export interface PostProps {
    id: string;
}

interface Data {
    id: number;
    title: string;
    body: string;
}

export function Post({ id }: PostProps): React.JSX.Element {
    const [data, setData] = useState<Data | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then((result: Data) => {
                    setData(result);
                })
                .catch((err: Error) => {
                    setError(err);
                })
                .finally(() => setIsLoading(false));
        }, 1000); // Delay of 1 second
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
