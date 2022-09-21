import React from "react";


function Socials(){
    var date = new Date();
    var year = date.getFullYear();
    return(
        <div class="bottom-container">
                <a class="footer-link" href="https://www.linkedin.com/in/john-amakoh"><i class=" fab fa-linkedin"></i></a>
                <a class="footer-link" href="https://twitter.com/johnchizzy7"><i class=" fab fa-twitter"></i></a>
                <a class="footer-link" href="https://facebook.com/john.amakoh"><i class=" fab fa-facebook-f"></i></a>
                <a class="footer-link" href="https://github.com/JohnChizzy"><i class=" fab fa-github"></i></a>
                <a class="footer-link" href="https://instagram.com/johnchizzy10"><i class=" fab fa-instagram"></i></a>
                <p class="copy-right" >&copy; {year} <spam class="my">John</spam> Chidozie Amakoh.</p>
            </div>
    );
}

export default Socials;