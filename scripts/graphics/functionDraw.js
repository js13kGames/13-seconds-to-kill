var zC = '#3A4A13';
var blk = 'black';
var wh = 'white';
function i(e){return x=e.x, y=e.y, w=e.w, h=e.h;}
//floor dirt effect
function DirtTile(arr)
{   let d = 0;
    while(d<10)
    {   let l = pI(rng()*22);
        let c = pI(rng()*30);
        arr[l][c] == 1 && (arr[l][c] = 11, d++);
    }
}
//TileGround
function groundTile(e)
{   Rect(e.x,e.y,32,32,"#24282E")
}
//text function
function text(x,y,text,px,color)
{   ctx.font = `${px}px Trebuchet MS`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
}

//function that make animation for the entity
function moveChar(e)
{   saveCanvas();
    translateCanvas(e.x+e.w/2, e.y+e.h/2);
    rotateCanvas(e.cnt*M.PI/180);
    translateCanvas(-(e.x+e.w/2), -(e.y+e.h/2));
}
//change direction of side animation
function chageDirection(e)
{   saveCanvas();
    e.c && (translateCanvas(e.x+e.w/2, e.y+e.h/2), scaleCanvas(-1,1), translateCanvas(-(e.x+e.w/2), -(e.y+e.h/2)));
}
//rotate the Entity
function rotateEntity(e,r)
{   saveCanvas();
        translateCanvas(e.x+e.w/2, e.y+e.h/2);
        rotateCanvas(r*M.PI/180);
        translateCanvas(-(e.x+e.w/2), -(e.y+e.h/2));
}
//scale the Entity
function scaleEntity(e,s)
{   saveCanvas();
        translateCanvas(e.x+e.w/2, e.y+e.h/2);
        scaleCanvas(s,s);
        translateCanvas(-(e.x+e.w/2), -(e.y+e.h/2));
}
//all functions for mmake easier to draw
function head(e,a){Rect(e.x + e.w/4, e.y - e.h/2, e.w/2, e.h/2, `rgba(255,255,255,${a||1})`)};
function pants(e){Rect(e.x + e.w*0.5/4, e.y+e.h*2.5/4, e.w*3/4, e.h/4, '#055769')};
function shirt(e, cl){Rect(e.x + e.w*0.5/4, e.y, e.w*3/4, e.h*1.25/2, cl)}
function eye(e, xa, ya, c, cl){Rect(e.x + e.w*xa, e.y - e.h*ya+c, e.w/8, e.h*1.3/8, cl)};
function zombieHead(e,c)
{   i(e);
    Rect(x + w/4-0.5, y-0.5+c, w/2+1, h/2+1, blk);
    Rect(x + w*2/8, y+c, w*3/8, h/2, zC);
    Rect(x + w*5/8-1, y+h/8+c, w/8+1, h*1.5/4, zC);
}
//------------------Side-----------------    
    //headSide
    function heS(e,b)
    {   i(e);
        head(e);
        Rect(x + w*2/8, y - h*4/8, w*4/8, h*0.75/8+1, '#D9D9D9');
        Rect(x + w*2/8, y - h*3.25/8, w*3/8, h/16+1);
        Rect(x + w*2/8, y - h*2.75/8, w/8, h/8+1);
        Rect(x + w*2.5/4, y - h*2.35/8, w/8, h*1.3/8, blk);

        Rect(x + w/4, y - h/2, w/2*b, h/10*b, 'red');
        Rect(x + w/4, y - h/2, w/13*b, h/4*b, 'red');
        Rect(x + w/3.3, y - h/2, w/13*b, h/6*b, 'red');
        Rect(x + w/1.7, y - h/2, w/13*b, h/4*b, 'red');
    }
    //HandLeg1Side
    function le1(e, c, cor)
    {   i(e);
        let b = {x:x + w*0.75/4, y:y + h*3/4, w:(w*1.25/4)*2, h:-(h/4)*2}
        rotateEntity(b,c*-5)
            Rect(b.x, b.y, b.w/2, -b.h/2, cor);
        res();
    }
    function hs1(e,c,cor){i(e), Rect(x + w*3/4 + c, y, w/4, h/4, cor)};
    function geS(e,c,y1,cor){i(e), Rect(x + w*4.15/4 - w/14 +c, y + h*y1/7, w/14, h/14,cor)};
    function gaS(e,c)
    {   i(e);
        Rect(x + w*3/4 + c, y, w/3.5, h/3.5, '#46464b');
        Rect(x + w*4.15/4 - w/7+c, y + h*1/3.5-h/14, w/7, h/14, blk);
        geS(e,c,0,'#0000FF');
        geS(e,c,0.1,'#FF0000');
        geS(e,c,0.2,'#00FF00');
    };
    //HandLegs2Side
    function hs2(e, c, cor, at)
    {   i(e);
        let a = {x:x + w*2/4, y:y + h*0.5/4-c, w:-(w/4)*2, h:-(h/4)*2};
        rotateEntity(a, c*-10+at);
            Rect(a.x, a.y, -a.w/2, -a.h/2, cor);
        res();
    }
    function le2(e,c,cor)
    {   i(e);
        let a = {x: x + w*2/4, y: y + h*3/4, w:-(w*1.25/4)*2, h:-(h/4)*2};
        rotateEntity(a, c*5);
            Rect(a.x, a.y, -a.w/2, -a.h/2, cor);
        res();
    }
    //bodySide
    function bdS(e, coS, coB, z, an)
    {   i(e);
        var a ={x: x + w*0.30/4, y:y, w:w*3.4/4, h: h};
        shirt(a,coS);
        z && (Rect(x + w*3/4-0.5, y-0.5+an, w/4+1, h/2+1, blk), Rect(x + w*3/4, y+an, w/4, h/2, zC), eye(e, 7/8, -1.35/8, an,'red'));
        !z && Rect(x + w*3.25/4, y- h*0.1/2, 2, h*1.2/2, '#D9D9D9');
        Rect(x + w*0.75/4-0.5, y- h*0.1/2-0.5, w*2.5/4+1, h*1.2/2+1, blk);
        Rect(x + w*0.75/4, y- h*0.1/2, w*2.5/4, h*1.2/2, coB);
        pants(a);
    }
//-----------------Back------------------
    //headBac
    function heB(e,b)
    {   i(e);
        head(e);
        Rect(x + w*2/8, y - h*4/8, w*4/8, h*2.25/8, '#D9D9D9');
        Rect(x + w*4/8-1, y - h*4/8-1, (w*2/8+2)*b, (h*4/8+2)*b, zC);
        Rect(x + w*2/8, y - h*4/8, w*1/16*b, h*2/8*b, 'red');
        Rect(x + w*2/8, y - h*4/8, w*2/16*b, h*1/12*b, 'red');
    }
    //bodyBack
    function bdB(e,colorShirt,coB)
    {   i(e);
        shirt(e,colorShirt);
        Rect(x + w*0.5/4-0.5, y - h*0.1/2-0.5, (w*3/4+1), (h*1.2/2+1), blk);      
        Rect(x + w*0.5/4, y - h*0.1/2, w*3/4, h*1.2/2, coB);
        pants(e);
    }
//--------------Front-------------------
    //player head on front side
    function heF(e,a)
    {   i(e);
        head(e,a);
        eye(e, 2.75/8, 2.35/8, 0,`rgba(0,0,0,${a||1})`);
        eye(e, 4.25/8, 2.35/8, 0,`rgba(0,0,0,${a||1})`);
        Rect(x + w*2/8, y - h*4/8, w*4/8, h*0.75/8, `rgba(217,217,217,${a||1})`);
        Rect(x + w*5/8, y - h*3.25/8, w/8, h/16);
        Rect(x + w*2/8, y - h*3.25/8, w/8, h/16);
    }
    //zombie head on front side
    function ZhF(e, c)
    {   zombieHead(e,c);
        eye(e, 2.75/8, -1.35/8, c,'red');
        eye(e, 4.25/8, -1.35/8, c,'red');
    }
    //body on frontside 
    function bdF(e)
    {   i(e);
        shirt(e,'#6F6F6F');
        let a = {w:w/4, h:h*1.2/2, y:h*0.1/2};
        Rect(x + w*0.5/4, y - a.y-0.5, a.w+1, a.h+1,blk);
        Rect(x + w*0.5/4, y - a.y, a.w, a.h, '#424242');
        Rect(x + w/3, y - a.y, 2, a.h, '#D9D9D9');
        siJ(e,'#424242');
        pants(e);    
    }
    //side jacket
    function siJ(e,c1)
    {   i(e);
        let a = {w:w/4, h:h*1.2/2, y:h*0.1/2};
        Rect(x + w*2.5/4-1, y - a.y-0.5, a.w+1, a.h+1,blk);
        Rect(x + w*2.5/4, y - a.y, a.w, a.h, c1);
        Rect(x + w*2/3-2, y - a.y, 2, a.h, '#D9D9D9');
    }
    //singular hand function
    function han(e,c,x1,at,cor)
    {   i(e);
        Rect(x1 + x, y + h*0.5/4-c+at/4, w/4, h/4, cor);
    }
    //gens of the gauntlet
    function gem(e,c,x1,co){ i(e), Rect(x1+x, y + h*0.4/3.5-c, w/14, h/14,co)};
    //Dreinzen gauntlet
    function gauntlet(e,c,x1)
    {   //gold
        i(e);
        Rect(x+x1, y + h*0.35/3.5+c, w/3.5, h/3.5, '#46464b');
        gem(e,-c,x1+w/64 ,'#0000FF');
        gem(e,-c,x1+w/3.5/2-w/14/2,'#FF0000');
        gem(e,-c,x1+w/3.5/2+w/18,'#0000FF');
        !(e.a == e.bac) && Rect(x+w/7+x1, y + h*1.1/3.5+c, w/7, h/14, blk), gem(e,-c,x1+w/3.5/2+w/18,'#00FF00');;      
    }
//-------------
    //both hands in one function
    function HAN(e, c, cor)
    {   han(e,-c, 0,0,cor);
        han(e, c, e.w*3/4,0,cor);
    };
    //both legs in one function 
    function leg(e, cl, cr, c1,c2)
    {   i(e);
        let bl = {x: x + w*0.5/4, y:y + h*3/4, w:w*1.25/4, h:-(h/4)*2}
        let br = {x: x + w*2.25/4, y: bl.y, w: bl.w, h: bl.h};
    
        scaleEntity(bl, cl);
        Rect(bl.x, bl.y, bl.w, -bl.h/2, c1);
        res();
        
        scaleEntity(br, cr);
        Rect(br.x, br.y, br.w, -br.h/2, c2);
        res();
    };
//----Srd draw----
    function sword(e,x1,c,at,cor,f)
    {   i(e);
        //all the rotates, translates and Rects was maked trying to do a fluid animation
        let b = {x:x + w*2/4, y:y + h*0.5/4, w:-(w/4)*2, h:-(h/4)*2};
        let s = 0;
        e.a!=e.sid && (s=at/4);
        e.a==e.sid && rotateEntity(b, c*-10+at); 
            Rect(x1 - 2.5, y+h/16-c +s, w/4+5, h/16, blk);
            Rect(x1 + w/10, y+h*0.5/4-c +s, w/16, h/4, '#552A18');
            Rect(x1 + w/16, y+h*1.5/4-c +s, w/8, h/8, '#6F6F6F');
                mT(x1 + w/24, y-h*4/8+0.5-c+s,cor);
                lT(x1 + w/8, y-h*6/8+0.5-c+s);
                lT(x1 + w/4.8, y-h*4/8+0.5-c+s);
            cP();
            Rect(x1+w/24, y-h/2-c+s, w/6, h*9/16, cor);

        var a = (c*-0*M.PI/180)
        e.a==e.sid && (res(), a = ((c*-10+at)*M.PI/180));
        
        let bl1 = {x:(x1+w/24),y:(y-h/2 - c+s)+20*sin(a),w:w/6,h:h*9/16};
        let bl2 = {x:(x1+w/24)-h*5.1/8,y:(y-h/2 - c)+5*sin(a),w:bl1.h, h:bl1.w}; 
        e.c && (bl1.x-=w/4, bl2.x+=bl2.w);
        let bl = bl1;
        a*180/M.PI<-45 && (bl = bl2);

        //particules for sword
        //dead particle
        if(e.D)   for (let i = 0; i < 5; i++) par.push(new Par(bl, 'red', {x:bl1.x+bl1.w/2, y:bl1.y+bl1.h/2}));
        //fire particle
        if(f || bli) for (let i = 0; i < 5; i++) 
            !k.D ? par.push(new Par(bl, 'ora')) : par.push(new Par(bl, 'ora',0,0,1));
        }
    //the atack "slash" of the function 
    function sla(e)
    {   i(e);
        ctx.fillStyle = 'red';
        rotateEntity(e, ang*180/M.PI);
            bP();
                mT(x, y);
                lT(x + w/2, y + h/6);
                lT(x + w, y + h/2);
                lT(x + w/2, y + h/1.2);
                lT(x, y + h);
                lT(x+ w/3, y + h/1.3);
                lT(x+ w/2, y + h/2);
                lT(x+ w/3, y + h/4);
            cP();
        res();
        ctx.fill();
    }
    //box
    function box(e)
    {   i(e);
        let a = {x:x+w/2-w/16, y:y+w/3-6, w: w/8, h: h};
        let b = {x:x+w/2-w/16, y:y-7.5, w: w/16, h: h/1.2};
        let li = '#E29628', mli = '#B5701D';
        Rect(x, y, w, h, '#995F12');
        rotateEntity(a,-60);
            Rect(a.x,a.y,a.w,a.h, mli);
        res();
        rotateEntity(b,82);
            Rect(b.x,b.y,b.w,b.h, mli);
        res();
        Rect(x+1,y+1,w/8-2,h-2, li);
        Rect(x+1,y+1,w-2,h/12-2, li);
        Rect(x+1,y+h/4+1,w-2,h/8-2, li);
        Rect(x+1+w*0.875,y+1,w/8-2,h-2, li);
        Rect(x+1,y+h*0.875+1,w-2,h/8-2, li);
    }
    //interact function, puts a "[E]" on top of player head
    function int(e)
    {   i(e);
        text(x+w/2, y-h/1.1, '[E]', w/2, wh);
    }
    //Life bar function, for all enemies
    function lB(e,c,p,w1,d,l)
    {   i(e)
        let ww = (e.l1.c/e.l1.m)*l || 1;
        sB(3,blk);
        mT(x,y-p-d, c);              //b
        lT(x+w*ww,y-p-d);        //b
        lT(x-w1+(w+w1*2)*ww,y-p);//a
        lT(x+w*ww,y-p+d);         //after
        lT(x,y-p+d);              //after
        lT(x-w1,y-p);         //a
        cP();
        sB(0,blk);
    }
