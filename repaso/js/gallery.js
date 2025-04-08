const images = ["images/bayeu.webp", "images/cacharrero.webp","images/desastres.webp", "/images/goya.webp", "/images/sabasa.webp", "https://upload.wikimedia.org/wikipedia/commons/8/82/Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg"];
const titles = ["Bayeu", "El Cacharrero", "Desastres", "Goya", "Sabasa", "Saturno devorando a su hijo"];

window.onload = function() {
    const galeria = document.getElementById ("galeria");

    for (let index= 0; index < images.length; index++) {
        const imgSrc= images [index];

        //crear elementos html
        const div = document.createElement ("div");
        const img = document.createElement ("img");
        img.src = imgSrc;
        const p = document.createElement ("p");
        p.textContent = titles[index];

        //clases 
        div.classList.add("cuadro")
        img.classList.add("cuadro")
        p.classList.add("cuadro")
        
        //añadir elementos al contenedor
        div.appendChild(img);
        div.appendChild(p);
        galeria.appendChild(div);

    }
}


