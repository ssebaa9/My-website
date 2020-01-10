import React from 'react';
import { workHistorieData, skillsData, languagesData } from '../../data/cvData';

const CVPage = () => {

  const workHistorie = workHistorieData.map((work, index) =>
    <li key={index} className="cv-page__container__list-el">
      <p className="cv-page__container__list-el-date">{work.startDate} - {work.endDate}</p>
      <p className="cv-page__container__list-el-name">{work.jobTitle} - {work.employer}, {work.city}</p>
      <ul>
        {work.workDetails.map((detail, index) => <li key={index} className="cv-page__container__list-el-detail">{detail}</li>)}
      </ul>
    </li>)

  const skills = skillsData.map((skill, index) =>
    <li key={index} className="cv-page__container__list-el">
      <span className="cv-page__container__list-el-skillName">{skill.name} - </span>
      <span className="cv-page__container__list-el-knowlage"> {skill.knowlage}</span>
    </li>)

  const languages = languagesData.map(language =>
    <li key={language} className="cv-page__container__list-el">
      <span className="cv-page__container__list-el-skillName">{language.name} - </span>
      <span className="cv-page__container__list-el-knowlage"> {language.knowlage}</span>
    </li>
  )

  return (
    <div className="cv-page">
      <h2 className="cv-page__title">CV</h2>
      <div className="cv-page__container">
        <h3 className="cv-page__subtitle">About me</h3>
        <p className="cv-page__container-about">I am a beginner front-end web developer specialized mainly in React. I created several of web projects using HTML, CSS and JavaScript. I am punctual and organized employee, always striving to achieve my goal. I focus mainly on personal development and try to systematically develop in various areas of my life. Even if I encounter a problem that is beyond me, I don't give up and try to solve it.</p>
      </div>
      <div className="cv-page__container">
        <h3 className="cv-page__subtitle">Skills</h3>
        <ul className="cv-page__container__list">
          {skills}
        </ul>
      </div>
      <div className="cv-page__container">
        <h3 className="cv-page__subtitle">Languages</h3>
        <ul className="cv-page__container__list">
          {languages}
        </ul>
      </div>
      <div className="cv-page__container">
        <h3 className="cv-page__subtitle">Work History</h3>
        <ul className="cv-page__container__list">
          {workHistorie.reverse()}
        </ul>
      </div>
      <div className="cv-page__container">
        <h3 className="cv-page__subtitle">Education</h3>
        <ul className="cv-page__container__list">
          <li className="cv-page__container__list-el">
            <p className="cv-page__container__list-el-date">2009.09 - 2013.05</p>
            <p className="cv-page__container__list-el-name">High school diploma, Economy school - Nysa</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CVPage;