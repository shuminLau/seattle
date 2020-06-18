// fullPage
$(function () {
    $('#page').fullpage();
})
//
//
// //时间轴
// const timeLine = new TimelineMax();
// timeLine.add(TweenLite.fromTo('#font1', 3, {opacity: 1}, {opacity: 0}))
// timeLine.add(TweenLite.fromTo('#font2', 3, {opacity: 0}, {opacity: 1}))
//
// timeLine.add(TweenLite.fromTo('#font3', 1, {opacity: 0}, {opacity: 1}))
// timeLine.add(TweenLite.fromTo('#font4', 1, {opacity: 0}, {opacity: 1}))
//
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
//     scale: 0,
//     y: 80,
//     rotationX: 180,
//     transformOrigin: "0% 50% -50",
//     ease: Back.easeOut,
// }, 0.1);
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
// timeLine.play('font1')
//
//
// //瀑布流
// new TweenMax("#waterfall",2,{y:-500,repeat:-1})
// new TweenMax("#waterfall1",2,{y:100,repeat:-1})
// new TweenMax("#waterfall2",2,{y:-500,repeat:-1})