let TitleScreen = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize: function TitleScreen(){
        Phaser.Scene.call(this, {key: 'titleScreen', active: true});
    },

    preload: function(){
        
    },

    create: function(){

    }
})

let GameScreen = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize: function GameScreen(){
        Phaser.Scene.call(this, {key: 'gameScreen', active: true});
    },

    preload: function(){
        
    },

    create: function(){

    }
})


let config = {
    type: Phaser.AUTO,
    width: 500,
    height: 500,
    scene: [TitleScreen, GameScreen]
};

let game = new Phaser.Game(config);

