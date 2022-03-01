class Element extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = ` 
            <section>
                <h2>
                <slot name="title"></slot>
                </h2>
                <h3>
                <slot name="subtitle"></slot>
                </h3>
                <p>
                <slot name="parrafo"></slot>
                </p>      
            </section>

            ${this.desing()}
        `;
        return template;
    }

    desing(){
        return `
        <style>
        h2{
            color:red;
            font-size:50px;
        }
        h3{
            color:blue;
            font-size:30px;
        }
        p{
            color:green;
            font-size:25px;
            background:papayawhip;
            padding:1rem;
        }
        </style>
        `
    }

    render() {
        this.shadowRoot.append(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("my-element", Element);