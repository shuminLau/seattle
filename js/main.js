lottie.loadAnimation({
    name:'logo',
    path:'../img/screen1/me-icon.json',
    autoplay:false,
    loop:false,
    renderer:'svg',
    container:document.getElementById('logo')
});

lottie.loadAnimation({
    path:'../img/screen1/world-bg.json',
    autoplay:true,
    loop:true,
    renderer:'svg',
    container:document.getElementById('world-bg')
});

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
    setTimeout(()=>{
        lottie.play('logo');
    },13000)

    const timeLine1 = new TimelineMax();
    const timeLine2 = new TimelineMax();
    const timeLine3 = new TimelineMax();

    // 时间轴1
    timeLine1.add(TweenLite.fromTo('#bg1', 2, {opacity: 0}, {opacity: 1}));      // 时间轴1 起始0s 结束2s
    timeLine1.add(TweenLite.fromTo('#font1', 3, {opacity: 0}, {opacity: 1}))     // 时间轴1 起始2s 结束5s
    timeLine1.add(TweenLite.fromTo('#font1', 1, {}, {opacity: 0, delay: 1.5}))    // 时间轴1 起始6.5s 结束7.5s
    timeLine1.add(TweenLite.fromTo('#font2', 1.5, {opacity: 0}, {opacity: 1}))    // 时间轴1 起始7s 结束9s
    timeLine1.add(TweenLite.fromTo(['#font2', '#bg1'], 1, {}, {opacity: 0, delay: 1.5}),)   // 时间轴1 起始10.5 结束11.5s

    timeLine1.add(TweenLite.fromTo("#logo", 2.5, {opacity: 0}, {opacity: 1}))  // 时间轴1 起始11.5s 结束14s
    timeLine1.add(TweenLite.fromTo("#line", 1, {y: -50}, {y: 0}))   // 时间轴1 起始14s 结束15s
    timeLine1.add(TweenLite.fromTo('#font3', 1, {x:50}, {x:0}))   // 时间轴1 起始15s 结束16s


    // 时间轴2
    timeLine2.add(TweenLite.fromTo('#bg1', 12, {scale:1}, {scale:1.2}))  // 时间轴2 起始0s 结束12s
    timeLine2.add(TweenLite.fromTo("#line", 0.8, {opacity: 0}, {opacity: 1, delay: 2.2}))   // 时间轴2 起始14.5s 结束15s
    timeLine2.add(TweenLite.fromTo(['#font3','#font4'], 0.5, {opacity: 0}, {opacity: 1, delay: 0.5}))    // 时间轴2 起始15.5s 结束16s

    // 时间轴3
    timeLine3.add(TweenLite.fromTo('#font4', 1, {x:-50}, {x:0, delay: 15}))   // 时间轴3 起始15s 结束16s

    timeLine1.play();
    timeLine2.play();
    timeLine3.play();
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