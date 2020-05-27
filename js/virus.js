var app = new Vue({
	el:"#app",
	data:{
		newslist:[]
	},
	created(){
		axios.get('http://api.tianapi.com/txapi/ncovcity/index?key=229a8745b39d447b656d775df952443c')
		.then(res => {
			console.log(res);
			this.newslist = res.data.newslist;
		})	
	}
})