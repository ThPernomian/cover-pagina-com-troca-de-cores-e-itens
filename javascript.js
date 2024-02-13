const starbucks = document.querySelector("#starbucks")
const starbucks1 = document.querySelector(".logo")
const thumb1 = document.querySelector(".thumb1")
const thumb2 = document.querySelector(".thumb2")
const thumb3 = document.querySelector(".thumb3")
const circle = document.querySelector(".circle")


thumb1.addEventListener("click", () => {
    document.querySelector("#starbucks").src = "img/img1.png"
    circle.style.background = "#017143"
})
thumb2.addEventListener("click", () => {
    document.querySelector("#starbucks").src = "img/img2.png"
    circle.style.background = "#eb7495"
})

thumb3.addEventListener("click", () => {
    document.querySelector("#starbucks").src = "img/img3.png"
    circle.style.background = "#d752b1"
})