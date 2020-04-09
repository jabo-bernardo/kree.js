/*

    Game Engine Developed By Code Jabo

*/


let gameConfiguration = {

    gameObject: [],
    renderer: null,
    gameLoop: null,

    gameInstance: null,

    gameWindow: {
        width: 0,
        height: 0,
        fullScreen: false
    },

    activeScene: null

}

// Game Object
class Game {
    
    /**
     * 
     * @param {Object} options 
     * 
     */
    constructor(options) {

        if(gameConfiguration.gameInstance) {
            throwError("You can only have 1 game instance in your project please remove the other Game instance for it to be fixed.");
        }

        // Assign the instance of the game
        gameConfiguration.gameInstance = this;

        var canvasHolder = document.querySelector(".kree-viewport");
        var canvas = document.createElement('canvas');

        if(options.gameWidth && options.gameHeight) {
            canvas.setAttribute('width', options.gameWidth);
            canvas.setAttribute('height', options.gameHeight);

            gameConfiguration.gameWindow.width = options.gameWidth;
            gameConfiguration.gameWindow.height = options.gameHeight;

        }

        if(options.fullScreen) {
            canvas.style.width = '100%';
            canvas.style.height = '100%';

            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;

            gameConfiguration.gameWindow.fullScreen = true;
        }

        canvasHolder.append(canvas);

        this.renderer = canvas.getContext('2d');
        gameConfiguration.renderer = this.renderer;

        gameConfiguration.gameLoop = setInterval(() => {
            gameConfiguration.renderer.clearRect(0, 0, canvas.width, canvas.height);

            // Update Current Scene
            if(gameConfiguration.activeScene != null) {

                for(var i = 0; i < gameConfiguration.activeScene.gameObjects.length; i++) {

                    gameConfiguration.activeScene.gameObjects[i].Update();
    
                }

                gameConfiguration.activeScene.Update();
                gameConfiguration.activeScene.Render();
            }

        }, 1000/60);

    }

    /**
     * 
     * @returns Canvas Context
     * 
     */
    getRenderer() {
        return this.renderer;
    }

    /**
     * 
     * @param {Scene} scene 
     */
    SetScene(scene) {
        gameConfiguration.activeScene = scene;
    }

}

class Debug {

    static Log() {
        for(var i in arguments) {
            console.log(arguments[i]);
        }
    }

}

// Misc
let throwError = function(err) {
    console.error("[KREEJS ERROR] " + err);
    throw new ReferenceError("An error occured read the [KREEJS ERROR] above.");
}
