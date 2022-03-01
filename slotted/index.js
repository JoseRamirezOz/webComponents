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