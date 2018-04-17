<style >
	.countDetail{
		background:url(../../images/bg_detail.png) no-repeat left top;
        width: 100%;
        background-size: 100% 100%;
    }
    .rankTitle{
        height:30px; 
        font-size:.9rem;
        font-family:PingFangSC-Medium;
        color:rgba(255,255,255,1);
        line-height:30px;
        margin: .1rem .9rem;
        position: relative;
    }
    .dataTime{
        padding: 1rem 1.2rem;
    }
    .rankTitle::after{
					content:'';
					position:absolute;
					width: 14rem;
					height: 12px;
					background: url(../../images/bg_center_right.png) no-repeat right top;
					background-size: 100% 100%;
					right: .6rem;
                    top: 0.8rem;
    }
    .allCase{
        list-style: none;
        font-size: .8rem;
        color:#fff;
        margin-top: 1rem;
        letter-spacing:0px;
        display: inline-block;
    }
    .allCase li{
        margin-top: .5rem;
    }    
    .caseIndex{
        display: inline-block;
        width: 2rem;
        text-align: left;
        margin-right: 0.48rem;
        
    }
    .caseIndexes{
        
        display: inline-block;
        width: 1rem;
        text-align: left;
        margin-right: 0.48rem;
    }
    .caseType{
        width: 4rem;
        display: inline-block;
        margin-right: 0.28rem;
    }
    .caseVal{
        display:inline-block;
        height: 0.675rem;
        background: #00F7FF;
        margin-right: .5rem
    }
    .mostVal{
        display:inline-block;
        height: 0.675rem;
        background: rgba(254,251,0,1);
        margin-right: .5rem
    }
    .mostHappen{
        list-style: none;
        font-size: .8rem;
        color:#fff;
        margin-top: 1rem;
        letter-spacing:0px;
        display: inline-block; 
        vertical-align: top;
        margin-left: 0.7rem;
    }
     .mostHappen .mostTitle{
        margin-top: .5rem;
    }
     .mostHappen li{
         
        margin-top: 1.5rem;
     }
    .caseTime{
        
        width: 5.9rem;
        display: inline-block;
        margin-right: 0.68rem;
    }
    .line{
        margin: 1.6rem 0;
        height:1px; 
        background:rgba(0,247,255,1);
        opacity:0.5; border-radius: 0px ;
    }
    el-input{
        cursor: pointer;
    }
    .el-input--prefix .el-input__inner,.el-input__prefix{
        
        height:1.82rem !important;
        line-height:1.82rem !important;
    }
     .el-input--prefix .el-input__inner{
        background-color: rgba(0, 247, 255, 0.2) !important;
        border: 1px solid rgba(0,247,255,0.8) !important;
        cursor: pointer;    
        border-radius: 0 ;
            width:120px;
            padding: 0 0 0 30px;
            font-size:.8rem;
            color:#fff;
            letter-spacing: 1px;
    }
    .el-input--prefix .el-input__inner::hover{
        cursor: pointer;
    }
    .el-input--prefix .el-input__inner::-webkit-input-placeholder{
            color:#fff;
        }
    .el-input--prefix .el-input__inner::-moz-placeholder{   /* Mozilla Firefox 19+ */
            color:#fff;
        }
    .el-input--prefix .el-input__inner:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
            color:#fff;
        }
    .el-input--prefix .el-input__inner:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
            color:#fff;
        }
    .el-date-editor.el-input, .el-date-editor.el-input__inner{
            width:120px;
    }
    .el-icon-circle-close:before {
             content: "";
    }
    .el-input__icon{
        line-height: 1.82rem;
        color:#fff;
        cursor: pointer;
        height: 1.82rem;
    }
    .spanText{
            color:#fff;
    }
</style>
<template>
    
    <div class="countDetail">
        <p class="rankTitle">重点时段大数据分析</p>
        <div class="dataTime">
                <el-date-picker
                    v-model="startTime"
                    type="date"
                    placeholder="2018-04-12"
                    format="yyyy-MM-dd">
                </el-date-picker>
                <span class='spanText'>至</span>
                <el-date-picker
                    v-model="endTime"
                    type="date"
                    placeholder="2018-04-19"
                    format="yyyy-MM-dd">
                </el-date-picker>
                <div>
                    <ul class="allCase">
                        <li><span class="caseIndex">排名</span><span class="caseType">案件类型</span><span class="caseNum">数量</span></li>
                        <li v-for="(item ,index) in caseList"  :key="index"><span class="caseIndex">{{index+1}}</span><span class="caseType">{{item.type}}</span><span class="caseVal" :style="{width:(item.val*4.97*0.8)/14+ 'rem'}"></span><span>{{item.val}}</span></li>
                    </ul>
                    <ul class="mostHappen">
                        <li class="mostTitle">高发时段案件排名</li>
                        <li v-for="(item ,index) in mostList" :key="index"><span class="caseIndexes">{{index+1}}</span><span class="caseTime">{{item.time}}</span><span class="mostVal" :style="{width:(item.val*0.98*0.8)/14+ 'rem'}"></span><span>{{item.val}}</span></li>                 
                    </ul>
                </div>
            <div class="line"></div>
            <RankChat ></RankChat>
        </div>
    </div>
</template>
<script>
    import RankChat from './../../components/rankChat'
    export default{
        data(){
            return {
                startTime: '',
                endTime:'',
                caseList:[{type:'特殊井盖',val:35},{type:'过街天桥',val:30},{type:'交通护栏',val:25},{type:'垃圾箱',val:15},{type:'户外广告',val:7}],
                mostList:[{time:'13:00-14:00',val:179},{time:'17:00-1800',val:132},{time:'09:00-10:00',val:90}],
                startTime:'2018-04-12',
                endTime:'2017-04-19'
            }
        },
        props:['isShow'],
        components:{RankChat}
    }
</script>