<style lang="less" scoped>

</style>
<template>
    <div class="cloud-wrap">
        <div id="myCanvasContainer">
            <canvas id="cloudCanvas"></canvas>
        </div>
		<div id="tags">
			<ul>
				<li v-for="(item, index) in entries"><a href="javascript:;" :style="{color:item.color?item.color:'#FEFB00'}">{{item.label}}</a></li>
			</ul>
		</div> 									
    </div>
</template>
<script>
import tagcanvas from "../libs/tagcloud/jquery.tagcanvas.min.js";
export default {
  data() {
    return {
      wrap_width: 430,
      wrap_height: 298,
      entries: [
        {
          label: "旅游住宿",
          color: "#00F7FF"
        },
        {
          label: "交通运输"
        },
        {
          label: "餐饮美食",
          color: "#00F7FF"
        },
        {
          label: "医疗健康",
          color: "#00F7FF"
        },
        {
          label: "文体娱乐"
        },
        {
          label: "消费购物"
        },
        {
          label: "生活安全",
          color: "#00F7FF"
        },
        {
          label: "生活服务"
        },
        {
          label: "房屋土地"
        },
        {
          label: "环境资源",
          color: "#00F7FF"
        },
        {
          label: "企业服务"
        },
        {
          label: "农业农村",
          color: "#00F7FF"
        },
        {
          label: "水电欠费信息"
        },
        {
          label: "经济发展"
        },
        {
          label: "政法监察",
          color: "#00F7FF"
        }
      ]
    };
  },
  mounted() {
    const vm = this;

    setTimeout(function() {
      vm.wrap_width = $(".down-right .el-tabs__content").width();
      vm.wrap_height = $(".down-right .el-tabs__content").height();
      $("#cloudCanvas").attr("width", vm.wrap_width);
      $("#cloudCanvas").attr("height", vm.wrap_height);
      var screen_width =
        document.documentElement.clientWidth || document.body.clientWidth;

      var o = {
        textFont: "Arial, Helvetica, sans-serif",
        maxSpeed: 0.05,
        minSpeed: 0.01,
        textColour: null,
        textHeight: 12,
        outlineMethod: "colour",
        fadeIn: 800,
        outlineColour: "#41b1c3",
        outlineOffset: 0,
        depth: 0.97,
        minBrightness: 0.2,
        wheelZoom: false,
        reverse: true,
        shadowBlur: 2,
        shuffleTags: true,
        shadowOffset: [1, 1],
        stretchX: 1.2,
        initial: [0, 0.1],
        clickToFront: 600,
        maxSpeed: 0.01,
        outlineDashSpeed: 0.5
      };
      if (screen_width > 1600) {
        o.textHeight = 16;
      }

      var s = new Date().getTime() / 360;
      o.initial[0] = 0.18 * Math.cos(s);
      o.initial[1] = 0.18 * Math.sin(s);
      if (!$("#cloudCanvas").tagcanvas(o, "tags")) {
        // something went wrong, hide the canvas container
        $("#myCanvasContainer").hide();
      }
    }, 1000);
  }
};
</script>