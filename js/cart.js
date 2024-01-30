function toPerson() {
    if (sessionStorage.getItem('username') === null) {
        alert('您还未登录!');
        location = 'login.html'
    }
}

function toDetail() {
    location = 'detail.html'
}
function toIndex() {
    location = '../index.html'
}
function toNone() {
    alert('敬请期待！')
}

function toCart() {
    if (sessionStorage.getItem('username') === null) {
        alert('您还未登录!');
        location = 'login.html';
    } else {
        location = 'cart.html';
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

// 结算功能

// 加减按钮
(function(){
    let plus = document.querySelectorAll('.plus');
    let subtract = document.querySelectorAll('.subtract');
    let num = document.querySelectorAll('.numBox>input');
    for(let i = 0; i < plus.length; i ++) {
        plus[i].onclick = function() {
            num[i].value ++;
            aTotalPrice();
        };
        subtract[i].onclick = function() {
            if(num[i].value > 1) {
                num[i].value --;
                aTotalPrice();
            } else {
                confirm('再减就没了，您确认要删除吗？')
            }
        }
        
    }
}());

// 计算单个商品总价
function aTotalPrice() {
    let price = document.querySelectorAll('.price');
    let aTotal = document.querySelectorAll('.aTotal');
    let num = document.querySelectorAll('.numBox>input');
    for(let i = 0; i < price.length; i ++) {
        aTotal[i].innerText = (parseFloat(price[i].textContent) * num[i].value).toFixed(2);
    }
    getTotalPrice();
}

// 计算总价
function getTotalPrice() {
    let total = 0;
    let aTotal = document.querySelectorAll('.aTotal');
    let totalEl = document.querySelector('#totalPrice');
    for(let i = 0; i < aTotal.length; i ++) {
        total += parseFloat(aTotal[i].textContent);
    }
    totalEl.innerText = total.toFixed(2);
}
getTotalPrice();

// 删除
(function delGoods() {
    let del = document.querySelectorAll('.delete');
    for(let i = 0; i < del.length; i ++) {
        del[i].onclick = function() {
            this.parentElement.remove();
            getTotalPrice();
            let goods = document.querySelectorAll('.good');
            if(goods.length === 0 ) {
                let nullBox = document.querySelector('.cart>.null');
                nullBox.style.display = 'flex';
                document.querySelector('.goods').style.display = 'none';
            }
        }
    }
}());
