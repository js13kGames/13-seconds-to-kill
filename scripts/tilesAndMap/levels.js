function fill(code) //this function generates a new Grid array with the determined code of the tile wanted to fill the room
{   return Array.from({length:24},(i) => Array.from({length:32}, (r)=>code));
}

function square(array) //Create Square Shaped Level
{
    for(var y=0;y<canvas.height/32;y++)   array[y][0] = array[y][31] = 2;
    for(var x=1;x<canvas.width/32-1;x++)   array[0][x] = array[23][x] = 2;
    array[5][25] = array[5][5] = array[17][15] = 4; 
}

function Llvl(array) //Create L Shaped Level
{   square(array)
    for(var x=0;x<23;x++) array[11][x] = 2;
    for(var y = 12; y<24;y++) array[y][22] = 2;
    for(var x=0;x<22;x++)
        for(var y=12;y<24;y++) array[y][x] = 0;
    array[0][16] = array[0][15] = 3;
    array[2][22] = array[1][1] = array[22][30] = 4;
}

function Tlvl(array) //Create T Shaped Level
{   square(array)
    for(var y=1;y<16;y++)
        for(var x=0;x<13;x++)  array[y+8][x+19] = array[y+8][x] = 0;
    for(var x=0;x<13;x++) array[9][x+19] = array[9][x] = 2;
    for(var y=10;y<24;y++) array[y][12] = array[y][19] = 2;
    array[0][16] = array[0][15] = 3;
    array[5][5] = array[5][25] = 4;
}

function Hlvl(array) //Create H Shaped Level
{   square(array)
    for(var y=0;y<8;y++)
        for(var x=11;x<21;x++) array[y][x] = array[y+16][x] = 0;
    for(var x=11;x<21;x++) array[16][x] = array[7][x] = 2;
    for(var y=0;y<7;y++) array[y][11] = array[y][20] = array[y+17][11] = array[y+17][20] = 2;
    array[0][6] = array[0][5] = 3;
    array[12][3] = array[2][23] = array[1][1] = array[22][30] = 4;
}

function Clvl(array) //Create C Shaped Level
{   square(array)
    array[0][16] = array[0][15] = 2;
    for(var y=7;y<17;y++)
        for(var x=10;x<32;x++) array[y][x] = 0;
    for(var x=10;x<32;x++) array[16][x] = array[7][x] = 2;
    for(var y=8;y<16;y++) array[y][10] = 2;
    array[0][26] = array[0][25] = 3;
    array[4][9] = array[16][2] = array[17][30] = array[6][30] = 4;
}

function lvl1(array) //Preset of level 1 Level
{   
    square(array);
    array[0][16] = array[0][15] = 3;
    var text = "Well met, T’reze!;You hast reached the Tower of Dreizehn!;May the number thirteen bless your journey...;"  // Sign text
    var text2 = "The sword you wield in your hand holds great power T’reze.;but everything has a price... If you dont feed the sword with souls...; In thirteen seconds she will feed on your own soul!;" // Sign text

    array[2][12] = new Sign(12*32,2*32,text);    
    array[2][19] = new Sign(19*32,2*32,text2);    
    array[0][23] = 21;    
        
    DirtTile(array);
    return array;
}   
function lvl13(array) //Preset of level 13 Level the final boss
{   
    square(array);
    array[6][7] = array[6][8] = array[16][7] = array[16][8] = array[16][12] = array[16][11] = array[16][20] = array[16][21] = array[16][22] = array[16][23] = array[15][23] = array[14][23] = array[13][23] = array[10][23] = array[9][23] = array[8][23] = array[7][23] = array[7][22] = array[7][21] = array[7][20] = array[12][19] = array[11][19] = array[12][20] = array[11][20] = array[12][21] = array[11][21] = array[12][22] = array[11][22] = array[12][23] = array[11][23] = array[7][19] = array[6][19] = array[6][20] = array[6][21] = array[6][22] = array[6][23] = array[6][24] = array[7][24] = array[8][24] = array[9][24] = array[10][24] = array[11][24] = array[12][24] = array[13][24] = array[14][24] = array[15][24] = array[16][24] = array[17][24] = array[17][23] = array[17][22] = array[17][21] = array[17][20] = array[16][19] = array[17][19] = array[17][12] = array[17][7] = array[17][8] = array[17][11] = array[17][10] = array[17][9] = array[17][10] = array[16][9] = array[16][10] = array[15][9] = array[15][10] = array[14][9] = array[14][10] = array[13][9] = array[13][10] = array[12][9] = array[12][10] = array[11][9] = array[11][10] = array[10][9] = array[10][10] = array[9][9] = array[9][10] = array[8][9] = array[8][10] = array[7][7] = array[7][8] = array[7][9] = array[7][10] = array[6][10] = array[6][9] = 22;
    DirtTile(array);

    SpawnPoints.push({x:16*32.5,y:21*32})
    return array;
}

var SpawnPoints =  //Array of positions for each room where the player should spawn at
[   {x:16*32.5,y:21*32},
]

function Random(array,lvl) //Random level Generation that randomizes levels from the eighth until twelfth
{   var Randomi = pI(rng()*4);
    var Randomj = pI(rng()*3)
    switch(Randomi)     //Randomizes witch shape should the room be 
    {
        case 0: Llvl(array); SpawnPoints.push({x:26*32.5,y:21*32});break; 
        case 1: Tlvl(array); SpawnPoints.push({x:16*31.2,y:21*32});break; 
        case 2: Hlvl(array); SpawnPoints.push({x:26*31.5,y:21*32});break; 
        case 3: Clvl(array); SpawnPoints.push({x:26*32.5,y:21*32});break; 
    }
    var rmt = [         //Array of math challenges presets
        [14,15,new Mat(0,0,"Digit", 1, 10),16,14,19,20],
        [14,17,new Mat(0,0,"Digit", 1, 2),16,14,19,20],
        [14,17,new Mat(0,0,"Digit", 1, 6),15,14,19,20],
        [14,18,new Mat(0,0,"Digit", 1, 3),15,14,19,20],
        [14,16,new Mat(0,0,"Digit", 1, 15),15,14,19,20],
    ]
    let dirt = array[1].indexOf(1)!=-1; // Check if the the floor is made out of flr objects

    switch(Randomj)     //Randomizes the main puzzle  of the room 
    {   case 0: //Box puzzle
            var randomNumber = 0
            while(randomNumber < 2){randomNumber = pI(rng()*5)}
            adr(array,randomNumber,5);
            adr(array,randomNumber,7);
            lvl.condition = BoxCheck;
        break;  
        case 1: //Button puzzle
            var randomNumber = 0
            while(randomNumber < 3){randomNumber = pI(rng()*5)}
            adr(array,randomNumber,6);
            lvl.condition = ButtonCheck;
        break;  
        case 2: //Math Puzzle                
            var n = 0      
            while(n<1)
            {   var line = pI(rng()*22);
                var column = pI(rng()*30);

                //check if a line of 7 math tiles can be placed without overiding any walls
                var bool = (array[line][column] == 1 && array[line][column+1] == 1 && array[line][column+2] == 1 && array[line][column+3] == 1 && array[line][column+4] == 1 && array[line][column+5] == 1  && array[line][column+6] == 1   && array[line][column+7] == 1|| array[line][column] == 12 && array[line][column+12] == 12 && array[line][column+2] == 12 && array[line][column+3] == 12 && array[line][column+4] == 12 && array[line][column+5] == 12 && array[line][column+6] == 12   && array[line][column+7] == 12);

                if(bool)
                {   var ram = pI((rng()*rmt.length))

                    for(var i = 0; i < 7; i++)
                    {   if(rmt[ram][i].constructor.name == "Number")
                            array[line][column+i] = rmt[ram][i];
                        else
                        {   array[line][column+i] = rmt[ram][i];
                            array[line][column+i].x = (column+i)*32;
                            array[line][column+i].y = line*32;
                        }
                    }
                    n++;
                }
            };
            lvl.condition = MathCheck;
            break; 
        }
        dirt&&DirtTile(array);
    return array
}

function KillCountCheck() //checks if 13 enemies have been killed
{   enC >= 13&&(cpd = 1);
}

function BoxCheck(lvl) //checks if all Box receiving tiles have a box over them
{   var boxCount = 0;
    for(let i=0; i<lvl.boxtiles.length;i++) 
        if (lvl.boxtiles[i].act) boxCount++;
        boxCount == lvl.boxtiles.length && boxCount !=0?cpd = 1:cpd = 0;
}

// function MorseCheck(lvl) was a puzzle of morse code but since we needed to cut thing some mechanics of the game this one had to go
// {   var t = 0
//     //Checar os switchs para ver se pode passar de level
//     for(var i = 0; i<lvl.mo.length; i++)
//     {   if(lvl.mo[i].val[lvl.mo[i].i%lvl.mo[i].val.length] == lvl.txt[i])  t++;
        
//         if(t == lvl.mo.length)
//         {   for(var j = 0; j<lvl.mo.length; j++)
//                 lvl.mo[j].clr = "green";
//                 cpd = 1;
//         }
//         else
//             for(var j = 0; j<lvl.mo.length; j++)
//                 lvl.mo[j].clr = "red", cpd = 0;
        
//     }
// }

var next = 0
function ButtonCheck(lvl) // checks if the buttons were pressed in the correct order
{   next == lvl.buttons.length&&(cpd = 1,next = 0)
    return next
}

function MathCheck(lvl) // checks if the resulting value of the calculus is 13 
{   var s = "";
    if (lvl.maths.length)
    {   for (let i = 0; i < lvl.maths.length-2; i++) 
            s += lvl.maths[i].dgt;
        for (let i=0; i<lvl.maths.length; i++) 
        {   !lvl.maths[i].fix ? lvl.maths[i].txC = "crimson" : lvl.maths[i].txC = "black";
            cpd = 0;
            if (Function("return parseInt(" + s +")==13")())
            {   lvl.maths[i].txC = "green";
                cpd = 1;
            };
        }
    }
}

function cma(array) //This function takes the Grid array which should be filled with a code assigned to every tile and transforms the tile into an new object of the assigned code
{   for(var line = 0;line < array.length; line++) // Linhas
    {   for(var column = 0; column < array[line].length; column++) // cunas
        {   switch(Number(array[line][column])) // Tipos de Tiles
            {                                  //set X   set Y
                case 1: array[line][column] = new Floor(column*32,line*32);break;  // Floor
                case 2: array[line][column] = new Wall(column*32,line*32);break;  // Wall
                case 3: array[line][column] = new Door(column*32,line*32);break;  // Door
                case 4: array[line][column] = new Spawn(column*32,line*32);break;   //Enemies Spawn
                case 5: array[line][column] = new BoxTile(column*32,line*32);break; // Box Spawn
                case 6: array[line][column] = new ButtonTile(column*32,line*32,[0,1]);break; // Button
                case 7: array[line][column] = new BoxDestinyTile(column*32,line*32);break; // Box Decting Tile
                case 8: array[line][column] = new Sgn(column*32,line*32);break; // Sign
                //graphics
                case 9: array[line][column] = new Gbx(column*32,line*32);break; // Graphic Box
                case 10: array[line][column] = new Gbo(column*32,line*32);break;// Graphic Box2
                case 11: array[line][column] = new Gdi(column*32,line*32);break;// Graphic Dirt
                //
                case 12: array[line][column] = new Ice(column*32,line*32);break; //Ice floor
                case 13: array[line][column] = new MorseCode(column*32,line*32,[".","_"], M.round(rng()));break; // Morse code btn not used :/
                //Math
                case 14: array[line][column] = new Mat(column*32,line*32,"Digit", 0);break; //Random digit tile, mutable
                case 15: array[line][column] = new Mat(column*32,line*32,"Add", 1);break; //Addition Operation tile
                case 16: array[line][column] = new Mat(column*32,line*32,"Sub", 1);break; //Minus Operation tile
                case 17: array[line][column] = new Mat(column*32,line*32,"Mul", 1);break; //Multiplication Operation tile
                case 18: array[line][column] = new Mat(column*32,line*32,"Div", 1);break; //Division Operation Tile
                case 19: array[line][column] = new Mat(column*32,line*32,"Res", 1);break; //Equals Operation Tile
                case 20: array[line][column] = new Mat(column*32,line*32,"Ans", 1);break; //Answer Tile
                
                case 21: array[line][column] = new Cnt(column*32,line*32);break; //Counting Tile in the wall
                case 22: array[line][column] = new F13(column*32,line*32);break; //Green Tiles of the last Level
            }
        }
    }
}