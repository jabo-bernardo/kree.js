let game = new Game({
    gameWidth: 320,
    gameHeight: 320
})

let player = new GameObject("Name");
player.AddComponent(new MeshRenderer());

let block = new GameObject("Block");
block.AddComponent(new MeshRenderer());

let d = Vector2.Distance(player.transform.position, block.transform.position);
Debug.Log(d);

let gameScene = new Scene(
    // Update
    function() {
        
    }, 
    // Render
    function() {

    }
).SetName("Game Scene");

gameScene.AddObject(player);
gameScene.AddObject(block);

game.SetScene(gameScene);