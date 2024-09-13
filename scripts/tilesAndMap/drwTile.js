//draw the Wall if its on the top or on the bottom
function waF(e)
{   i(e);
    Rect(x,y+h-1,w,1,'black');
    Rect(x,y,w,1);
    wLi(x, y);
    Rect(x,y+h*1/3,h,1);
    wLi(x+w*1/8, y+h*1/3);
    Rect(x,y+h*2/3,h,1);
    wLi(x+w*1/32, y+h*2/3);
    // Rect(x,y,w,h,'rgba(255,0,0,0.1)');
}
//help the waF function to make the lines of the wall 
function wLi(x,y)
{   Rect(x,y,1,10.6);
    Rect(x+32*1/4,y,1,10.6);
    Rect(x+32*2/4,y,1,10.6);
    Rect(x+32*3/4,y,1,10.6);
}
//draw the Wall if its on the sides 
function waS(e)
{   i(e);
    Rect(x,y,32,32,'#20252E');
    Rect(x,y,1,32,'#6D798B');
    Rect(x+31,y,1,32);
}
//checker to find on what side are the next wall
function nex(e,dx,dy)
{   i(e);
    // console.log(lvls[clv].m.a[(y)/32+1][(x)/32+1*dx])
    if(!lvls[clv].m.a[(y)/32+dy] || !lvls[clv].m.a[(y)/32+dy][(x)/32+1*dx]) return;
    return lvls[clv].m.a[(y)/32+dy][(x)/32+1*dx].J;
}
//draw the dirty tile
function dir(e,rt)
{   i(e);
    (e,rt);
        Rect(x+w*0.4/3,y+h*1.6/3,w/5,h/5,'#4C4C4C');
        Rect(x+w*1.7/3,y+h*2/3,w/3,h/4,'#4C4C4C');
        Rect(x+w*0.2/3,y+h*0.2/3,w/3,h/3,'#333333');
        Rect(x+w*2/3,y+h*0.5/3,w/4,h/5,'#333333');
    res();
}
//draw the buttons
function btn(e, cor)
{   i(e);
    eli(x+w/2, y+h/2, w/3, h/8, 0, cor);
    eli(x+w/2, y+h/1.2, w/2.5, h/5, 0, 'gray');
    eli(x+w/2, y+h/1.2, w/3, h/8, 0, cor);
    Rect(x+w/6, y+h/2, w/1.5, h/3, cor);
}
//draw the spaws
function spw(e)
{   //r(e.x,e.y,e.w,e.h,'red');
    i(e);
    Rect(x+w/8,y+h/8,w*0.75,h*0.75,'#C6C6C8');
    Rect(x+w/8,y+h/8,w*0.75/8,h*0.75,'red');
    Rect(x+w/8,y+h/8,w*0.75/4,h*0.75/2.5,'red');
    Rect(x+w*0.05,y+h/1.5,w*0.9,h/4,'#D9D9D9');
}
//draw the sign
function sgn(e)
{   i(e);
    Rect(x,y,w,h/1.75,'#7C653C');
    Rect(x+w/2.2,y,w/8,h,'#7C653C');
    Rect(x+w*0.1,y+h/1.75*0.5/4,w*0.8,h/3/4,'#574220');
    Rect(x+w*0.1,y+h/1.75*1.75/4,w*0.8,h/3/4,'#574220');
    Rect(x+w*0.1,y+h/1.75*3/4,w*0.8,h/3/4,'#574220');
}
// draw the box destiny tile, like a X (puzzle)
function bdt(e,c)
{   i(e);
    X(c);
    rotateEntity(e,90)
        X(c);
    res();
}
//helper for the bdt function 
function X(c)
{   mT(x,y+h/1.25,c);
    lT(x+w/1.25,y);
    lT(x+w,y);
    lT(x+w,y+h*0.25);
    lT(x+w*0.25,y+h);
    lT(x,y+h);
    cP();
}
//draw the counter tile,the enemier die counter
function cnt(e,c,cor)
{   i(e);
    Rect(x+1,y+1,w-2,h-2,'#20252E');
    sB(5,'black')
    text(x+w/2,y+h/2,c,w/1.25,cor);
    sB(0)
}
//draw the morse box, sadly dont has on the final version of the game
// function mor(e)
// {   i(e);
//     Rect(x+w/2-w/1.5/2,y-h/3,w/1.5,h/2,blk);
//     text(x+w/2, y-h/3, e.val[e.i%e.val.length], w, wh);
// }

//draw the math tile (puzzle)
function mat(e)
{   i(e);
    Rect(x+1,y+1,w-2,h-2,'#30353D');
}