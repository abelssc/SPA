export function CardSearch(post){
    return `
    <article class="card">
        <div class="card-header">
            <h2>${post.title}</h2>
        </div>
        <div class="card-body">
            <img src="${post['_embedded']['self'][0]['featured_media_src_url']||'/app/assets/logo.png'}" alt="">
            <p>${post['_embedded']['self'][0]['excerpt']['rendered']}</p>
        </div>
        <div class="card-footer">
            <time datetime="${post['_embedded']['self'][0]['date']}">Fecha: ${(new Date(post['_embedded']['self'][0]['date']).toLocaleString())}</time>
            <a href="#/${post['_embedded']['self'][0]['slug']}" class="articulo" data-id="${post.id}">Ver Publicacion</a>
        </div>
    </article>
    `
}
