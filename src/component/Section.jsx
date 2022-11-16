import React from "react";
import "../component/Section.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ima from "../component/logo.jpg";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { IoDocumentText } from "react-icons/io5";

export default function Section() {
  return (
    <section>
      <div className="container_aboutme" id="sobremi">
        <LazyLoadImage className="image_profile" src={ima} alt="profile" />
        <div className="aboutme">
          Hey I'm rzs, graduated in computer systems engineering, web developer
          JavasScript, I specialize in the fronted area, always with the
          willingness to learn and open to change.
        </div>
        <SocialNetwork/>
      </div>
    </section>
  );
}

function SocialNetwork() {
  return(
    <div className="container_socialnetwork">
          <a href="https://www.github.com" target="_blank" rel="noreferrer">
            <AiFillGithub className="icon" title="Open Github"></AiFillGithub>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <AiFillLinkedin className="icon" title="Open Linkedin"></AiFillLinkedin>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <AiOutlineTwitter className="icon" title="Open Twitter"></AiOutlineTwitter>
          </a>
          <a href="https://www.cv.com" target="_blank" rel="noreferrer">
            <IoDocumentText className="icon" title="Open Resume"></IoDocumentText>
          </a>
        </div>
  )
}