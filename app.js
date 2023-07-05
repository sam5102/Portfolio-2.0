const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
});

const hiddenElements = document.querySelectorAll('.hidden') 
hiddenElements.forEach((el) => observer.observe(el))


const roles = ["UI/UX Designer", "Web Developer", "Freelancer"]
let text = ""
let i = 0
let j = 0

const myDiv = document.getElementById("roles")

function myJobRoles() {
    const myInterval = setInterval(() => {
        if(j < roles.length) {
            const expand = roles[j].split('')
            if(expand.length-1 >= i) {
                text += expand[i]
                i+=1
                myDiv.innerHTML = text
            } else {
                clearInterval(myInterval)
                text = ""
                j += 1
                i = 0
                myJobRoles()
            }
                
        } else {
            clearInterval(myInterval)
            j = 0
            i = 0
            myDiv.innerHTML = text
            myJobRoles()
        }
    }, 500)
} 

setTimeout(() => {
    myJobRoles();
}, 1100);