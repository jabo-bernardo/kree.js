class Vector2 {

    /**
     * 
     * @param {number} x 
     * @param {number} y 
     */
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    /**
     * 
     * @param {Vector2} vectorToAdd 
     */
    Add(vectorToAdd) {

        this.x += vectorToAdd.x;
        this.y += vectorToAdd.y;

    }

    /**
     * 
     * @param {Vector2} v1 
     * @param {Vector2} v2 
     * 
     * @returns {number} Distance between to vectors
     */
    static Distance(v1, v2) {
        return Math.sqrt(
            Math.pow(v2.x - v1.x, 2) + Math.pow(v2.y - v1.y, 2)
        )
    }

}