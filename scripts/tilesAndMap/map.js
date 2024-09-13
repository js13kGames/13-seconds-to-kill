class Level //Level class
{   constructor(m,b,r,s,rn,condition)
    {   let t = this;
        t.m = m; //map of the level
        t.condition = condition; //the levels condition to finish it
        if(rn) //check if is a random
        {    switch(pI(rng()*3))//Random effect
            {   case 0: b = 1;break;
                case 1: r = 1;break;
                case 2: t.m.a = fill(12);break;
            }
            Random(t.m.a,t); //Randomizes the level puzzle and shape
        }
        cma(t.m.a);
        t.boxes = [];
        t.boxtiles=[];
        t.b = b;
        t.r = r;
        t.buttons = []
        t.maths = [];
        t.morse = [];
        t.spaw = [];
        sgr(2, t.m.a, t.spaw);
        sgr(3, t.m.a, t.morse);
        sgr(4, t.m.a, t.boxes);
        sgr(6, t.m.a, t.boxtiles);
        sgr(5, t.m.a, t.buttons);
        sgr(7, t.m.a, t.maths);
        shf(t.buttons);
        t.morse.sort((a,b) => a.x - b.x);
        for(let i=0;i<t.spaw.length;i++)
            t.spaw[i].spT = s.t*30, t.spaw[i].enL = s.l;
        
        t.txt = ".____...__";
    }
    
    update()
    {   let t = this;
        
        bli = t.b;
        rev = t.r;
        
        t.condition(t);
        t.m.update();
    }
}
class Map //The grid map of the level it is attached to
{   constructor(a)
    {   this.a = a;
    }

    update() // Draw
    {   let t = this;
        for(var l = 0;l < t.a.length; l++) // Linhas
            for(var c = 0; c < t.a[l].length; c++)
            {   (t.a[l][c] && d(t.a[l][c], 32, 32)) && t.a[l][c].draw();
                
                t.a[l][c] && t.a[l][c].update(); // Draw each tile 
            }
    }
}
class Tile  //Generic tile
{   constructor(x,y)
    {   let t = this;
        t.x = x;
        t.y = y;
        t.w = t.h = 32;
        t.add = 0;
        t.tim = {c:0,m:30*3}
    }

    draw() // Draw
    {   Rect(this.x,this.y,32,32,this.clr);
    }
    update(){}
    C(o)
    {   let t = this;
        if (t.x + 32 >= o.x &&
            t.x <= o.x + o.w &&
            t.y + 32 >= o.y &&
            t.y <= o.y + o.h) {
            return 1;
        }
        return 0;
    }
    uFr()
    {   this.tim.c++;
        if(this.tim.c>this.tim.m)
        {   this.tim.c = 0;
            return 1;
        }
    }

}
class Wall extends Tile   // Wall tile
{   constructor(x,y)
    {   super(x,y);
        this.col = 1;   //Collidable true
        this.J = 1;     // tile code used insted of constructor.name since the minifier changes class names
    }
    draw()
    {   let t = this;
        if(nex(t,1,0) && nex(t,-1,0)) t.draw = function(){groundTile(t),waF(t)};   //checks wich side the wall is facing or if it is a corner
        else
        {   if(nex(t,0,-1) && nex(t,0,1)) t.draw = function(){waS(t)}; 
            else
            {   if(!nex(t,0,-1) && !nex(t,0,1))t.draw = function(){waS(t),Rect(t.x,t.y+t.h-1,t.w,1,'#6D798B'),Rect(t.x,t.y,t.w,1,'#6D798B')};
                nex(t,0,-1) && (t.draw = function(){waS(t),Rect(t.x,t.y+t.h-1,t.w,1,'#6D798B')});
                nex(t,0,+1) && (t.draw = function(){waS(t),Rect(t.x,t.y,t.w,1,'#6D798B')});
            }      
        }
    }
}
class Floor extends Tile    //basic floor tile
{   constructor(x,y)
    {   super(x,y);
        this.J = 8;
    }

    update()
    {   for(var i = 0; i<F.length; i++)
                this.C(F[i]) && (F[i].f = 0, F[i].acel = 5);  
    }
    draw(){groundTile(this)}   //draw floor sprite
}
class Door extends Tile //Door tile
{   constructor(x,y)
    {   super(x,y);
        this.clr = "#6b5421";
        this.col = 1;
    }
    draw(){
        super.draw();
        cpd && groundTile(this);
    }   
    update() 
    {   let pbx = {x:k.x-5,y:k.y-5,w:k.w+10,h:k.h+10};
        //player checker hitbox
        if(this.C(pbx) && cpd)//resets all variables needed and changes floor level when collided
        {   clv++;
            k.x = SpawnPoints[clv].x;
            k.y = SpawnPoints[clv].y;
            k.t.c = k.t.m;
            ENE = [];
            blo = [];
            par = [];
            k.bal = [];
            cpd = 0;
            tles2 = [];
            tles = [];
            endTimes = [];
            times = [];
            mps = [];
            enC = 0;
            clv==12 && ENE.push(new Dre(canvas.width/2,canvas.height/2,128,128));
        }
    }
}
class Spawn extends Tile    //Enemie Spawner tile
{   constructor(x,y) 
    {   super(x,y);
        let t = this;
        t.cuT = 0;
        t.J = 2;
    }

    arT()   // pushes new enemies once seconds have passed
    {   let t = this;
        if(t.cuT == 90) 
        {   ENE.push(new Mi(t.x,t.y,64,64,t));
            t.cuT = 0;
        } 
        t.cuT++;
    }
    draw()
    {   groundTile(this);
        spw(this);
    }
    update() 
    {  if(30 >= ENE.length) this.arT();
    }
}
class ButtonTile extends Tile   //Button tile
{   constructor(x,y)
    {   super(x,y);
        let t=this;
        t.clr = "red";
        t.cld = 0;
        t.J = 5;
    }

    update()
    {   let t = this;   //checks if he is the next button os the sequence if so it changes to green if not every button changes to red and resets the sequence
        if(t.C(k))
        {   if(lvls[clv].buttons[next] == t && !t.cld)
            {   t.clr = "green";
                next++;
            }
            else if(!t.cld)
            {   for(var i =0;i<lvls[clv].buttons.length;i++)
                    lvls[clv].buttons[i].clr = "red";
                next = 0;
            }
            t.cld = 1;
            next == 4 && (cpd = 1);
        }
        else
            t.cld = 0;
    }
    draw()
    {   groundTile(this);
        btn(this, this.clr);
    }
}
class MorseCode extends Tile{   //Morse code tile 
    constructor(x,y,val,i)
    {   super(x,y);
        let t = this;
        t.clr = "red";
        t.cld = 0;
        t.val = val;
        t.i = i;
        t.J = 3;

    }

    draw()
    {   let t = this;
        groundTile(t);
        btn(t, t.clr);
        mor(t);
    }

    update()
    {   let t = this;
        if(sqr(((t.x+t.w/2) - (k.x+k.w/2))**2 + ((t.y+t.h/2) - (k.y+k.h/2))**2)<50)
        {   k.i = 1;
            key[69] && (t.i++, key[69] = !key[69]);
        }
    }
}
class BoxTile extends Tile {   //Box tile
    constructor (x,y)
    {   super(x,y);
        let t = this;
        t.clr = "#FF9633"
        t.box = new Box(t.x,t.y);
        t.J = 4;
    }
}
class BoxDestinyTile extends Tile { //box destiny tile
    constructor (x,y)
    {   super(x,y);
        let t = this;
        t.act = 0;
        t.clr = "purple";
        t.J = 6;
    }
    //if any box collide return true
    bCD() 
    {   let t = this;
        var len = lvls[clv].boxes.length;
        for (var i = 0; i < len; i++) {
            if (t.x + 32 >= lvls[clv].boxes[i].box.x &&    
                t.x <= lvls[clv].boxes[i].box.x + lvls[clv].boxes[i].box.w &&      
                t.y + 32 >= lvls[clv].boxes[i].box.y &&      
                t.y <= lvls[clv].boxes[i].box.y + lvls[clv].boxes[i].box.h) {
                return 1;
            }
        }
    }
    update() //if there is a box colliding turn green and meke act var true
    {   let t = this;
        t.act = t.bCD();
        t.bCD()?t.clr = "green":t.clr = "red";
    }
    draw()
    {   groundTile(this);
        bdt(this,this.clr);
    }
}

class Sign extends Tile // sign tile
{   constructor(x,y,txt)
    {   super(x,y);
        this.clr = '#7C653C';
        this.col = 1;
        this.txt = txt
    }
    draw()
    {   groundTile(this);
        sgn(this);
    }
    update()
    {   let t = this;
        if(sqr(((t.x+t.w/2) - (k.x+k.w/2))**2 + ((t.y+t.h/2) - (k.y+k.h/2))**2)<50)
        {   key[69] && adT(t.txt, "black", 100);
            k.i = 1;
        }
    }
}
class Ice extends Tile{ //ice tile
    constructor(x,y)
    {   super(x,y);
        this.G = 1;
    }

    update()
    {   for(var i = 0; i<F.length; i++) //changes player friction and aceleration
            this.C(F[i]) && (F[i].f = 0.98, F[i].acel = 0.1);    
    }
    draw()
    {   Rect(this.x,this.y,32,32,"lightblue");
    }
}
class Mat extends Tile{    // Math Tiles 
    constructor(x,y,typ,fix,num)
    {   super(x,y);
        let t = this;
        t.typ = typ; //Dg, Add, Sub, Mul, Div, Res, Ans 
        t.fix = fix;
        t.fix ? t.txC = "black" : t.txC = "crimson";    //text color
        t.val = 0;
        t.J = 7;    
        switch (t.typ)  //depending of the tiles type dgt varible receives different value
        {   case "Digit":
                !t.fix ? t.val = M.floor(M.random()*21) : t.val = num%21;
                t.dgt = t.val;
            break;
            case "Add":t.dgt = "+";break;
            case "Sub":t.dgt = "-";break;
            case "Mul":t.dgt = "*";break;
            case "Div":t.dgt = "/";break;
            case "Res":t.dgt = "=";break;
            case "Ans":t.dgt = 13;break;       
        }
        t.str = t.val;
    }

    opr(pre,nx){    
        let t = this;
        switch (t.typ)
        {   case "Add":nx.str = pre.str + nx.val;break;
            case "Sub":nx.str = pre.str - nx.val;break;
            case "Mul":nx.str = pre.str * nx.val;break;
            case "Div":nx.str = pre.str / nx.val;break;
            case "Res":
                t.str = pre.str;
                nx.str = pre.str;
            break;
            case "Ans":t.str = t.dgt = t.val = 13;break;          
        }
        return;
    }

    chg(num) {
        return(num);
    }

    draw()
    {   let t = this;
        mat(t);
        text(t.x+t.w/2, t.y+t.h/2, t.dgt, t.w/1.5, t.txC);
    }
    update()
    {   let t = this;   //
        if((sqr(((t.x+t.w/2) - (k.x+k.w/2))**2 + ((t.y+t.h/2) - (k.y+k.h/2))**2)<50) && !t.fix){
            k.i = 1;
            if(key[69])
            {   t.val++;
                t.val %= 21;
                t.dgt = t.val;
                t.str = t.val;
                key[69] = 0;
            }
        }
    }
}
//graphics
class Gbx extends Tile  //graphic box tile
{   constructor(x,y)
    {   super(x,y);
        let t = this;
        t.col = 1;
        t.boxes1 = {x:t.x, y:t.y, w:t.w, h:t.h};
        t.boxes2 = {x:t.x, y:t.y-t.h/1.4, w:t.w, h:t.h};
    }
    draw()
    {   box(this.boxes1);
        box(this.boxes2);
    }
}
class Gbo extends Tile //graphic box
{   constructor(x,y)
    {   super(x,y);
        this.col = 1;
    }
    draw(){box(this)};
}
class Gdi extends Tile //DirtTile 
{   constructor(x,y)
    {   super(x,y);
        this.r = (90*pI(rng()*4));
    }
    draw()
    {   groundTile(this);
        
        sB(3,'black');
        dir(this,this.r);
        sB(0);
    };
}
class Cnt extends Tile //Wall Counter tile
{   constructor(x,y)
    {   super(x,y);
        this.c = 'white';
        this.cnt = 0;
        this.col = 1;
    }
    draw()
    {   let t = this;
        waS(t);
        if(enC<=13) t.cnt=enC;
        if(t.cnt == 13)t.c = 'green';
        cnt(t,t.cnt,t.c);
    }
}
class F13 extends Tile  //Final room green tile
{   constructor(x,y)
    {   super(x,y);
    }
    draw()
    {   this.clr = c13;
        super.draw();
    }
}