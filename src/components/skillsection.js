import React from 'react';
import SkillBox from './skillbox';

const skillsection = () => {
  return (
    <div className="skills-section" style={{'margin-bottom': '-150px'}}>
      <div className="skills-row">
        <SkillBox logo='python.png' skillName="Python" />
        <SkillBox logo="react.png" skillName="React" />
        <SkillBox logo="javascript.png" skillName="JavaScript" />
        <SkillBox logo="nodejs.png" skillName="NodeJS" />
        <SkillBox logo="ml.png" skillName="Machine Learning" />
      </div>
      <div className="skills-row">
        <SkillBox logo='java.png' skillName="Java" />
        <SkillBox logo='spring.png' skillName="SpringBoot" />
        <SkillBox logo="mysql.png" skillName="MySQL" />
        <SkillBox logo="aws.png" skillName="Amazon Web Services" />
        <SkillBox logo="docker.png" skillName="Docker" />
      </div>
    </div>
  );
};

export default skillsection;
