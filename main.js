
const navBoxHTML = `
    <div class="navHeader">
        <button class="hamburgerMenu" id="hamburgerMenu">&#9776;</button>
        <img class="pageGIF" id="pageGIF">
        <p class="headerDummy"></p>
    </div> 
    <ul id="navList">
        <li><a id="home" href="index.html">Home</a></li>
        <li><a id="travel" href="travel.html">Travel</a></li>
        <li><a id="food" href="food.html">Food</a></li>
    </ul>
    `;

document.addEventListener('DOMContentLoaded', () => {
    const navigationBox = document.getElementById("navigationBox");
    if (navigationBox) {
        navigationBox.innerHTML = navBoxHTML;

        let hamburgerMenu = document.getElementById("hamburgerMenu");
        let navList = document.getElementById("navList");
        if (hamburgerMenu && navList){
            hamburgerMenu.addEventListener("click", () => {
                navList.classList.toggle("open");
            });
        }

        let currentSubpage = window.location.pathname.split("/").pop();
        if (currentSubpage === "" || currentSubpage === "/") {
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
            switch (currentSubpage){
                case ("index.html") : 
                    currPageGIF.src = "visuals/homePageGIF.gif";
                    break;
                case ("travel.html") : 
                    currPageGIF.src = "visuals/travelPageGIF.gif";
                    break;
                case ("food.html") :
                    currPageGIF.src = "visuals/foodPageGIF.gif";
                    break;
                case ("bake.html") :
                    currPageGIF.src = "visuals/bakePageGIF.gif";
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

