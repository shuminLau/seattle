timeline1();

$(function () {
    $('#page').fullpage({
        afterLoad: function (link, index) {
            console.log(index)
            switch (index) {
                case 1:
                    timeline1()
                    break;
                case 2:
                    timeline2()
                    break;
                case 3:
                    timeline3()
                    break;
                case 4:
                    timeline4()
                    break;
                case 5:
                    timeline5()
                    break;
                case 6:
                    timeline6()
                    break;

            }
        },
    });
})

//时间轴
function timeline1() {
    const timeLine = new TimelineMax();
    timeLine.add(TweenLite.fromTo('#bg1', 2, {opacity: 0,}, {opacity: 1}))
    timeLine.add(TweenLite.fromTo('#font1', 2, {opacity: 0,}, {opacity: 1}))
    timeLine.add(TweenLite.fromTo('#font1', 1, {}, {opacity: 0, delay: 1.5}))
    timeLine.add(TweenLite.fromTo('#font2', 1.5, {opacity: 0}, {opacity: 1}))
    timeLine.add(TweenLite.fromTo(['#font2', '#bg1'], 1, {}, {opacity: 0, delay: 1.5}),)
    //frame2
    timeLine.add(TweenLite.fromTo("#logo", 0.5, {y: 100, opacity: 0}, {y: 0, opacity: 1}))
    timeLine.add(TweenLite.fromTo("#line", 1, {y: -100, opacity: 0}, {y: 0, opacity: 1}))
    timeLine.add(TweenLite.fromTo('#font3', 1, {opacity: 0}, {opacity: 1}))
    timeLine.add(TweenLite.fromTo('#font4', 1, {opacity: 0}, {opacity: 1}))
    timeLine.play(1)
}

//
function timeline2() {

    const timeLine = new TimelineMax()
    timeLine.add(TweenLite.fromTo( "#waterfall1", 8, {y: 0}, {y: -500,delay:3} ))
    const timeLine1 = new TimelineMax()
    timeLine1.add(TweenLite.fromTo( ["#waterfall","#waterfall2"] ,8, {y: -500}, {y: 0} ))
    timeLine1.add(TweenLite.fromTo(["#waterfall1","#waterfall","#waterfall2","#font5","#font6",],3,{opacity:1},{opacity:0}))
    //frame2
    const brand = new TimelineMax({repeat:1,delay:11});
    brand.to("#brand", 0.5, {text: {value: "sadfd", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.5, {text: {value: "sadsaa", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.5, {text: {value: "asasdd", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.5, {text: {value: "asasdd", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.5, {text: {value: "asdas", delimiter: " "}, ease: Linear.easeNone});
    timeLine1.add(TweenLite.to('#brand',1,{opacity:1}))
    const heart =new TimelineMax({repeat:10,delay:11});
    heart.fromTo( "#heart", 0.5,{scale:1},{opacity: 1,scale: 1.1})




    const timeLine2 = new TimelineMax()
    timeLine2.add(TweenLite.fromTo('#font5', 2, {x:400}, {x: 0}))
    timeLine2.add(TweenLite.fromTo('#font6', 2, {x:400}, {x: 0}))

    const timeLine3 = new TimelineMax()
    timeLine3.add(TweenLite.fromTo( ["#waterfall-box"], 1, {opacity: 0,}, {opacity: 1} ))


}

function timeline3() {
    const timeLine = new TimelineMax()

}

function timeline4() {
    const timeLine = new TimelineMax()

}

function timeline5() {
    const timeLine = new TimelineMax()

}

function timeline6() {
    const timeLine = new TimelineMax()

}








// timeLine.add(TweenLite.from('#font5', 0.5, {left: 100, autoAlpha: 0}, "-=0.25"))
// timeLine.add(TweenLite.from('#font6', 0.5, {left: 100, autoAlpha: 0}, "+=0.25"))
//
// timeLine.add(TweenLite.to('#brand'))
//
// timeLine.add(TweenLite.from('#font7', 0.5, {left: 100, autoAlpha: 0}, "-=0.25"))
// timeLine.add(TweenLite.from('#font8', 0.5, {left: 100, autoAlpha: 0}, "+=0.25"))
//
// timeLine.add(TweenLite.fromTo('#font9', 1, {opacity: 0}, {opacity: 1}))
//
// timeLine.add(TweenLite.to("#waterfall"))
//
// //字体打散
// const mySplitText = new SplitText("#font1", {type: "chars"});
// const chars = mySplitText.chars;
// TweenMax.set("#font1", {perspective: 400});
// const font1 = TweenMax.staggerFrom(chars, 0.8, {
//     delay:2,
//     scale: 0,
//     y: 80,
//     rotationX: 180,
//     transformOrigin: "0% 50% -50",
//     ease: Back.easeOut,
// }, 0.05);
//
// //品牌





//
//
//
// //瀑布流

// new TweenMax("#line",4,{x:-2250,repeat:0})