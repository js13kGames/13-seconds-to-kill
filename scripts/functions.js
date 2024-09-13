document.addEventListener("keydown", kD);
document.addEventListener("keyup", kU);
document.addEventListener("mousemove",mM);
document.addEventListener("mouseup",mU);
document.addEventListener('contextmenu', a=> {a.preventDefault()})
var M=Math;
var key = [];
var mou ={
    x:undefined,
    y:undefined
}
var ang = 0
function T(t,a){ return t = a;}
function mU(event)
{   if(event.button == 0 && !k.D)k.atk = 1;
    if(event.button == 2 && !k.M.c && !k.D) k.fAk = 1;
}

function mM(event)
{   mou.x = event.x- canvas.getBoundingClientRect().left;
    mou.y = event.y- canvas.getBoundingClientRect().top;
}

function kD(event)
{   key[event.keyCode] = 1;
    //console.log(event.keyCode)
}
function kU(event)
{   key[event.keyCode] = 0;
}
function Rect(x,y,w,h,c)
{   ctx.fillStyle = c;
    ctx.fillRect(x,y,w,h);
}
function bal(x,y,r,cor)
{   ctx.fillStyle = cor
    bP();
    ctx.arc(x, y, r, 0, M.PI*2);
    cP();
}
function eli(x,y,rw,rh,an,c)
{   ctx.fillStyle = c;
    bP();
    ctx.ellipse(x, y, rw, rh, an, 0, M.PI * 2);
    ctx.fill();
}
function d(e, w, h)
{   return sqr(((e.x+w/2) - (k.x+k.w/2))**2 + ((e.y+h/2) - (k.y+k.h/2))**2)*bli < dis;}

function drug()
{   let tx = rng()*(rng()<0.5?1:-1) *rev;
    let ty = rng()*(rng()<0.5?1:-1) *rev;
    t.x+=tx, t.y+=ty, translateCanvas(tx,ty);

    !tx && (translateCanvas(-t.x, -t.y),t.m(0));    
    if(abs(t.x)>2 || abs(t.y)>2)    t.x-=tx, t.y-=ty, translateCanvas(-tx,-ty);
}
function sgr(a,arr,rcv)
{   for(var i = 0;i<arr.length;i++)
        for(var j = 0; j<arr[i].length;j++)
            if(arr[i][j].J == a)
                rcv.push(arr[i][j]);
}
function shf(arr) 
{   let I = arr.length;
    // While there remain elements to shuffle...
    while (I)
    {   let rnI = M.floor(rng() * I);
        I--;
        [arr[I], arr[rnI]] = [arr[rnI], arr[I]];
    }
}

function adi(name,arr1)
{   var arr2 = [];
    for(var i = 0; i<arr1.length;i++)
       arr1[i] && (arr2[i] = arr1[i][name]);
    return arr2;
}

function dlg(str, clr) {
    Rect(0, canvas.height-100, canvas.width, 100, "rgba(255,255,255,0.5)");
    Rect(10, canvas.height-90, canvas.width-20, 80, "rgba(0,0,0,0.5)");
    text( canvas.width/2, canvas.height-50, str,20, clr);
}

function adT(str, clr, tim) {
    var ful = str;
    var ind = ful.indexOf(";")
    var cST = ful.slice(0,ind);
    var rST = ful.slice(ind+1);
    tBX.sTX = cST;
    tBX.aTX = rST;
    tBX.clr = clr;
    tBX.t = tim;
    tBX.cTM = tim;
}

function dS(event) {
    if (event.keyCode == 67) tBX.t = 0;
    document.removeEventListener("keyup", dS);
}

function saveCanvas(){ctx.save()};
function res(){ctx.restore()};
function translateCanvas(x,y){ctx.translate(x,y)};
function scaleCanvas(x,y){ctx.scale(x,y)};
function rotateCanvas(ang){ctx.rotate(ang)};
function abs(a){return M.abs(a)};
function bP(){ctx.beginPath()};
function cP()
{   ctx.closePath()
    ctx.fill();
};
function mT(x,y,cor)
{   ctx.fillStyle = cor;
    bP();
    ctx.moveTo(x,y)
};
function lT(x,y){ctx.lineTo(x,y)};
function rng(){return M.random()};
function sin(a){return M.sin(a)};
function cos(a){return M.cos(a)};
function sqr(a){return M.sqrt(a)};
function pI(a){return parseInt(a)};
function sB(n,c)
{   ctx.shadowColor = c;
    ctx.shadowBlur = n;
}

class Atk {
    constructor(nam, tim, act, atm) {
        this.nam = nam;
        this.tmr = {c: 30*tim, m: 30*tim};
        this.act = act;
        this.atm = {c: 30*atm, m: 30*atm};
    }
}

function adr(arr,rn,tle)
{   let d = 0;
    while(d<rn)
    {   let l = pI((rng()*20)+2);
        let c = pI((rng()*28)+2);
        if(arr[l+1][c] != 3 && arr[l-1][c] != 3 && arr[l][c+1] != 3 && arr[l][c-1] != 3)
            {if(arr[l][c] == 1 || arr[l][c] == 12) arr[l][c] = tle, d++;}
    }
}

//frzen 
var tles = [];
var tles2 = [];
var mps = [];
var times = [];
var endTimes = [];
function change(mp,tle2,time)
{   var index = tles2.indexOf(lvls[clv].m.a[mp.l][mp.c])
    // console.log(tles,tles2,mps,times,endTimes)
    // console.log()
    // console.log(!(lvls[clv].m.a[mp.l][mp.c].J==1))
    if(index == -1 && !(lvls[clv].m.a[mp.l][mp.c].J==1))
    {
        tles.push(lvls[clv].m.a[mp.l][mp.c]);
        lvls[clv].m.a[mp.l][mp.c] = tle2;
        mps.push(mp);
        tles2.push(lvls[clv].m.a[mp.l][mp.c]);
        times.push(0);
        endTimes.push(time);
    }else if(!(lvls[clv].m.a[mp.l][mp.c].J==1)){
        lvls[clv].m.a[mp.l][mp.c] = tle2;
        tles2[index] = lvls[clv].m.a[mp.l][mp.c];
        times[index] = 0;
        endTimes[index] = time;
    }
}

function count()
{   for(var i = 0; i<times.length;i++)
    {   
        if(times[i] >= endTimes[i])
        {   lvls[clv].m.a[mps[i].l][mps[i].c] = tles[i]
            tles2.splice(i,1);
            tles.splice(i,1);
            endTimes.splice(i,1);
            times.splice(i,1);
            mps.splice(i,1);
            i--;
            continue;
        }
        if(tles[i].constructor.name == tles2[i].constructor.name)
        {   tles2.splice(i,1);
            tles.splice(i,1);
            endTimes.splice(i,1);
            times.splice(i,1);
            mps.splice(i,1);
            i--;
        }
        times[i]++;
    }
}
