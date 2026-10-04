
const navBoxHTML = `
    <button class="hamburgerMenu" id="hamburgerMenu">&#9776;</button>
        <ul id="navList">
            <li><a id="home" href="index.html">Home</a></li>
            <li><a id="traveling" href="traveling.html">Traveling</a></li>
            <li><a id="baking" href="baking.html">Baking</a></li>
            <li><a id="crochet" href="crochet.html">Crochet</a></li>
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

