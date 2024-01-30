window.onload = function () {


    // 搜索跳转页
    (function toSearchPage() {
        let search = document.querySelector('#search-input');
        search.onclick = function () {
            window.location.href = 'app/search.html';
        }
    })();

    // 手机端底部导航跳转
    (function () {
        let item = document.querySelectorAll('.nav-bottom>.item');
        for (let i = 0; i < item.length; i++) {
            item[i].onclick = function () {
                switch (i) {
                    case 0:
                        window.location.href = "index.html";
                        break;
                    case 1:
                        window.location.href = "app/category.html";
                        break;
                    case 2:
                        window.location.href = "app/cart.html";
                        break;
                    case 3:
                        window.location.href = "app/person.html";
                }
            }
        }
    }());

    // 显示二级导航
    let nav = document.querySelectorAll('.nav2-item-box>.item');
    let secondItem = document.querySelectorAll('.second');
    let secondBox = document.querySelector('.nav2-second');
    for (let i = 0; i < nav.length; i++) {
        nav[i].onmouseover = function () {
            this.setAttribute('style','color:#b91720;font-weight:600');
            secondBox.setAttribute(
                'style',
                `
                display:flex;
                transition: 1s;
                `
            )
            secondItem[i].style.display = 'flex';
            (function(index) {
                for(let j = 0; j < secondItem.length; j ++) {
                    if(j === index) {
                        continue;
                    }else {
                        secondItem[j].style.display = 'none';
                        nav[j].setAttribute('style','color:#777;font-weight:500');
                    }
                }
            }(i));
        };

        
        secondBox.onmouseleave = function() {
            secondBox.style.display = 'none';
            (function(index) {
                for(let j = 0; j < secondItem.length; j ++) {
                    if(j === index) {
                        continue;
                    }else {
                        secondItem[j].style.display = 'none';
                        nav[j].setAttribute('style','color:#777;font-weight:500');
                    }
                }
            }(i));
            
        }

        document.querySelector('.nav2').onmouseleave = function() {
            secondBox.style.display = 'none';
            (function(index) {
                for(let j = 0; j < secondItem.length; j ++) {
                    if(j === index) {
                        continue;
                    }else {
                        secondItem[j].style.display = 'none';
                        nav[j].setAttribute('style','color:#666;font-weight:500')
                    }
                }
            }(i));
        }

        
        

    }

    // 导航栏固定定位
    let myNav = document.querySelector('.nav2');
    let btn = document.querySelector('.btn');
    let input = document.querySelector('.nav2>.nav2-box>.search');
    let navFather = document.querySelector('.nav2>.nav2-box');
    let items = document.querySelector('.pc>.header .btn>.item:first-child>.items');
    window.onscroll = function() {
        let h = document.documentElement.scrollTop;
        if(h > 45) {
            myNav.setAttribute('style',
            `
            position:fixed;
            top:0;
            z-index:999;
            /* 毛玻璃背景 */
            background-color: rgba(255, 255, 255, 0.6);
            backdrop-filter: blur(30px);
            -webkit-backdrop-filter: blur(30px);
            border: 1px solid rgba(255, 255, 255, 0.18);
            box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
            -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
            border-radius: 12px;
            -webkit-border-radius: 12px;
                
            
            border-radius: 12px;
            -webkit-border-radius: 12px;
            color:#222;
            font-weight:800;
            `
            );       
            input.setAttribute('style','display:none');
            navFather.appendChild(btn);
            btn.setAttribute('style',
            `
            display:flex;
            align-item: center;
            line-height:75px;
            `
            );
            items.style.top = '75px';
            document.querySelectorAll('.btn>.item>span')[0].setAttribute('style','font-size:20px;margin:0 10px;cursor: pointer;')
            document.querySelectorAll('.btn>.item>span')[1].setAttribute('style','font-size:20px;margin:0 10px;cursor: pointer;')
        } else {
            myNav.setAttribute('style','position:relative;background-color:#fff');       
            input.setAttribute('style','display:block');
            document.querySelector('.nav1').appendChild(btn);
            items.style.top = '45px';
        }
    }
    


}