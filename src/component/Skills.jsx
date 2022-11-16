import React from "react";
import "../component/skills.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiGithub,
  SiGit,
} from "react-icons/si";

export default function Skills() {
  return (
    <div className="container_skills">
      <h2>SKILLS</h2>
      <div className="skills">
        <SiHtml5 className="icon" />
        <SiCss3 className="icon" />
        <SiJavascript className="icon" />
        <SiReact className="icon" />
        <SiTailwindcss className="icon" />
        <SiNodedotjs className="icon" />
        <SiGit className="icon" />
        <SiGithub className="icon" />
      </div>
    </div>
  );
}
