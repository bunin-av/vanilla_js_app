import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('Posts')
    }

    async getHtml() {
        return `
            <h1>My posts</h1>
            <p>Here you can see some posts...</p>            
       `
    }
}