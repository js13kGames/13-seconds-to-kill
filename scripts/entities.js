//class Vtor
class V 
{   constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    //vector sum
    s(v) {
        this.x += v.x;
        this.y += v.y;
    }

    //vector dision
    d(v) {
        this.x /= v;
        this.y /= v;
    }

    //vector multiply
    m(v) {
        this.x *= v;
        this.y *= v;
    }

    //vector limiter
    l(v){
        let t = this;
        t.x = M.min(M.max(t.x, -v), v);
        t.y = M.min(M.max(t.y, -v), v);
    }
}

//Entity class, parent class of everything who can k
class E
{   constructor(x, y, w, h)
    {   let t = this;
        t.x = x; 
        t.y = y; 
        t.w = w/2;
        t.h = h/2;

        //direction, uses to set animation type
        t.d = new V(0,0);
        //speed
        t.s = new V(0,0);
        //change direction of side animation
        t.c = 0;
        //counter for make animation
        t.n = 1;
        //variabel what make animation return
        t.r = 0;
        //Ftion of all entityes
        t.f = 0;
    }

    draw()
    {   let t = this;
        //differentiates types of animation
        if(t.d.x){   t.a = t.sid, t.c = 0; if(t.d.x<0) t.c = 1;}
        if(t.d.y>0 && abs(t.d.y)>abs(t.d.x))  t.a = t.fro, t.c=0;
        if(t.d.y<0 && abs(t.d.y)>abs(t.d.x))  t.a = t.bac, t.c=0;

        //animation counter for moving effect
        if(t.s.x || t.s.y)
        {   t.n++;
            if(t.r)    t.n-=2;

            if(t.n>=3 || t.n<=-3)t.r = !t.r;
        }
        else    t.n>0 ? t.n-=0.25 : (t.n<0 ? t.n+=0.25 : null);

        t.a();
    }
    //function that load the animation
    a(){this.fro()};

    //colision function that checks with others entityes
    L(oth)
    {   let t = this;
        for(let i=0;i<oth.length;i++)
        {   if (t.x + t.w >= oth[i].x &&     
            t.x <= oth[i].x + oth[i].w &&       
            t.y + t.h >= oth[i].y &&       
            t.y <= oth[i].y + oth[i].h)    return 1;
        }
    }
    
    //colision auxiliar function, collide with ever Tile with 'col' variable == true
    u(o)
    {   return (lvls[clv].m.a[o.l][o.c].col);}
    
    //colision function, check the 4 end points of the entity
    C()
    {   let t = this,
        a = {c:pI((t.x)/32), l:pI((t.y)/32)},
        b = {c:pI((t.x+t.w)/32), l:pI((t.y)/32)},
        c = {c:pI((t.x+t.w)/32), l:pI((t.y+t.h)/32)},
        d = {c:pI((t.x)/32), l:pI((t.y+t.h)/32)};
        return (t.u(a) || t.u(b) ||t.u(c) ||t.u(d));
    }
}
//class player
class Player extends E
{   constructor(x,y,w,h)
    {   super(x,y,w,h)
        let t = this;
        //atack animation counter
        t.A = 0;

        t.F = 0;
        t.W = 0;

        t.b = [];
        t.m = 5;
        t.i = 0;
        t.e = 0;
        //player life timer, 13seconds
        t.t = {c:30*13, m:30*13};
        //player atack fire ball counter
        t.M = {c:0, m:60};
        t.D = 0;
        t.Q = 0;
    }
    sid()
    {   let t = this;
        chageDirection(t);
            //gaS(t,t.n);
            hs1(t, t.n,wh);
            le1(t, t.n,wh);
            moveChar(t);
                heS(t);
                bdS(t, '#6F6F6F','#424242',0);
            res();
           sword(t, t.x+t.w*2/4, t.n, t.A,'red', t.W);
            hs2(t, t.n,wh, t.A,0);
            le2(t, t.n,wh,0);
        res();
    }
    bac()
    {   let t = this;
       sword(t, t.x, -t.n, t.A,'red', t.W);
        
        han(t, -t.n, 0, t.A, wh,0);
        han(t, t.n, t.w*3/4, 0, wh,0);
        //gauntlet(t, -t.n, t.w*3/4)
        leg(t, (t.n<0 ? 0.8 : (!t.n ? 1 : 1.2)), (t.n>0 ? 0.8 : (!t.n ? 1 : 1.2)), wh,wh,0);
        
        moveChar(t);
            heB(t,'#424242');
            bdB(t,'#6F6F6F','#424242', 1);
        res();
    }
    fro()
    {   let t = this;
        moveChar(t);
            heF(t);
            bdF(t);
        res();
        han(t, t.n, t.w*3/4, t.A, wh,0);
        han(t, -t.n, t.w*0/4, 0, wh,0);
        // HAN(t, t.n, wh, 0);
        sword(t, t.x+t.w*3/4, t.n, t.A,'red', t.W);
        //gauntlet(t, t.n, 0);
        leg(t, (t.n<0 ? 0.8 : (!t.n ? 1 : 1.2)), (t.n>0 ? 0.8 : (!t.n ? 1 : 1.2)), wh,wh,0);
    }
    ATK()
    {   let t = this;
        var h = {x:t.x + 40*t.d.x, y:t.y + 60*t.d.y-t.h/2, w:t.h, h:t.w*1.5};
        //r(t.x + 40*t.d.x, t.y + 60*t.d.y-t.h/2, t.h, t.w*1.5,"red");
        sla(h);
        zzfxP(hitS);

        for(var i=0; i<lvls[clv].boxes.length; i++){
            let b = lvls[clv].boxes[i].box; 
            b.L([h]) && (b.x = b.spX, b.y = b.spY);
        }

        for(var i = 0; i<ENE.length; i++)
        {   ENE[i].L([h]) && (ENE[i].l1.c-=50);
        }
    }
    fir()
    {   let t = this;
        zzfxP(firS)
        t.b.push(new Ba(t.x+t.w/2, t.y, 16, 16, ang)),t.M.c++;
    }

    k(o) 
    {   let t = this;
        t.x += t.s.x*abs(t.s.x/t.len)*o, t.y += t.s.y*abs(t.s.y/t.len)*o;}

    update()
    {   let t = this;
        t.M.c && t.M.c++;
        if(t.M.c == t.M.m) t.M.c = 0;
        //atack animation functions
        if(t.atA)
        {   t.A+=20;
            t.atk = 0;
            t.A>0 && (t.A=0, t.ATK(), t.atA = 0);
        }        
        if(t.atk)
        {   t.A-=15;
            if(t.A<-90) t.atA = 1;
        }
        if(t.fAk && !t.M.c)
        {   t.F++;
            t.W = 1;
            if(t.F > 30) t.W = 0, t.F = 0,t.fAk = 0, t.fir();
        }
        //dead checker, ta comentado rogerão mete ba meu velho!
        //se quiser tirar as particulas pra teste ou whatever ta la no functionYa S, 
         if(t.D) 
         {  key = [];
            t.s.m(0);
            ang = M.PI/2;
            t.Q++;
            if(t.Q > 120){
                clearInterval(tim);
                tim = setInterval(dead,1000/30);
            }
        }

        t.i && int(t);
        t.i = 0; 
        
        t.len = t.s.x||t.s.y ? sqr(t.s.x**2+t.s.y**2) : 1;
        t.k(1);
        t.C() && (t.k(-1), t.s.m(0));
        for(var i=0; i<lvls[clv].boxes.length; i++)
            t.L([lvls[clv].boxes[i].box]) && (lvls[clv].boxes[i].box.psh(t, t.d.x, t.d.y), t.k(-1));
        
        t.s.x *= t.f;
        t.s.y *= t.f;
        if(abs(t.s.x)<0.05) t.s.x = 0;
        if(abs(t.s.y)<0.05) t.s.y = 0;

        // t.n==3 && zzfx(...[2,.2,70,.05,.1,.15,4,.8,,.1,,,,.1,.5,0,.3,.5]);
        
        let mp = {c:pI((t.x+t.w/2)/32), l:pI((t.y+t.h/2)/32)}
        if(t.e){
            for(let l=-1;l<2;l++)
                for(let c=-1;c<2;c++)
                    change({l:l+mp.l,c:c+mp.c}, new Ice((c+mp.c)*32,(l+mp.l)*32),300);
        }
        t.t.c <= 0 && (t.D=1, t.t.c = 0); 
        t.t.c > t.t.m && (t.t.c = t.t.m);
        t.t.c > 0 && t.t.c--;
    }
}
class Ba extends E
{   constructor(x,y,w,h,a)
    {   super(x,y,w,h);
        this.a = a;
    }
    draw()
    {   let t = this;
        Rect(t.x,t.y,t.w,t.h,'red');
        for (let i = 0; i < 5; i++) par.push(new Par(t, 'ora'));
    }
    I()
    {   let t = this;
        if(t.C())  return 1;
        for(var i=0; i<lvls[clv].boxes.length; i++)
            if(t.L([lvls[clv].boxes[i].box])) return 1;

        for(var i = 0; i<ENE.length; i++)
            if(ENE[i].L([t]))
            {   ENE[i].l1.c-=100;
                return 1;
            }
    }
    update()
    {   let t = this;
        t.x += cos(t.a)*10;
        t.y += sin(t.a)*10;

        let mp = {c:pI((t.x+t.w/2)/32), l:pI((t.y+t.h/2)/32)}
        lvls[clv].m.a[mp.l][mp.c].G && change(mp, new Floor(mp.c*32,mp.l*32),30);
    }
}
class O extends Ba 
{   constructor(x,y,w,h,a)
    {   super(x,y,w,h,a);
        this.x += this.w/2;
    }
    I()
    {   let t = this;
        if(t.C())      return 1;
        for(var i=0; i<lvls[clv].boxes.length; i++)
            if(t.L([lvls[clv].boxes[i].box])) return 1;

        if (k.L([t])) {
            k.t.c -= 30;
            return 1;
        }    
    }
    update()
    {   let t = this;
        super.draw();
        t.x += cos(t.a)*15;
        t.y += sin(t.a)*15;
        let mp = {c:pI((t.x+t.w/2)/32), l:pI((t.y+t.h/2)/32)}
        !lvls[clv].m.a[mp.l][mp.c].uFr && (lvls[clv].m.a[mp.l][mp.c].uFr = 1);
    }
}
class Met{
    constructor(dtx,dty,w,h,a) {
        let t = this;
        t.dtx = dtx;
        t.dty = dty;
        t.w = w;
        t.h = h;
        t.a = a;
        t.x = cos(a)*(-400)+dtx;
        t.y = sin(a)*(-400)+dty-h;
    }
    update()
    {   let t = this;
        Rect(t.x,t.y,t.w,t.h,"rgb(161, 81, 35)");
        for (let i = 0; i < 5; i++) par.push(new Par(t, 'ora'));
        t.x += cos(t.a)*10;
        t.y += sin(t.a)*10;
        bal(t.dtx, t.dty, 50, "rgba(255,0,0,"+(((100*t.y)/t.dty)/5)/100+")");
    }
}

class Box extends E 
{   constructor(x,y) 
    {   super(x,y,64,64);
        this.spY = y; 
        this.spX = x; 

    }
    psh(obj)
    {   let t = this;
        t.s.x = obj.s.x, t.s.y = obj.s.y;
    }

    draw()
    {   box(this);
    }

    update()
    {   let t = this;
        t.x += t.s.x
        t.y += t.s.y

        t.C() && (t.x -= t.s.x,t.y -= t.s.y,t.s.x = 0,t.s.y = 0);
        
        t.s.x *= t.f;
        t.s.y *= t.f;
        abs(t.s.x)<0.05 && (t.s.x = 0);
        abs(t.s.y)<0.05 && (t.s.y = 0);
    }

}
class En extends E
{   constructor(x,y,w,h)
    {   super(x,y,w,h);
        let t = this;
        t.anC = 0;
        t.gra = 0;

        t.spe = 1;
        t.dmg = .5;
        t.spV = new V(0,0);
        t.acV = new V(0,0);
        t.sVM = 2;
        t.tVM = 1.25;
        t.r = 50;
        //enemy radius
        t.raE = 50;
        //kyer radius
        t.raP = 400;
        //kyer max radius
        t.rPM = 600;
        t.wH = 1;
        t.wHa = 1;
    }
    I()
    {  return this.D;
    }
    wlk(x,y) 
    {   this.x += x;
        this.y += y;
    }
    lfB(t)
    {   t.anC>=15 && (t.D = 1, k.t.c+=t.rec, enC++);
        if(t.l1.c<=0)
        {   t.anC += 1;
            for (let i = 0; i < 5; i++) par.push(new Par(t, 'red'));
            blo.push(new Blo(t));
            zzfx(...[,,31,.04,.1,.71,4,.1,5,6,,,,1.1,,1,,.35,.25,.19]);
            return 1;
        }
    }
    update()
    {   let t = this;
        //animate functions
        //vetor da soma entre todos os inimigos
        let sV = new V(0,0);
        //vetor entre o inimigo e o kyer
        let tV = new V(0,0);
        //n inimigos
        let n = 0;

        for (let oth of ENE) 
        {   //distancia entre os inimigos
            let d = sqr(((t.x+t.w/2) - (oth.x+oth.w/2))**2 + ((t.y+t.h/2) - (oth.y+oth.h/2))**2);
            //distancia entre o inimigo e o kyer
            let dp = sqr(((t.x+t.w/2) - (k.x+k.w/2))**2 + ((t.y+t.h/2) - (k.y+k.h/2))**2);
            //persegue o kyer caso o kyer esteja dentro do seu raio de detecção
            if (dp <= t.raP) {
                tV = new V((k.x+k.w/2) - (t.x+t.w/2), (k.y+k.h/2) - (t.y+t.h/2));
                t.raP = t.rPM;
            } else {
                //diminui o raio de detecção após o kyer sair
                if (t.raP > 150) t.raP -= 0.2;
            }

            if (t != oth && d <= t.raP && (oth.raP > t.raP || t.raP > oth.raP)) oth.raP = t.raP;
            

            if (t != oth && d <= t.raE) 
            {   let v = new V((t.x+t.w/2) - (oth.x+oth.w/2), (t.y+t.h/2) - (oth.y+t.h/2));
                n++;
                sV.s(v);
            }
            
            n && sV.d(n);
            let s1 = sqr((sV.x)**2 + (sV.y)**2);
            s1 && sV.d(s1);
            sV.m(t.spe*t.sVM);
            
            let s2 = sqr((tV.x)**2 + (tV.y)**2);
            s2 && tV.d(s2);
            
            tV.m(t.spe*t.tVM);
            t.acV.s(sV);
            t.acV.s(tV);
            t.spV.s(t.acV);
            t.spV.l(t.spe);
            dp<28 && (k.t.c-=t.dmg, (t.wlk(-t.spV.x*(M.sign(t.sVM)), -t.spV.y*(M.sign(t.sVM)))));
            
            t.anC && (t.spV.m(0), tV.m(0));
            t.d = tV;
            t.s = tV;
        }
        
        t.wlk(t.spV.x,t.spV.y);
        t.C() && (t.wlk(-t.spV.x, -t.spV.y));   
        
        t.acV.m(0);

        
        t.spV.x *= t.f;
        t.spV.y *= t.f;
        t.spV.x<0.1 && (t.spV.x = 0);
        t.spV.y<0.1 && (t.spV.y = 0);
    }
}
class Mi extends En
{   constructor(x,y,w,h)
    {   super(x,y,w,h);
        let t = this;
        t.l1 = {m:100,c:100};
        t.rec = 90;
    }
    sid()
    {   let t = this;
        chageDirection(t);
            le1(t, t.n, zC);
            moveChar(t);
                bdS(t, '#5C0C0C', '#5C0C0C',1, t.anC);
            res();
            hs2(t, t.n, zC, 0,0);
            le2(t, t.n, zC,0);
        res();
    }
    bac()
    {   let t = this;
        HAN(t, t.n, zC,0);
        leg(t, (t.n<0 ? 0.8 : (!t.n ? 1 : 1.2)), (t.n>0 ? 0.8 : (!t.n ? 1 : 1.2)), zC,zC,0);
        
        moveChar(t);
            bdB(t, '#5C0C0C', '#5C0C0C',1);
        res();
    }
    fro()
    {   let t = this;
        moveChar(t);
            bdB(t, '#5C0C0C', '#5C0C0C',1);
            ZhF(t, t.anC);
        res();
        HAN(t, t.n, zC,0);
        leg(t, (t.n<0 ? 0.8 : (!t.n ? 1 : 1.2)), (t.n>0 ? 0.8 : (!t.n ? 1 : 1.2)), zC,zC,0);
    }
    draw()
    {   let t = this;
        super.draw();
        !t.lfB(t) && (lB(t, wh,t.h/4,3,3,0),lB(t, 'red',t.h/4,3,3,1));
    }
}
//Cuepted
class Dre extends En
{   constructor(x,y,w,h)
    {   super(x,y,w,h);
        let t = this;
        t.l1 = {m:1000, c:1000};
        t.sVM *= -1;
        t.tVM *= -1;
        //teleport tile
        t.tpt = []
        //teleport clock
        t.tpc = {c:0, m:30*5};
        t.tpc.c = t.tpc.m;
        //attack stuff
        t.ats = [new Atk("Frb", 2, 0, 0.5),
                    new Atk("Ice", 6, 0),
                    new Atk("Mtr", 10, 0, 0.2),
        ]; //FireB, Wall, Ice, Meteor, Aura.
        //fireB array
        t.b = [];
        //meteor tile
        t.mtT = [];
        //meteor array
        t.mtr = [];

    }
    sid()
    {   let t = this;
        chageDirection(t);
            gaS(t,t.n);
            translateCanvas(0,t.n/8)    
                Dbd(t, 1);
                spk(t,0);
                spk(t,t.w/3);
                spk(t,t.w/1.6);
            translateCanvas(0,-t.n/8)    
            stf(t, t.n/5);
            hs2(t, t.n/5,blk, 0,0);
        res();
        for (let i = 0; i < 10; i++) par.push(new Par(t, 'bla'));
    }
    fro()
    {   let t = this;
        translateCanvas(0,t.n/8);
            DFb(t, t.n);
            DFh(t, t.n);
        translateCanvas(0,-t.n/8);
        HAN(t, t.n, blk,0);
        stf(t, t.n);
        gauntlet(t, t.n, 0);
        for (let i = 0; i < 10; i++) par.push(new Par(t, 'bla'));
    }
    bac()
    {   let t = this;
        stf(t, -t.n,1);
        HAN(t, t.n, blk,0);
        gauntlet(t, -t.n, t.w*3/4);
        translateCanvas(0,t.n/8)    
            Dbd(t, 0, 1);
            spk(t,0);
            spk(t,t.w/3);
            spk(t,t.w/1.6);
        translateCanvas(0,-t.n/8)   
        for (let i = 0; i < 10; i++) par.push(new Par(t, 'bla'));
    }
    tlp() {
        let t = this;
        t.tpt = [];
        sgr(8, lvls[clv].m.a, t.tpt);
        var chs = t.tpt[pI(rng()*(t.tpt.length))];
        t.x = chs.x-t.w/2;
        t.y = chs.y-t.h/2;
        let dp = sqr(((t.x+t.w/2) - (k.x+k.w/2))**2 + ((t.y+t.h/2) - (k.y+k.h/2))**2);
        (t.C() || chs.x == undefined || chs.y == undefined || (dp < 250 || dp > 700)) && t.tlp();
    }
    raG() {
        let t = this;
        console.log(M.floor(0.5))
        let slA = M.floor(rng()*(t.ats.length));
        var slc = 0;
        if(t.ats[slA].nam == "Frb") (adT("Die!;", "purple", 100), slc = 0);
        if(t.ats[slA].nam == "Ice") (adT("Freeze, insect!;", "purple", 100), slc=1);
        if(t.ats[slA].nam == "Mtr") (adT("Behold the heaven's wrath!;", "purple", 100), sgr(8, lvls[clv].m.a, t.mtT), slc=2);
        t.ats[slc].act = true;
        t.ats[slc].tmr.c = t.ats[slc].tmr.m;
        (t.ats[slc].nam == ("Frb" || "Mtr")) && (t.ats[slc].atm.c=t.ats[slc].atm.m);
    }
    //set fireB
    sFb() {
        let t = this;
        t.ats[0].tmr.c--;
        t.ats[0].atm.c--;
        var ang = M.atan2(k.y - (t.y), k.x - (t.x+t.w/2))
        !t.ats[0].atm.c && (t.b.push(new O(t.x, t.y, 40, 40, ang)), t.ats[0].atm.c = t.ats[0].atm.m);
        !t.ats[0].tmr.c && (t.ats[0].act = 0);
    }
    //set ice
    sIc() {
        let t = this;
        t.ats[1].tmr.c--;
        !t.ats[1].tmr.c && (t.ats[1].act = 0, k.e = 0);
    }
    //set meteor
    sMt() {
        let t = this;
        t.ats[2].tmr.c--;
        t.ats[2].atm.c--;
        var chs = t.mtT[pI(rng()*(t.mtT.length))];
        !t.ats[2].atm.c && (t.mtr.push(new Met(chs.x, chs.y, 40, 40, 135*M.PI/180)), t.ats[2].atm.c = t.ats[2].atm.m);
        !t.ats[2].tmr.c && (t.ats[2].act = 0, t.mtT = []);
    }
    draw()
    {   let t = this;
        super.draw();
        !t.lfB(t) && (lB(t, wh,t.h/1.5,5,4,0),lB(t, 'purple',t.h/1.5,5,4,1));
    }
    update() {
        let t = this;
        t.tpc.c > 0 ? t.tpc.c-- : (t.tpc.c = t.tpc.m, t.raG(), t.tlp());
        super.update();
        t.ats[0].act && (t.sFb());
        t.ats[1].act && (k.e = 1, t.sIc());
        t.ats[2].act && (t.sMt());
        for (let i = 0; i < t.mtr.length; i++) {
            t.mtr[i].update();
            let dp = sqr(((t.mtr[i].dtx) - (k.x+k.w/2))**2 + ((t.mtr[i].dty) - (k.y+k.h/2))**2);
            if (t.mtr[i].y+t.mtr[i].h/2 >= t.mtr[i].dty || t.mtr.x <= t.mtr[i].dtx) ((dp < 50 && (k.t.c-=90)),t.mtr.splice(i,1), i--);        }
        upT(t.b);
        if(t.anC>=14)
        {   clearInterval(tim);
            tim = setInterval(vic,1000/30);
            
        }
    }
}