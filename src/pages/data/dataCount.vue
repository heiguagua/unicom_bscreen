<style scoped>
    .dataBox{
        width:31.5%;
        height:8.35rem; 
        background:rgba(0,247,255,0.02);
        box-shadow: 0px 0px 40px 0px rgba(0,247,255,0.42);
        background-image: url('../../images/bg_box.png');
        margin-bottom: 1.14rem;
        background-size: 100% 100%;
        text-align: center;
    }
    .textBox{
        margin-top: 2.4rem;
    }
    .countImg{
        width:3.6rem;
        vertical-align: top;
    }
    .countText{
        display: inline-block;
        margin-left: 0.4rem;
    }
    .countTitle{
        height:1.13rem; 
        font-size:.8rem;
        font-family:'PingFangSC-Regular';
        color:rgba(255,255,255,1);
        line-height:x;
    }
    .countText{
        height:2.57rem; 
        font-size:1.76rem;
        font-family:DIN-Bold;
        color:RGBA(254, 251, 0, 1);
    }
</style>
<template>
    <div class="dataBox">
        <div class="textBox">
            <img :src="items.url"  class="countImg">
            <div class="countText">
                <p class="countTitle">{{items.title}}</p>
                <p class="countText">{{items.cout}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:['items']
    }
</script>