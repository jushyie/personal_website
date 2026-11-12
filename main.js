
const navBoxHTML = `
    <div class="navHeader">
        <button class="hamburgerMenu" id="hamburgerMenu">&#9776;</button>
        <img class="pageGIF" id="pageGIF">
        <button class="gifOnOff" id="gifOnOff">&#9208;</button>
    </div> 
    <ul id="navList">
        <li><a id="home" href="index.html">Home</a></li>
        <li><a id="aboutMe" href="/aboutMe/">About Me</a></li>
        <li><a id="travel" href="/travel/">Travel</a></li>
        <li><a id="food" href="/food/">Food</a></li>
        <li><a id="bake" href="/bake/">Bake</a></li>
    </ul>
    `;
const toTopButtonHTML = `
    <button id="toTopButton" class="toTopButton">↑</button>
`;
const footnotesHTML = `
        <div class="footnotes">
            <p>
                <a href="mailto:zimmermannjessica.jy@gmail.com" target="_blank">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                </a> • 
                <a href="https://www.instagram.com/jsshxy" target="_blank">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                </a> • 
                <a href="https://www.github.com/jushyie" target="_blank">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                </a>
            </p>
        </div>`;



document.addEventListener('DOMContentLoaded', () => {
    const navigationBox = document.getElementById("navigationBox");
    const toTopButton = document.getElementById("toTopButton");
    const footnotes = document.getElementById("footnotes");
    /* footnotes*/
    if (footnotes){
        footnotes.innerHTML = footnotesHTML;
    }
    /* scroll to top button */
    if (toTopButton){
        toTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    }
    if (navigationBox) {
        navigationBox.innerHTML = navBoxHTML;

        let hamburgerMenu = document.getElementById("hamburgerMenu");
        let navList = document.getElementById("navList");
        if (hamburgerMenu && navList){
            hamburgerMenu.addEventListener("click", () => {
                navList.classList.toggle("open");
            });
        }

        let currentSubpage = window.location.pathname;
        if (currentSubpage.includes("aboutMe")){
            currentSubpage = "/aboutMe/";
        }
        else if (currentSubpage.includes("bake")){
            currentSubpage = "/bake/";
        }
        else if (currentSubpage.includes("food")){
            currentSubpage = "/food/";
        }
        else if (currentSubpage.includes("travel")){
            currentSubpage = "/travel/";
        }
        else {
            currentSubpage = "index.html";
        }
        
        
        

        let navBoxLinks = navigationBox.querySelectorAll("a");

        navBoxLinks.forEach(link => {
            let linkhref = link.getAttribute("href");

            if (linkhref === currentSubpage){
                link.classList.add("active");

                /* navElement unclickable if currently on that page */
                link.removeAttribute("href");
                link.style.cursor = "default";
            }
        });

        /* set GIF for current page */
        let currPageGIF = document.getElementById("pageGIF")
        if (currPageGIF){
            /* GIF play/pause button */
            let gifButton = document.getElementById("gifOnOff")
            let playing = true
            if (gifButton){
                gifButton.addEventListener("click", () => {
                    if (playing){
                        gifButton.innerHTML = "&#9654;"
                        playing = false
                        
                    }
                    else{
                        gifButton.innerHTML = "&#9208;"
                        playing = true
                    }
                switch (currentSubpage){
                case ("index.html") : 
                    if (playing) currPageGIF.src = "/visuals/homePageGIF.gif";
                    else currPageGIF.src = "/visuals/homePageImg.png";
                    break;
                case ("aboutMe.html") :
                    if (playing) currPageGIF.src = "/visuals/aboutMePageGIF.gif";
                    else currPageGIF.src = "/visuals/aboutMePageImg.png";
                    break;
                case ("travel.html") : 
                    if (playing) currPageGIF.src = "/visuals/travelPageGIF.gif";
                    else currPageGIF.src = "/visuals/travelPageImg.png";
                    break;
                case ("food.html") :
                    if (playing) currPageGIF.src = "/visuals/foodPageGIF.gif";
                    else currPageGIF.src = "/visuals/foodPageImg.png";
                    break;
                case ("bake.html") :
                    if (playing) currPageGIF.src = "/visuals/bakePageGIF.gif";
                    else currPageGIF.src = "/visuals/bakePageImg.png";
                    break;
                default:
                    currPageGIF.src = "";
                    break;
            }
                })
            }
            switch (currentSubpage){
                case ("index.html") : 
                    if (playing) currPageGIF.src = "/visuals/homePageGIF.gif";
                    else currPageGIF.src = "/visuals/homePageImg.png";
                    break;
                case ("aboutMe.html") : 
                    if (playing) currPageGIF.src = "/visuals/aboutMePageGIF.gif";
                    else currPageGIF.src = "/visuals/aboutMePageImg.png";
                    break;
                case ("travel.html") : 
                    currPageGIF.src = "/visuals/travelPageGIF.gif";
                    break;
                case ("food.html") :
                    currPageGIF.src = "/visuals/foodPageGIF.gif";
                    break;
                case ("bake.html") :
                    currPageGIF.src = "/visuals/bakePageGIF.gif";
                    
                    break;
                default:
                    currPageGIF.src = "";
                    break;
            }
                
        }

    
    }

    let hello = document.getElementById("hello")
    if (hello){
        hello.addEventListener('click', () => {
            if (hello.style.color == "chartreuse"){
                hello.style.color="#FFF"
            } else {
                hello.style.color="chartreuse"
            }})
    }

})

