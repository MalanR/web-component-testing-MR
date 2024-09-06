class TodoTaskList extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    async connectedCallback() {
        const response = await fetch(import.meta.url.replace(".js", ".html"));
        const text = await response.text();
        this.shadowRoot.innerHTML += text;
        this.shadowRoot.innerHTML = `${text}<slot></slot>`;
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = import.meta.url.replace(".js", ".css");
        this.shadowRoot.appendChild(link);
    }
}

customElements.define('todo-task-list', TodoTaskList);