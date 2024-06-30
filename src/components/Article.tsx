import React from "react";

export interface ArticleProps {
    title: string;
    content: string;
}

export function Article({ title, content }: ArticleProps): React.JSX.Element {
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
                    <p className="italic text-blue-600 dark:text-white">{content}</p>
                </section>
            </article>
        </>
    );
}
