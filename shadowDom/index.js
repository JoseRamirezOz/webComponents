class Element extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = ` 
            <section>
                <h2>Shadow DOM</h2>
                <slot></slot>
            </section>

            ${this.desing()}
        `;
        return template;
    }

    desing(){
        return `
        <style>
        h2{
            color:purple;
            font-size:50px;
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