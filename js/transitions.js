
     let toggle = document.getElementById("toggle");
     let contenedor = document.getElementById("contenedor");



     toggle.addEventListener("click", function(){
        if(contenedor.classList.contains("contenedor1")){
            contenedor.classList.add("contenedor2");
            contenedor.classList.remove("contenedor1");
            toggle.classList.add("main-box-on");
            toggle.classList.remove("main-box-off");
        }
        else{
            contenedor.classList.remove("contenedor2");
            contenedor.classList.add("contenedor1");
            toggle.classList.remove("main-box-on");
            toggle.classList.add("main-box-off");
        }
     })