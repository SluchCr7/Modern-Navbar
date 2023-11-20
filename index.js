let linksNavBar = document.querySelectorAll(".Links_NavBar li a")

linksNavBar.forEach((lio) => {
    lio.addEventListener("click", (e) =>{
        linksNavBar.forEach((li) => {
            li.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
    })
})