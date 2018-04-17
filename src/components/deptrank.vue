<style lang="less" >
@import "../less/common.less";
@import "../libs/slick/slick.css";

.dept-access-rank {
    .flex-num(1);
    overflow:hidden;
    padding: 1rem 0.5rem 1rem 0.5rem;
    .dept-item{
        padding: 0.25rem 0;
    }
    .dept-title{
        display: inline-block;
        font-size: 0.75rem;
        color: #FFF;
        min-width: 4.5rem;
        text-align: right;
        padding-right: 0.4rem;
    }
    
    .dept-bar{
        display:inline-block;
        height: 0.675rem;
        background: #00F7FF;
        position: relative;
        &.top3{
            background:#FEFB00;
            box-shadow:0 0 4px #FF7600;
        }
    }
    .dept-number{
        position:absolute;
        width:2rem;
        right: -2.5rem;
        top: -50%;
        display:inline-block;
        color:#FFF;
        font-size:0.425rem;
    }
    .dept-rank-index{
        display:inline-block;
        margin-right:0.5rem;
        width: 1.25rem;
            height: 1.25rem;
            text-align: center;
            line-height: 1rem;
        &.top3{
            
            background: rgba(97, 71, 49, 1);
            border-radius: 50%;
            border: 1px solid #FFFB40;
            color: #FFFB40;
            
        }
    }
    button{
        display:none !important;
    }
}
</style>
<template>
	<div class="dept-access-rank" >
        <div v-for="(item, index) in deptRankTop3" class="dept-item">
            <div class="dept-title"><span class="dept-rank-index top3">{{index+1}}</span>{{item.DEP_NAME}}</div>
            <!-- <el-progress :percentage="(item.dataNum/280)*100" :show-text="false" :stroke-width="14"></el-progress> -->
            <div class="dept-bar top3" v-bind:style="{width:(item.dataNum/350)*100 + '%'}"><div class="dept-number">{{item.dataNum}}</div></div>
            
        </div>
        <div class="rank-other-wrap"><div v-for="(item, index) in deptRankList" class="dept-item ">
            <div class="dept-title"><span class="dept-rank-index">{{index+4}}</span> {{item.DEP_NAME}}</div>
            <!-- <el-progress :percentage="(item.dataNum/280)*100" :show-text="false" :stroke-width="14"></el-progress> -->
            <div class="dept-bar" v-bind:style="{width:(item.dataNum/350)*100 + '%'}"><div class="dept-number">{{item.dataNum}}</div></div>
            
        </div>
        </div>
    </div>
</template>
<script>
    import slick from '../libs/slick/slick.min.js';
    
    export default {
        data() {
            return {
                deptRankTop3 :[{
                    "dataNum": 195,
                    "DEP_NAME": "发改局"
                }, {
                    "dataNum": 178,
                    "DEP_NAME": "经信局"
                }, {
                    "dataNum": 165,
                    "DEP_NAME": "教育局"
                }],
                deptRankList: [ {
                    "dataNum": 154,
                    "DEP_NAME": "公安局"
                }, {
                    "dataNum": 143,
                    "DEP_NAME": "民政局"
                }, {
                    "dataNum": 140,
                    "DEP_NAME": "司法局"
                }, {
                    "dataNum": 135,
                    "DEP_NAME": "财政局"
                }, {
                    "dataNum": 125,
                    "DEP_NAME": "档案局"
                }, {
                    "dataNum": 114,
                    "DEP_NAME": "卫计局"
                }, {
                    "dataNum": 112,
                    "DEP_NAME": "审计局"
                },{
                    "dataNum": 103,
                    "DEP_NAME": "水务局"
                }, {
                    "dataNum": 100,
                    "DEP_NAME": "统计局"
                }, {
                    "dataNum": 95,
                    "DEP_NAME": "国土局"
                }, {
                    "dataNum": 83,
                    "DEP_NAME": "环保局"
                },{
                    "dataNum": 70,
                    "DEP_NAME": "住建局"
                }, {
                    "dataNum": 69,
                    "DEP_NAME": "城管局"
                }, {
                    "dataNum": 50,
                    "DEP_NAME": "交通局"
                }, {
                    "dataNum": 45,
                    "DEP_NAME": "农发局"
                }, {
                    "dataNum": 38,
                    "DEP_NAME": "规划局"
                },{
                    "dataNum": 36,
                    "DEP_NAME": "商投局"
                },{
                    "dataNum": 29,
                    "DEP_NAME": "安监局"
                },{
                    "dataNum": 25,
                    "DEP_NAME": "人社局"
                },{
                    "dataNum": 18,
                    "DEP_NAME": "文旅局"
                },{
                    "dataNum": 13,
                    "DEP_NAME": "国税局"
                }]
            }
        },
        mounted() {
            setTimeout(function(){
                $('.rank-other-wrap').slick({
                    slidesToShow: 8,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2500,
                    vertical: true,
                    verticalSwiping: true
                });
            },80)
        }
    }
</script>