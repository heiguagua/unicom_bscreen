<style scoped>
	.countDetail{
		background:url(../../images/bg_detail.png) no-repeat left top;
        width: 100%;
        background-size: 100% 100%;
        /*height: 30.8rem;*/
    }
    .title{
        height:22px; 
        font-size:.9rem;
        font-family:PingFangSC-Medium;
        color:rgba(255,255,255,1);
        line-height:22px;
        margin: .1rem .9rem;
        position: relative;
    }
    .title::after{
					content:'';
					position:absolute;
					width: 14rem;
					height: 12px;
					background: url(../../images/bg_center_right.png) no-repeat right top;
					background-size: 100% 100%;
					right: .6rem;
                    top: 0.8rem;
    }
    .item_icon{
        position: relative;
    }
    .item_icon::before{
        content: '';
        display: inline-block;
        position: absolute;
        left: -0.5rem;
        top: 0.425rem;
        width: 0.4rem;
        height: 0.4rem;
        margin-right: .45rem;
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
        -webkit-transform-origin: 0 100%;
        -moz-transform-origin: 0 100%;
        -ms-transform-origin: 0 100%;
        -o-transform-origin: 0 100%;
        transform-origin: 0 100%;
        background-color: #FEFB00;
    }
    .detailBox{
            padding:1.5rem 1.14rem;
            display: inline-block;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
    }
    .articlBox{
        margin-left: 1.14rem;
        display: inline-block;
        width: 9rem;
        font-size: .8rem;
        color: #fff;
    }
    .articlText{
        margin-top: .5rem;
    }
    .articlNum{
        height:2.22rem; 
        font-size:1.82rem;
        font-family:DIN-Bold;
        line-height:3rem;
        display: inline-block;
        vertical-align: top;
    }
    .articlNum_up{
        color:rgba(254, 251, 0, 1);

    }
    .articlNum_down{
       color: rgba(0,247,255,1);
    }
    .articlPercent{
        font-size: .68rem;
        height:.97rem; 
        font-family:PingFangSC-Regular;
        color:rgba(255,255,255,1);
        line-height:.97rem;
        margin: .3rem 0 0 .6rem;
    }
    .articlCase{
        display: inline-block;
    }
    .line{
        margin: 2rem 0;
        width:100%;
        height:1px; 
        background:rgba(0,247,255,1);
        opacity:0.5; border-radius: 0px ;
    }
    .articlPercent .up{
        color:red
    }
    .articlPercent .down{
        color:green
    }
</style>
<template>
    <div class="countDetail">
        <p class="title">案件总体情况</p>
        <div class="detailBox">
            <div class="articlBox" v-for="(item,index) in detailText" >
                <div class="item_icon">{{item.name}}</div>
                <div class="articlText">
                    <div :class='[item.state=="up"?"articlNum_up":"articlNum_down"]'class="articlNum">{{item.num}}</div>
                    <div class="articlCase">
                        <p class="articlPercent"><i :class='[item.state=="up"?"el-icon-caret-top up":"el-icon-caret-bottom down"]'></i>{{item.percent}}</p>
                        <p class="articlPercent">同比上月</p>  
                    </div>
                </div>
            </div>
            <div class="line"></div>
            <PieChat></PieChat>
            <DiscoverChat></DiscoverChat>
        </div>
	</div>
</template>
<script>
import PieChat from './../../components/pieChat'
import DiscoverChat from './../../components/discoverChat'
    export default{
        props:['detailText'],
        components:{PieChat,DiscoverChat}
    }
</script>