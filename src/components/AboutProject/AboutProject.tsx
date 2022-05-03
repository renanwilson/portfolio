import React from "react";
import { Fortext } from "../ForTexts/ForTexts";
import { ForTitle } from "../ForTitle/ForTitle";
import { ABOUT_PROJECT_MESSAGES } from "./messages";
export function AboutProject(){

    return(
        <>
        <ForTitle TITLE={ABOUT_PROJECT_MESSAGES.TITLE}/>
        <Fortext Texto={ABOUT_PROJECT_MESSAGES.TEXT} />
        </>
    )
}