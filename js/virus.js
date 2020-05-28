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


var mydata = [{"name":"\u9999\u6e2f","value":1066},{"name":"\u5185\u8499\u53e4","value":232},{"name":"\u5409\u6797","value":155},{"name":"\u53f0\u6e7e","value":441},{"name":"\u4e0a\u6d77","value":671},{"name":"\u6e56\u5317","value":68135},{"name":"\u5e7f\u4e1c","value":1592},{"name":"\u5317\u4eac","value":593},{"name":"\u56db\u5ddd","value":564},{"name":"\u5c71\u4e1c","value":788},{"name":"\u798f\u5efa","value":357},{"name":"\u5929\u6d25","value":192},{"name":"\u6d77\u5357","value":169},{"name":"\u6cb3\u5357","value":1276},{"name":"\u6d59\u6c5f","value":1268},{"name":"\u6e56\u5357","value":1019},{"name":"\u5b89\u5fbd","value":991},{"name":"\u9ed1\u9f99\u6c5f","value":945},{"name":"\u6c5f\u897f","value":937},{"name":"\u6c5f\u82cf","value":653},{"name":"\u91cd\u5e86","value":579},{"name":"\u6cb3\u5317","value":328},{"name":"\u9655\u897f","value":308},{"name":"\u5e7f\u897f","value":254},{"name":"\u5c71\u897f","value":198},{"name":"\u4e91\u5357","value":185},{"name":"\u8fbd\u5b81","value":149},{"name":"\u8d35\u5dde","value":147},{"name":"\u7518\u8083","value":139},{"name":"\u65b0\u7586","value":76},{"name":"\u5b81\u590f","value":75},{"name":"\u6fb3\u95e8","value":45},{"name":"\u9752\u6d77","value":18},{"name":"\u897f\u85cf","value":1}];
var optionMap = {  
                /* backgroundColor: '#FFFFFF', */  
                title: {  
                    text: '中国疫情地图',
                    subtext: '',  
                    x:'left'
                },  
                tooltip : {  
                    trigger: 'item'  
                },  
                
                //左侧小导航图标
                visualMap: {  
                    show : true,  
                    x: 'left',  
                    y: 'bottom',
					textStyle:{
						fontSize: 6
					},
                    splitList: [
                        {start: 1000},{start: 500, end: 999},{start: 100, end: 499},
                        {start: 10, end: 99},{start: 1, end: 9},
                    ],  
                    color: ['#cc0000', '#ff4d4d', '#ff9999','#ffe5e5']
                },  
                
                //配置属性
                series: [{  
                    name: '确诊',  
                    type: 'map',  
                    mapType: 'china',   
                    roam: false,
                    label: {  
                        normal: {  
                            show: true,  //省份名称  
							fontSize: 8
                        },  
                        emphasis: {  
                            show: true
                        }  
                    },
                    itemStyle: {
                         normal: {
                            borderColor: '#fff',
                            borderWidth: 1,
                            areaStyle: {
                                color: '#cc3735'
                            },
                            label: {
                                show: true,
                                textStyle: {
                                    color: 'rgba(139,69,19,1)'
                                }
                            }
                        }, 
                       /* emphasis: {
                            borderColor: 'rgba(0,0,0,0)',
                            borderWidth: 1,
                            areaStyle: {
                                color: 'rgba(255,215,0,0.8)'
                            },
                            label: {
                                show: false,
                                textStyle: {
                                    color: 'rgba(139,69,19,1)'
                                }
                            }
                        } */
                    }, 
                    data:mydata  //数据
                }]  
            };  
        //初始化echarts实例
        var myChart = echarts.init(document.getElementById('map'));

        //使用制定的配置项和数据显示图表
        myChart.setOption(optionMap);