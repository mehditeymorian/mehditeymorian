import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';
import data from '../../data/general';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>{data.name}</h2>
        <p><a href={`mailto:${data.email}`}>{data.email}</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Mehdi and I am CE alumni at <a href="httpsL//yazd.ac.ir/en">Yazd University</a> and a software engineer at <a href="https://snapp.ir/">Snapp</a>. Coding and learning about new things are my hobbies.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; {data.name} <Link to="/">{data.website}</Link>.</p>
    </section>
  </section>
);

export default SideBar;
