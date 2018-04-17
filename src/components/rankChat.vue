<style scoped>
    .item_icon{
        position: relative;
        font-size:.8rem;
        font-family:PingFangSC-Medium;
        color:rgba(255,255,255,1);
        margin: .1rem .9rem;
    }
    .item_icon::before{
        content: '';
        display: inline-block;
        position: absolute;
        left: -0.5rem;
        top: 0.45rem;
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
</style>
<template>
    <div>
        <p class="item_icon">案件总体情况</p>
        <div id="rankChart" :style="{width: '100%', height: '18.55rem'}"></div>
    </div>
</template>
<script>
    export default{
        mounted(){
            this.drawChat();
        },
        props:['isShow'],
        watch:{
            isShow(oldVal,newVal){
                this.drawChat();
            }
        },
        methods:{
            drawChat(){
                // 基于准备好的dom，初始化echarts实例
                let rankChart = this.$echarts.init(document.getElementById('rankChart'));
                rankChart.setOption({
                    legend: {
                        orient: 'horizontal',
                        itemWidth:5,
                        itemHeight:5,
                        x: 'right',
                        right :20,
                        textStyle:{color:'#fff'},
                        selectedMode:false,
                        data:['市上报案件数','区上报案件数']
                    },
                    xAxis: {
                        type: 'category',
                        data: ['4月12日', '4月13日', '4月14日', '4月15日', '4月16日', '4月17日', '4月18日','4月19日'],
                        axisLine:{lineStyle:{color:'rgb(255, 255, 255)'}},
                        nameTextStyle:{fontSize:10},
                    },
                    yAxis: {
                        type: 'value',
                        axisLine:{lineStyle:{color:'rgb(255, 255, 255)'}}
                    },
                    series: [{
                        name:'市上报案件数',
                        data: [82, 32, 50, 34, 90, 30, 20,60],
                        type: 'line',
                        symbol:'circle',
                        symbolSize:'10'
                    },{
                        name:'区上报案件数',
                        data: [12, 42, 90, 34, 60, 24, 21,34],
                        type: 'line',
                        symbol:'circle',
                        symbolSize:'10'
                    }],
                    color:['rgba(254,251,0,1)','rgba(0,247,255,1)'],
                    grid:{  
                        right:0,
                        left:28
                    }
                })
            }
        }
    }
</script>