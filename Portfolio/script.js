function handleContact (event) {

    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    
    
    console.log(name);
    console.log(email);
    console.log(message);




const successContainer = document.getElementById("success_container");
console.log(successContainer);

const nameParagraph = document.createElement("p");
nameParagraph.innerText = `Your name : ${name}`;

const emailParagraph = document.createElement("p");
emailParagraph.innerText = `Your Email : ${email}`;

const messageParagraph = document.createElement("p");
messageParagraph.innerText = `Your Message : ${message}`;


console.log(nameParagraph);
console.log(emailParagraph);
console.log(messageParagraph);

successContainer.appendChild(nameParagraph);
successContainer.appendChild(emailParagraph);
successContainer.appendChild(messageParagraph);

}

const imageArray=[
    {
        url:"FCA math mega fest certificate.jpeg",
    },

    {
        url:"Gonitbid Certificate_page-0001.jpg",
    },

    {
        url:"HSC certificate_.jpg",
    },

    {
        url:"ICT Quiz EEE DAY JPG.jpg",
    },

    {
        url:"MFH CA certificate.jpeg",
    },

    {
        url:"SSC certificate_.jpg",
    },

    {
        url:"USC Certificate .JPG",
    },

    {
        url:"Victory Day Quiz.jpeg",
    },

];


function show() {
    const p_container = document.getElementById("projects");


    for(const item of imageArray) {

        const p_div_img = document.createElement("div");

        p_div_img.classList.add("project");
        p_div_img.innerHTML = `<img src ="${item.url}">`;

        p_container.appendChild(p_div_img);

       console.log(p_div_img);
      
    }
    console.log("click",p_container);

}

