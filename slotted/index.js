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
            :host{
                --primary-color:tomato;
                --anything-text:white;
                --secundary-color:purple;
            }
                
            section{
                background:var(--secundary-color);
                color:var(--anything-text);
                border:black dashed .2rem;
                margin:1rem 0rem;
                width:50%;
            }

            h1{
                background:var(--primary-color);
            }
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