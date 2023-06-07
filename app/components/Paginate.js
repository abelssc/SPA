import { ajax } from "../helpers/ajax.js";
import api from "../helpers/wp-api.js";
import { Card } from "./Card.js";
import { CardSearch } from "./CardSearch.js";
import { Loader } from "./Loader.js";



export async function Paginate(){
    //globales
    api.page++;
    //componentes
    let Component;//Hight Order Component React
    let url;
    if(location.hash===""||location.hash==="#/"){
        url=api.POSTS+`&page=${api.page}`;
        Component=Card;
    }else if(location.hash.includes("#/search")){
        url=`${api.SEARCH}${localStorage.getItem("articulo-search")}&page=${api.page}`;
        Component=CardSearch;
    }
    else{
        return
    }
    Loader();
    await ajax({
        url:url,
        callbackSuccess:(posts)=>{
            let txt="";
            posts.forEach(post => txt+=Component(post));
            document.querySelector("#root").insertAdjacentHTML("beforeend",txt);
        }
    })
    document.querySelector(".loader").remove();
}