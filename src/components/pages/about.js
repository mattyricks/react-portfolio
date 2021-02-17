import React, { useState, useEffect } from "react";
import profilePicture from "../../../static/assets/images/matthewRicklefs.jpg";

function About() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderContent = () => (
    <div>
      <div className="Parallax__content__heading">
        <h1 className="Parallax__content__heading__text">Matthew Ricklefs</h1>
        <h2 className="Parallax__content__heading__caption">
          Aspiring Junior Developer
        </h2>
      </div>
      <div className="Parallax__content__cta">
        <p className="paragraph">
          I aspire to understand emerging frameworks and technologies so that I
          could make my life easier. It seems as though technology has some sort
          of omnipotence to it, it has totally transformed the lives of many of
          us in this day and age. I've always been fascinated with technology.
          Even as an adolescent I would immerse myself in the experience of
          gamification. Whether it was Playstation or Nintendo, I was captivated
          by interactive storytelling and perpetual rewards systems. As I
          entered my early adulthood, I studied Audio Engineering to begin the
          process of channeling creative energy through the medium of Sound
          Design. Perhaps I never truly believed in my purpose and fell into the
          nuance of Food and Beverage, somewhat losing my primary objective in
          life, being the pursuit of something meaningful that could very well
          translate into intellectual growth. Not to undermine all of the
          experience and knowledge that I've learned while being in the service
          industry, because it has provided important life lessons where in
          which I've acquired skills that translate into understanding how to
          cooperate with others, work hard, and create lasting experiences that
          bring joy to guests!
        </p>
        <p>
          To be a Junior Developer, I would like to learn how to create
          interpersonal relationships and be able to foster a cooperative
          mentality. I am very well suited in the art of providing humble
          service to another but to take that to the next level, I aspire to be
          a part of a team, a greater good where in which I have a sort of
          congenial quality that compliments the vision of something greater
          than my own. As far as technology, I am truly inspired by the React
          framework. The component based architecture, the transferance of
          state, the essence of object oriented programming, all of which melds
          into a concoction that I aspire to put together as I continue to build
          a relationship with Front End Frameworks and Javascript Logic.
        </p>
        <p>
          In a nutshell, I aspire to continue to complete a Bachelor's in
          Computer Science and slip into the membrane of an entry level
          development position, so that I may acquire a real world experience of
          what it is really like to develop with a team and grow as a Developer!
        </p>
      </div>
    </div>
  )
  return (
    <section className="Parallax">
      <div
        className="Parallax__background"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <img src={profilePicture} alt="Matthew!" className="image"></img>
      </div>
      <div
        className="Parallax__background-triangles"
        style={{ transform: `translateY(${offsetY * -0.8}px)` }}
      ></div>
      <div className="Parallax__content">{renderContent()}</div>
    </section>
  );
}

export default About;
