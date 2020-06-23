
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

//时间轴screen1
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
    timeLine2.add(TweenLite.fromTo('#bg1', 13, {scale:1}, {scale:1.2}))  // 时间轴2 起始0s 结束13s
    timeLine2.add(TweenLite.fromTo("#line", 0.8, {opacity: 0}, {opacity: 1, delay: 1.2}))   // 时间轴2 起始14.5s 结束15s
    timeLine2.add(TweenLite.fromTo(['#font3','#font4'], 0.5, {opacity: 0}, {opacity: 1, delay: 0.5}))    // 时间轴2 起始15.5s 结束16s

    // 时间轴3
    timeLine3.add(TweenLite.fromTo('#font4', 1, {x:-50}, {x:0, delay: 15}))   // 时间轴3 起始15s 结束16s

    timeLine1.play();
    timeLine2.play();
    timeLine3.play();
}

//时间轴screen2
function timeline2() {
    //frame1
    const timeLine3 = new TimelineMax() //瀑布流渐显
    timeLine3.add(TweenLite.fromTo(["#waterfall-box"], 1, {opacity: 0}, {opacity: 1}))

    const timeLine = new TimelineMax({delay: 1,})//瀑布流同步
    timeLine.add(TweenLite.fromTo('#waterfall1', 8, {y: 0}, {y: -500}))

    const timeLine1 = new TimelineMax({delay: 1})//瀑布流同步
    timeLine1.add(TweenLite.fromTo(['#waterfall', '#waterfall2'], 8, {y: -500}, {y: 0}))
    timeLine1.add(TweenLite.fromTo(['#waterfall-box'], 1, {opacity: 1}, {opacity: 0.6}))

    const timeLine2 = new TimelineMax({delay: 9.5,})//商品收录
    timeLine2.add(TweenLite.fromTo('#font5', 2, {}, {opacity: 1}))
    timeLine2.add(TweenLite.fromTo('#font6', 2, {}, {opacity: 1,}))
    timeLine2.add(TweenLite.fromTo(['#waterfall-box', '#font5', '#font6',], 2.5, {}, {opacity: 0, delay: 1}))
    //frame2 品牌和心跳动
    timeLine2.add(TweenLite.to(['#heart', '#brand'], 1, {opacity: 1}))
    timeLine2.add(TweenLite.fromTo(["#heart", "#brand"], 2.5, {}, {opacity: 0, delay: 5}))
    //frame3 品牌订阅
    timeLine2.add(TweenLite.fromTo(['#font7', '#font8'], 2, {opacity: 0}, {opacity: 1}))
    timeLine2.add(TweenLite.fromTo(['#font-num'], 2, {opacity: 1}, {opacity: 0}))
    timeLine2.add(TweenLite.fromTo(['#font9', '#screen2-icon1'], 2, {opacity: 0}, {opacity: 1}))


    const brand = new TimelineMax({repeat: 1, delay: 17});
    brand.to("#brand", 0.5, {text: {value: "sadfd", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.5, {text: {value: "sadsaa", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.5, {text: {value: "asasdd", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.5, {text: {value: "asasdd", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.5, {text: {value: "asdas", delimiter: " "}, ease: Linear.easeNone});

    const heart = new TimelineMax({repeat: 10, delay: 17});
    heart.fromTo("#heart", 0.5, {scale: 1}, {opacity: 1, scale: 1.1})

}

//时间轴screen3
function timeline3() {
    const timeLine = new TimelineMax()//照片墙
    timeLine.add(TweenLite.to(['#list-img'], 1, {rotation: -5, y: 0, delay: 1}, 0.5))
    timeLine.add(TweenLite.to(['#list-img'], 2, {y: -1000,}, 0.5))
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






