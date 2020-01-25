import React from 'react';

import Layout from '../components/Layout';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
        <h2>Thank You For Messaging Us</h2>
				<p>One of our Reiki professional will reply to your questions shortly.</p>
			</div>
      </header>

      <div className="wrapper">
        <div className="inner">
        <section>
						<blockquote>Just like how important it is to diet correctly to maximize the full health benefits from your workouts or active lifestyle. Your mind and body works in that same core partnership, charging the positive energy in that mind can enhance many healthy endorphins and natural biological chemicals in the body that can help excelerate the healing and refresh factor of ones full body.</blockquote>

					</section>
          <br></br>

          <h2 className="major">Health Benefits</h2>
          <p>
          Mind and Body work and responds as one, positively charging that mind can help heal that body. Some of the health bennifits that Reiki can provide is essential to decompress living and thriving for a healthier natural life.
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
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
