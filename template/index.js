class Element extends HTMLElement {
    constructor(){
        super();
    }
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = ` 
            <section>
                <h2>Hello Guys</h2>
                <div>
                    <p>Texto de ejemplo</p>
                </div>
            </section>
        `;
        return template;
    }

    render() {
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("my-element", Element);