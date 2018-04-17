<style lang="less">
	@import "../../less/common.less";
	.container-wrap{
		height:100%;
		.flex-column;
		.wrap-title{
			height:84px;
			text-align: center;
			position:relative;
			&:before {
				content:'';
				position:absolute;
				width:28.625rem;
				height:2px;
				left:0;
				top:46%;
				background: -webkit-linear-gradient(left, rgba(0,247,255,1) , rgba(0,247,255,0.1)); /* Safari 5.1 - 6.0 */
				background: -o-linear-gradient(right, rgba(0,247,255,1), rgba(0,247,255,0.1)); /* Opera 11.1 - 12.0 */
				background: -moz-linear-gradient(right, rgba(0,247,255,1), rgba(0,247,255,0.1)); /* Firefox 3.6 - 15 */
				background: linear-gradient(to right, rgba(0,247,255,1) , rgba(0,247,255,0.1)); /* 标准的语法（必须放在最后） */
			}
			&:after {
				content:'';
				position:absolute;
				width:28.625rem;
				height:2px;
				right:0;
				top:46%;
				background: -webkit-linear-gradient(left, rgba(0,247,255,0.1), rgba(0,247,255,1)); /* Safari 5.1 - 6.0 */
				background: -o-linear-gradient(right, rgba(0,247,255,0.1), rgba(0,247,255,1)); /* Opera 11.1 - 12.0 */
				background: -moz-linear-gradient(right, rgba(0,247,255,0.1), rgba(0,247,255,1)); /* Firefox 3.6 - 15 */
				background: linear-gradient(to right, rgba(0,247,255,0.1), rgba(0,247,255,1) ); /* 标准的语法（必须放在最后） */
			}
			.title{
				width:50rem;
				height:5.25rem; 
				color: #FFFBFB;
				text-shadow: 0px 0px 4px #00F7FF;
				margin: 0 auto;
				line-height: 5rem;
				font-size: 1.75rem;
				font-weight: normal;
				background: url(../../images/bg_title_left.png) no-repeat left center, url(../../images/bg_title_right.png) no-repeat right center;
			}
		}
		.wrap-up{
			.flex-num(9);
			.flex-row;
			margin-bottom: 10px;
			.up-left{
				.flex-column;
				.flex-num(3);
				background: url(../../images/bg_dept.png) no-repeat center;
				background-size: 100% 100%;
				margin: 0 24px;
				position:relative;
				&:after{
					content:'';
					position:absolute;
					width: 4.8125rem;
					height: 12px;
					background: url(../../images/bg_box_right.png) no-repeat right top;
					background-size: 100% 100%;
					right: 8%;
					top:3%;
				}
			}
			.up-center{
				.flex-num(8.2);
				.flex-column;
				background: url(../../images/bg_statis.png) no-repeat center;
				background-size: 100% 100%;
				position:relative;
				&:after{
					content:'';
					position:absolute;
					width: 11.68rem;
					height: 12px;
					background: url(../../images/bg_center_right.png) no-repeat right top;
					background-size: 100% 100%;
					right: 3%;
					top:3%;
				}
				.statistic-wrap{
					.flex-num(1);
					width: 100%;
					margin: 0 auto;
				}
			}
			.up-right{
				.flex-num(4);
				.flex-column;
				background: url(../../images/bg_share.png) no-repeat center;
				background-size: 100% 100%;
				margin: 0 24px;
			}
			
		}
		.wrap-down{
			.flex-num(8);
			.flex-row;
			margin: 15px 0 32px;
			.down-left{
				.flex-num(3);
				.flex-column;
				background: url(../../images/bg_cons.png) no-repeat center;
				background-size: 100% 100%;
				margin: 0 24px ;
				position:relative;
				&:after{
					content:'';
					position:absolute;
					width: 4.8125rem;
					height: 12px;
					background: url(../../images/bg_box_right.png) no-repeat right top;
					background-size: 100% 100%;
					right: 8%;
					top:3%;
				}
				.el-tabs{
					height:100%;
					.flex-column;
					.el-tabs__content{
						.flex-num(1);
						.flex-column;
						.el-tab-pane{
							.flex-num(1);
							.flex-column;
						}
					}
				}
			}
			.down-center{
				.flex-num(8.2);
				background: url(../../images/bg_relate.png) no-repeat center;
				background-size: 100% 100%;
				position:relative;
				
				&:before{
					content:'';
					width: 16rem;
    				height: 2rem;
					background:url(../../images/bg_relate_gray.png) no-repeat left top;
					background-size: 100% 100%;
					position: absolute;
    				left: 8rem;
				}
				&.active-ele{
					background: url(../../images/bg_element.png) no-repeat center;
					background-size: 100% 100%;
					&:before{
						content:'';
						width: 12rem;
    					height: 2rem;
						background:url(../../images/bg_element_gray.png) no-repeat left top;
						background-size: 100% 100%;
						position: absolute;
						left: 0;
					}
				}
				position:relative;
				&:after{
					content:'';
					position:absolute;
					width: 11.68rem;
					height: 12px;
					background: url(../../images/bg_center_right.png) no-repeat right top;
					background-size: 100% 100%;
					right: 3%;
					top:3%;
				}
				.el-tabs{
					height:100%;
					.flex-column;
					.el-tabs__content{
						.flex-num(1);
						.flex-column;
						.el-tab-pane{
							.flex-num(1);
							.flex-column;
							transition:all 3s;
							-moz-transition:all 3s; /* Firefox 4 */
							-webkit-transition:all 3s; /* Safari and Chrome */
							-o-transition:all 3s; /* Opera */
						}
					}
				}
			}
			.down-right{
				.flex-num(4);
				.flex-column;
				background: url(../../images/bg_cloud.png) no-repeat center;
				background-size: 100% 100%;
				margin: 0 25px;
				position:relative;
				
				&:before{
					content:'';
					width: 13.25rem;
    				height: 2rem;
					background:url(../../images/bg_relate_gray.png) no-repeat left top;
					background-size: 100% 100%;
					position: absolute;
    				left: 8rem;
				}
				&.active-ele{
					background: url(../../images/bg_anys.png) no-repeat center;
					background-size: 100% 100%;
					&:before{
						content:'';
						width: 12rem;
    					height: 2rem;
						background:url(../../images/bg_element_gray.png) no-repeat left top;
						background-size: 100% 100%;
						position: absolute;
						left: 0;
					}
				}
				.el-tabs{
					height:100%;
					.flex-column;
					.el-tabs__content{
						.flex-num(1);
						.flex-column;
						.el-tab-pane{
							.flex-num(1);
							.flex-column;
						}
					}
				}
			}
		}
		.el-tabs--card>.el-tabs__header, {
			border-bottom: 1px solid transparent;
			margin-bottom: 0.2rem;
		}
		.el-tabs--card>.el-tabs__header .el-tabs__nav ,.el-tabs--card>.el-tabs__header .el-tabs__item{
			border:1px solid transparent;
			min-width: 11.25rem;
			font-size:1rem;
			color:rgba(255,255,255,0.7);
			line-height:2rem;
			height:2rem;
		}
		.down-right .el-tabs--card>.el-tabs__header .el-tabs__nav ,.el-tabs--card>.el-tabs__header .el-tabs__item{
			min-width:11rem;
		}
		.el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
			border:1px solid transparent;
			color:rgba(255,255,255,1);
			text-shadow: 0 0 4px #00F7FF;
		}
		.box-title{
			font-size: 1rem;
			font-weight:normal;
			color: #FFF;
			text-shadow: 0px 0px 4px #00F7FF;
			padding: 4px 16px;
    		line-height: 28px;
		}
		#pane-analysis{
			position: relative;
			>div:first-child{
				text-align:center;
				padding-top:1rem;
			}
			.chengg-detail{
					cursor:pointer;
				    position: absolute;
					width: 5rem;
					height: 1.6rem;
					line-height: 1.6rem;
					display: block;
					color: rgba(0, 247, 255, 1);
					background: rgba(0, 247, 255, 0.02);
					-webkit-box-shadow: 0px 0px 40px 0px rgba(0, 247, 255, 0.42);
					-moz-box-shadow: 0px 0px 40px 0px rgba(0, 247, 255, 0.42);
					box-shadow: 0px 0px 40px 0px rgba(0, 247, 255, 0.42) inset;
					border: 1px solid #00F7FF;
					right: 5%;
					top: 8%;
					font-size: 0.825rem;
					text-align: center;
			}
		}
	}
	
</style>
<template>
	<div class="container-wrap">
		<Dialog :isShow='isShow' v-on:showChange="closeDialog"></Dialog>
		<div class="wrap-title">
			<h3 class="title" @click="isShow=!isShow">政务数据资产可视化系统</h3>
		</div>
		<div class="wrap-up">
			<div class="up-left">
				<h6 class="box-title">部门已接入资源数排名</h6>
				<v-deptrank></v-deptrank>
			</div>
			<div class="up-center">
				<h6 class="box-title">总体统计</h6>
				<div class="statistic-wrap">
					<v-carousel></v-carousel>
				</div>
			</div>
			<div class="up-right">
				<h6 class="box-title">实时共享日志</h6>
				<v-share></v-share>
			</div>
		</div>
		<div class="wrap-down">
			<div class="down-left">
				<h6 class="box-title">制度规范建设</h6>
				<v-institution></v-institution>
			</div>
			<div class="down-center" :class="[activeName == 'first' ? 'active-relate' : 'active-ele' ]" v-on:mouseenter="disableToggle(1)" v-on:mouseleave="enableToggle(1)">
				<template>
					<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
						<el-tab-pane label="血缘关系图谱" name="first"><v-relation></v-relation></el-tab-pane>
						<el-tab-pane label="影响因子图谱" name="second"><v-elemention></v-elemention></el-tab-pane>
					</el-tabs>
				</template>
			</div>
			<div class="down-right" :class="[activeDataType == 'cloud' ? 'active-relate' : 'active-ele' ]"  v-on:mouseenter="disableToggle(2)" v-on:mouseleave="enableToggle(2)">
				<template>
					<el-tabs v-model="activeDataType" type="card" >
						<el-tab-pane label="数据主题词云" name="cloud">
							<v-cloud></v-cloud>
						</el-tab-pane>
						<el-tab-pane label="城管数据分析" name="analysis">
							<v-chengguan></v-chengguan>
							<div class="chengg-detail" @click="showDetail">详情 →</div>
						</el-tab-pane>
					</el-tabs>
				</template>
			</div>
		</div>
	</div>
</template>
<script>
    import { mapState } from 'vuex'
	import logo from './logo.png'
	import Dialog from './../data/index'
    export default {
		data() {
			return {
				logo,
				activeName: 'first',
				activeDataType: 'cloud',
				isShow:false
			}
		},
		computed: mapState({ user: state => state.user }),
		mounted() {
			const vm = this;
			vm.intervalRelate = setInterval(function(){
				vm.activeName = (vm.activeName == 'first' ? 'second':'first');
			},60000)

			vm.intervalCons = setInterval(function(){
				vm.activeDataType = (vm.activeDataType == 'cloud' ? 'analysis':'cloud');
			},60000)
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			},
			showDetail(){
				var vm = this;
				vm.isShow = true;
			},
			closeDialog:function(param){
				var vm = this;
				vm.isShow = false;
			},
			disableToggle(type){
				var vm = this;
				if(type == 1) {
					clearInterval(vm.intervalRelate);
				}
				else{
					clearInterval(vm.intervalCons);
				}
				
			},
			enableToggle(type){
				var vm = this;
				if(type == 1) {
					vm.intervalRelate = setInterval(function(){
						vm.activeName = (vm.activeName == 'first' ? 'second':'first');
					},60000)
				}
				else{
					vm.intervalCons = setInterval(function(){
						vm.activeDataType = (vm.activeDataType == 'cloud' ? 'analysis':'cloud');
					},60000)
				}
			}
		},
		components:{Dialog}
    }
</script>
