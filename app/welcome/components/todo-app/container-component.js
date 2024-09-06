class ContainerComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    async connectedCallback() {
        if (!this.shadowRoot.innerHTML) {
            try {
                const response = await fetch(import.meta.url.replace(".js", ".html"));
                const text = await response.text();
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = import.meta.url.replace(".js", ".css");
                this.shadowRoot.innerHTML = `${text}<slot></slot>`;
                this.shadowRoot.appendChild(link);
            } catch (error) {
                console.error('Error fetching or rendering the component:', error);
            }
        }
    }
}

customElements.define('container-component', ContainerComponent);