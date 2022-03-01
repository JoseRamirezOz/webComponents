class Element extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"});

        //Traer los atributos del tag html 
        this.title = this.getAttribute("title");
        this.subtitle = this.getAttribute("subtitle");
        this.parrafo = this.getAttribute("parrafo");
    }
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = ` 
            <section>
                <h2>
                <slot>${this.title}</slot>
                </h2>
                
                <h3>
                <slot>${this.subtitle}</slot>
                </h3>
                <p>
                <slot>${this.parrafo}</slot>
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
            margin-top:30px;
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