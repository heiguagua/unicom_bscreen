<style scoped>
    .main{
        background:rgba(0,0,0,1);
        opacity:0.5;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 99; 
    }
    .dataDialog{
        width:85%;
        height:90%;; 
        background:linear-gradient(180deg,rgba(63,122,195,1),rgba(13,0,87,1));
        position: absolute;
        left: 0;right: 0;top: 0;bottom: 0;
        margin:auto;
        z-index: 999;
    }
    .close{
        width:24px;
        height:24px; 
        background:url('../../images/close.png') rgba(35,55,135,1);
        border-radius: 24px;
        position: absolute;
        top:-12px;
        right:-12px;
        cursor: pointer;
    }
    .wrap-title{
			height:5.5rem;
			text-align: center;
			position:relative;
			&:before {
				content:'';
				position:absolute;
				width:21.625rem;
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
				width:21.625rem;
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
        .content{
            width: 96%;
            margin: 0 auto;
        }
        .left{
            float: left;
            width:49.2%;
            display: inline-block;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        .right{
            float: right;
            width:49.2%;
            display: inline-block;
        }
        .faded{
        }
.fade-enter-active, .fade-leave-active {
    transition: all 1s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
}
</style>
<template>
  <transition name="fade">
    <div class="faded" v-if='isShow'>
        <div class="main"> 
        </div>
         <div  class="dataDialog">
            <div class='close' @click="showDetail"></div>
            <div class="wrap-title">
                <h3 class="title">城管数据分析系统</h3>
            </div>
            <div class='content'>
                <div class='left'>
                    <template  v-for='(item,index) in coutArr'>
                        <Count :items='item'></Count>
                    </template>
                    <DataDetail :detailText="detailText"></DataDetail>
                </div>
                <div class='right'>
                   <DataAnalysis ></DataAnalysis>
                </div>
            </div>
         </div>
    </div>
  </transition>
</template>
<script>
    import Header from './../../components/header'
    import Count from './dataCount'
    import DataDetail from './dataDetail'
    import DataAnalysis from './dataAnalysis'
    export default{
        data(){
           return{
           title:'城管数据分析系统',
           coutArr:[{url:require('../../images/icon-total.png'),title:'案件总数',cout:'379件'},
                    {url:require('../../images/icon-person.png'),title:'数字化城管人员',cout:'789人'},
                    {url:require('../../images/icon-time.png'),title:'案件平均处置时长',cout:'18分钟'}],
            detailText:[{name:'监督员上报案件总数',state:"up",num:129,percent:'12%'},{name:'有效上报率',state:"up",num:'87%',percent:'12%'},{name:'天网视频发现问题数',state:"down",num:88,percent:'29%'}]
           } 
        },
        props:['isShow'],
        mounted(){
        },
        methods:{
            showDetail(){
                console.log('close clicked');
                this.$emit('showChange',false);
            }
        },
        components:{Header,Count,DataDetail,DataAnalysis}
    }
</script>