var app = new Vue({
	el:"#app",
	data:{
		message:'read more',
		flag:false,//display 6 province
		newslist:[]
	},
	computed:{
		displaylist()
		{
			if(!this.flag)
			{
				this.message = 'read more';
				var temp = this.newslist.slice(0,6);				
				return temp;
			}
			else
			{
				this.message ='read less';
				return this.newslist;
			}
		}
	},
	created(){
		axios.get('http://api.tianapi.com/txapi/ncovcity/index?key=229a8745b39d447b656d775df952443c')
		.then(res => {
			console.log(res);
			this.newslist = res.data.newslist;
		})	
	},
	methods:{
		toggleCity(p,index)
		{
			if(!p.cityDisplayed)
			{
				p.cityDisplayed = true;
			}
			else
			{
				p.cityDisplayed = false;
			}
			Vue.set(this.newslist,index,p);//this will trigger view update
			console.log(p);
		}
	}
})