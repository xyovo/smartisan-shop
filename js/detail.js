function toIndex() {
    location = '../index.html';
}
function toNone() {
    alert('敬请期待！')
}
function toPerson() {
    if (sessionStorage.getItem('username') === null) {
        alert('您还未登录!');
        location = 'login.html'
    }
}

(function () {
    let item = document.querySelector('.pc>.header .btn>.item:first-child');
    let items = document.querySelector('.pc>.header .btn>.item:first-child>.items');
    item.onmouseover = function(){
        if (sessionStorage.getItem('username') !== null) {
            items.style.display = 'block';
        }
    }  
    item.onmouseout = function(){
        if (sessionStorage.getItem('username') !== null) {
            items.style.display = 'none';
        }
    }    
}());
function exitLogin() {
    sessionStorage.clear('username');
}
function my() {
    alert('抱歉，'+ sessionStorage.getItem('username') +'👀\'我的\'功能待开发！');
}

function toCart() {
    if (sessionStorage.getItem('username') === null) {
        alert('您还未登录!');
        location = 'login.html';
    } else {
        location = 'cart.html';
    }
}

window.onload = function() {
    
    
    // 二级导航固定
    (function(){
        let h = 0;
        let nav = document.querySelector('.nav2');
        let navBox = document.querySelector('.nav2-box');
        let navBoxItem = document.querySelector('.nav2-item-box');
        let item = document.querySelectorAll('.nav2-item-box>.item');
        let nav2Title = document.querySelector('.nav2-item-box>.nav2-title');
        window.onscroll = function () {
            h = document.documentElement.scrollTop;
            if(h > 45) {
                nav.setAttribute('style',
                `
                /* 毛玻璃背景 */
                background-color: rgba(255, 255, 255, 0.6);
                backdrop-filter: blur(30px);
                -webkit-backdrop-filter: blur(30px);
                border: 1px solid rgba(255, 255, 255, 0.18);
                box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
                -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
                border-radius: 0px;
                -webkit-border-radius: 0px;
                color: rgb(255, 255, 255);

                position: fixed;
                top: 0;
                height: 75px;
                line-height: 75px;
                `
                );
                navBox.setAttribute('style',
                `
                height: 75px;
                line-height: 75px;
                background: transparent;
                `
                );
                navBoxItem.setAttribute('style',
                `
                height: 75px;
                line-height: 75px;
                background: transparent;
                `
                );
                for(let i = 0; i < item.length; i ++) {
                    item[i].setAttribute('style',
                        `
                        font-size: 16px;
                        color: #333;
                        font-weight:300;
                        `
                    );
                };
                nav2Title.style.display = 'block';
            } else {
                nav.setAttribute('style',
                `
                position: static;
                `
                );
                navBox.setAttribute('style',
                `
                height: 37px;
                line-height: 37px;
                background: #f6f6f6;
                `
                );
                navBoxItem.setAttribute('style',
                `
                height: 37px;
                line-height: 37px;
                background: #f6f6f6;
                `
                );
                for(let i = 0; i < item.length; i ++) {
                    item[i].setAttribute('style',
                        `
                        font-size: 14px;
                        color: #333;
                        `
                    );
                };
                nav2Title.style.display = 'none';
            }
            
            payFixed(h);
        }
    }());

    //结算固定
    function payFixed(h) {
        let pay = document.querySelector('.pay');
        let footerTop = document.querySelector('.footer').offsetTop - window.innerHeight;
        h = document.documentElement.scrollTop;
        if(h > footerTop) {
            pay.setAttribute('style',
            `
            position: static;
            `
            )
        } else {
            pay.setAttribute('style',
            `
            position: fixed;
            bottom: 0;
            `
            )
        }
    };

    // 颜色切换
    (function(){
        let colors = document.querySelectorAll('.colors');
        let roms = document.querySelectorAll('.roms');
        let img = document.querySelectorAll('.detailImg');
        let chooseColor = document.querySelector('#chooseColor');
        let chooseRom = document.querySelector('#chooseRom');
        let choosePrice1 = document.querySelector('#choosePrice1');
        let choosePrice2 = document.querySelector('#choosePrice2');
        
        for(let i = 0; i < colors.length; i ++) {
            colors[i].onclick = function() {
                colors[i].setAttribute('style',
                `
                font-weight: 700;
                border: 1px solid #7d9de8;
                `
                );
                img[i].style.display = 'block';
                chooseColor.innerText = this.textContent;
                (function(index){
                    for(let j = 0; j < colors.length; j ++) {
                        if(j === index) {
                            continue;
                        }else {
                            colors[j].setAttribute('style',
                                `
                                font-weight: 500;
                                border: 1px solid #ccc;
                                `
                            );
                            img[j].style.display = 'none';
                        }
                    }
                }(i));
            }
        }
        
        for(let i = 0; i < roms.length; i ++) {
            roms[i].onclick = function() {
                roms[i].setAttribute('style',
                `
                font-weight: 700;
                border: 1px solid #7d9de8;
                `
                );
                chooseRom.innerText = this.textContent;
                switch(i) {
                    case 0: choosePrice1.innerText = '2,699.00';choosePrice2.innerText = '2,699.00';break;
                    case 1: choosePrice1.innerText = '2,999.00';choosePrice2.innerText = '2,999.00';break;
                    case 2: choosePrice1.innerText = '3,599.00';choosePrice2.innerText = '3,599.00';break;
                    case 3: choosePrice1.innerText = '3,999.00';choosePrice2.innerText = '3,999.00';break;
                }
                (function(index){
                    for(let j = 0; j < roms.length; j ++) {
                        if(j === index) {
                            continue;
                        }else {
                            roms[j].setAttribute('style',
                                `
                                font-weight: 500;
                                border: 1px solid #ccc;
                                `
                            );
                        }
                    }
                }(i));
            }
        }
    }());

}