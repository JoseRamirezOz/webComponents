class customElement extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:'open'})
    }

    getTemplate(){
        const template = document.createElement("template")
        template.innerHTML = `
        <section>
            <h1>
                <slot name="title"></slot>
            </h1>

            <p>
                <slot name="parrafo"></slot>
            </p>

            <slot></slot>
        </section>
        ${this.getStyle()}
        ` 

        return template
    }


    getStyle(){
        return `
            <style>
            /*Mediante el uso general*/
            :host{
                display:inline-block;
                margin:1rem;
                border:.1rem solid purple;
                padding:1rem;
            }
            

            /*Sobre una clase*/
            :host(.card){
                border:.1rem solid aquamarine;
                background:papayawhip;
            }

            /*Con un atributo definido 
            en el componente*/

            :host([atributo]){
                border:.1rem solid aquamarine;
                background:hotpink;
            }
            
            /* Mediante el contexto, refiriendonos asi 
            a un componente que esta dentro de 
            otra etiqueta */

            :host-context(aside.adicional){
                paddin:2rem;
                background:purple;
                border: .3rem solid black;
                color:white;
                width:90vw;
            }
            
            /*Los elementos internos tambien 
            son manipulables mediante el :host*/


            </style>
        `
    }


    render(){
        this.shadowRoot.append(
            this.getTemplate().content.cloneNode(true));
    }

    connectedCallback(){
        this.render();
    }

}

customElements.define('my-element',customElement)