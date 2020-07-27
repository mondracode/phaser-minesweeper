//sprite naming list, since i couldn't code an enum in JS
const cell_states = {
    ZERO: 0, //awkward naming, i know
    ONE: 1, 
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    COVERED: 9,
    FLAGGED: 10,
    MARKED: 11,
    GRAY_MINE: 12,
    RED_MINE: 13,
    WRONG_MINE: 14,
    MARKED_CLICKED: 15
}

class Cell extends Phaser.GameObjects.Sprite{

    constructor(scene, x, y, mine){

        let default_state = cell_states.COVERED;

        super(scene, x, y, "board", default_state);
        scene.add.existing(this);

        this.x = x;
        this.y = y;
        this.mined = false;
        this.cell_state = default_state;
        this.nearby_mines = 0;

        this.setInteractive();
    }

    setState = function(state){
        this.cell_state = state;
    }
    
}

class Board extends Phaser.GameObjects.Sprite{
    constructor(width, height, mines){

    }
}