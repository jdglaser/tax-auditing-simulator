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
            <div style={{height: "100%", display: "flex", alignItems: "center"}}>
                <div>
                    <a href={link} style={{fontSize: "0.85rem"}}>{title}</a>
                </div>
            </div>
        </div>
    )
}