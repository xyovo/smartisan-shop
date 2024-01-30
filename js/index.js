function toPerson() {
    if (sessionStorage.getItem('username') === null) {
        location = 'app/login.html';
    }
}

function toNone() {
    alert('敬请期待！')
}

(function () {
    let item = document.querySelector('.pc>.header .btn>.item:first-child');
    let items = document.querySelector('.pc>.header .btn>.item:first-child>.items');
    item.onmouseover = function () {
        if (sessionStorage.getItem('username') !== null) {
            items.style.display = 'block';
        }
    }
    item.onmouseout = function () {
        if (sessionStorage.getItem('username') !== null) {
            items.style.display = 'none';
        }
    }
}());

function exitLogin() {
    sessionStorage.clear('username');
}

function my() {
    alert('抱歉，' + sessionStorage.getItem('username') + '👀\'我的\'功能待开发！');
}

function toCart() {
    if (sessionStorage.getItem('username') === null) {
        alert('您还未登录!');
        location = 'app/login.html';
    } else {
        location = 'app/cart.html';
    }
}

function toDetail() {
    location = 'app/detail.html';
}

// 轮播图1
let index = 0;

let img = document.querySelectorAll('.slideshow img');
let point = document.querySelectorAll('.slideshow>.pointBox>.item');

function slideshow() {

    img[index].setAttribute('style', 'z-index: 1');
    point[index].setAttribute('style', 'background-color: rgba(215, 0, 15, .8)');
    (function () {
        for (let j = 0; j < img.length; j++) {
            if (j === index) {
                continue;
            } else {
                img[j].setAttribute('style', 'z-index:0');
                point[j].setAttribute('style', 'background-color: rgba(255, 255, 255, .8)');
            }
        }
    }());

    if (index === img.length - 1) {
        index = 0;
    } else {
        index++;
    }
}

let timer = setInterval(function () {
    slideshow();
}, 1500);

let slideshowBow = document.querySelector('.slideshow');
slideshowBow.onmouseover = function () {
    clearInterval(timer);
}
slideshowBow.onmouseout = function () {
    timer = setInterval(function () {
        slideshow();
    }, 1500);
}


//点击按钮切换图片
let left = document.querySelector('.slideshow>.btn>.item:first-child');
let right = document.querySelector('.slideshow>.btn>.item:last-child');
//上一张
left.onclick = function () {
    if (index === 0) {
        index = 2;
    } else {
        index--;
    }
    img[index].setAttribute('style', 'z-index: 1');
    point[index].setAttribute('style', 'background-color: rgba(215, 0, 15, .8)');
    (function () {
        for (let j = 0; j < img.length; j++) {
            if (j === index) {
                continue;
            } else {
                img[j].setAttribute('style', 'z-index:0');
                point[j].setAttribute('style', 'background-color: rgba(255, 255, 255, .8)');
            }
        }
    }());
}
//下一张
right.onclick = function () {
    if (index === 2) {
        index = 0;
    } else {
        index++;
    }
    img[index].setAttribute('style', 'z-index: 1');
    point[index].setAttribute('style', 'background-color: rgba(215, 0, 15, .8)');
    (function () {
        for (let j = 0; j < img.length; j++) {
            if (j === index) {
                continue;
            } else {
                img[j].setAttribute('style', 'z-index:0');
                point[j].setAttribute('style', 'background-color: rgba(255, 255, 255, .8)');
            }
        }
    }());
}
function a() {
    console.log(1);
}

// 点击小按钮跳转指定图片
(function () {
    let point = document.querySelectorAll('.pointBox>.item');
    for (let i = 0; i < point.length; i++) {
        point[i].onclick = function () {
            img[i].setAttribute('style', 'z-index: 1');
            point[i].setAttribute('style', 'background-color: rgba(215, 0, 15, .8)');
            (function (index) {
                for (let j = 0; j < img.length; j++) {
                    if (j === index) {
                        continue;
                    } else {
                        img[j].setAttribute('style', 'z-index:0');
                        point[j].setAttribute('style', 'background-color: rgba(255, 255, 255, .8)');
                    }
                }
            }(i));
        }
    }
}());