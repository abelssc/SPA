export function Article(post){
    return `
    <article class="article">
        <div class="article-header">
            <h2>${post.title.rendered}</h2>
        </div>
        <div class="article-body">
            <div class="article-img">
                <img src="${post['_embedded']['wp:featuredmedia'][0].source_url||'/app/assets/logo.png'}" alt="">
            </div>
            <div class="article-content">${post.content.rendered}</div>
        </div>
        <div class="article-footer">
            <time datetime="${post.date}">Fecha: ${(new Date(post.date).toLocaleString())}</time>
            <a href="#/" class="articulo" data-id="${post.id}">Ir a los articulos</a>
        </div>
    </article>
    `
}
