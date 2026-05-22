import React from "react";

const topSkills = [
  { img: "/img/python.png", alt: "Python logo", skill: "Python", value: 70 },
  { img: "/img/html5.png", alt: "HTML logo", skill: "HTML", value: 50 },
  { img: "/img/css.png", alt: "CSS logo", skill: "CSS", value: 75 },
  { img: "/img/sqlite.png", alt: "SQLite logo", skill: "SQLite", value: 72 },
  { img: "/img/r.png", alt: "R logo", skill: "R", value: 60 },
  { img: "/img/javascript.png", alt: "JavaScript logo", skill: "JavaScript", value: 60 },
  { img: "/img/c-sharp-logo.jpg", alt: "C# logo", skill: "C#", value: 45 },
  { img: "/img/bs4.png", alt: "BeautifulSoup logo", skill: "BeautifulSoup", value: 40 },
  { img: "/img/pandas.png", alt: "Pandas logo", skill: "Pandas", value: 40 },
];

const bottomSkills = [
  { img: "/img/p5dotjs.png", alt: "p5.js logo", skill: "p5.js", value: 75 },
  { img: "/img/photoshop-.png", alt: "Adobe Photoshop logo", skill: "Adobe Photoshop", value: 50 },
  { img: "/img/Illustrator-.png", alt: "Adobe Illustrator logo", skill: "Adobe Illustrator", value: 50 },
  { img: "/img/react.png", alt: "React logo", skill: "React", value: 25 },
  { img: "/img/mongodb.png", alt: "MongoDB logo", skill: "MongoDB", value: 55 },
  { img: "/img/docker.png", alt: "Docker logo", skill: "Docker", value: 45 },
  { img: "/img/streamlit.png", alt: "Streamlit logo", skill: "Streamlit", value: 50 },
  { img: "/img/selenium.png", alt: "Selenium logo", skill: "Selenium", value: 40 },
  { img: "/img/chart.png", alt: "matplotlib logo", skill: "matplotlib", value: 40 },
];


function SkillCard({ img, alt, skill, value }) {
  return (
    <div className="moving-skill-card">
      <img src={img} alt={alt} />
      <p>{skill}</p>
      <progress max="100" value={value}></progress>
    </div>
  );
}

function SkillRow({ skills, direction }) {
  return (
    <div className={`moving-skills-row ${direction}`}>
      {[...skills, ...skills].map((item, index) => (
        <SkillCard key={`${item.skill}-${index}`} {...item} />
      ))}
    </div>
  );
}

export default function SkillsSlider() {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>

      <div className="moving-skills-wrapper">
        <SkillRow skills={topSkills} direction="skills-left" />
        <SkillRow skills={bottomSkills} direction="skills-right" />
      </div>
    </section>
  );
}
