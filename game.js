var config = {
    type: Phaser.AUTO,
    width: 500,
    height: 500,
    scene: {
        preload: preload,
        create: create,
        render: {
            
        }
    },
    antialias: true,
    pixelArt: false
};

var game = new Phaser.Game(config);

function preload(){
    this.load.image('ducks', 'ducks.jpg');
    
}

function create(){
    
    duck = this.add.image(config.height/2,config.width/2,'ducks');
    duck.displayHeight= 400;
    duck.displayWidth = 400;
    console.log(config.width);
}

function update(){

}