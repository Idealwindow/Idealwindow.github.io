function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function RandomInt(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}
function RandomHex(){
	let hex_str = "";
	for(let i=0;i<15;i++){
		hex_str += RandomInt(0,15).toString(16);
	}
	return hex_str.toUpperCase();
}
window.onload = function() {
	document.oncontextmenu = function(){return false;}
	document.getElementById("winerror").onblur = function() {
		this.value = this.value.length == 9 ? this.value.replace(/^([^0]|0)(X.*|x)(.*)[^A-F0-9](.*)/, '') : '';
	}
	document.getElementById("submit").onclick = async function() {
		var winvers = ["Windows XP", "Windows Vista", "Windows 7"];
		var winver = document.getElementsByName("winver")[0].value;
		var winerror = winvers.includes(winver) ? document.getElementsByName("winerror")[1].value : document
			.getElementsByName("winerror")[0].value;
		if (winerror == "") {
			alert("请填充完整,谢谢!");
			return;
		}
		if (winvers.includes(winver)) {
			document.querySelector("title").innerText = "BSOD(按F5解除)";
			document.getElementById("bluescreen").style.backgroundColor = "#010080";
			document.getElementById("bluescreen").innerHTML = `<div style="display:block;width:90%;height:90%;left:5%;top:5%;font-size:24px;white-space:pre-wrap;font-family:Lucida Console;">
A problem has been detected and windows has been shut down to prevent damage to your computer.

If this is the first time you've seen this stop error screen,
restart your computer. if this screen appears again, follow
these steps:

check for viruses on your computer. remove any newly installed
hard drives or hard drive controllers. check your hard drive
to make sure it is properly configured and terminated.
Run CHKDSK /F to check for hard drive corruption, and then
restart your computer.

Technical information:

*** STOP: ${winerror}(0x${RandomHex()},0x${RandomHex()},0x000000000000000,0x${RandomHex()})</div>`;
			document.getElementById("bluescreen").style.display = "block";
			document.getElementById("error").innerHTML = `${winerror}`;
		} else {
			document.querySelector("title").innerText = "BSOD(按F5解除)";
			document.getElementById("bluescreen").innerHTML = `<p style="font-size: 100px;top: 10%;">:(</p>
			<br>
			<div style="top: 10%;">
				<br>
				<p>你的设备遇到问题，需要重新启动。</p>
				<br>
				<br>
				<p>我们只收集某些错误信息，然后你可以重新启动。</p>
				<br>
				<br>
				<br>
				<p><span id="load"></span>完成</p>
				<br>
				<br>
				<br>
				<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAAC2CAYAAAB08HcEAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAABrVJREFUeNrs3duN4zAMAMD036qL8DVwC8SR+JKHQP4WiGNPNhIlkZ9biAPj4xYIsIUAWwiwhQBbCLAF2EKALQTYQoAtRDrsq/lr9TPsjifvVX2/Tni2S7A/TV/X4meIgv3te13F9+uEZws22GCDDTbYYIMNNthgg/3Tg/rr9QTb6uuv9/r2b8Euhp2Z+ol4UF3+i2bcqyf3q/q5toCdEafDzrhXT2FXPlewwQYbbLDBXrhREUupkbA7TOh2bxWIgB21pD8GdsR/sOuOyYpETfKq05hRsDOzMmAnpSxPeC+wwQYbbLDBBnv0GHv6eB7swbCjsiJPH0rHTAvYL4Id8V7VezIiNoeBDTbYYIMNNthggw12xOTxydK1ySPYKem+apiZS/LSfS9ZoOn6uaIWeMAGG2ywwQYb7JZj7OrPZYw9GHbXgwZX8efq8MVw0CDqzTcPG7JgR11/9lDG0TCwwQYbbLDBBhvsGbCnVIKKmjx+O8mqXiZXCSoxr1qZPorMHmTvS6lMYypKCXbLNCbYYIMNNthggw324rVGjMdfAXtKy7TIv62GvaPIvHZ4ohXsHdd1fIANNtgC7FNhdxhbdRi7Vy/Q7PgSVc9TQtt+d8+KTGobl3mtK1g7pxbBBjtlOAU22GCDDTbYYIMN9pmwp7Rm7jx5rC7dtmPvd6t0XxTWiPeKSFV1SPd1Kd32zT0s2yuSvZBRvTGp62LOnXgPs4ZIYIMNNthgg714Ub8euo0cH0YuPWfNM6aNsY+DnflQMvdUTNl4H1VmLXTf9IPrbwc7K43YtSXFpDz2MbsDwQYbbLDBBhtssAfBXi071h129fL9tMnjr5O/UQcNVi408yRz544EEQXxV9/r9Zugpvxkde4hcyV+rmvz8wYbbLDBBhvspmPsqEpO1WPslUl1lzF2JuydyYbyrEjmppzMrEh13bsde7+vxecd1bt+RB57Guxf/7Y77I5DvNDrAhtssMEGG+w9ix6dx9jVB4xX96RHlJmLmoBfE2DvOmCblRWJuNbqL/x1509UW7ec3gW78mc08xha5vt3gR3xXMAGG2ywwQYbbLDBrps8Ziw9V0weI1b4uk32x8OuLgcQtYclMo33BEBE7b2MbM34dN+UAi7Zn7/rjrvqBbXXrzyCDTbYYIP97Tio6xg7q2JRlzF2JuyIvedlsDt8+N0HUXfcg8x96lfylyDrkPMo2FU/VxWwM4ZoUfega20XsMEGG2ywwQYbbLBzloMjVugye6lnZQ9MHjek+1ZLKnTMg2e3w4uoiRjZyeuYdF/nBY5TYKf+ZBf+xx+x8gg22GCDDfZk2FH1mjvDzuw4nDX/efW21V0ZlN21/6L6gEdNnLLb4WVlRXbvaxkHu+PP6JX0WU9tYAo22GCDDTbYCbAjDq3+MimNGmNn9ZoBe3DL6ax9Bl3q6XX4wmdlRVZhj205fTrsCUO0qOHc6vNqmccGG2ywwQYbbLDBPgD27snIibCjuqn9Anv1eY1trrS6H/vpnohVQLuXuTuk5ap7R444aBD1c3M1fijdrmt6U9QbbLDBBhtssGfDjhxjR8wdOpTrjaimFTXGHrnyuAv29AxMVDH2Dm36Vv/rj9kr0hV2Zc48on3GHYQKbLDBBhtssMEGG2ywVyaPWb3Ud8COyAxlHuYdA3t1mXm1QX1k+YWMvu8RBe131i/slm1Jgd0xOhTMyf5cocetmg1xwAYbbLDBfiXsq/mrGvZqKeXMsmNPrusVsD9NX11LnFV38upQbDNisg12wk822M2ay4INNthggw32ubCjJ3RZCyHdYLcdY2dmPzq2Zt6xob6ydNqOrEhkPfNS2JV53Op+iKtHy6qLUk56BmCDDTbYYIMNNthvhR2xTP7kplZMHlcnWdnNlaIn8Pcdsx23HPaUCvnZsKPui1PqYB8Hu8O6A9hggw022GCD/fW17t52mg2769nEkYd5T4EddVAgIiuSve95wr4WsJPyujvyvVcXFIXPG2ywwQYbbLDBBhvs82FHLv9nTh6/fbYmjy+CXb3MndmLvcMpqJYnaMDeDyhriNUF9pYAG2ywwQYbbLB3jrGzVlTB/vIBVB80qO4DvuugQQTAjmUlRsCOio6tOiLz2FmwI3+h0yvWgg022GCD/VbY3SpBdR5jr7xX5GLIyj08cow9qXZfdVakw6GEDvs/llcYwe6Tx86+tx2GPaqtgg022GCDDTbYYIMN9gthT2qHl9kGegfsjPtyB9/DrPu1FbYQIwJsAbYQYAsBthBgCwG2AFsIsIUAWwiwhQBbiP/GvwEAGR6d0lY25EYAAAAASUVORK5CYII=">
				<div style="top: -5vh;">
					<p style="font-size: 12px;">有关此问题的详细信息和可能的解决方法，请访问</p>
					<br>
					<p style="font-size: 12px;margin-top: 10px;">https://www.windows.com/stopcode</p>
					<br>
					<p style="font-size: 12px;margin-top: 10px;">如果致电支持人员，请向他们提供以下信息:</p>
					<br>
					<p style="font-size: 12px;margin-top: 10px;">终止代码: <span id="error"></span></p>
				</div>
			</div>`;
			document.getElementById("bluescreen").style.display = "block";
			document.getElementById("error").innerHTML = `${winerror}`;
			for (let i = 1; i <= 100; i++) {
				await sleep(RandomInt(50, 300));
				document.getElementById("load").innerHTML = `${i}%`;
			}
		}
	}
}
