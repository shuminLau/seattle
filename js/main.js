
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
    //
    timeLine.add(TweenLite.fromTo("#logo", 0.5, {y: 100, opacity: 0}, {y: 0, opacity: 1}))
    timeLine.add(TweenLite.fromTo("#line", 1, {y: -100, opacity: 0}, {y: 0, opacity: 1}))
    timeLine.add(TweenLite.fromTo('#font3', 1, {opacity: 0}, {opacity: 1}))
    timeLine.add(TweenLite.fromTo('#font4', 1, {opacity: 0}, {opacity: 1}))
    timeLine.play()
}

//
function timeline2() {
    const timeLine = new TimelineMax()
    // new TweenMax("#waterfall",2,{y:-500,repeat:-1})
// new TweenMax("#waterfall1",2,{y:100,repeat:-1})
// new TweenMax("#waterfall2",2,{y:-500,repeat:-1})

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
// const tm = new TimelineMax({repeat:-1});
// tm.to("#brand", 0.5, {text: {value: "sadfd", delimiter: " "}, ease: Linear.easeNone})
//     .to("#brand", 0.5, {text: {value: "sadsaa", delimiter: " "}, ease: Linear.easeNone})
//     .to("#brand", 0.5, {text: {value: "asasdd", delimiter: " "}, ease: Linear.easeNone})
//     .to("#brand", 0.5, {text: {value: "asasdd", delimiter: " "}, ease: Linear.easeNone})
//     .to("#brand", 0.5, {text: {value: "asdas", delimiter: " "}, ease: Linear.easeNone});
//
//


//
//
//
// //瀑布流

// new TweenMax("#line",4,{x:-2250,repeat:0})