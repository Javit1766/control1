export function header(){

    let header = document.createElement('header');

    let text = document.createElement('text');
    text.className = "titulo";
    text.innerText = "Diego";

    let div = document.createElement('div');
    div.className = "div-logo";
    div.innerHTML = "🏌🏼‍♂️"
    
    header.appendChild(text);
    header.appendChild(div);
    
    return header;
}
