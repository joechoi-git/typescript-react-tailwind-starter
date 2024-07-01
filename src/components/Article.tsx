import React from "react";

export interface ArticleProps {
    title: string;
    content: string;
}

export default function Article({ title, content }: ArticleProps): React.JSX.Element {
    return (
        <>
            <header>
                <h1 className="text-2xl">{title}</h1>
            </header>
            <article>
                <section>
                    <p>{content}</p>
                </section>
            </article>
        </>
    );
}
