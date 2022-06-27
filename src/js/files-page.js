import { uploadFile } from "./http-provider";


const body = document.body;
let inputFile, imgFoto;

const crearHtml = () => {

    const html = `
    
    <h1 class="mt-5" >Carga tu imagen</h1>
    <hr>
    <label for="">Selecciona una imagen</label>
    <input type="file" accept="image/png, image/jpeg">
    <br>
    <img id="foto" class="img-thumbnail" src="" alt="">
    
    `

    const div = document.createElement('div');
    div.innerHTML = html;

    body.append( div );

    inputFile = document.querySelector('input');
    imgFoto = document.querySelector('#foto');

}

const eventos = () => {

    inputFile.addEventListener('change',(event)=>{
        
        const file = event.target.files[0];
      
        uploadFile( file ).then( url => imgFoto.src = url );

    })

}

export const init = () => {
    
    crearHtml();
    eventos();

}