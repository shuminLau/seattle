lottie.loadAnimation({
    name: 'logo',
    path: '../media/screen1/me-icon.json',
    autoplay: false,
    loop: false,
    renderer: 'svg',
    container: document.getElementById('logo')
});

lottie.loadAnimation({
    path: '../media/screen1/world-bg.json',
    autoplay: true,
    loop: true,
    renderer: 'svg',
    container: document.getElementById('world-bg')
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


//时间轴screen1
function timeline1() {
    setTimeout(() => {
        lottie.setSpeed(1.6, 'logo');
        lottie.play('logo');
    }, 6500)
    setTimeout(() => {
        $.fn.fullpage.moveSectionDown();
    }, 13000);

    const timeLine1 = new TimelineMax();
    const timeLine2 = new TimelineMax();

    // 时间轴1
    timeLine1.add(TweenLite.fromTo('#bg1', 2.5, {opacity: 0}, {opacity: 1}));      // 时间轴1 起始0s 结束2.5s
    timeLine1.add(TweenLite.fromTo('#font1', 1.3, {opacity: 0}, {opacity: 1}))     // 时间轴1 起始2.5s 结束3s
    timeLine1.add(TweenLite.fromTo('#font1', 0.7, {}, {opacity: 0}))    // 时间轴1 起始3s 结束3.5s
    timeLine1.add(TweenLite.fromTo('#font2', 0.7, {opacity: 0}, {opacity: 1}))    // 时间轴1 起始3.5s 结束4.5s
    timeLine1.add(TweenLite.fromTo(['#font2', '#bg1'], 0.5, {}, {opacity: 0, delay: 0.3}),)   // 时间轴1  结束6s

    timeLine1.add(TweenLite.fromTo("#logo", 2, {opacity: 0}, {opacity: 1}))  // 时间轴1 起始6s 结束8s
    timeLine1.add(TweenLite.fromTo("#line", 0.1, {y: -50, x: '0'}, {y: 0, x: '1vw'}))   // 时间轴1 起始8s 结束8.1s
    //  timeLine1.add(TweenLite.fromTo('#font3', 1, {x:50}, {x:0,}))   // 时间轴1 起始8.1s 结束9.1s


    // 时间轴2
    timeLine2.add(TweenLite.fromTo('#bg1', 6, {scale: 1}, {scale: 1.2}))  // 时间轴2 起始0s 结束6s
    timeLine2.add(TweenLite.fromTo("#line", 1, {opacity: 0}, {opacity: 1, delay: 2}))   // 时间轴2 起始8s 结束9s
    timeLine2.add(TweenLite.fromTo('#font3', 1, {opacity: 0}, {opacity: 1, delay: 0.5}))// 时间轴2 起始9.3s 结束10.5s
    timeLine2.add(TweenLite.fromTo('#font4', 0.5, {opacity: 0}, {x: 10, opacity: 1, delay: 0.5})) // 时间轴2 起始10.8s 结束11.6s


    timeLine1.play();
    timeLine2.play();


}

//时间轴screen2
function timeline2() {
    //frame1
    const timeLine = new TimelineMax({delay: 1,})//瀑布流同步
    const timeLine1 = new TimelineMax({delay: 1})//瀑布流同步
    const timeLine2 = new TimelineMax({delay: 3.5,})//商品收录
    const timeLine3 = new TimelineMax() //瀑布流渐显

    const brand = new TimelineMax({repeat: 1, delay: 7.5});
    brand.to("#brand", 0.15, {text: {value: "sadfd", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "sadsaa", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "asasdd", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "asasdd", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "asdas", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "sadsaa", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "asasdd", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "asasdd", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "asasdd", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "asasdd", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "asdas", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "sadsaa", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "asasdd", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "asasdd", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "asdas", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "sadsaa", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "asasdd", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "asasdd", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "asdas", delimiter: " "}, ease: Linear.easeNone});


    const heart = new TimelineMax({repeat: 30, delay: 7.5});
    heart.fromTo("#heart", 0.15, {scale: 1}, {opacity: 1, scale: 1.1})


    timeLine3.add(TweenLite.fromTo(["#waterfall-box"], 0.5, {opacity: 0}, {opacity: 1}))//时间轴3  起始0s 结束1s

    timeLine.add(TweenLite.fromTo('#waterfall1', 3, {y: 0}, {y: -500}))//时间轴 起始0.5s 结束3.5s
    timeLine1.add(TweenLite.fromTo(['#waterfall', '#waterfall2'], 3, {y: -500}, {y: 0}))//时间轴1 起始0.5s 结束3.5s
    timeLine1.add(TweenLite.fromTo(['#waterfall-box'], 0.5, {opacity: 1}, {opacity: 0.7}))//时间轴1 起始3.5s 结束4s


    timeLine2.add(TweenLite.fromTo('#font5', 1, {}, {opacity: 1,delay:0.5}))//时间轴2 起始3.5s 结束5s
    timeLine2.add(TweenLite.fromTo('#font6', 1, {}, {opacity: 1, delay: 0.5}))//时间轴2 起始5.5s 结束6.5s
    timeLine2.add(TweenLite.fromTo(['#waterfall-box', '#font5', '#font6',], 0.5, {}, {opacity: 0}))//时间轴2 起始6.5s 结束7s
    //frame2 品牌和心跳动
    timeLine2.add(TweenLite.to(['#heart', '#brand'], 3, {opacity: 1}))//时间轴2 起始7.5s 结束10.5s
    timeLine2.add(TweenLite.fromTo(["#heart", "#brand"], 1, {}, {opacity: 0, delay: 2}))//时间轴2 起始12.5s 结束13.5s
    //frame3 品牌订阅
    timeLine2.add(TweenLite.fromTo(['#font7', '#font8'], 1, {opacity: 0}, {opacity: 1,delay:1}))//时间轴2 起始14.5s 结束15.5s
    timeLine2.add(TweenLite.fromTo(['#font-num'], 1, {opacity: 1}, {opacity: 0,delay:0.5}))//时间轴2 起始16s 结束17s
    timeLine2.add(TweenLite.fromTo(['#font9', '#screen2-icon1'], 1, {opacity: 0}, {opacity: 1,}))//时间轴2 起始17.5s 结束18.5s

    setTimeout(() => {
        $.fn.fullpage.moveSectionDown();
    }, 18500);


}

//时间轴screen3
function timeline3() {
    const timeLine = new TimelineMax()//照片墙
    timeLine.add(TweenLite.to(['#list-media'], 1, {y: '-200vh', y: 0, delay: 0.5}, 0.5))
    // frame2
    timeLine.add(TweenLite.to('#background', 1, {opacity: 0}))
    timeLine.add(TweenLite.fromTo('#background1', 1, {opacity: 0}, {opacity: 1}))
    timeLine.add(TweenLite.fromTo('#font10', 2, {opacity: 0}, {opacity: 1}))
    timeLine.add(TweenLite.fromTo('#font10', 2, {opacity: 1}, {opacity: 0, delay: 3}))
    timeLine.add(TweenLite.fromTo(['#font11', '#font12'], 2, {opacity: 0}, {opacity: 1}))
}

//时间轴screen4
function timeline4() {
    const timeLine = new TimelineMax()//路线
    timeLine.add(TweenLite.to(['#shipping',], 3, {x: '-90vw'}))
    timeLine.add(TweenLite.to(['#shipping',], 3, {x: '-190vw'}))
    timeLine.add(TweenLite.to(['#shipping',], 3, {x: '-280vw'}))

    const timeLine1 = new TimelineMax()//点
    timeLine1.add(TweenLite.to('#doc', 3, {x: '60vw', scale: 1.2}))
    timeLine1.add(TweenLite.to('#doc', 3, {x: '150vw', scale: 1}))
    timeLine1.add(TweenLite.to('#doc', 2, {x: '245vw', scale: 1.2}))
    timeLine1.add(TweenLite.to(['#shipping', '#doc'], 1, {x: '-350vw', delay: 1.5}))
    //frame2
    timeLine1.add(TweenLite.to(['#font13'], 2, {opacity: 1}, 0.5))
    timeLine1.add(TweenLite.to(['#font13'], 2, {opacity: 0}, 0.5))
    //frame3
    timeLine1.add(TweenLite.to(['#font14', '#font15'], 2, {opacity: 1}))
}

//时间轴screen5
function timeline5() {
    const timeLine = new TimelineMax()

}

//时间轴screen6
function timeline6() {
    const timeLine = new TimelineMax()

}






