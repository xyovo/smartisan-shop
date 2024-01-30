window.onload = function () {

    // 正则验证
    
    let loginTbn = document.querySelector('.btn');
    let input = document.querySelectorAll('input');
    let username = input[0];
    let password = input[1];
    username.onblur = function() {
        let regPhone = /0?(13|14|15|17|18)[0-9]{9}/;
        let regEmail = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
        let msg = document.querySelector('.login>.input>.username>.msg');
        if(regPhone.test(username.value) || regEmail.test(username.value)) {
            msg.style.display = 'none';
        } else {
            msg.style.display = 'block';
        }
    }


    loginTbn.onclick = function() {
        if(username.value === 'admin' && password.value === 'admin') {
            console.log('登录成功');
            sessionStorage.setItem('username','admin');//数据存入session
            sessionStorage.setItem('password','admin');//数据存入session
            sessionStorage.getItem('username');//获取session中的数据
            // sessionStorage.removeItem('key');//删除session中名为"key"的值
            alert(`欢迎光临，${sessionStorage.getItem('username')}!`);
            location = '../index.html';
        } else {
            console.log('登录失败');
        }
    }

}