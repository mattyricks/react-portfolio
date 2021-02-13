import React from "react";
import profilePicture from "../../../static/assets/images/bio/profile.png";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="right-column">
        My name is Matthew Ricklefs and I am an aspiring Junior Developer, whom
        of which, is inspired by emerging technologies. I feel as if I must
        adapt to this field, as I could easily be left behind! I try to apply
        myself to coding challenges, React-based projects, and educational
        resources to continue to expand my level of comprehension with
        technologies and frameworks. My most recent objective is to find job
        placement so that I can stabilize my life, interact with real life
        developers, build functional cooperative skills, and finish my
        Bachelor's in Computer Science. I could only hope to be a part of
        something that is much larger and comprehensive than myself. Thank you
        for reading and I hope to hear from you soon!
      </div>
    </div>
  );
}
