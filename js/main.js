
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
        lottie.setSpeed(1.5, 'logo');
        lottie.play('logo');
    }, 6500)
    setTimeout(() => {
        $.fn.fullpage.moveSectionDown();
    }, 12000);

    const timeLine1 = new TimelineMax();
    const timeLine2 = new TimelineMax();

    // 时间轴1
    timeLine1.add(TweenLite.fromTo('#bg1', 2.8, {opacity: 0}, {opacity: 1}));      // 0
    timeLine1.add(TweenLite.fromTo('#font1', 1, {opacity: 0}, {opacity: 1}))     // 2.8
    timeLine1.add(TweenLite.fromTo('#font1', 0.6, {}, {opacity: 0}))    // 3.8
    timeLine1.add(TweenLite.fromTo('#font2', 1, {opacity: 0}, {opacity: 1,delay:0.2}))    // 4.6
    timeLine1.add(TweenLite.fromTo(['#font2', '#bg1'], 0.8, {}, {opacity: 0, delay: 0.2}),)   // 5.8

    timeLine1.add(TweenLite.fromTo("#logo", 1.3, {opacity: 0}, {opacity: 1}))  //6.6
    timeLine1.add(TweenLite.fromTo("#line", 0.1, {y: -50, x: '0'}, {y: 0, x: '1vw'}))   // 7.9
    timeLine1.add(TweenLite.fromTo("#line", 0.4, {opacity: 0}, {opacity: 1,delay:0.4}))   // 8.4
    timeLine1.add(TweenLite.fromTo(['#font3','#font4'], 2, {opacity: 0}, {opacity: 1,delay:0.6 }))//10

    // 时间轴2
    timeLine2.add(TweenLite.fromTo('#bg1', 6, {scale: 1}, {scale: 1.2}))  // 时间轴2 起始0s 结束6s


    timeLine1.play();
    timeLine2.play();


}

//时间轴screen2
function timeline2() {
    //frame1
    const timeLine = new TimelineMax({delay: 1,})//瀑布流同步 14
    const timeLine1 = new TimelineMax({delay: 1,})//瀑布流同步 14
    const timeLine2 = new TimelineMax({delay: 3.5,})//商品收录18.5
    const timeLine3 = new TimelineMax() //瀑布流渐显13-14

    const brand = new TimelineMax({repeat: 1, delay: 7.5});
    brand.to("#brand", 0.15, {text: {value: "Jacquemus", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "kiko kostadinov", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "Dries Van Noten", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "i.am.gia", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "Maison Margiela", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "Valentino", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "Versace", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "Lanvin", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "Loewe", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "Neous", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "Rotate", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "Madewell", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "Prada", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "Cult Gaia", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "Amiri", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "Jimmy Choo", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "Saint Laurent", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "Thom Browne", delimiter: " "}, ease: Linear.easeNone})
        .to("#brand", 0.15, {text: {value: "Undercover", delimiter: " "}, ease: Linear.easeNone});


    const heart = new TimelineMax({repeat: 40, delay: 7.5});
    heart.fromTo("#heart", 0.15, {scale: 1}, {opacity: 1, scale: 1.1})


    timeLine3.add(TweenLite.fromTo(["#waterfall-box"], 1, {opacity: 0}, {opacity: 1}))//13

    timeLine.add(TweenLite.fromTo('#waterfall1', 3, {y: 0}, {y: -500}))//14
    timeLine1.add(TweenLite.fromTo(['#waterfall', '#waterfall2'], 3, {y: -500}, {y: 0}))//14
    timeLine1.add(TweenLite.fromTo(['#waterfall-box'], 1, {opacity: 1}, {opacity: 0.7}))//17


    timeLine2.add(TweenLite.fromTo('#font5', 1.2, {}, {opacity: 1,}))//16.5
    timeLine2.add(TweenLite.fromTo('#font6', 1, {}, {opacity: 1, delay: 0.5}))//18.5
    timeLine2.add(TweenLite.fromTo(['#waterfall-box', '#font5', '#font6',], 0.5, {}, {opacity: 0,delay:0.5}))//19
    //frame2 品牌和心跳动
    timeLine2.add(TweenLite.to(['#heart', '#brand'], 3, {opacity: 1}))//19.5
    timeLine2.add(TweenLite.fromTo(["#heart", "#brand"], 1, {}, {opacity: 0, delay: 4}))//23
    //frame3 品牌订阅
    timeLine2.add(TweenLite.fromTo(['#font7', '#font8'], 1, {opacity: 0}, {opacity: 1,delay:1}))//24
    timeLine2.add(TweenLite.fromTo(['#font-num'], 1, {opacity: 1}, {opacity: 0,delay:0.5}))//25.5
    timeLine2.add(TweenLite.fromTo(['#font9', '#screen2-icon1'], 1, {opacity: 0}, {opacity: 1,delay:0.5}))//27

    setTimeout(() => {
        $.fn.fullpage.moveSectionDown();
    }, 21000);


}

//时间轴screen3
function timeline3() {
    const timeLine = new TimelineMax()//照片墙
    timeLine.add(TweenLite.to(['#list-img'], 6, {y: '200vh', delay: 1}))//时间轴 起始1s 结束7s
    timeLine.add(TweenLite.to('#background', 0.5, {opacity: 0}))  // frame2 //时间轴 起始7s 结束7.5s
    timeLine.add(TweenLite.fromTo('#background1', 0.5, {opacity: 0}, {opacity: 1,delay:0.5}))//时间轴 起始8.5s 结束9s
    timeLine.add(TweenLite.fromTo('#font10', 1, {opacity: 0}, {opacity: 1}))//时间轴 起始9s 结束11s
    timeLine.add(TweenLite.fromTo('#font10', 1, {opacity: 1}, {opacity: 0,delay:1}))//时间轴 起始11.5s 结束12.5s
    timeLine.add(TweenLite.fromTo(['#font11', '#font12'], 1, {opacity: 0}, {opacity: 1}))//时间轴 起始12.5s 结束13.5s
    setTimeout(() => {
        $.fn.fullpage.moveSectionDown();
    }, 13500);
}

//时间轴screen4
function timeline4() {
    const timeLine = new TimelineMax()//路线
    timeLine.add(TweenLite.to(['#shipping',], 3, {x: '-90vw',delay:0.5}))
    timeLine.add(TweenLite.to(['#shipping',], 2, {x: '-190vw',delay:0.5}))
    timeLine.add(TweenLite.to(['#shipping',], 2 , {x: '-280vw',delay:0.5}))

    const timeLine1 = new TimelineMax()//点
    timeLine1.add(TweenLite.to('#doc', 2, {x: '50vw', scale: 1.2,delay:0.5}))
    timeLine1.add(TweenLite.to('#doc', 2, {x: '140vw', scale: 1,delay:0.5}))
    timeLine1.add(TweenLite.to('#doc', 2, {x: '200vw', scale: 1.2,delay:0.5}))
    timeLine1.add(TweenLite.to(['#shipping', '#doc'], 1, {x: '-350vw', delay: 1.5}))
    //frame2
    timeLine1.add(TweenLite.to(['#font13'], 2, {opacity: 1}, 0.5))
    timeLine1.add(TweenLite.to(['#font13'], 2, {opacity: 0}, 0.5))
    //frame3
    timeLine1.add(TweenLite.to(['#font14', '#font15'], 2, {opacity: 1}))
    setTimeout(() => {
        $.fn.fullpage.moveSectionDown();
    }, 13500);
}

//时间轴screen5
function timeline5() {
    const timeLine = new TimelineMax()
    timeLine.add(TweenLite.to('#review-card',1,{opacity:1,delay:1}))
    timeLine.add(TweenLite.to('#review-card',2,{opacity:0,y:'-60vh'}))

    const timeLine1 = new TimelineMax()
    timeLine1.add(TweenLite.to('#review-card1',1,{opacity:1,delay:2.5}))
    timeLine1.add(TweenLite.to('#review-card1',2,{opacity:0,y:'-60vh'}))

}
timeline5()

//时间轴screen6
function timeline6() {
    const timeLine = new TimelineMax()

}






