// https://developer.wordpress.org/rest-api/
const 
NAME="malvestida",
DOMAIN=`https://${NAME}.com`,
SITE=`${DOMAIN}/wp-json`,
API_WP=`${SITE}/wp/v2`,
POSTS=`${API_WP}/posts?_fields=excerpt,title,slug,date,id,_links,_embedded&_embed`,
POST=`${API_WP}/posts`,
SEARCH=`${API_WP}/search?_embed&search=`;

let page=1;

export default{
    NAME,
    DOMAIN,
    SITE,
    API_WP,
    POSTS,
    POST,
    SEARCH,
    page
}