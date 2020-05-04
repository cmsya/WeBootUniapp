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

const navStyle = n => { // 顶部导航设置
	let nstyle = uni.setNavigationBarColor({
									frontColor: '#000000',      // 前景颜色（例如标题/按钮等）
									backgroundColor: '#ffffff', // 需要渐变到最后的的颜色
									animation: { // 设置动画效果
										duration: 400,
										timingFunc: 'easeIn'
									}
								})
	return nstyle
}


const goNavigator = (e,i) => {
	console.log(e,i);
	/*
	if (e == 'setUserInfo' && i == undefined){
		uni.navigateTo({
			url: '../user/modifyUserInfo',
		});
	}else if(this.userMenuList[i].path == '' ){
		uni.showToast({
			icon: 'none',
			title:'【' + e + '】未完善！'
		});
	}else{
		uni.navigateTo({
			url: this.userMenuList[i].path,
		});
	}
	*/
	
}


const count = n => {
	let t = 1
	return n + 3
}



/*
const currPage = n => {
 	let pages = getCurrentPages();
    let currPage = null;
    // console.log(pages) 的到一个数组
    if (pages.length) {
      // 获取当前页面的对象（上边所获得的数组中最后一项就是当前页面的对象）
      currPage = pages[pages.length - 1];
    }
    // 获取当前页面的路由
	let route = 'currPage.route'
	return route
}
*/


const IndexUrl= 'wx/home/index'; //首页数据接口
export function getHome() {
  return request({
    url: IndexUrl,
    method: 'get'
  })
}

export function getText() {
  return 1234 ;
}



module.exports = {
  formatTime: formatTime,
  count:count,
  navStyle:navStyle,
  goNavigator: goNavigator
}
