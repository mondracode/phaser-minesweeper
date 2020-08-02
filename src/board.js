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

    constructor(board, scene, x, y, xpos, ypos, mine){

        let default_state = cell_states.COVERED;

        super(scene, x, y, "board", default_state);
        scene.add.existing(this);

        this.x = x;
        this.y = y;
        this.xpos = xpos; //board coordinate
        this.ypos = ypos;
        this.board = board;
        this.mined = mine;
        this.cell_state = default_state;
        this.nearby_mines = 0;

        this.setInteractive();
        
        this.on("pointerdown", function(){

            //sprite changes depending on conditions go here
            if(this.mined){
                this.setFrame(cell_states.RED_MINE);
            }
            else{
                this.setFrame(this.getNearbyMines());
            }
            
        });
        /* this.on("pointerup", function(){
            this.setFrame(default_state);
        }); */
        /* this.on("pointerout", function(){
            this.setFrame(default_state);
        }); */

        this.getNearbyMines = function(){
            let sum = 0;
            for(let i = this.xpos - 1; i <= this.xpos + 1; i++){
                for(let j = this.ypos - 1; j <= this.ypos + 1; j++){
                    if(!(i == this.xpos && j == this.ypos)){
                        if((i > -1 && i < this.board.cells.length) && (j > -1 && j < this.board.cells[0].length))
                        sum += this.board.cells[i][j].mined ? 1 : 0;
                    }
                }
            }
            return sum;
        }
    }

    setState = function(state){
        this.cell_state = state;
        this.setFrame(state);        
    }
    
    
}

class Board{
    constructor(scene, x, y, width, height, mines){

        this.cells = []; //column array

        for(let i = 0; i < width; i++){
            this.cells[i] = []; //columns are created 
            for(let j = 0; j < height; j++){
                this.cells[i][j] = new Cell(this, scene, x + (16*i), y + (16*j), i, j, false); //columns are filled
            }
        }


        this.createRandomMines = function(number_of_mines){
            let mine_count = 0;
            while(mine_count <= number_of_mines){
                let rand_x = Math.floor(Math.random() * width);
                let rand_y = Math.floor(Math.random() * height);

                //if cell isn't mined already, mine it
                if(!this.cells[rand_x][rand_y].mined){
                    this.cells[rand_x][rand_y].mined = true;
                    mine_count++;
                }
            }
        };

        this.createRandomMines(mines);

        console.table(this.cells); //debug

        console.log(this.cells[0][0].getNearbyMines());
    }
    
}