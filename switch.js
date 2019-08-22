let switcher=(function(){
    return {
        init(target){
            let c,ctx,W,H,R,r,on,off,circle,status;
            let play=false;
            c=document.querySelector(target);
            ctx=c.getContext("2d");
            W=c.width;
            H=c.height;
            R=H/2;
            r=(R-H/10);
            on=c.getAttribute("on");
            off=c.getAttribute("off");
            circle=c.getAttribute("circle");
            status=c.getAttribute("status");
            if(status=="on"){
                switch_on();
            }else{
                switch_off();
            }
            c.onclick=function(){
                if(!play){
                    if(status=="on"){
                        status="off";
                        switch_off();
                    }else{
                        status="on";
                        switch_on();
                    }
                    c.setAttribute("status",status);
                }
            }
            function switch_on(){
                play=true;
                let x=R;
                let handle=setInterval(function(){
                    ctx.clearRect(0,0,W,H);
                    ctx.beginPath();
                    ctx.arc(R,R,R,0,Math.PI*2);
                    ctx.arc(W-R,R,R,0,Math.PI*2);
                    ctx.rect(R,0,R*2,R*2);
                    ctx.fillStyle=on;
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(x,R,r,0,Math.PI*2);
                    ctx.fillStyle=circle;
                    ctx.fill();
                    if(x==W-R){
                        clearInterval(handle);
                        play=false;
                    }
                    x++;
                },30)
            }
            function switch_off(){
                play=true;
                let x=W-R;
                let handle=setInterval(function(){
                    ctx.clearRect(0,0,W,H);
                    ctx.beginPath();
                    ctx.arc(R,R,R,0,Math.PI*2);
                    ctx.arc(W-R,R,R,0,Math.PI*2);
                    ctx.rect(R,0,R*2,R*2);
                    ctx.fillStyle=off;
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(x,R,r,0,Math.PI*2);
                    ctx.fillStyle=circle;
                    ctx.fill();
                    if(x==R){
                        clearInterval(handle);
                        play=false;
                    }
                    x--;
                },30)
            }
        }
    }
})();