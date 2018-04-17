<style lang="less" >
@import "../less/common.less";
.relation-wrap {
  .flex-column;
  .flex-num(1);
  overflow: hidden;
  padding: 0 0.8rem 1rem 0.8rem;
  .selection-wrap {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.875rem;
  }
  .dept-selection {
    display: inline-block;
    width: 8rem;
  }
  .dataitem-selection {
    display: inline-block;
    .el-select .el-input__inner {
      width: 17rem;
    }
  }
  .el-input__inner {
    background: rgba(0, 247, 255, 0.2);
    box-shadow: 0px 0px 10px 0px rgba(0, 247, 255, 0.42);
    padding: 0.425rem 1rem;
    border-radius: 0;
    border: 1px solid rgba(0, 247, 255, 0.8);
    color: rgba(255, 255, 255, 0.8);
    border-color: rgba(0, 247, 255, 0.8);
    height: 1.75rem;
    line-height: 1.75rem;
    font-size: 0.825rem;
  }
}
.el-select-dropdown__list {
  padding: 0 !important;
}
.el-select-dropdown {
  background-color: #1d77d4 !important;
  box-shadow: 0px 0px 10px 0px rgba(0, 247, 255, 0.42) !important;
  padding: 0 !important;
  border-radius: 0 !important;
  border: 1px solid rgba(0, 247, 255, 0.8) !important;
}
.el-select-dropdown__item {
  color: rgba(255, 255, 255, 0.8) !important;
  font-size: 0.825rem !important;
}
.el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
  background-color: #1d77d4 !important;
}
.el-select-dropdown__item span {
  line-height: 1rem !important;
}
#relationChart {
  padding: 1.2rem 0 1.2rem 1rem;
}
</style>
<template>
    <div class="relation-wrap">
        <div class="selection-wrap">
            <div class="dept-selection">
                <el-select v-model="dept_selected" clearable placeholder="请选择">
                    <el-option
                    v-for="item in dept_selections"
                    :key="item.value"
                    :label="item.label"
                    :value="item">
                    </el-option>
                </el-select>
            </div>
            <div class="dataitem-selection">
                数据集选择:
                <el-select v-model="item_selected" clearable placeholder="请选择" @change="itemChange">
                    <el-option
                    v-for="item in dept_selected.items"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            
        </div>
        <div id="elementChart" :style="{width: ele_width+'px', height: ele_height + 'px'}"></div>
    </div>

</template>
<script>
import ele_big_bg from "../images/ele_big_bg.png";
import ele_item_ico from "../images/ele_item_ico.png";
import ele_belong_bg from "../images/ele_belong_bg.png";
import ele_belong_ico from "../images/ele_belong_ico.png";
import ele_data_bg from "../images/ele_data_bg.png";
import ele_data_ico from "../images/ele_data_ico.png";
import ele_dept_bg from "../images/ele_dept_bg.png";
import ele_dept_ico from "../images/ele_dept_ico.png";
import ele_app_bg from "../images/ele_belong_bg.png";
import ele_app_ico from "../images/ele_belong_ico.png";

// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/graph");
// 引入组件legend
require("echarts/lib/component/legend");

export default {
  data() {
    return {
      ele_width: 600,
      ele_height: 200,
      dept_selections: [
        {
          label: "气象局",
          value: "气象局",
          items: [
            {
              label: "全市灾害性天气预警信号",
              value: "全市灾害性天气预警信号",
              use_dept: ["环保局", "交通局", "国土局", "水务局"],
              use_app: ["全市扬尘治\n理管理系统", "全市应急指挥\n综合管理系统"],
              data_item: ["全市气象区域自动站天气实况数据"]
            },
            {
              label: "全市气象区域自动站天气实况数据",
              value: "全市气象区域自动站天气实况数据",
              use_dept: ["环保局", "国土局"],
              use_app: ["全市扬尘治\n理管理系统", "国土”一张图”\n业务办公系统"],
              data_item: ["全市空气质量监测信息"]
            }
          ]
        }
      ],
      dept_selected: {},
      item_selected: {},
      item_selected_obj: {},
      ele_big_bg: ele_big_bg, //数据集背景图
      ele_item_ico: ele_item_ico,
      ele_belong_bg: ele_belong_bg,
      ele_belong_ico: ele_belong_ico,
      ele_data_bg: ele_data_bg,
      ele_data_ico: ele_data_ico,
      ele_dept_bg: ele_dept_bg,
      ele_dept_ico: ele_dept_ico,
      ele_app_ico: ele_app_ico,
      ele_app_bg: ele_app_bg,
      legend_data: []
    };
  },
  created() {
    var vm = this;
    vm.dept_selected = vm.dept_selections[0];
    vm.item_selected = vm.dept_selected.items[0].value;

    vm.legend_data = [
      { name: "数据集名称", ico: `image://${vm.ele_item_ico}` },
      { name: "影响数据元", ico: `image://${vm.ele_data_ico}` },
      { name: "影响应用", ico: `image://${vm.ele_belong_ico}` },
      { name: "影响部门", ico: `image://${vm.ele_dept_ico}` }
    ];
  },
  mounted() {
    const vm = this;
    vm.getSelectedItemObj();
    vm.drawLine();
  },
  methods: {
    drawLine() {
      var vm = this;
      // 基于准备好的dom，初始化echarts实例
      var rel_width = $(".relation-wrap").width();
      var rel_height = $(".relation-wrap").height() - 25;
      vm.ele_width = rel_width;
      vm.ele_height = rel_height;

      var app_pos = {
        x: 858,
        y: 385,
        child_x_increase: 12,
        child_y_increase: 6
      };
      var dept_pos = {
        x: app_pos.x,
        y: 352,
        child_x_increase: app_pos.child_x_increase,
        child_y_increase: app_pos.child_y_increase
      };
      var data_center = { x: 825, y: app_pos.y - (app_pos.y - dept_pos.y) / 2 };
      var data_pos = {
        x: data_center.x - (app_pos.x - data_center.x),
        y: data_center.y,
        child_x_increase: app_pos.child_x_increase,
        child_y_increase: 6
      };

      var symbol_size_child = 13;
      var font_size_child = 12;
      var legend_font_size = 12;
      var center_symbol_size = 78;
      var normal_symbol_size = 50;
      var screen_width =
        document.documentElement.clientWidth || document.body.clientWidth;
      if (screen_width < 1600) {
        symbol_size_child = 12;
        font_size_child = 10;
        legend_font_size = 10;
        center_symbol_size = 64;
        normal_symbol_size = 48;
      }
      // 绘制图表
      var option = {
        title: {
          text: ""
        },
        legend: [
          {
            left: "left",
            top: "7%",
            itemGap: 5,
            itemWidth: legend_font_size,
            itemHeight: legend_font_size,
            data: vm.legendProducer(legend_font_size)
          }
        ],
        tooltip: { show: false },
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            type: "graph",
            layout: "none",
            top: "23%",
            bottom: "15%",
            left: "30%",
            legendHoverLink: false,
            symbolSize: normal_symbol_size, //图形的大小（示例中的圆的大小）
            roam: true, //鼠标缩放及平移
            focusNodeAdjacency: true, //是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点
            label: {
              normal: {
                show: true, //控制非高亮时节点名称是否显示
                position: "inside",
                fontSize: legend_font_size,
                color: "rgba(255,255,255,.8)"
              }
            },

            edgeSymbol: ["circle"],
            edgeSymbolSize: [1, 10], //箭头的大小
            edgeLabel: {
              normal: {
                show: false
              },
              emphasis: {
                show: false,
                textStyle: {
                  fontSize: 16 //边节点显示的字体大小
                }
              }
            },

            //节点信息
            categories: vm.legend_data,
            data: [
              {
                name: "影响\n部门",
                symbol: `image://${vm.ele_dept_bg}`,
                x: dept_pos.x,
                y: dept_pos.y
              },
              // {
              //   name: "环保局",
              //   category: "影响部门",
              //   symbol: `image://${vm.ele_dept_ico}`,
              //   symbolSize: symbol_size_child,
              //   label: {
              //     normal: {
              //       show: true,
              //       position: "right",
              //       fontSize: font_size_child
              //     }
              //   },
              //   isnode: true,
              //   x: dept_pos.x + dept_pos.child_x_increase,
              //   y: dept_pos.y - dept_pos.child_y_increase
              // },
              // {
              //   name: "国土局",
              //   category: "影响部门",
              //   symbol: `image://${vm.ele_dept_ico}`,
              //   symbolSize: symbol_size_child,
              //   label: {
              //     normal: {
              //       show: true,
              //       position: "right",
              //       fontSize: font_size_child
              //     }
              //   },
              //   isnode: true,
              //   x: dept_pos.x + dept_pos.child_x_increase,
              //   y: dept_pos.y + dept_pos.child_y_increase
              // },
              {
                name: "影响\n应用",
                symbol: `image://${vm.ele_app_bg}`,
                x: app_pos.x,
                y: app_pos.y
              },
              // {
              //   name: "全市扬尘治\n理管理系统",
              //   category: "影响应用",
              //   symbol: `image://${vm.ele_app_ico}`,
              //   symbolSize: symbol_size_child,
              //   label: {
              //     normal: {
              //       show: true,
              //       position: "right",
              //       fontSize: font_size_child
              //     }
              //   },
              //   x: app_pos.x +app_pos.child_x_increase,
              //   y: app_pos.y - app_pos.child_y_increase
              // },
              // {
              //   name: "国土”一张图”\n业务办公系统",
              //   category: "影响应用",
              //   symbol: `image://${vm.ele_app_ico}`,
              //   symbolSize: symbol_size_child,
              //   label: {
              //     normal: {
              //       show: true,
              //       position: "right",
              //       fontSize: font_size_child
              //     }
              //   },
              //   x: app_pos.x +app_pos.child_x_increase,
              //   y: app_pos.y + app_pos.child_y_increase
              // },
              {
                name: "元数据",
                symbol: `image://${vm.ele_data_bg}`,
                x: data_pos.x,
                y: data_pos.y
              },
              {
                name: "全市气象\n区域自动站天气\n实况数据",
                category: "数据集名称",
                symbol: `image://${vm.ele_big_bg}`,
                symbolSize: center_symbol_size,
                x: data_center.x,
                y: data_center.y
              }
              // {
              //   name: "全市空气质量监测信息",
              //   category: "影响数据元",
              //   x: data_pos.x-data_pos.child_x_increase,
              //   y: data_pos.y,
              //   symbol: `image://${vm.ele_data_ico}`,
              //   symbolSize: symbol_size_child,
              //   label: {
              //     normal: {
              //       show: true,
              //       position: "left",
              //       fontSize: font_size_child
              //     }
              //   }
              // }
            ],

            links: [
              // {
              //   source: "影响\n部门",
              //   target: "环保局",
              //   islink: true
              // },
              // {
              //   source: "影响\n部门",
              //   target: "国土局",
              //   islink: true
              // },
              // {
              //   source: "影响\n应用",
              //   target: "全市扬尘治\n理管理系统",
              //   islink: true
              // },
              // {
              //   source: "影响\n应用",
              //   target: "国土”一张图”\n业务办公系统",
              //   islink: true
              // },
              {
                source: "全市气象\n区域自动站天气\n实况数据",
                target: "元数据",
                islink: true
              },
              {
                source: "全市气象\n区域自动站天气\n实况数据",
                target: "影响\n部门",
                islink: true
              },
              {
                source: "全市气象\n区域自动站天气\n实况数据",
                target: "影响\n应用",
                islink: true
              }
              // {
              //   source: "元数据",
              //   target: "全市空气质量监测信息",
              //   islink: true
              // }
            ],
            lineStyle: {
              normal: {
                show: false,
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#00F7FF" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#00F7FF" // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                }

                // curveness: 0.2
              },
              emphasis: {
                color: "#00F7FF",
                width: 1,
                type: "dashed" //虚线
              }
            }
          }
        ]
      };
      setTimeout(function() {
        option.series[0].data = option.series[0].data.concat(
          vm.useDeptProducer(symbol_size_child, font_size_child, dept_pos),
          vm.useAppProducer(symbol_size_child, font_size_child, app_pos),
          vm.dataItemProducer(symbol_size_child, font_size_child, data_pos)
        );
        option.series[0].links = option.series[0].links.concat(
          vm.useDeptLinksProducer(),
          vm.useAppLinksProducer(),
          vm.dataItemLinksProducer()
        );
        let myChart = echarts.init(document.getElementById("elementChart"));
        myChart.setOption(option);
      }, 1000);
    },
    useDeptProducer(symbol_size_child, font_size_child, dept_pos) {
      var vm = this;
      var dept_items = [];
      vm.item_selected_obj.use_dept.forEach((item, index) => {
        dept_items.push({
          name: item,
          category: "影响部门",
          symbol: `image://${vm.ele_dept_ico}`,
          symbolSize: symbol_size_child,
          label: {
            normal: {
              show: true,
              position: "right",
              fontSize: font_size_child
            }
          },
          isnode: true,
          x: dept_pos.x + dept_pos.child_x_increase,
          y: dept_pos.y + index * dept_pos.child_y_increase
        });
      });
      return dept_items;
    },
    useDeptLinksProducer() {
      var vm = this;
      var dept_items = [];
      vm.item_selected_obj.use_dept.forEach((item, index) => {
        dept_items.push({
          source: "影响\n部门",
          target: item
        });
      });
      return dept_items;
    },
    useAppProducer(symbol_size_child, font_size_child, app_pos) {
      var vm = this;
      var dept_items = [];
      vm.item_selected_obj.use_app.forEach((item, index) => {
        dept_items.push({
          name: item,
          category: "影响应用",
          symbol: `image://${vm.ele_app_ico}`,
          symbolSize: symbol_size_child,
          label: {
            normal: {
              show: true,
              position: "right",
              fontSize: font_size_child
            }
          },
          x: app_pos.x + app_pos.child_x_increase,
          y: app_pos.y + (2 * index - 1) * app_pos.child_y_increase
        });
      });
      return dept_items;
    },
    useAppLinksProducer() {
      var vm = this;
      var dept_items = [];
      vm.item_selected_obj.use_app.forEach((item, index) => {
        dept_items.push({
          source: "影响\n应用",
          target: item
        });
      });
      return dept_items;
    },
    dataItemProducer(symbol_size_child, font_size_child, data_pos) {
      var vm = this;
      var dept_items = [];
      vm.item_selected_obj.data_item.forEach((item, index) => {
        dept_items.push({
          name: item,
          category: "影响数据元",
          x: data_pos.x - data_pos.child_x_increase,
          y: data_pos.y,
          symbol: `image://${vm.ele_data_ico}`,
          symbolSize: symbol_size_child,
          label: {
            normal: {
              show: true,
              position: "left",
              fontSize: font_size_child
            }
          }
        });
      });
      return dept_items;
    },
    dataItemLinksProducer() {
      var vm = this;
      var dept_items = [];
      vm.item_selected_obj.data_item.forEach((item, index) => {
        dept_items.push({
          source: "元数据",
          target: item
        });
      });
      return dept_items;
    },
    legendProducer(legend_font_size) {
      var vm = this;
      var legend_items = [];
      vm.legend_data.forEach((item, index) => {
        legend_items.push({
          name: item.name,
          icon: item.ico,
          textStyle: {
            color: "#FFF",
            fontSize: legend_font_size
          }
        });
      });
      return legend_items;
    },
    getSelectedItemObj() {
      var vm = this;
      vm.dept_selected.items.forEach((item, index) => {
        if (item.value == vm.item_selected) {
          vm.item_selected_obj = item;
        }
      });
    },
    itemChange(selected) {
      var vm = this;
      vm.getSelectedItemObj();
      vm.drawLine();
    }
  }
};
</script>