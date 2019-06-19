
const heading = document.querySelectorAll("#heading path");
            heading.forEach((path,index) =>
            console.log(`Letter ${index} is ${path.getTotalLength()}`));
            const tween = new TimelineMax();
                tween
                tween.to("#heading path",3,{strokeDashoffset:0})
                        .to("#sec1 button",1,{opacity:1},3.5);
            function showMenu(){
                console.log("object");
                const tween = new TimelineMax();
                tween
                .to(".overlay",0.8,{top:0},0.5)
                .to(".content",0.9,{top:0},0.50001);
            
            }