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
    DISCOVERED: 10,
    FLAGGED: 11,
    MARKED: 12,
    GRAY_MINE: 13,
    RED_MINE: 14,
    WRONG_MINE: 15,
    MARKED_CLICKED: 16
}

let Cell = class {

    constructor(x, y, mine){

        this.x = x;
        this.y = y;
        this.mined = mine;
        this.cell_state = cell_states.COVERED;
        this.nearby_mines = 0;

        this.spriteSetup();
        
    }

    spriteSetup = function(){
        //sprite 
        this.sprite = game.add.sprite(x, y, "board", this.cell_state).setInteractive();
        this.sprite.on("pointerdown", function(){
            cell.setFrame(1);
        });
    }
    
    
}