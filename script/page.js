"use strict";

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function Scroll(domid) {
	if (document.getElementById(domid) !== null) {
		document.documentElement.scrollTop = document.getElementById(domid).offsetTop;
	}
}
async function messy_code() {
	const text = `Hello world!\n\nWhy light must be pure white and flawless?`;
	var text_change_big = Array.from(document.getElementById("bigSize").innerText);
	var text_change_small = Array.from(document.getElementById("smallSize").innerText);
	for (let j = 1; j <= 5; j++) {
		for (let i = 0; i < text.length; i++) {
			if (j == 5) {
				var char = text[i];
			} else {
				var char = String.fromCharCode(Math.floor(Math.random() * 58) + 65);
			}
			await sleep(0);
			if (i <= 11) {
				text_change_big[i] = char;
				document.getElementById("bigSize").innerText = text_change_big.join("");
			} else {
				text_change_small[i - 14] = char;
				document.getElementById("smallSize").innerText = text_change_small.join("");
			}
		}
	}
}

function popWindow(title, htmldoc) {
	this.title = title
	this.htmldoc = htmldoc;
	this.show();
}
popWindow.prototype = {
	show: function() {
		let isClick = false;
		let popmaskdom = document.querySelector(".popMask");
		let popdom = document.querySelector(".pop");
		let popTextDom = document.createElement("div");
		popdom.appendChild(popTextDom);
		popTextDom.setAttribute("class", "popText");
		popdom.style.display = "block";
		sleep(10).then(() => {
			popmaskdom.setAttribute("class", "popMask show");
			popdom.setAttribute("class", "pop show");
		});
		if (this.htmldoc != undefined && this.title != undefined) {
			popTextDom.innerHTML = "<h5>" + this.title + "</h5>" + this.htmldoc;
		}
		popmaskdom.onclick = function() {
			if (isClick) {
				popdom.setAttribute("class", "pop");
				popmaskdom.setAttribute("class", "popMask");
				sleep(400).then(() => {
					popdom.style.display = "none";
					popTextDom.remove();
				});
			}
		};
		popmaskdom.onmousemove = (e) => {
			let x = e.clientX;
			let y = e.clientY;
			let divLeft = popdom.offsetLeft;
			let divTop = popdom.offsetTop;
			let divLeft1 = divLeft + popdom.offsetWidth;
			let divTop1 = divTop + popdom.offsetHeight;
			if (x < divLeft || x > divLeft1 || y < divTop || y > divTop1) {
				isClick = true;
			} else {
				isClick = false;
			}
		}
	}
}
window.onload = function() {
	let isClick = false;
	let isDark = false;
	Array.from(document.getElementsByTagName("a")).forEach(element => {
		element.onclick = () => {
			Scroll(element.dataset.target);
		}
	});
	//此上为导航栏的导航效果
	document.oncontextmenu = () => {
		return false;
	}
	messy_code();
	document.getElementById("topTitle").onclick = function() {
		messy_code();
		//此上为字符乱码的特效
	};
	document.getElementById("support").onclick = function() {
		new popWindow('关于此页面的问题', `
        <p>Q1:点击脚注中的邮箱没有响应,为什么?</p>
        <br>
        <p>A1:因为启动此邮箱需要您的电脑中有邮箱客户端或登陆支持mailto协议的网站(如Outlook,Gmail等),若您的Windows电脑中含有邮箱客户端,可在控制面板=>程序=>默认程序=>设置关联=>MAILTO中双击并设置.</p>
        <br>
        <p>Q2:为什么GitHub开不了?</p>
        <br>
        <p>A2:<s>傻孩子们,我开了科技与狠活,哈哈!</s>其实是因为GitHub的CDN域名遭到DNS污染,导致无法链接GitHub的加速服务器,速度也就慢下来了.解决方案可参考<a href="https://www.bilibili.com/video/BV1714y1n7Fz/" target="_blank">此处</a>.</p>
        <br>
        <p>Q3:为什么网页排版会变得很奇怪?</p>
        <br>
        <p>A3:此网站并没有对IE做适配(很抱歉,但我偏要),若您使用低版本内核浏览器或IE浏览器,建议更新您所使用的浏览器至主流版本(如Google Chrome,Mozila Firefox,Microsoft Edge,Safari,Opera等).</p>
        `)
	};
	document.getElementById("workLink_Logs").onclick = function() {
		new popWindow('更新日志', `
    <ul style='list-style: none;font-size: 20px;'>
        <li>
            Version 1.0.0
            <ol style='font-size: 16px;padding-left: 50px;'>
                <li>加入了UI界面</li>
                <li>内置四部作品了(虽说都不怎么样)</li>
                <li>敬请期待……</li>
            </ol>
        </li>
    </ul>`)
	};
	document.getElementById("button_links").onclick = function() {
		document.getElementById("links").setAttribute("class", "show");
		document.getElementById("links_mask").style.display = "block";
	};
	document.body.onclick = () => {
		if (isClick) {
			document.getElementById("links").setAttribute("class", "");
			document.getElementById("links_mask").style.display = "none";
		}
	}
	document.body.onmousemove = (e) => {
		let x = e.clientX;
		let y = e.clientY;
		let divLeft = document.getElementById("links").offsetLeft;
		let divTop = document.getElementById("links").offsetTop;
		let divLeft1 = divLeft + document.getElementById("links").offsetWidth;
		let divTop1 = divTop + document.getElementById("links").offsetHeight;
		if (x < divLeft || x > divLeft1 || y < divTop || y > divTop1) {
			isClick = true;
		} else {
			isClick = false;
		}
	}
	document.getElementById("theme_switch").onclick = () => {
		if(isDark === true){
			isDark = false;
		}else{
			isDark = true;
		}
	}
	setInterval(() => {
		if (matchMedia('(prefers-color-scheme: dark)').matches || isDark === true) {
			document.body.className = "dark";
			document.getElementById("theme_switch").querySelector("i").innerHTML = "\uD83C\uDF15";
			document.getElementById("theme_switch").title = "深色模式";
		}else{
			document.body.className = "";
			document.getElementById("theme_switch").querySelector("i").innerHTML = "\u2600️";
			document.getElementById("theme_switch").title = "浅色模式";
		}
	},0);
};
