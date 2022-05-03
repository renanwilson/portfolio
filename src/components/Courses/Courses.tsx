import React from "react";
import { Card } from "../Card/Card";
import { COURSES_MESSAGES } from "./messages";
import "./Courses.style.scss";
import { DiReact } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { Title } from "./Title/Title";

export function Courses() {
  return (
    <div>
      <Title TITLE={COURSES_MESSAGES.TITLE} />
      <div className="courses">
        <Card
          TITLE={COURSES_MESSAGES.FIRST.TITLE}
          TEXT={COURSES_MESSAGES.FIRST.TEXT}
          ICON={<DiReact />}
        />
        <Card
          TITLE={COURSES_MESSAGES.SECOND.TITLE}
          TEXT={COURSES_MESSAGES.SECOND.TEXT}
          ICON={<AiFillHtml5 />}
        />
        <Card
          TITLE={COURSES_MESSAGES.THIRD.TITLE}
          TEXT={COURSES_MESSAGES.THIRD.TEXT}
          ICON={<IoLogoCss3 />}
        />
        <Card
          TITLE={COURSES_MESSAGES.FOURTH.TITLE}
          TEXT={COURSES_MESSAGES.FOURTH.TEXT}
          ICON={<IoLogoJavascript />}
        />
        <Card
          TITLE={COURSES_MESSAGES.FIFTH.TITLE}
          TEXT={COURSES_MESSAGES.FIFTH.TEXT}
          ICON={<SiTypescript />}
        />
      </div>
    </div>
  );
}
