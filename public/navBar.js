document.getElementById("nav-close").addEventListener("click", () =>
{
    document.getElementById("nav-main").classList.add("closed")
    document.getElementById("nav-close").classList.add("closed")
})

document.getElementById("nav-open").addEventListener("click", () =>
{
    document.getElementById("nav-main").classList.remove("closed")
    document.getElementById("nav-close").classList.remove("closed")
})

Array.from(document.getElementById("nav-link-list").children).forEach(child =>
{
    if (child.dataset.name == window.location.pathname.split("/").reverse()[0] || child.dataset.name == "index.html" && window.location.pathname.split("/").reverse()[0] == "")
    {
        child.classList.add("selected")
    }
})

Array.from(document.getElementById("nav-link-list").children).forEach(child => child.addEventListener("click", () =>
{
    Array.from(child.children).forEach(ch =>
    {
        if (ch.tagName === "A")
            ch.click()
    })
}))