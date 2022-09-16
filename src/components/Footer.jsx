import React from "react";

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

function Footer(){
    var date = new Date;
    var year = date.getFullYear();
    return(
        <footer>
            <div class="bottom-container">
                <a class="footer-link" href="https://www.linkedin.com/in/john-amakoh"><i class=" fab fa-linkedin"></i></a>
                <a class="footer-link" href="https://twitter.com/johnchizzy7"><i class=" fab fa-twitter"></i></a>
                <a class="footer-link" href="https://facebook.com/john.amakoh"><i class=" fab fa-facebook-f"></i></a>
                <a class="footer-link" href="https://github.com/JohnChizzy"><i class=" fab fa-github"></i></a>
                <a class="footer-link" href="https://instagram.com/johnchizzy10"><i class=" fab fa-instagram"></i></a>
                <p class="copy-right" >&copy; {year} <spam class="my">John</spam> Chidozie Amakoh.</p>
            </div>

            <div id="c-mykelbot" className="c-mykelbot hide">
                <div className="c-mykelbot_header o-flexy">
                <div className="o-flexy__item">
                    <img className="c-mykelbot_avatar" src={`${PUBLIC_URL}/image/me.jpg`} alt="Pic of mykel"/>
                </div>
                <div className="o-flexy__block">
                    <span className="c-mykelbot_name">John's Bot</span>
                    <span className="c-mykelbot_desc">Ask me a question!</span>
                </div>
            
                <div className="o-flexy__item u-mrg-l-auto">
                    <button className="c-mykelbot_close js-mykelbot-exit" data-button="close" aria-label="Close Modal">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.41425 6.00025L11.7072 1.70725C12.0982 1.31625 12.0982 0.68425 11.7072 0.29325C11.3162 -0.09775 10.6843 -0.09775 10.2933 0.29325L6.00025 4.58625L1.70725 0.29325C1.31625 -0.09775 0.68425 -0.09775 0.29325 0.29325C-0.09775 0.68425 -0.09775 1.31625 0.29325 1.70725L4.58625 6.00025L0.29325 10.2933C-0.09775 10.6843 -0.09775 11.3162 0.29325 11.7072C0.48825 11.9022 0.74425 12.0002 1.00025 12.0002C1.25625 12.0002 1.51225 11.9022 1.70725 11.7072L6.00025 7.41425L10.2933 11.7072C10.4883 11.9022 10.7442 12.0002 11.0002 12.0002C11.2562 12.0002 11.5122 11.9022 11.7072 11.7072C12.0982 11.3162 12.0982 10.6843 11.7072 10.2933L7.41425 6.00025Z" fill="white"></path>
                    </svg>
            
                    </button>
                </div>
                </div>
                <div id="c-mykelbot-content" className="c-mykelbot_content">
                <div className="c-mykelbot_agent">
                    Hi! I’m John's Personal Assistant 🤖
                </div>
            
                <div className="c-mykelbot_agent">
                    I’m just like John, but a far better conversationalist 😉
                </div>
            
                <div className="c-mykelbot_agent">
                    How can I help you today?
                </div>
            
                <div className="c-mykelbot_options active">
                    <button className="c-mykelbot_button" data-question="1">👋&nbsp;&nbsp;I just wanted to say hello</button>
                    <button className="c-mykelbot_button" data-question="2">💼&nbsp;&nbsp;I’d like to hire you!</button>
                    <button className="c-mykelbot_button" data-question="3">🤓&nbsp;&nbsp;Interested in mentorship</button>
                    <button className="c-mykelbot_button" data-question="4">🤔&nbsp;&nbsp;Looking for your old site</button>
                </div>
            
                <div id="c-new-content"></div>
            
                </div>
            
                <div id="c-mykelbot-q">
            
                <div className="c-mykelbot_answer c-mykelbot_answer--1" data-answer="1">
                    <div tabindex="-1" className="c-mykelbot_user">
                    I just wanted to say hello
                    </div>
                    <div tabindex="-1" className="c-mykelbot_agent">
                    Well hello there!
                    </div>
                    <div tabindex="-1" className="c-mykelbot_agent">
                    Thanks for saying hi 😁
                    </div>
                    <div tabindex="-1" className="c-mykelbot_agent">
                    I hope you've enjoyed browsing my work
                    </div>
                    <div tabindex="-1" className="c-mykelbot_agent">
                    Can I help you with anything else?
                    </div>
                    <div className="c-mykelbot_options">
                    <button className="c-mykelbot_button" data-question="1">👋&nbsp;&nbsp;I just wanted to say hello</button>
                    <button className="c-mykelbot_button" data-question="2">💼&nbsp;&nbsp;I’d like to hire you!</button>
                    <button className="c-mykelbot_button" data-question="3">🤓&nbsp;&nbsp;Interested in mentorship</button>
                    <button className="c-mykelbot_button" data-question="4">🤔&nbsp;&nbsp;Looking for your old site</button>
                    </div>
                </div>
            
                <div className="c-mykelbot_answer c-mykelbot_answer--2" data-answer="2">
                <div tabindex="-1" className="c-mykelbot_user">
                    I’d like to hire you!
                </div>
                <div tabindex="-1" className="c-mykelbot_agent">
                    Ok, great!
                </div>
                <div tabindex="-1" className="c-mykelbot_agent">
                    Exciting times 🕺
                </div>
                <div tabindex="-1" className="c-mykelbot_agent">
                    Send me a message and let's chat further!
                </div>
                <div className="c-mykelbot_options">
                    <button className="c-mykelbot_button js-beacon" onclick="document.location='mailto:johnamakoh@gmail.com'">💌&nbsp;&nbsp;Send a message</button>
                    <button className="c-mykelbot_button" data-question="5">🤔&nbsp;&nbsp;Other options?</button>
                </div>
                </div>
            
                <div className="c-mykelbot_answer c-mykelbot_answer--3" data-answer="3">
                <div tabindex="-1" className="c-mykelbot_user">
                    Interested in mentorship
                </div>
                <div tabindex="-1" className="c-mykelbot_agent">
                    Hi!
                </div>
                <div tabindex="-1" className="c-mykelbot_agent">
                    Thanks for reaching out
                </div>
                <div tabindex="-1" className="c-mykelbot_agent">
                    Unfortunately, I don't currently have any capacity to take on the role of mentor for any new students this year
                </div>
                <div tabindex="-1" className="c-mykelbot_agent">
                    Thanks for understanding
                </div>
                <div tabindex="-1" className="c-mykelbot_agent">
                    Can I help you with anything else?
                </div>
                <div className="c-mykelbot_options">
                    <button className="c-mykelbot_button" data-question="1">👋&nbsp;&nbsp;I just wanted to say hello</button>
                    <button className="c-mykelbot_button" data-question="2">💼&nbsp;&nbsp;I’d like to hire you!</button>
                    <button className="c-mykelbot_button" data-question="3">🤓&nbsp;&nbsp;Interested in mentorship</button>
                    <button className="c-mykelbot_button" data-question="4">🤔&nbsp;&nbsp;Looking for your old site</button>
                </div>
                </div>
            
                <div className="c-mykelbot_answer c-mykelbot_answer--4" data-answer="4">
            
                <div className="c-mykelbot_user">
                    I'm looking for your old site
                </div>
            
                <div tabindex="-1" className="c-mykelbot_agent">
                    Unfortunately, the previous site is no longer available 😔
                </div>
                <div tabindex="-1" className="c-mykelbot_agent">
                    My work has changed since the site was created almost a decade ago
                </div>
                <div tabindex="-1" className="c-mykelbot_agent">
                    I've updated it to better reflect my life, current work, and ambitions
                </div>
                <div tabindex="-1" className="c-mykelbot_agent">
                    Thanks for understanding
                </div>
                <div tabindex="-1" className="c-mykelbot_agent">
                    Can I help you with anything else?
                </div>
            
                <div class="c-mykelbot_options">
                    <button className="c-mykelbot_button" data-question="1">👋&nbsp;&nbsp;I just wanted to say hello</button>
                    <button className="c-mykelbot_button" data-question="2">💼&nbsp;&nbsp;I’d like to hire you!</button>
                    <button className="c-mykelbot_button" data-question="3">🤓&nbsp;&nbsp;Interested in mentorship</button>
                    <button className="c-mykelbot_button" data-question="4">🤔&nbsp;&nbsp;Looking for your old site</button>
                </div>
            
                </div>
            
            
                <div className="c-mykelbot_answer c-mykelbot_answer--5" data-answer="5">
            
                <div className="c-mykelbot_user">
                    Other options?
                </div>
            
                <div tabindex="-1" className="c-mykelbot_agent">
                    Try the following!
                </div>
                <div className="c-mykelbot_options">
                    <button className="c-mykelbot_button" data-question="1">👋&nbsp;&nbsp;I just wanted to say hello</button>
                    <button className="c-mykelbot_button" data-question="2">💼&nbsp;&nbsp;I’d like to hire you!</button>
                    <button className="c-mykelbot_button" data-question="3">🤓&nbsp;&nbsp;Interested in mentorship</button>
                    <button className="c-mykelbot_button" data-question="4">🤔&nbsp;&nbsp;Looking for your old site</button>
                </div>
            
                </div>
            
            </div>
            
            
            </div>
            
            <button className="c-fab js-mykelbot" aria-label="Toggle Chat">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.1245 15H24.875C18.869 15 14 19.6557 14 25.3986C14 31.1419 18.869 36.0251 24.875 36.0251H27.1245C28.5007 36.0251 29.8164 35.5501 31.0277 35.1042L34.7099 36.9196C35.5358 37.229 36.4153 36.6034 36.3434 35.7578L36.1004 31.4793C37.7493 29.6565 38 27.9982 38 25.3986C38 19.6557 33.131 15 27.1245 15ZM34.1036 31.5927C34.0733 31.0585 34.2583 30.5344 34.6172 30.1376C35.7262 28.9116 36 27.9263 36 25.3986C36 20.7808 32.0459 17 27.1245 17H24.875C19.954 17 16 20.7808 16 25.3986C16 30.0739 20.0109 34.0251 24.875 34.0251H27.1245C27.9586 34.0251 28.7311 33.8185 30.3367 33.2274C30.851 33.038 31.4205 33.068 31.9121 33.3104L34.2672 34.4715L34.1036 31.5927ZM34.3467 35.8712L34.3439 35.8218C34.3443 35.8381 34.3452 35.8546 34.3467 35.8712Z" fill="white"></path>
            </svg>
            
            </button>
            
        
  

        </footer>

    );
}

export default Footer;