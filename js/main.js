
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
    }, 8000)
    setTimeout(() => {
        $.fn.fullpage.moveSectionDown();
    }, 15000);

    const timeLine1 = new TimelineMax();
    const timeLine2 = new TimelineMax();

    // 时间轴1
    timeLine1.add(TweenLite.fromTo('#bg1', 2.8, {opacity: 0}, {opacity: 1}));      // 0
    timeLine1.add(TweenLite.fromTo('#font1', 1, {opacity: 0}, {opacity: 1}))     // 2.8
    timeLine1.add(TweenLite.fromTo('#font1', 0.5, {}, {opacity: 0,delay:1}))    // 3.8
    timeLine1.add(TweenLite.fromTo('#font2', 1, {opacity: 0}, {opacity: 1,}))    // 4.6
    timeLine1.add(TweenLite.fromTo(['#font2', '#bg1'], 1, {}, {opacity: 0, delay: 1}),)   // 5.8

    timeLine1.add(TweenLite.fromTo("#logo", 1.3, {opacity: 0}, {opacity: 1}))  //6.6
    timeLine1.add(TweenLite.fromTo("#line", 0.1, {y: -50, x: '0'}, {y: 0, x: '1vw'}))   // 7.9
    timeLine1.add(TweenLite.fromTo("#line", 0.4, {opacity: 0}, {opacity: 1,delay:0.4}))   // 8.4
    timeLine1.add(TweenLite.fromTo(['#font3','#font4'], 2, {opacity: 0}, {opacity: 1 }))//10

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
        .to("#brand", 0.15, {text: {value: "Brand", delimiter: " "}, ease: Linear.easeNone});


    const heart = new TimelineMax({repeat: 33, delay: 8});
    heart.fromTo("#heart", 0.15, {scale: 1}, {opacity: 1, scale: 1.1})


    timeLine3.add(TweenLite.fromTo(["#waterfall-box"], 1, {opacity: 0}, {opacity: 1}))//13

    timeLine.add(TweenLite.fromTo('#waterfall1', 4, {y: 0}, {y: -500}))//14
    timeLine1.add(TweenLite.fromTo(['#waterfall', '#waterfall2'], 2, {y: -500}, {y: 0}))//14
    timeLine1.add(TweenLite.fromTo(['#waterfall-box'], 1, {opacity: 1}, {opacity: 0.7,delay:0.3}))//17


    timeLine2.add(TweenLite.fromTo('#font5', 1.2, {}, {opacity: 1,}))//16.5
    timeLine2.add(TweenLite.fromTo('#font6', 1, {}, {opacity: 1, delay: 0.5}))//18.5
    timeLine2.add(TweenLite.fromTo(['#waterfall-box', '#font5', '#font6',], 0.5, {}, {opacity: 0,delay:1}))//19
    //frame2 品牌和心跳动
    timeLine2.add(TweenLite.to(['#heart', '#brand'], 3, {opacity: 1,delay:0.5}))//19.5
    timeLine2.add(TweenLite.fromTo(["#heart", "#brand"], 1, {}, {opacity: 0, delay: 3}))//23
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
    timeLine.add(TweenLite.to(['#list-img'], 4, {y: '100vh', delay: 2}))//时间轴 起始1s 结束7s
    timeLine.add(TweenLite.to('#background', 0.5, {opacity: 0}))  // frame2 //时间轴 起始7s 结束7.5s
    timeLine.add(TweenLite.fromTo('#background1', 0.5, {opacity: 0}, {opacity: 1,}))//时间轴 起始8.5s 结束9s
    timeLine.add(TweenLite.fromTo('#font10', 1, {opacity: 0}, {opacity: 1}))//时间轴 起始9s 结束11s
    timeLine.add(TweenLite.fromTo('#font10', 1, {opacity: 1}, {opacity: 0,delay:1}))//时间轴 起始11.5s 结束12.5s
    timeLine.add(TweenLite.fromTo(['#font11', '#font12'], 1, {opacity: 0}, {opacity: 1}))//时间轴 起始12.5s 结束13.5s
    setTimeout(() => {
        $.fn.fullpage.moveSectionDown();
    }, 13000);
}

//时间轴screen4
function timeline4() {
    const timeLine = new TimelineMax()//路线
    timeLine.add(TweenLite.to(['#shipping',], 3, {x: '-90vw',delay:0.5}))
    timeLine.add(TweenLite.to(['#shipping',], 2, {x: '-190vw',delay:0.5}))
    timeLine.add(TweenLite.to(['#shipping',], 2 , {x: '-280vw',delay:0.5}))

    const timeLine1 = new TimelineMax()//点
    timeLine1.add(TweenLite.to('#doc', 3, {x: '50vw', scale: 1.2,delay:0.5}))
    timeLine1.add(TweenLite.to('#doc', 2, {x: '140vw', scale: 1,delay:0.5}))
    timeLine1.add(TweenLite.to('#doc', 2, {x: '240vw', scale: 1.2,delay:0.5}))
    timeLine1.add(TweenLite.to(['#shipping', '#doc'], 1, {x: '-350vw', delay: 1.5}))
    //frame2
    timeLine1.add(TweenLite.to(['#font13'], 2, {opacity: 1}, 0.5))
    timeLine1.add(TweenLite.to(['#font13'], 2, {opacity: 0}, 0.5))
    //frame3
    timeLine1.add(TweenLite.to(['#font14', '#font15'], 2, {opacity: 1}))
    setTimeout(() => {
        $.fn.fullpage.moveSectionDown();
    }, 17500);
}

//时间轴screen5
function timeline5() {
    const timeLine = new TimelineMax()
    timeLine.add(TweenLite.to('#begin',2,{opacity:1}))
    timeLine.add(TweenLite.to('#begin',1,{opacity:0,delay:0.5}))
    timeLine.add(TweenLite.to('#all',1,{opacity:1}))
    timeLine.add(TweenLite.to('#all',1,{opacity:0,delay:3.5}))
    timeLine.add(TweenLite.to('#user',1,{opacity:1,y:'-40vw'}))
    timeLine.add(TweenLite.to('#review-card',1,{opacity:1}))
    timeLine.add(TweenLite.to('#review-card',2,{opacity:0,x:'-40vh',delay:1}))

    const timeLine1 = new TimelineMax({delay:10})
    timeLine1.add(TweenLite.to('#review-card1',1,{opacity:1}))
    timeLine1.add(TweenLite.to('#review-card1',2,{opacity:0,x:'40vh',delay:1}))

    //数字跳动14年-20年
    const demo = { score:14}
    year == document.getElementById("year");
    const tween = TweenLite.to(demo,3.5,{
        score:20,
        onUpdate:showScore,
        delay:4
    })
    //商品购买1-4000000件
    const am = { score:1}
    amount == document.getElementById("amount");
    const tween1 = TweenLite.to(am,3,{
        score:400000,
        onUpdate:showScore,
        delay:4
    })

    //在tween update时通过这个function输出.
    function showScore() {
        year.innerHTML = demo.score.toFixed(0);
        amount.innerHTML =am.score.toFixed(0);
    }

    setTimeout(() => {
        $.fn.fullpage.moveSectionDown();
    }, 13000);

}

//时间轴screen6
function timeline6() {
    const timeLine = new TimelineMax()

}






