import { ajax } from "../helpers/ajax.js";
import { Loader } from "./Loader.js";
import api from "../helpers/wp-api.js"
import { Card } from "./Card.js";
import { Article } from "./Article.js";
import { CardSearch } from "./CardSearch.js";

export async function Router(){
    const d=document;
    const w=window;
    const $posts=d.getElementById("root");

    //GLOBALES
    let hash=location.hash;
    $posts.innerHTML="";
    api.page=1;
    Loader();
    let txt="";
    //HOME
    if(hash===""||hash==="#/"){
        await ajax({
            url:api.POSTS,
            callbackSuccess:(posts)=>{
                posts.forEach(post => txt+=Card(post));
            }
        })
    }else if(hash==="#/Contacto"){
        txt="<h2>AQUI SE ENCONTRARA LA SECCION DE CONTACTO</h2>"
    }else if(hash.includes("#/search")){
        await ajax({
            url:`${api.SEARCH}${localStorage.getItem("articulo-search")}`,
            callbackSuccess:(posts)=>{
                if(!posts.length){
                    txt="<h2>No Existen resultados</h2>"
                }
                posts.forEach(post => txt+=CardSearch(post));
            }
        })
    }
    else{
        await ajax({
            url:`${api.POST}/${localStorage.getItem("articulo-id")}?_embed`,
            callbackSuccess:(post)=>{
                console.log(post);
                txt=Article(post);
            }
        })
    }
    $posts.innerHTML=txt;
    //SI SE NECESITARA QUE NUESTRO CODIGO ESPERE AL AJAX , ESTE DEBE ESTAR EN AWAIT
    //EN ESTE  CASO, EL REMOVE() ESPERA AL AWAIT
    //SE OPTO POR COMENTARLO XQ EL INNERHTML= YA REMUEVE EL .LOADER
    // document.querySelector(".loader").remove();
}