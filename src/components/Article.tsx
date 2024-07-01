import React from "react";
import { getCurrentDate } from "../utils/helper";

export interface ArticleProps {
    title: string;
    content: string;
}

export default function Article({ title, content }: ArticleProps): React.JSX.Element {
    return (
        <>
            <header>
                <h1 className="text-2xl">{title}</h1>
                <p>
                    Published on <time dateTime="2024-06-28">{getCurrentDate()}</time>
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
