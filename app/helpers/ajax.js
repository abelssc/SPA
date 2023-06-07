export async function ajax(props){
    let {url,callbackSuccess}=props;
    await fetch(url)
    .then(rs=>rs.ok?rs.json():Promise.reject(rs))
    .then(json=>callbackSuccess(json))
    .catch(error=>{
        let message=error.statusText||"Ocurrio un error al acceder a la API";
        document.getElementById("root").innerHTML=
        `
        <div>
            <p>Error ${error.status}: ${message}</p>
        </div>
        `;
        console.log(error);
    })
}