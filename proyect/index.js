class cardComponent extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:'open'})
        this.srcImage = this.getAttribute("src-image")
    }

    customElement(){
        const main = document.createElement("section")
        main.innerHTML=`
        <h1><slot name="title"></slot></h1>

        <h2>
        <slot name="subtitle1"></slot>
        <slot name="subtitle2"></slot>
        </h2>

        <img src="${this.srcImage}"/>

        <p>
        <slot name="info"></slot> 
        </p>

        <p>
        <slot name="precio"></slot> 
        </p>

        <button>Buy Now</button>
        `

        return main
    }

    styles(){
        `
        <style>
        button{
            font-size:50px;
        }
        </style>
        `
        
    }

    connectedCallback(){
        this.shadowRoot.append(this.customElement())
    }

}

customElements.define('card-element', cardComponent)



