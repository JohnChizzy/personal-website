import React from "react";

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Skills =() => {
    return(
        <div className="middle-2">
            <hr className="rule f-rule"/>
            <div id="work" className="skills">
            <h2>My Skills.</h2>
            <div className="skill-row">
                <img className="worker-row" src={`${PUBLIC_URL}/image/worker.png`} alt="worker-image"/>
                <h3>Web Development</h3>
                      <p>I believe startups are future of any economy with great interest in creating exciting and meaningful contents and brand. passionate about child technology education. My focus is in getting the work done and conveying the message that you want sent .</p>
            
            </div>

            <div className="skill-row">
                <div>
                <img className="Event-row devops" src={`${PUBLIC_URL}/image/devops.png`} alt="Devops-img"/>
                </div>     
                <h3>Devops</h3>
                <p>I believe in creating systems software and analyzing data to improve existing systems and optimization. Skilled at building, testing and maintaining the infrastructure and tools to allow for the speedy development and release of software.</p>
            </div>
            
            </div>
            <hr className="rule"/>
            <div id="contact-me" >
            <h2>Get In Touch</h2>
            <p className="hire-me touch">I'm currently available for freelancing work and coaching as well as handling your projects.</p>
            <p className="coach touch" >You have a project you want to get started? love to have fun as well as learn how to code in a smart way or you want to get insight from your data.</p>
            <p className="c-footer__text">
            <span className="u-d-block@md"><a className="btn" href="mailto:johnamakoh@gmail.com">MESSAGE ME</a> or <a href="#contact-me" class="c-footer__link js-mykelbot"><span>let's chat</span></a>.</span>
            </p>
            
            </div>
        </div>
        
    
    );
};

export default Skills;

