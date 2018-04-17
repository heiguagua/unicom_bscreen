<style lang="less" scoped>
@charset "utf-8";
@import "../less/common.less";

/* reset */
body{font:12px/18px arial,sans-serif;color:#585858;}

body,div,p,span,form,iframe,table,td,th,input,textarea,button,label,ul,ol,li,dl,dt,dd,h1,h2,h3,h4,h5,h6{margin:0;padding:0;}
h1,h2,h3,h4,h5,h6{font-size:100%; }
ul,ol,li,dl{list-style-type:none;}
em,i,dfn,cite,strong,small{font-style:normal;} 
img{border:0;}
fieldset,button,input,select,option{vertical-align:middle;font:12px/18px arial,sans-serif;}
table{border-collapse:collapse;border-spacing:0}
textarea{resize:none}

/* color */
a:link,a:visited{color:#575757;text-decoration:none;}
a:hover{color:#ef4165;text-decoration:none;}
a:active{color:#1d7400;}

/* clearfix */
.clearfix{ *zoom:1;}
.clearfix:after{display:table; line-height:0; content:""; clear:both;}

/* public.omission */
.fl{ float:left;}            .fr{ float:right;}            .tc{ text-align:center;}      .tr{ text-align:right;} 
.fb{ font-weight:bold;}      .f12{ font-size:0.75rem;}        h3{ font-weight:normal;}      .listop{ padding-top:15px;}
.mr10{ margin-right:10px;}   .mr15{ margin-right:15px;}    .mL10{ margin-left:10px;}     .mL15{ margin-left:15px;}
.mt10{ margin-top:10px;}     .mt15{ margin-top:15px;}      .mb10{ margin-bottom:10px;}   .mb15{ margin-bottom:15px;}


.weiduduan{ width:100%; margin:50px auto 0 auto;}
#phoneCarousel{height:100%;margin:0 auto;position:relative;width:100%;}
#phoneCarousel .arrow{width:44px;height:44px;background:url(../images/arrows.png) no-repeat;position:absolute;top:50%;margin-top:-22px;left:0;cursor:pointer;}

#phoneCarousel .next{background-position:right top;left:auto;right:0;}
#phoneCarousel .arrow:hover{background-position:left bottom;}
#phoneCarousel .next:hover{background-position:right bottom;}
#stage{left:50%;margin-left:-26.25rem;position:absolute;width:52.5rem;height:100%;}
#stage img{display:none;}
#stage .default{display:block;left:50%;margin-left:-135px;position:absolute;}
#stage .animationReady{display:block;position:absolute;top:0;left:0;}
#stage .caro-text-wrap {
    width:7.5rem;
    height:7.5rem;
    color:#FFF;
    text-align: center;
}
#stage .caro-text{
    position: absolute;
        top: 50%;
        transform: translate(-50%,-50%);
        width:2.5rem;
}
#stage .caro-active{
    background: url(../images/caro_selected.png) no-repeat;
    background-size: 100% 100%;
}

#stage .caro-inactive{
    background: url(../images/caro_normal.png) no-repeat;
    background-size: 100% 100%;
}
#stage .caro-active .caro-text{
    font-size:1.875rem;
    width:5rem;
}
.caro-details{
    .flex-row;
    height:60px;
    position: absolute;
    bottom: 1.75rem;
    width: 100%;
    padding: 0 20px;
    .detail-item{
        .flex-num(1);
            text-align: center;
        .item-title{
            font-size:0.8125rem;
            color:#FFF;
            padding-left:0.5rem;
            padding-bottom:5px;
            position:relative;
            display: inline-block;
            &:before{
                content:'';
                display: inline-block;
                position: absolute;
                left: -0.5rem;
                top: 0.375rem;
                width:0.75rem;
                height:0.75rem;
                /* Rotate */
                -webkit-transform: rotate(-45deg);
                -moz-transform: rotate(-45deg);
                -ms-transform: rotate(-45deg);
                -o-transform: rotate(-45deg);
                transform: rotate(-45deg);
                /* Rotate Origin */
                -webkit-transform-origin: 0 100%;
                -moz-transform-origin: 0 100%;
                -ms-transform-origin: 0 100%;
                -o-transform-origin: 0 100%;
                transform-origin: 0 100%;
                background-color:#FEFB00
            }
        }
        .item-number{
            font-size:1.75rem;
            font-weight:bold;
            color:#FEFB00;
            text-shadow: 0 0 4px #FF7600;
        }
    }
}
</style>
<template>
	<div id="phoneCarousel">

    <!-- <div class="previous arrow">&nbsp;</div>

    <div class="next arrow">&nbsp;</div> -->

    <div id="stage">

         <a href="javascript:;" ><div class="default caro-text-wrap caro-inactive" ><span class="caro-text">全景</span></div></a>

         <a href="javascript:;" ><div class="caro-text-wrap caro-inactive" ><span class="caro-text">数据汇聚</span></div> </a>

         <a href="javascript:;" ><div  class="caro-text-wrap caro-inactive" ><span class="caro-text">数据开放</span></div></a>

         <a href="javascript:;" ><div  class="caro-text-wrap caro-inactive" ><span class="caro-text">数据共享</span></div> </a>

         <a href="javascript:;" ><div  class="caro-text-wrap caro-inactive" ><span class="caro-text">数据目录</span></div></a>
         </div>
    <div class="caro-details">
        <div v-for="item in current_details" class="detail-item">
            <div class="item-title">{{item.name}}</div>
            <div class="item-number">{{item.nums}}</div>
        </div>
    </div>
  </div>
    
</template>
<script>
    import { mapState } from 'vuex'
    document.onreadystatechange = function(){
        
    }

    export default {
        data() {
            return {
                current_caro: 0,
                
                caro_alls:[[
                    {name:'覆盖政府部门个数', nums:146},
                    {name:'数据资源目录总数', nums:1209},
                    {name:'已汇聚数据资源数', nums:122},
                    {name:'累计已共享资源数', nums:428},
                    {name:'累计已开放资源数', nums:220},
                ],
                [
                    {name:'数据资源目录总数', nums:97},
                    {name:'数据资源目录项个数', nums:2215},
                    {name:'可共享数据目录数', nums:302},
                    {name:'可开放数据目录数', nums:145}
                ],
                [
                    {name:'累计数据共享次数', nums:367},
                    {name:'支撑部门共享次数', nums:201},
                    {name:'支撑应用共享次数', nums:124},
                    {name:'平台封装服务个数', nums:302},
                    {name:'近一周共享次数', nums:97},
                ],
                [
                    {name:'数据开放覆盖部门个数', nums:302},
                    {name:'累计开放数据资源个数', nums:548},
                    {name:'累计开放数据访问次数', nums:631},
                    {name:'平台封装开放服务个数', nums:210},
                    {name:'近一周开放数据访问数', nums:106},
                ],
                [
                    {name:'平台累计汇聚条数', nums:369},
                    {name:'平台数据汇聚总量', nums:2004},
                    {name:'平台已接入系统数', nums:126},
                    {name:'平台注册服务个数', nums:279},
                    {name:'近一周数据新增数', nums:56},
                ]],
                current_details: [],
            }
        },
        mounted() {
            const vm = this;
            vm.current_details = vm.caro_alls[0];
            //if(document.readyState=="complete"){
            var deg=0;
            var images	= $('#stage .caro-text-wrap').removeClass('default').addClass('animationReady');
            var dim		= { width:images.width(),height:images.height()};
            var cnt = images.length;
            /* Finding the centers of the animation container: */
            var centerX = $('#stage').width()/2;
            var centerY = $('#stage').height()/3 - dim.height/2;
            var screen_width = document.documentElement.clientWidth || document.body.clientWidth;

            function rotate(step,total){
                // This function loops through all the phone images, and rotates them
                // with "step" degrees (10 in this implementation) until total has reached 0
            
                /* Increment the degrees: */
                deg+=step;
                
                var eSin,eCos,newWidth,newHeight,q;
                
                /* Loop through all the images: */
                for(var i=0;i<cnt;i++){
                    
                    /* Calculate the sine and cosine for the i-th image */
                    
                    q = ((360/cnt)*i+deg)*Math.PI/180;
                    eSin		= Math.sin(q);
                    eCos		= Math.cos(q);
                    
                    /*
                    /	With the sine value, we can calculate the vertical movement, and the cosine 
                    /	will give us the horizontal movement.
                    */
                    
                    q = (0.8+eSin*0.2);
                    newWidth	= q*dim.width;
                    newHeight	= q*dim.height;
                    
                    /*
                    /	We are using the calculated sine value (which is in the range of -1 to 1)
                    /	to calculate the opacity and z-index. The front image has a sine value
                    /	of 1, while the backmost one has a sine value of -1.
                    */
                    if(screen_width < 1600) {
                         images.eq(i).css({
                            top			: centerY+30*eSin,
                            left		: centerX+190*eCos,
                            opacity		: 0.9+eSin*0.1,
                            marginLeft	: -newWidth/2,
                            zIndex		: Math.round(80+eSin*20)
                        }).width(newWidth).height(newHeight);
                    }
                    else{
                        images.eq(i).css({
                        top			: centerY+40*eSin,
                        left		: centerX+240*eCos,
                        opacity		: 0.9+eSin*0.1,
                        marginLeft	: -newWidth/2,
                        zIndex		: Math.round(80+eSin*20)
                    }).width(newWidth).height(newHeight);
                    }
                    
                    
                    if(Math.abs((cnt-vm.current_caro)%5 -i) == 1 || Math.abs((cnt-vm.current_caro)%5 -i) == 4) {
                        images.eq(i).css({
                            opacity		: 1,
                        })
                    }
                    
                }

                total-=Math.abs(step);
                if(total<=0) return false;
                
                images.removeClass('caro-active').addClass('caro-inactive')
                images.eq((cnt-vm.current_caro)%5).removeClass('caro-inactive').addClass('caro-active');
                

                // Setting the function to be run again in 40 seconds (equals to 25 frames per second):
                setTimeout(function(){
                    rotate(step,total);
                    
                },40);
                 
            }
            
            // Running the animation once at load time (and moving the iPhone into view):
            rotate(30,360/cnt);
            

            var timer=null;
	
		   timer=setInterval(function(){
               rotate(9,360/cnt);
               vm.current_caro++;
            },5000);
        //}

            vm.$watch('current_caro', function (newVal, oldVal) {
                vm.current_details = vm.caro_alls[Math.abs((vm.current_caro)%5)];
                
            })
        },
        // computed: mapState({
        //     current_caro: state => state.current_caro
        // })
    }
</script>