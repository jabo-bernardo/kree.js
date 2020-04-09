class Scene {
    
    /**
     * 
     * @param {function} update 
     * @param {function} render 
     */
    constructor(update, render) {
        this.update = update;
        this.render = render;

        this.name = "Scene";

        this.gameObjects = [];
    }

    /**
     * 
     * @param {string} name 
     */
    SetName(name) {
        this.name = name;
        return this;
    }

    /**
     * 
     * @param {GameObject} gameObject 
     */
    AddObject(gameObject) {
        this.gameObjects.push(gameObject);
    }

    Update() {
        requestAnimationFrame(this.update);
    }

    Render() {
        requestAnimationFrame(this.render);
    }

}