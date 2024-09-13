function upT(e)
{   for (let i = 0; i < e.length; i++)
    {   e[i].update();
        if (e[i].I()) e.splice(i, 1), i--;
    }
}
class Par 
{   constructor(e, c, cen, me, de)
    { let t = this;
      t.x = e.x+rng()*e.w;
      t.y = e.y+rng()*e.h;
      t.vx = -1+rng()*2;
      t.vy = -5+rng()*4;
      t.a = 1;
      t.r = 3;
      me && (t.r = 10, t.vy = -rng()*40);
      de && (t.r = 5);
      t.w = e.w;
      t.h = e.h;
      t.cor = c;
      t.e = e;
      t.cen = cen;
      if(cen)
      {   var magP = rng()*100;
          var angP = rng()*(2*M.PI); 
          var VP = {x: magP*cos(angP), y: magP*sin(angP)}
          t.x += VP.x;
          t.y += VP.y;
      }
    }

    I(){return this.a<0}
    update() 
    { let t = this;
      if(!t.cen)
      { t.update = function()
        { t.x += t.vx;
          t.y += t.vy*(1-rev*2);
          t.a -= 0.03;
          if(t.r>1) t.r -= 0.05+rng()*0.05;
        }
      }
      else
      { let t = this; 
        t.update = function()
        { var mag = M.sqrt((t.cen.x - t.x)**2 + (t.cen.y - t.y)**2)/50;
          var ang = M.atan2((t.cen.y - t.y)*2,(t.cen.x - t.x)*2); 
          var V = {x: mag * cos(ang)*5, y: mag * sin(ang)*5};

          t.x+=V.x;
          t.y+=V.y;
          t.a -= 0.03;
        }
      }
    }
  
    draw()
    { let t = this;
      switch (t.cor)
      { case 'red': t.draw = function(){bal(t.x, t.y, t.r, `rgba(${100+rng()*255}, 10, ${10}, ${t.a})`)}
        break;
        case 'ora': t.draw = function(){bal(t.x, t.y, t.r, `rgba(${200+rng()*30}, ${50+rng()*100}, ${10}, ${t.a})`)}
        break;
        case 'pur': t.y=t.e.y+t.e.h;
          t.draw = function(){bal(t.x, t.y, t.r, `rgba(${60+rng()*200}, ${rng()*115}, 255, ${t.a})`)}
        break;
        case 'bla': t.y=t.e.y+t.e.h;
          t.draw = function(){bal(t.x, t.y, t.r, `rgba(${rng()*10}, ${rng()*10}, ${rng()*10}, ${t.a})`)}
        break;
        case 'blu': t.y=t.e.y+t.e.h;
          t.draw = function(){bal(t.x, t.y, t.r, `rgba(${10}, ${50+rng()*100}, ${200+rng()*30}, ${t.a})`)}
        break;
        case 'gre': t.y=t.e.y+t.e.h;
          t.draw = function(){bal(t.x, t.y, t.r, `rgba(${0+rng()*50}, ${100+rng()*255}, ${0+rng()*50}, ${t.a})`)}
        break;
      } 
    };
}
class Blo
{ constructor(e)
  { let t = this;
    t.x = e.x+rng()*e.w;
    t.y = e.y+rng()*e.h;
    t.r = rng()*7.5;
    t.c = `rgb(${100+rng()*155}, 10, ${10})`;
  }
  draw()
  { bal(this.x, this.y, this.r, this.c);
  }
}
