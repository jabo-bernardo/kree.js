class GameObject {

    /**
     * 
     * @param {string} name 
     */
    constructor(name = "Game Object") {

        this.id = Date.now() + Math.random() * 100;

        this.name = name;

        this.transform = new Transform(new Vector2(), new Vector2(32, 32));

        gameConfiguration.gameObject.push(this);

        // Component System
        this.components = [];

    }

    /**
     * 
     * @param {Component} component 
     */
    // Methods
    AddComponent(component) {
        component.gameObject = this;
        this.components.push(component);
    }

    /**
     * 
     * @param {string} componentName
     */
    GetComponent(componentName) {
        for(var i = 0; i < this.components.length; i++) {
            if(this.components[i].componentName == componentName) {
                return this.components[i];
            }
        }
    }

    /**
     * 
     * @param {string} componentName
     * 
     * @returns {boolean}
     */
    HasComponent(componentName) {
        for(var i = 0; i < this.components.length; i++) {
            if(this.components[i].componentName == componentName) {
                return true;
            }
        }
        return false;
    }

    Update() {
        for(var i = 0; i < this.components.length; i++) {

            this.components[i].Update();
            this.components[i].Render();

        }
    }

    // Static Methods
    /**
     * 
     * This method removes the object from the scene
     * 
     * @param {GameObject} gameObject 
     */
    static Destroy(gameObject) {
        for(var i = 0; i < gameConfiguration.gameObject.length; i++) {
            if(gameConfiguration.gameObject[i].id == gameObject.id) {
                gameConfiguration.gameObject.splice(i, 1);
            }
        }
    }

    /**
     * 
     * This methods returns the object with a given name
     * 
     * @param {string} objectName 
     */
    static Find(objectName) {
        for(var i = 0; i < gameConfiguration.gameObject.length; i++) {
            var obj = gameConfiguration.gameObject[i];
            if(obj.name == objectName) {
                return obj;
            }
            
        }
    }

}