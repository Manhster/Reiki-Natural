import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="#"></span>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/Reiki" className="image">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Reiki Intro and History</h2>
            <p>
            The word Reiki is made of two Japanese words - Rei which means "God's Wisdom or the Higher Power" and Ki which is "life force energy". So Reiki is actually "spiritually guided life force energy."
            Reiki is a form of alternative therapy commonly referred to as energy healing. It emerged in Japan in the late 1800's and is said to involve the transfer of universal energy from the practitioner's palms to their patient.
            </p>
            <a href="/Reiki" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/About" className="image">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h2 className="major">About Merrilee Dowrie</h2>
            <p>
            Merrilee has been a registered nurse since 2004, specializing in medical surgical, cardiac, kidney transplants, strokes, and epilepsy monitoring. 
            To further extending her love and knowledge for better health, along with the desire for helping others, Merrilee became a her love for Reiki practitioner
            in 2018, with a goal to helping people achieve living their highest positive energy in life.
            Merrilee Dowrie is a proud member of the NW Reiki Association and professional member of ICRT (International Center for Reiki Training).
            Certified Usui/Holy Fire III® Reiki Master Teacher. As well holds a First and Second Degree Reiki.
            </p>
            <a href="/About" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/Services" className="image">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Services and Appointments</h2>
            <p>
              Providing energy healing through Reiki-also hands on healing or energy work-to improve health and wellness of the mind, body and spirit. 
            </p>
            <a href="/Services" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
        <h2 className="major">Health Benefits</h2>
          <p>
          Mind and Body work and responds as one, positively charging that mind can help heal that body. Some of the health bennifits that Reiki can provide is essential to decompress living and thriving for a healthier natural way of life.
          </p>

          <section className="features">
            <article>
              <a href="/Health" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Rejuvenating the Mind</h3>
              <p>
                Freshing the mind, like meditation, Reiki calms and centers you. In addition, Reiki also helps energizes and provides clarity of mind. 
              </p>
              <a href="/Health" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/Health" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Rejuvenating the Body</h3>
              <p>
              Body and Mind as one, Reiki helps energetically to both provide relaxation, strengthen and assist your body’s energy pathways to function optimally.
              </p>
              <a href="/Health" className="special">
                Learn more
              </a>
            </article>
          </section>
          <ul className="actions">
            <li>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
