document.addEventListener("keyup", e=>{

    if (e.target.matches("#input")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".seccion3-1").forEach(aretes =>{
  
            aretes.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?aretes.classList.remove("filtro")
              :aretes.classList.add("filtro")
        })
  
    }
})