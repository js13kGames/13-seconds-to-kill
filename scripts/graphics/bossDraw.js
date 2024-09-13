//dreinzen front body
function DFb(e)
{   i(e);
    Dbd(e,0);
    //hole
    sB(10,'black');
    Rect(x+w*2/5,y,w/5,h,'black');
    de1(0);
    de2(0);
    rotateEntity(e,180);
        de1(0);
        de2(0);
    res();
    sB(8,'red');
        mT(x+w*2.3/5,y,'#880D41');
        lT(x+w*2.8/5,y);
        lT(x+w*2.5/5,y+h);
        cP();
    sB(0);
    spk(e,0);
    spk(e,w/1.6);
}
//dreinzen front head
function DFh(e)
{   i(e);

    //face
    sB(10,'black');
    mT(x+w*1.5/5,y,'black');
    lT(x+w*1.5/5,y-h/3.25);
    lT(x+w*2/5,y-h/2.75);
    lT(x+w*3/5,y-h/2.75);
    lT(x+w*3.5/5,y-h/3.25);
    lT(x+w*3.5/5,y);
    cP();

    //eye
    Rect(x+w/2-w/16/2,y-h/4,w/16,h/32,'#FF8E54');
    Rect(x+w/2-w/16/2,y-h/4-h/32,w/16,h/32,'#EC082A');
    Rect(x+w/2-w/16/2,y-h/4+h/32,w/16,h/32);
    Rect(x+w/2+w/16/2,y-h/4,w/16,h/32);
    Rect(x+w/2-w/5.4/2,y-h/4,w/16,h/32);
    sB(0);
    
    Rect(x+w/2+w/16/2,y-h/4+h/32,w/32,h/32,'#670816');
    Rect(x+w/2+w/16/2,y-h/4-h/32,w/32,h/32,);
    Rect(x+w/2-w/8/2,y-h/4+h/32,w/32,h/32,);
    Rect(x+w/2-w/8/2,y-h/4-h/32,w/32,h/32,);
}

//dreinzen body 
function Dbd(e,s,b)
{   i(e);
    
    eli(x+w/2, y-h/12,   w/2.25*!s,h/4.5*!s,0,'#450462');
    eli(x+w/2, y-h/12,   w/2.8*!s,h/4.6*!s,0,'black');
    
    ctx.fillStyle = '#450462';
    bP();
    ctx.ellipse(x+w/2, y-h/12, w/2.25*s,h/4.5*s,0,M.PI-(60*M.PI/180), M.PI*2-(30*M.PI/180));
    ctx.fill();
    
    //hood
    mT(x+w*1/5,y,'#28013A');
    lT(x+w*1.5/5,y-h/2);
    lT(x+w*3.5/5,y-h/2);
    lT(x+w*4/5,y);
    cP();    

    eli(x+w/2, y-h/12,   w/2.25*b,h/4.5*b,0,'#450462');

    //collar
    mT(x+w*0.9/5, y+h/8,'#450462');
    lT(x+w*0.3/5, y-h/32);
    lT(x+w*4.7/5, y-h/32);
    lT(x+w*4.1/5, y+h/8);
    cP();

    //body
    mT(x,y+h,'#450462');
    lT(x+w*1/5,y);
    lT(x+w*4/5,y);
    lT(x+w,y+h);
    cP();    

    //collar detail
    mT(x+w*0.9/5, y+h/9, '#28013A');
    lT(x+w*4.1/5, y+h/9);
    lT(x+w*4.2/5, y+h/6);
    lT(x+w*0.8/5, y+h/6);
    cP();
}
//details
function de1(x1)
{   mT(x1+x+w*1.5/5, y, 'black');
    lT(x1+x+w*2/5,y);
    lT(x1+x+w*2/5,y+h/4);
    lT(x1+x+w*1.8/5,y+h/16);
    cP();
}
function de2(x1)
{   mT(x1+x+w*3.5/5, y, 'black');
    lT(x1+x+w*3/5,y);
    lT(x1+x+w*3/5,y+h/4);
    lT(x1+x+w*3.2/5,y+h/16);
    cP();
}
//spikes on the bottom of Dreinzen
function spk(e,x1)
{   i(e);
    mT(x1+x,y+h/1,'black');
    lT(x1+x+w/16, y+h/1.15)
    lT(x1+x+w/16, y+h/1.1)
    lT(x1+x+w*1/16, y+h/1.02)
    lT(x1+x+w*2/16, y+h/1.07)
    lT(x1+x+w*2.5/16, y+h/1.02)
    lT(x1+x+w*4/16, y+h/1.08)
    lT(x1+x+w*6/16, y+h/1)
    cP();
}
//staff of Dreinzen 
function stf(e,c,b)
{   i(e);
    e.c = b;
    let x1=0;
    let a = {x:x + w*2/4, y:y + h*0.5/4-c, w:-(w/4)*2, h:-(h/4)*2};
    e.a==e.sid && (rotateEntity(a, c*-10),x1 = 15);
        chageDirection(e);
            sB(5,'red');
            mT(x+w*3/4-x1, y+h/1.05-c, '#880D41');
            lT(x+w*3.4/4-x1, y+h/5-c);
            lT(x+w*3.5/4-x1, y-h/4-c);
            lT(x+w*4.5/4-x1, y-h/3.5-c);
            lT(x+w*4.75/4-x1, y-h/2-c);
            lT(x+w*5/4-x1, y-h/2-c);
            lT(x+w*4/4-x1, y-h/5-c);
            lT(x+w*3.75/4-x1, y+h/5-c);
            lT(x+w*3.4/4-x1, y+h/1.05-c);
            cP();
            sB(0)
            sB(10,'red')
            bal(x+w*3.75/4-x1, y-h/2-c, w/8, 'white');
            sB(0);
        res();
    e.a==e.sid && res();
    e.c = 0;
}