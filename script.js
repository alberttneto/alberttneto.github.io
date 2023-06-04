let secaoProjeto = document.getElementById("projetos");
let projetos = secaoProjeto.querySelectorAll("a");

projetos.forEach(element => {

    element.addEventListener("mouseover", function(event){
        let infoProjeto = element.children;
        infoProjeto[1].style.filter = "brightness(0.1)";
        infoProjeto[0].style.visibility = "visible";
    })

    element.addEventListener("mouseout", function(event){
        let infoProjeto = element.children;
        infoProjeto[1].style.filter = "";  
        infoProjeto[0].style.visibility = "";
    })
});