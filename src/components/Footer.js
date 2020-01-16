import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Contacts</h2>
        <p>
          Please contact us to schedule an appointment or to inquire more about Reiki and services available.
        </p>
        <form method="post" action="/#">
          <div className="fields">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" />
            </li>
          </ul>
        </form>
        <ul className="contact">
          <li className="fa-home">{config.address}</li>

          <li className="fa-phone">{config.phone}</li>

          {config.socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <li className={`${icon}`} key={url}>
                <a href={url}>{url}</a>
              </li>
            );
          })}
        </ul>
               
               
      <p><br></br></p>       
  
        <div className="row">
							<div className="col-6 col-12-medium">
								<ul className="actions stacked">
									<li><a href="https://square.site/book/CVWVTZR7FS2QN/reiki-natural-portland-or" rel="noopener noreferrer" target="_blank" className="button fit">Book Appointment Online</a></li>
								</ul>
							</div>
						</div>
            
        <ul className="copyright">
          <li>&copy;  2019. All Rights Reserved. Reiki Natural, LLC and Design Manhster </li>
          <li>
            Designed in <a href="https://github.com/"rel="noopener noreferrer" target="_blank">Github</a> & <a href="https://www.gatsbyjs.org/"rel="noopener noreferrer" target="_blank">Gatsby</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
