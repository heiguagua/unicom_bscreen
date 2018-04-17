<style scoped>
    #discoverChat{
        display: inline-block;
    }
</style>
<template>
        <div id="discoverChat" :style="{width: '16rem', height: '17rem'}"></div>
</template>
<script>
    export default{
        data(){
            return {}
        },
        mounted(){
            this.drawDiscoverChat();
        },
        methods:{
            drawDiscoverChat(){
                    // 基于准备好的dom，初始化echarts实例
                let discoverChat = this.$echarts.init(document.getElementById('discoverChat'));
                discoverChat.setOption({
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
                            data:['区级视频发现数','市级视频发现数']
                        },
                        series: [
                            {
                                type:'pie',
                                selectedMode: 'single',
                                radius: [0, '50%'],
                                center:['50%','65%'],
                                hoverAnimation :false,
                                label: {    
                                    normal: {
                                        position: 'center',
                                        color :'#fff',
                                        formatter:'80%',
                                        fontSize :10
                                    }
                                },
                                data:[
                                    {value:100, itemStyle:{normal:{color:'#124A8E'}}},
                                ],
                                selectedMode:false,
                            },
                            {
                                type:'pie',
                                selectedMode: 'single',
                                radius: ['50%', '60%'],
                                center:['50%','65%'],
                                label:{show:false},
                                hoverAnimation :false,
                                data:[
                                    {value:24, name:'区级视频发现数',itemStyle:{normal:{color:'#FEFB00'}}},
                                    {value:16, itemStyle:{normal:{color:'#0D74A8'}}},
                                    {value:20, itemStyle:{normal:{color:'transparent'}}},
                                    {value:40, name:'区级视频发现数',itemStyle:{normal:{color:'#FEFB00'}}},
                                ],
                                selectedMode:false,
                            },
                            {
                                type:'pie',
                                selectedMode: 'single',
                                radius: ['60%', '70%'],
                                center:['50%','65%'],
                                label:{show:false},
                                hoverAnimation :false,
                                data:[
                                    {value:40, name:'市级视频发现数',itemStyle:{normal:{color:'#00F7FF'}}},
                                    {value:20, itemStyle:{normal:{color:'transparent'}}},
                                    {value:40, name:'市级视频发现数',itemStyle:{normal:{color:'#00F7FF'}}}
                                ],
                                selectedMode:false,
                            }
                        ]
                })

            }
        }
    }
</script>