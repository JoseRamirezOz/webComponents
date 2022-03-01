class Element extends HTMLElement {
    constructor(){
        super();
        console.log("Hola Mundo desde el constructor")
    }

    connectedCallback() {
        console.log("Hola desde el DOM")
    }


    disconnectedCallback(){
        console.log("Adios del DOM")
    }

}

customElements.define("my-element", Element);

document.querySelector("my-element").remove()