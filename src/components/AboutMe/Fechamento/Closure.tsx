import React from "react";
import { Fortext } from "../../ForTexts/ForTexts";
import { ForTitle } from "../../ForTitle/ForTitle";
import { CLOSURE_MESSAGES } from "./messages";

export function Closure(){
    return(
        <>
        <ForTitle TITLE={CLOSURE_MESSAGES.TITLE} />
        <Fortext Texto={CLOSURE_MESSAGES.FECHAMENTO} />
        </>
    )
}