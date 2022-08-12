import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';
import Experience from '../components/Resume/Experience';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import ta from '../data/resume/ta';

const sections = [
  'Education',
  'References',
];

const Educations = () => (
  <Main
    title="Education"
    description="Mehdi Teymorian's Education. Computer Engineering Undergraduate"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="education">Education</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <Experience data={ta} title="Teaching Assistant" />
      <Courses data={courses} />
      <References />

    </article>
  </Main>
);

export default Educations;
