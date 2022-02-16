import React from "react";
import './About.scss';
import storePic from "../../images/records-min.jpg";

function About() {
  return (
    <div className="About">
      <img src={storePic} alt="record store" />
      <p>We are a small fictional store located in Eastern Pennsylvania.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quod facere veniam doloribus enim veritatis tempore magni necessitatibus et, repellat asperiores, earum unde, commodi illum repudiandae corporis quia saepe fugiat.
        Molestias ipsa hic laborum in beatae saepe nemo at tempore necessitatibus. Sed ipsa rem maiores facere amet, similique tempora, laudantium repudiandae blanditiis, maxime ut quis dolorem doloribus quas dolor voluptatibus.
        Ducimus unde, cupiditate neque atque, error repellendus nobis temporibus inventore maxime recusandae, delectus harum dolorem ad ipsam officia voluptate aut ex. Nemo quia excepturi ad illo, iste molestias assumenda aliquid.</p>
    </div>
  )
}

export default About;