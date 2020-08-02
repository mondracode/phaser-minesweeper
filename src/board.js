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

    constructor(scene, x, y, xpos, ypos, mine){

        let default_state = cell_states.COVERED;

        super(scene, x, y, "board", default_state);
        scene.add.existing(this);

        this.x = x;
        this.y = y;
        this.xpos = xpos; //board coordinate
        this.ypos = ypos;
        this.mined = false;
        this.cell_state = default_state;
        this.nearby_mines = 0;

        this.setInteractive();
        this.on("pointerdown", function(){
            this.setFrame(cell_states.ZERO);
        });

        this.on("pointerup", function(){
            this.setFrame(default_state);
        });

        this.on("pointerout", function(){
            this.setFrame(default_state);
        });

    }

    setState = function(state){
        this.cell_state = state;
    }
    
}

class Board{
    constructor(scene, x, y, width, height, mines){

        this.cells = []; //column array

        for(let i = 0; i < width; i++){
            this.cells[i] = []; //columns are created 
            for(let j = 0; j < height; j++){
                this.cells[i][j] = new Cell(scene, x + (16*i), y + (16*j), i, j, false); //columns are filled
            }
        }

        console.table(this.cells); //debug
        this.cells[0][1].mined = true;
        this.cells[1][0].mined = true;
        this.cells[1][1].mined = true;

        console.log(this.getNearbyMines(this.cells[0][0]));
    }


    //TO DO: test this function for 0 coordinates
    getNearbyMines = function(cell){
        let sum = 0;
        for(let i = cell.xpos - 1; i <= cell.xpos + 1; i++){
            for(let j = cell.ypos - 1; j <= cell.ypos + 1; j++){
                if(!(i == cell.xpos && j == cell.ypos)){
                    if((i > -1 && i < this.cells.length) && (j > -1 && j < this.cells[0].length))
                    sum += this.cells[i][j].mined ? 1 : 0;
                }
            }
        }
        return sum;
    };
}