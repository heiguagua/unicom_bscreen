<style scoped>
#pieChat{
    display: inline-block
}
</style>
<template>
    <div>
        <div id="pieChat" :style="{width: '20rem', height: '17rem'}"></div>
    </div>
</template>
<script>
    export default{
        data(){
            return {}
        },
        mounted(){
            this.drawPieChat()
        },
        methods:{
            drawPieChat(){
                    // 基于准备好的dom，初始化echarts实例
                let pieChat = this.$echarts.init(document.getElementById('pieChat'));
                pieChat.setOption({
                        grid:{
                            bottom :'0%',
                            top:'0%'
                        },
                        legend: {
                            orient: 'vertical',
                            itemGap:5,
                            itemWidth:5,
                            itemHeight:5,
                            x: 'left',
                            textStyle:{color:'#fff',fontSize:'10'},
                            selectedMode:false,
                            data:['数字化成功系统案件量 50%','街道综合管理指挥平台案件量 25%','网络理政平台案件量 25%']
                        },
                        series: [
                            {
                                type:'pie',
                                selectedMode: false,
                                radius: [0, '30%'],
                                center:['50%','65%'],
                                label: {    
                                    normal: {
                                        position: 'outline',
                                        color :'#fff',
                                        formatter:'{b}\n{c}件',
                                        fontSize :12
                                    }
                                },
                                labelLine: {
                                    normal: {
                                        show: true,
                                        length :20,
                                        lineStyle :{color:"#fff"}
                                    }
                                },
                                data:[
                                    {value:20, name:'监督员上报',itemStyle:{normal:{color:'RGBA(254, 251, 0, 1)'}}},
                                    {value:30, name:'执法员上报',itemStyle:{normal:{color:'#00FF53'}}},
                                    {value:40, name:'巡查员上报',itemStyle:{normal:{color:'#A652FF'}}},
                                    {value:10, name:'投诉信访件' ,itemStyle:{normal:{color:'RGBA(0, 247, 255, 1)'}}},
                                ]
                            },
                            {
                                type:'pie',
                                radius: ['40%', '45%'],
                                center:['50%','65%'],
                                label: {
                                    normal: {
                                        position: 'outline',
                                        color :'#fff',
                                        formatter:'{c}%'
                                    }
                                },
                                labelLine: {
                                    normal: {
                                        show: false,
                                        length :0,
                                    }
                                },
                                data:[
                                    {value:25,name:'街道综合管理指挥平台案件量 25%',itemStyle:{normal:{color:'#FEA200'}}},
                                    {value:25,name:'网络理政平台案件量 25%',itemStyle:{normal:{color:'#F000FF'}}},
                                    {value:50,name:'数字化成功系统案件量 50%',itemStyle:{normal:{color:'#0047FF'}}}
                                ],
                                selectedMode:false,
                                clockwise :false
                            }
                        ]
                })
            }
        }
    }
</script>