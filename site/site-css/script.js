const navBar = document.getElementById("nav-fix");
const topoNav = navBar.offsetTop;

window.addEventListener("scroll", function()
{
    if (window.scrollY >= topoNav)
        navBar.classList.add("fixado");
    else
        navBar.classList.remove("fixado");
}
)