const btn = document.querySelector('.btn')
const container = document.querySelector('.container')
const container1 = document.querySelector('.container1')
const list1nya = Array.from(document.querySelectorAll(".list1nya"))

list1nya.forEach((a, b) => {
    const data = [...a.textContent].map(a => { return '<span>' + a + '</span>' }).join('')
    list1nya[b].innerHTML = data
})
btn.addEventListener('click', function () {
    const clas = container.classList
    const clasMain = container1.classList
    if (clas.value === "container" || clas.value === "container1") {
        container.classList.replace(clas.value, "containernya")
        container1.classList.replace(clasMain.value, "container1nya")
    } else {
        container.classList.replace(clas.value, "container")
        container1.classList.replace(clasMain.value, "container1")
    }
    console.log(clas.value);
    console.log(clasMain.value);

})