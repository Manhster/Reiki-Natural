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
        <form action="Thank-You" name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
        <p class="hidden">
        <label>Don’t fill this out if you're human: </label><input name="bot-field"/>
        </p>        
        <p>
        <label>Your Name: <input type="text" name="name" /></label>   
        </p>
        <p>
        <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
        <label>Message: <textarea name="message"></textarea></label>
        </p>
        <div data-netlify-recaptcha="true"></div>
          <p>
            <button type="submit">Send</button>
        </p>
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
