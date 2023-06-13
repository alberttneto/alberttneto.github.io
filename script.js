let secaoProjeto = document.getElementById("projetos");
let projetos = document.querySelectorAll(".carousel-item");

projetos.forEach(element => {

    element.addEventListener("mouseover", function(event){
        
        let infoProjeto = element.children;
        let imagem = element.getElementsByTagName("img")[0];
        imagem.style.filter = "brightness(0.1)";
        infoProjeto[1].style.filter = "brightness(0.1)";
        infoProjeto[0].style.visibility = "visible";
        console.log(infoProjeto);
    })

    element.addEventListener("mouseout", function(event){
        let infoProjeto = element.children;
        let imagem = element.getElementsByTagName("img")[0];
        imagem.style.filter = "";
        infoProjeto[1].style.filter = "";  
        infoProjeto[0].style.visibility = "";
    })
});