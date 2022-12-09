import React from "react";

export interface BoxLink {
    title: string
    link: string
}

interface BoxLinkViewProps {
    boxLink: BoxLink
    style?: React.CSSProperties
}

export default function BoxLinkView(props: BoxLinkViewProps) {
    const {link, title} = props.boxLink;
    const {style} = props;

    return (
        <div className="box" style={style}>
            <div>
                <div>
                    <a href={link}>{title}</a>
                </div>
            </div>
        </div>
    )
}