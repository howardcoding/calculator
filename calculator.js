var clickNum = document.getElementById('cal'); //取到计算器面板的对象
var calScreen = document.getElementById('cal-screen'); //取到计算器显示屏对象
// 设置标记变量标记是否清空屏幕内容
var clrFlag = 0;
var x = 0;
var y = 0;
var operate = undefined;
//根据按下的按钮确定显示的字符
function disNum(button, display) {
    var display = calScreen.innerHTML;
    switch (button) {
        case '.':
            calScreen.innerHTML = display + '.';
            break;
        case '-':
            calScreen.innerHTML = '-' + display;
            break;
        case 'plus':
            {
                operate = 'plus';
                x = calScreen.innerHTML;
                clrFlag = 0;
            }
            break;
        case 'reduce':
            {
                operate = 'reduce';
                x = calScreen.innerHTML;
                clrFlag = 0;
            }
            break;
        case 'multi':
            {
                operate = 'multi';
                x = calScreen.innerHTML;
                clrFlag = 0;
            }
            break;
        case 'divide':
            {
                operate = 'divide';
                x = calScreen.innerHTML;
                clrFlag = 0;
            }
            break;
        case 'sin':
            {
                if (calScreen.innerHTML == '') {
                    alert('请先输入一个数字，然后再点击【Sin】进行计算！');
                    calScreen.innerHTML = '';
                } else {
                    var baseNum = calScreen.innerHTML;
                    calScreen.innerHTML = Math.sin(Number(baseNum)).toFixed(8);
                }
                clrFlag = 0;

            }
            break;
        case 'cos':
            {
                if (calScreen.innerHTML == '') {
                    alert('请先输入一个数字，然后再点击【Sin】进行计算！');
                    calScreen.innerHTML = '';
                } else {
                    var baseNum = calScreen.innerHTML;
                    calScreen.innerHTML = Math.sin(Number(baseNum)).toFixed(8);
                }
                clrFlag = 0;

            }

            break;
        case 'result':
            calculate();
            break;
        case 'clear':
            calScreen.innerHTML = '';
            break;
        default:
            calScreen.innerHTML = display + button;
    }
}
//click事件处理函数,事件代理方式
clickNum.addEventListener('click', function(e) {

    var button = e.target.id;
    
    if (clrFlag === 0) {
        calScreen.innerHTML = '';
        clrFlag = 1;
        disNum(button);

    } else {

        disNum(button);
    }
    //点击按钮之后，将相应的字符在屏幕上显示出来
}, false)


function calculate() {
    y = calScreen.innerHTML;

    var rst = 0;
    switch (operate) {
        case 'plus':
            {
                rst = Number(x) + Number(y);
                if (rst.toString().length >= 7) {
                    rst = rst.toFixed(8);
                } else {
                    calScreen.innerHTML = rst;
                }
                clrFlag = 0;
            }
            break;
        case 'reduce':
            {
                rst = Number(x) - Number(y);
                if (rst.toString().length >= 7) {
                    rst = rst.toFixed(8);
                } else {
                    calScreen.innerHTML = rst;
                }
                clrFlag = 0;
            }
            break;
        case 'multi':
            {
                rst = Number(x) * Number(y);
                if (rst.toString().length >= 7) {
                    rst = rst.toFixed(8);
                } else {
                    calScreen.innerHTML = rst;
                }
                clrFlag = 0;
            }
            break;
        case 'divide':
            {
                rst = Number(x) / Number(y);
                if (rst.toString().length >= 7) {
                    rst = rst.toFixed(8);
                } else {
                    calScreen.innerHTML = rst;
                }
                clrFlag = 0;
            }
            break;
           
        default:
            {
                calScreen.innerHTML = 'Error';
                clrFlag = 0;
            }
    }
}
