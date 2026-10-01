let hello = document.getElementById("hello")
hello.addEventListener('click', () => {
    if (hello.style.color == "chartreuse"){
        hello.style.color="#FFF"
    } else {
        hello.style.color="chartreuse"
    }})

