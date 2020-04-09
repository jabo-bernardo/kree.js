class MeshRenderer {

    constructor() {
        
        this.componentName = this.constructor.name;

        this.gameObject = null;
    }

    Update() {
        
    }

    Render() {
        gameConfiguration.renderer.fillRect(
            this.gameObject.transform.position.x,
            this.gameObject.transform.position.y,
            this.gameObject.transform.scale.x,
            this.gameObject.transform.scale.y
        )
    }

}