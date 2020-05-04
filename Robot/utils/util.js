/*
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}




const count = n => {
	let t = 1
	return n + 3
}


const getText = function (e) {
  return e ;
}

const isLogin = function(){
	if (!this.hasLogin) {
		uni.showModal({
			title: '未登录',
			content: '您未登录，需要登录后才能继续',
			// 如果需要强制登录，不显示取消按钮
			showCancel: !this.forcedLogin,
			
			success: (res) => {
				if (res.confirm) {
					
					 // 如果需要强制登录，使用reLaunch方式
					if (this.forcedLogin) {
						uni.reLaunch({
							url: '../login/login'
						});
					} else {
						uni.navigateTo({
							url: '../login/login'
						});
					}
				}
			}
		});
	}
}



const goNavigator = function(title,url,type){
	
	console.log(title,url,type);
	if(url == undefined || url == ''){
		uni.showToast({
			icon: 'none',
			title:'【' + title + '】未完善！'
		});
	}else if(type == 'switchTab'){
		uni.switchTab({
			url: url,
		});
	}else {
		uni.navigateTo({
			url: url,
		});
	}
}


module.exports = {
  formatTime: formatTime,
  count:count,
  navStyle:navStyle,
  isLogin:isLogin,
  goNavigator: goNavigator
}


*/


export default {
	
	// 顶部导航设置
	navStyle (e){
		let nstyle = uni.setNavigationBarColor({
										frontColor: '#000000',      // 前景颜色（例如标题/按钮等）
										backgroundColor: '#ffffff', // 需要渐变到最后的的颜色
										animation: { // 设置动画效果
											duration: 400,
											timingFunc: 'easeIn'
										}
									})
		return nstyle
	},

	// localStorage 添加
	setLocalStorage(key, value ,dTime) {
		var curtime = new Date().getTime(); // 获取当前时间 ，转换成JSON字符串序列 
		var valueDate = JSON.stringify({
			data: value,
			timer: curtime,
			diff: dTime,
			timeDifference: Date.now()
		});
		try {
			localStorage.setItem(key, valueDate);
		} catch(e) {
			/*if(e.name === 'QUOTA_EXCEEDED_ERR' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
				console.log("Error: 本地存储超过限制");
				localStorage.clear();
			} else {
				console.log("Error: 保存到本地存储失败");
			}*/
			// 兼容性写法
			if(this.isQuotaExceeded(e)) {
				console.log("Error: 本地存储超过限制");
				localStorage.clear();
			} else {
				console.log("Error: 保存到本地存储失败");
			}
		}
	},
	
    // LocalStorage 获取
	getLocalStorage(key) {
		var exp = 60 * 60 * 24; // 一天的秒数
		if(localStorage.getItem(key)) {
			var vals = localStorage.getItem(key); // 获取本地存储的值 
			var dataObj = JSON.parse(vals); // 将字符串转换成JSON对象
			// 如果(当前时间 - 存储的元素在创建时候设置的时间) > 过期时间 
			var isTimed = (new Date().getTime() - dataObj.timer) > exp;
			if(isTimed) {
				console.log("存储已过期");
				localStorage.removeItem(key);
				return null;
			} else {
				var newValue = dataObj.val;
			}
			return newValue;
		} else {
			return null;
		}
	},
	
	// localStorage 删除
    removeLocalStorage (key = STORAGE_USER_KEY) {
		// console.log('get local operation')
		return window.localStorage.removeItem(key)
    },
	
	isQuotaExceeded(e) {
		var quotaExceeded = false;
		if(e) {
			if(e.code) {
				switch(e.code) {
					case 22:
						quotaExceeded = true;
						break;
					case 1014: // Firefox 
						if(e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
							quotaExceeded = true;
						}
						break;
				}
			} else if(e.number === -2147024882) { // IE8 
				quotaExceeded = true;
			}
		}
		return quotaExceeded;
	},
	
	
	// 页面跳转
	goNavigator (title,url,type){
		console.log(title,url,type);
		if(url == undefined || url == ''){
			uni.showToast({
				icon: 'none',
				title:'【' + title + '】未完善！'
			});
		}else if(type == 'switchTab'){
			uni.switchTab({
				url: url,
			});
		}else {
			uni.navigateTo({
				url: url,
			});
		}
	}
	

	
	
}  //  export default end