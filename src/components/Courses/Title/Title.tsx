import React from "react";
import './Title.style.scss'
export type TitleProps = {
    TITLE: any,
}

export function Title(props: TitleProps) {
    return(
    <div className="title-container" >
        <h1>{props.TITLE}</h1>
    </div>
    )
}