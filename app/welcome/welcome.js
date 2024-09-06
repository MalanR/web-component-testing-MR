import "./test-component/test-component.js"
import"./components/todo-app/container-component.js"
import "./components/buttons/add-task-component.js"
import "./components/todo-task-list/todo-task-list.js"

export default class WelcomeViewModel extends crs.classes.BindableElement {
    get html() {
        return import.meta.url.replace(".js", ".html");
    }

    get shadowDom() {
        return true;
    }

    get hasStyle() {
        return false;
    }

}