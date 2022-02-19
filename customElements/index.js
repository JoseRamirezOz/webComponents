const template = document.createElement("div")
template.innerHTML=`
    <style>
        h1{
            color:purple;
        }
    </style>

    <h1>Hello World</h1>
    <p>Soy un parrafo</p>

`


class myElement extends HTMLElement{
    constructor(){
        super();
    
        this.p = document.createElement('p')
    }

    connectedCallback(){
        this.p.textContent = 'Hello'
        this.append(this.p)
        this.append(template)
    }
}

customElements.define('my-element',myElement)