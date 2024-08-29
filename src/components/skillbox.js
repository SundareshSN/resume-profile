import React from 'react';

const SkillBox = ({ logo, skillName }) => {
  return (
    <div className="skill-box">
      {logo && <img src={logo} alt={skillName} className="skill-logo" />}
      <p>{skillName}</p>
    </div>
  );
};

export default SkillBox;
