import React from "react";

interface ArticleProps {
    title: string;
    content: string;
}

export default function Article({ title, content }: ArticleProps): React.JSX.Element {
    return (
        <>
            <header>
                <h1>{title}</h1>
                <p>
                    Published on <time dateTime="2024-06-28">June 28, 2024</time> by{" "}
                    <span>Author Name</span>
                </p>
            </header>
            <article>
                <section>
                    <p>{content}</p>
                </section>
            </article>
        </>
    );
}
