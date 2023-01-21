function isURL(url) {
	return /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(url)
}
var reg = new RegExp("(^|&)link=([^&]*)(&|$)", "i");
var link = isURL(window.location.search.substr(1).match(reg) !== null ? window.location.search.substr(1).match(reg)[2] : window.location.origin) ? window.location.search.substr(1).match(reg) !== null ? window.location.search.substr(1).match(reg)[2] : window.location.origin : '<a id="link">您输入的网址并不符合要求呢.</a>';
if (self.frameElement && self.frameElement.tagName == "IFRAME") {
　　link = "https://baike.baidu.com/item/%E4%BF%84%E7%BD%97%E6%96%AF%E5%A5%97%E5%A8%83/17215?fr=aladdin";
}
document.getElementById("nav").innerHTML = (link === '<a id="link">您输入的网址并不符合要求呢.</a>') ? link : '您现在正在访问的网站是&nbsp;&nbsp;<a id="link" title="点击输入你想要的域名">' + link + "</a>";
document.querySelector("iframe").src = (link === '<a id="link">您输入的网址并不符合要求呢.</a>') ? "about:blank" : link;
document.getElementById("link").onclick = function() {
	var x = window.prompt("输入你想要镜像的域名", (link === '<a id="link">您输入的网址并不符合要求呢.</a>') ? "about:blank" : link);
	if (!(x == null || x == "")) {
		window.location.search = "link=" + x;
	}
}
