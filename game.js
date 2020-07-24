let TitleScreen = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize: function TitleScreen(){
        Phaser.Scene.call(this, {key: "titleScreen", active: true});
    },

    preload: function(){
        this.cameras.main.setBackgroundColor("#C0C0C0");
        
    },

    create: function(){
        this.add.text(20, 20, "Loading...");
    }
})

let GameScreen = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize: function GameScreen(){
        Phaser.Scene.call(this, {key: "gameScreen", active: true});
    },

    preload: function(){
        this.load.spritesheet("board", "assets/board.png", {frameWidth: 16, frameHeight: 16});
    },

    create: function(){
        this.cell = this.add.image(10, 10, "board", 2);
        this.cell.setInteractive();
    }
})


let config = {
    type: Phaser.AUTO,
    width: 500,
    height: 500,
    scene: [TitleScreen, GameScreen]
};

let game = new Phaser.Game(config);

