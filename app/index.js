import { App } from "./App.js";
import { Loader } from "./components/Loader.js";
import { Paginate } from "./components/Paginate.js";
import { Router } from "./components/Router.js";



document.addEventListener("DOMContentLoaded",App);

window.addEventListener("hashchange",Router);

document.addEventListener("click",(e)=>{
    if(e.target.matches(".articulo[data-id]")){
        localStorage.setItem("articulo-id",e.target.dataset.id)
    }
})
//SEARCH
let timer;
document.addEventListener("input",(e)=>{
    document.getElementById("root").innerHTML="";
    Loader();
    clearTimeout(timer);
    timer=setTimeout(() => {
        location.hash=`/search?article=${e.target.value}`;
        localStorage.setItem("articulo-search",e.target.value);
    }, 1000);
})
//SCROLL
const getArticles=async()=>{
    const {scrollTop,clientHeight,scrollHeight}=document.documentElement;

    if(scrollTop+clientHeight<scrollHeight)
        return;

    window.removeEventListener("scroll",getArticles);
    await Paginate();
    window.addEventListener("scroll",getArticles);

}
window.addEventListener("scroll", getArticles);
