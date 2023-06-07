import api from "../helpers/wp-api.js";

export function Header(){
    fetch("/app/components/modulos/header.html")
    .then(rs=>rs.ok?rs.text():Promise.reject(rs))
    .then(rs=>document.querySelector(".header").innerHTML=rs)
    .then(rs=>document.querySelector(".title").textContent=`${api.NAME}`)
    .catch(error=>{
        let message=error.statusText||"Ocurrio un error al acceder a la API";
        document.getElementById("root").innerHTML=
        `
        <div>
            <p>Error ${error.status}: ${message}</p>
        </div>
        `
    })
}