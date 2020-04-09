class Transform {
    
    /**
     * 
     * @param {Vector2} position 
     * @param {Vector2} scale 
     */
    constructor(position, scale) {
        this.position = position;
        this.scale = scale;
    }

    /**
     * 
     * @param {Vector2} moveVector 
     */
    Translate(moveVector) {
        this.position.Add(moveVector);
    }

    /**
     * 
     * @param {Vector2} resizeVector 
     */
    Resize(resizeVector) {
        this.scale = resizeVector;
    }

}