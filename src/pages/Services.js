import React from 'react';

import Layout from '../components/Layout';

import pic19 from '../assets/images/pic19.jpg';
import pic16 from '../assets/images/pic16.jpg';

const IndexPage = () => <Layout fullMenu>
<section id="wrapper">
		<header>
			<div className="inner">
				<h2>Reiki Natural Services </h2>
				<p>key to opening the natural healing powers of your body is through the acceptance of limitless possibilities and expansion healing powers of your mind.</p>
			</div>
		</header>

			<div className="wrapper">
				<div className="inner">
					<section>
						<h3 className="major">Preperation for Reiki Sessions</h3>
						<div className="row">
							<div className="col-6 col-12-medium">
								<h4>How to prepare for your appointment</h4>
								<ul>
									<li>Hydrate and avoid alcohol before sessions</li>
									<li>Wear clean an comfortable clothing</li>
									<li>Remove all jewelry, glasses and shoes</li>
									<li>Keep cell phone off and set aside with personal items</li>
								</ul>
							</div>
							<div className="col-6 col-12-medium">
								<h4>Post Session</h4>
								<ul>
									<li>Drink plenty of water after your session.</li>
								</ul>
							</div>
						</div>

					</section>
					<br>
					</br>
					<section>
						<h3 className="major">What to Expect During a Reiki Healing Session </h3>

								<ul className="alt">
									<p><li>The practitioner will have the client lay down on a massage table or bed. With only shoes removed, along with belts or loosen your belt so that your breathing is not restricted in any way. It is best to choose loose-fitting garments to wear on the day of the appointment. Wearing natural fabrics is best (cotton, wool, or linen). Client may also be asked to remove any jewelry (rings, bracelets, pendants, etc.) prior to the session, so consider leaving these items at home. </li></p>
									<p><li>At the first appointment, The Reiki practitioner and client usually will go through have a short introduction or chat about the process and the client's expectations or intentions. Make sure to always let the Reiki practitioner know about any symptoms wanting to address or if there are places in the body on which needs more focus on. Also importland, let the practitioner know if there's any injuries or places that are sensitive to touch.  </li></p>
									<p><li>Once the patient is on a treatment table or bed, the practitioner will then next cover the client with a blanket. To enhance the calming environment, usually soft, soothing music will be playing in the background to help achieve maximize relaxation. For the most part there won’t be any talking during the session, but do feel free at anytime to inform the practitioner if there’s anything that can be adjusted to feel more comfortable or to share what the body is experiencing.  </li></p>
									<p><li>Reiki treatment begins with the practitioner moving their hands around and throughout the full body. They may touch the client lightly or have their hands just above body. During this process some clients may experience sensation flowing throughout the body, such as heat or tingling from the the brain and body activating it's senses. Some patients report of seeing visualizations such as colors or pictures or having deep memories. While experiencing this, try to allow whatever arises to pass without attaching too much meaning to the mind’s memories or visions. Similar to constancy of yoga or meditation, the body's energy and force will open one's inner mind to dive deeper the more Reiki is practiced.  </li></p>
								</ul>
				</section>
					<br></br>

					<section>
						<h3 className="major">Private Reiki Appointment Information</h3>
								<ul className="alt">
									<li> Providing energy healing through Reiki-also called hands on healing or energy work-to improve health and wellness of the mind, body and spirit. 1 hour Starting at $59.99 </li>
								</ul>
					</section>
					<section>
						<h3 className="major">Table</h3>
						<div className="table-wrapper">
							<table className="alt">
								<thead>
									<tr>
										<th>Service</th>
										<th>Description</th>
										<th>Price</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Reiki session 1 of 3</td>
										<td>First hour</td>
										<td>$59.99</td>
									</tr>
									<tr>
										<td>Reiki session 2 of 3</td>
										<td>2nd session of 3 pack, 1 hour 3 pack</td>
										<td>$59.99</td>
									</tr>
									<tr>
										<td>Reiki session 3 of 3</td>
										<td>3rd session of 3 pack, 1 hour Paid 3rd of 3</td>
										<td>$59.99</td>
									</tr>
									<tr>
										<td>Reiki healing 3 pack</td>
										<td>3 one hour sessions for $150 ($30 off 3!) </td>
										<td>$150.00</td>
									</tr>
								</tbody>
							</table>
						</div>
					</section>


					<section className="features">
            <article>
              <a href="https://square.site/book/CVWVTZR7FS2QN/reiki-natural-portland-or" rel="noopener noreferrer" target="_blank" className="image">
                <img src={pic19} alt="" />
              </a>

              <a href="https://square.site/book/CVWVTZR7FS2QN/reiki-natural-portland-or" rel="noopener noreferrer" target="_blank" className="special">
			  Book Appointment Online
              </a>
            </article>
            <article>
              <a href="https://square.site/book/CVWVTZR7FS2QN/reiki-natural-portland-or" rel="noopener noreferrer" target="_blank" className="image">
                <img src={pic16} alt="" />
              </a>  
              <a href="https://square.site/book/CVWVTZR7FS2QN/reiki-natural-portland-or" rel="noopener noreferrer" target="_blank" className="special">
			  Redeem or Purchase Gift Certificates
              </a>
            </article>
          </section>

		  <section>
						<center><h3 className="major">Love Reiki and Want Learn More?</h3>
								<ul className="alt">
									<li> Currrently offering 1/2 classes and will teach master classes soon. Please contact us below for more details.</li>
								</ul></center>
					</section>

				</div>
			</div>

	</section>

</Layout>;

export default IndexPage;
