import React from 'react';

import Layout from '../components/Layout';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
        <h2>About Merrilee Dowrie</h2>
				<p>Helping People Heal or Better themselves is my Life's Universal Contribution</p>
			</div>
      </header>

      <div className="wrapper">
        <div className="inner">
        <section>
						<blockquote>Just like how important it is to diet correctly to maximize the full health benefits from your workouts or active lifestyle. Your mind and body works in that same core partnership, charging the positive energy in that mind can enhance many healthy endorphins and natural biological chemicals in the body that can help excelerate the healing and refresh factor of ones full body.</blockquote>

					</section>
          <br></br>
          <h2 className="major">Merrilee Dowrie</h2>
          <p><span className="image left"><img src={pic1} alt="" /></span>Since a young girl, Merrilee has always been inspired of actively living a healthy lifestyle, thanks to her mom Jan. Understanding that natural foods, healthy herbs and positive energy in the household was a major key to living the best balance life. To do so, understanding proper eating and active living was an important practice. What you fuel your body with was just as important as how you exercise your physical body. </p>
					<p>With this special knowledgeable upbringing Merrilee was raised to value, she knew early in her youth that helping people through the health industry in anyway or form was the most fulfilling of her love and passion for best healthy lifestyle everyone deserves to live. Merrelie became a registered nurse in 2004 because she enjoyed the in depth one on one with patients and their needs was something she enjoyed most. Merrelie worked through many of the prominent hospitals in the Portland, Oregon area through her career, Specializing in medical surgical, cardiac, kidney transplants, strokes, and epilepsy monitoring. </p>
          <p>While our worlds medical technologies and medicines have positively evolved through our lifetime, none of it have solved every mystery in the human body. Being from that side of the industry, Merrelie also understood the that there was also many downsides to our worlds medical industry, things like over medicating and devaluing how powerful proper diet and living an active lifestyles is more key to preventing cancers and other illnesses than waiting too late till your medically prescribed a medication after the health problems happens.    </p>
          <p>Being involved with many athletic activities or sports her whole life, Merrilee still enjoys that personal competitive challenge of what one’s body and mind can do. She still actively participates in marathons, while her husband played in some of the highest competitive rugby leagues in the U.S. and New Zealand. Being an athlete household, they understand how much fatigue and pain the mind and body endures through the enjoyment of an athletic lifestyle. Like valuing the simplistic life practices like stretching, strengthening and conditioning to perform and excel in any aspect in life at your best, knowing how to recover was just as important as knowing how to eat properly to maximize body rejuvenation. </p>
          <p>Understanding how powerful the mind and body can offer to be having many healing factors, along with positive and negative energy constantly working all around us in this universe and galaxy.  Wanting to further her knowledge and understanding the positive responsive energy and natural healing that Reiki offered and supplied her. After positively experiencing the benefits of Reiki and how it’s helped her mentally, physically and spiritually. Merrilee became a Reiki practitioner in December 2018 to help others achieve this same positive success with natural practices. </p>
          <p><span className="image right"><img src={pic2} alt="" /></span>Merrilee Dowrie is a proud member of the NW Reiki Association and professional member of ICRT (International Center for Reiki Training). Certified Usui/Holy Fire III® Reiki Master Teacher, as well holds a First and Second Degree Reiki; 1/2 certification is in Usui/Tibetan Reiki Ryoho. Merrilee Briggs-Dowrie has received the necessary placements and knowledge of the Reiki natural system of healing and has demonstrated proficiency in administering hands-on and distant healing through the transmission of spiritually guided life force energy for First and Second Degree Reiki; 1/2 certification is in Usui/Tibetan Reiki Ryoho. Type of clients includes men, women and children seeking Reiki therapy for pain relief, anxiety control, chi balancing, insomnia, breaking bad habits/addictions, weight loss and toxin release. Decreasing pregnancy related pain and anxiety. Working with health care practitioners suffering secondary victim syndrome symptoms. </p>

          <p><br></br></p>

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
