<style lang="less" scoped>
@import "../less/common.less";
.instituion-wrap {
  position: relative;
  background-size: 8rem;

  .flex-column;
  .flex-num(1);
  .institution-title {
    font-size: 1rem;
    text-align: center;
    color: #00f7ff;
    padding: 0.3rem 0;
  }
  .svg-wrap {
    .flex-num(1);
    position: relative;
    background: url(../images/institution_bg.png) no-repeat center center;
    background-size: 8rem;
    @media screen and (max-width: 1600px) {
      background-size: 6rem;
    }
    .flex-column;
    svg {
      .flex-num(1);
    }
  }
  .text-wrap {
    position: absolute;
    color: #fff;
    font-size: 0.625rem;
    .text-title {
      color: #fefb00;
    }
    &.text-huiju {
      right: 5%;
      bottom: 12%;
    }
    &.text-qa {
      right: 5%;
      top: 16%;
    }
    &.text-open {
      left: 50%;
      top: 3%;
    }
    &.text-cons {
      left: 4%;
      top: 10%;
    }
    &.text-shuli {
      left: 8%;
      bottom: 28%;
    }
    &.text-total {
      left: 4%;
      bottom: 7%;
    }
    @media  screen and(max-width: 1600px) {
      &.text-open {
        white-space: nowrap;
        max-width: 50%;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      &.text-total {
        white-space: nowrap;
        max-width: 40%;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
<template>
	<div class="instituion-wrap">
        <h4 class="institution-title">高效融合 可管可控</h4>
        <div class="svg-wrap"><svg version="1.1" id="huiju" class="svg-class" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="100%" height="100%" >
            <circle :cx="data_path_1.x" :cy="data_path_1.y" r="4" stroke="#FEFB00"  stroke-width="1" fill="#FEFB00"/>
		    <polyline fill="none" stroke="#FEFB00" stroke-width="1" stroke-miterlimit="10" :points="data_path_1.points"/>

            <circle :cx="data_path_2.x" :cy="data_path_2.y" r="4" stroke="#FEFB00"  stroke-width="1" fill="#FEFB00"/>
            <polyline fill="none" stroke="#FEFB00" stroke-width="1" stroke-miterlimit="10" :points="data_path_2.points"/>

	        <circle :cx="data_path_3.x" :cy="data_path_3.y" r="4" stroke="#FEFB00"  stroke-width="1" fill="#FEFB00"/>
            <polyline fill="none" stroke="#FEFB00" stroke-width="1" stroke-miterlimit="10" :points="data_path_3.points"/>

            <circle :cx="data_path_4.x" :cy="data_path_4.y" r="4" stroke="#FEFB00"  stroke-width="1" fill="#FEFB00"/>
            <polyline fill="none" stroke="#FEFB00" stroke-width="1" stroke-miterlimit="10" :points="data_path_4.points"/>

            <circle :cx="data_path_5.x" :cy="data_path_5.y" r="4" stroke="#FEFB00"  stroke-width="1" fill="#FEFB00"/>
            <polyline fill="none" stroke="#FEFB00" stroke-width="1" stroke-miterlimit="10" :points="data_path_5.points"/>

            <circle :cx="data_path_6.x" :cy="data_path_6.y" r="4" stroke="#FEFB00"  stroke-width="1" fill="#FEFB00"/>
            <polyline fill="none" stroke="#FEFB00" stroke-width="1" stroke-miterlimit="10" :points="data_path_6.points"/>
		
		</svg>
        <div class="text-huiju text-wrap">
            <div class="text-title">数据汇聚</div>
            <div class="text-content">政务数据采集<br>与处理管理办法</div>
        </div>
        <div class="text-qa text-wrap">
            <div class="text-title">数据质量和安全</div>
            <div class="text-content">大数据安全管理制度</div>
        </div>
        <div class="text-open text-wrap">
            <div class="text-title">数据共享和开放</div>
            <div class="text-content">政务数据共享与开放管理条例</div>
        </div>
        <div class="text-cons text-wrap">
            <div class="text-title">平台建设和数据评估</div>
            <div class="text-content">大数据平台建设规划<br>和运维管理办法</div>
        </div>
        <div class="text-shuli text-wrap">
            <div class="text-title">目录梳理</div>
            <div class="text-content">梳理规范<br>资源管理办法</div>
        </div>
        <div class="text-total text-wrap">
            <div class="text-title">总体</div>
            <div class="text-content">大数据发展与建设顶层规划</div>
        </div>
        </div>
            
        
    </div>
</template>
<script>
import Walkway from "../libs/walkway/walkway.min.js";
export default {
  data() {
    return {
      data_path_1: {
        x: 210,
        y: 180,
        points: ""
      },
      data_path_2: {
        x: 200,
        y: 110,
        points: ""
      },
      data_path_3: {
        x: 160,
        y: 130,
        points: ""
      },
      data_path_4: {
        x: 130,
        y: 110,
        points: ""
      },
      data_path_5: {
        x: 110,
        y: 180,
        points: ""
      },
      data_path_6: {
        x: 150,
        y: 200,
        points: ""
      }
    };
  },
  mounted() {
    const vm = this;
    var svg_wrap_width = $(".svg-wrap").width();
    var svg_wrap_height = $(".svg-wrap").height();
    console.log(svg_wrap_width, svg_wrap_height);

    vm.data_path_1.x = parseInt(svg_wrap_width / 1.54);
    vm.data_path_1.y = parseInt(svg_wrap_height / 1.74);
    vm.data_path_1.points = `${vm.data_path_1.x},
    ${vm.data_path_1.y} ${vm.data_path_1.x},
    ${vm.data_path_1.y + parseInt(svg_wrap_height / 3)} ${vm.data_path_1.x +
      parseInt(svg_wrap_width / 3.15)},
    ${vm.data_path_1.y + parseInt(svg_wrap_height / 3)} ${vm.data_path_1.x +
      parseInt(svg_wrap_width / 3.15)} `;

    vm.data_path_2.x = parseInt(svg_wrap_width / 1.625);
    vm.data_path_2.y = parseInt(svg_wrap_height / 2.5);
    vm.data_path_2.points = `${vm.data_path_2.x},
    ${vm.data_path_2.y} ${vm.data_path_2.x},
    ${vm.data_path_2.y - parseInt(svg_wrap_height / 12.5)} ${vm.data_path_2.x +
      parseInt(svg_wrap_width / 3.12)},
    ${vm.data_path_2.y - parseInt(svg_wrap_height / 12.5)} ${vm.data_path_2.x +
      parseInt(svg_wrap_width / 3.12)} `;

    vm.data_path_3.x = parseInt(svg_wrap_width / 2);
    vm.data_path_3.y = parseInt(svg_wrap_height / 2.13);
    vm.data_path_3.points = `${vm.data_path_3.x},
    ${vm.data_path_3.y} ${vm.data_path_3.x},
    ${vm.data_path_3.y - parseInt(svg_wrap_height / 3.2)} ${vm.data_path_3.x +
      parseInt(svg_wrap_width / 2.2)},
    ${vm.data_path_3.y - parseInt(svg_wrap_height / 3.2)} ${vm.data_path_3.x +
      parseInt(svg_wrap_width / 2.2)} `;

    vm.data_path_4.x = parseInt(svg_wrap_width / 2.5);
    vm.data_path_4.y = parseInt(svg_wrap_height / 2.5);
    vm.data_path_4.points = `${vm.data_path_4.x},
    ${vm.data_path_4.y} ${vm.data_path_4.x},
    ${vm.data_path_4.y - parseInt(svg_wrap_height / 10.6)} ${vm.data_path_4.x -
      parseInt(svg_wrap_width / 2.6)},
    ${vm.data_path_4.y - parseInt(svg_wrap_height / 10.6)} ${vm.data_path_4.x -
      parseInt(svg_wrap_width / 2.6)} `;

    vm.data_path_5.x = parseInt(svg_wrap_width / 2.9);
    vm.data_path_5.y = parseInt(svg_wrap_height / 1.74);
    vm.data_path_5.points = `${vm.data_path_5.x},
    ${vm.data_path_5.y} ${vm.data_path_5.x},
    ${vm.data_path_5.y + parseInt(svg_wrap_height / 5.6)} ${vm.data_path_5.x -
      parseInt(svg_wrap_width / 4)},
    ${vm.data_path_5.y + parseInt(svg_wrap_height / 5.6)} ${vm.data_path_5.x -
      parseInt(svg_wrap_width / 4)} `;

    vm.data_path_6.x = parseInt(svg_wrap_width / 2.16);
    vm.data_path_6.y = parseInt(svg_wrap_height / 1.5);
    vm.data_path_6.points = `${vm.data_path_6.x},
    ${vm.data_path_6.y} ${vm.data_path_6.x},
    ${vm.data_path_6.y + parseInt(svg_wrap_height / 3.4)} ${vm.data_path_6.x -
      parseInt(svg_wrap_width / 2.5)},
    ${vm.data_path_6.y + parseInt(svg_wrap_height / 3.4)} ${vm.data_path_6.x -
      parseInt(svg_wrap_width / 2.5)} `;

    var svg5 = new Walkway({
      selector: "#huiju",
      duration: 5000
    });

    setInterval(function() {
      document.getElementById("huiju").style.width = "100%";
      svg5 = new Walkway({
        selector: "#huiju",
        duration: 5000
      });
      svg5.draw(function() {
        document.getElementById("huiju").style.width = 0;
      });
    }, 8000);
  }
};
</script>