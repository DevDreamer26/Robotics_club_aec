import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievementsItems = [
    {
      src: 'images/achievements/Technoxian.png',
      alt: 'Achievements Delhi',
      title: 'Technocian 2023 (Delhi)',
      description: '1st Position in Line Following Robot (LFR)',
    },
    {
      src: 'images/achievements/IITG.png',
      alt: 'Achievements IITG',
      title: 'Techniche 2023 (IIT Guwahati)',
      description: '2nd Position in Robowar',
    },
    {
      src: 'images/achievements/JEC.png',
      alt: 'Achievements JEC',
      title: 'Phoenix 2023 (JEC)',
      description: "1st Position in Robowar and Robo Soccer",
    },
    {
      src: 'images/achievements/NITS.png',
      alt: 'Achievements NITS',
      title: 'Tecnoesis 2022 (NIT Silchar)',
      description: '1st & 2nd Position in Robowar (8kg) 1st Position in Robo Soccer',
    },
    {
      src: 'images/achievements/IITB.png',
      alt: 'Achievements IIT Bombay',
      title: 'Techfest 2022 (IIT Bombay)',
      description: '2nd Position in Robowar (8kg)',
    },
    {
      src: 'images/achievements/GIMT.png',
      alt: 'Achievements GIMT',
      title: 'Techmilap 2022 (GIMT)',
      description: '1st Position in Robowar and Robo Soccer',
    },
  ];

  return (
    <>
      <div className="achievements-main">
        <h2>Achievements of Our Club</h2>

        <div className="achievements-container">
          {achievementsItems.map((item, index) => (
            <div className="responsive" key={index}>
              <div className="achievements">
                <img src={item.src} alt={item.alt} />

                <div className="desc">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default Achievements;
