export function Card(post){
    return `
    <article class="card">
        <div class="card-header">
            <h2>${post.title.rendered}</h2>
        </div>
        <div class="card-body">
            <img src="${post['_embedded']['wp:featuredmedia'][0].source_url||'/app/assets/logo.png'}" alt="">
            <p>${post.excerpt.rendered}</p>
        </div>
        <div class="card-footer">
            <time datetime="${post.date}">Fecha: ${(new Date(post.date).toLocaleString())}</time>
            <a href="#/${post.slug}" class="articulo" data-id="${post.id}">Ver Publicacion</a>
        </div>
    </article>
    `
}
