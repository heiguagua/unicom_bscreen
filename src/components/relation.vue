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
    padding-top: 1rem;
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
  color: rgba(255, 255, 255, 1) !important;
  font-size: 0.825rem !important;
  background-color: #1368bf !important;
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
                <el-select v-model="dept_selected" clearable placeholder="请选择" >
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
        <div id="relationChart" :style="{width: '100%', height: '100%'}"></div>
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
import ele_app_bg from "../images/ele_app_bg.png";
import ele_app_ico from "../images/ele_app_ico.png";
import ele_attr_ico from "../images/ele_attr_ico.png";

// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/graph");
// 引入组件legend
require("echarts/lib/component/legend");

export default {
  data() {
    return {
      dept_selections: [
        {
          label: "气象局",
          value: "气象局",
          items: [
            {
              label: "全市气象区域自动站天气实况数据",
              value: "全市气象区域自动站天气实况数据",
              database_table: "数据表名：tb_jcztqsk",
              datababse_attr: [
                "qzh 区站号",
                "rksj 入库时间",
                "txfs 通信方式",
                "rqsj 日期时间",
                "dyzt 电源状态",
                "ssfs 瞬时风速（米/秒）",
                "ssfx 瞬时风向(度)"
              ],
              use_dept: ["环保局", "国土局"],
              use_app: ['全市扬尘治\n理管理系统','国土”一张图”\n业务办公系统']
            },
            {
              label: "全市灾害性天气预警信号",
              value: "全市灾害性天气预警信号",
              database_table: "数据表名：tb_zhxtqybxx",
              datababse_attr: [
                "publishTime 发布日期",
                "department 发布单位",
                "warningContext 预警内容",
                "theam 预警主题",
                "name 产品名称",
                "standard 标准",
                "defenseGuide 防御指南"
              ],
              use_dept: ["环保局", "交通局", "国土局"],
              use_app: ['全市扬尘治\n理管理系统','全市应急指挥\n综合管理系统']
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
      ele_attr_ico: ele_attr_ico,
      legend_data: []
    };
  },
  created() {
    var vm = this;
    vm.dept_selected = vm.dept_selections[0];
    vm.item_selected = vm.dept_selected.items[0].value;

    vm.legend_data = [
      { name: "数据集名称", ico: `image://${vm.ele_item_ico}` },
      { name: "数据源信息", ico: `image://${vm.ele_data_ico}` },
      { name: "所属部门", ico: `image://${vm.ele_belong_ico}` },
      { name: "使用应用", ico: `image://${vm.ele_app_ico}` },
      { name: "使用部门", ico: `image://${vm.ele_dept_ico}` },
      { name: "数据源字段信息", ico: `image://${vm.ele_attr_ico}` }
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
      let myChart = echarts.init(document.getElementById("relationChart"));

      var app_pos = {
        x: 858,
        y: 342,
        child_x_increase: 12,
        child_y_increase: 6
      };
      var dept_pos = {
        x: app_pos.x,
        y: 375,
        child_x_increase: app_pos.child_x_increase,
        child_y_increase: app_pos.child_y_increase
      };
      var data_center = { x: 825, y: app_pos.y + (dept_pos.y - app_pos.y) / 2 };
      var data_pos = {
        x: data_center.x - (app_pos.x - data_center.x),
        y: app_pos.y,
        child_x_increase: app_pos.child_x_increase,
        child_y_increase: 6
      };
      var belong_pos = {
        x: data_pos.x,
        y: dept_pos.y,
        child_x_increase: data_pos.child_x_increase,
        child_y_increase: data_pos.child_y_increase
      };
      var data_attr = {
        x: data_pos.x - data_pos.child_x_increase - 64,
        y: data_pos.y,
        child_y_increase: 6
      };

      var symbol_size_child = 11;
      var font_size_child = 12;
      var legend_font_size = 12;
      var center_symbol_size = 78;
      var normal_symbol_size = 50;
      var screen_width =
        document.documentElement.clientWidth || document.body.clientWidth;
      if (screen_width < 1600) {
        symbol_size_child = 8;
        font_size_child = 10;
        legend_font_size = 10;
        center_symbol_size = 64;
        normal_symbol_size = 40;
      }
      // 绘制图表
      var option = {
        title: {
          text: ""
        },
        legend: [
          {
            left: "left",
            top: "2%",
            itemWidth: legend_font_size,
            itemHeight: legend_font_size,
            itemGap: 5,
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
            bottom: "3%",
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
                name: "数据库",
                symbolSize: 0,
                label: {
                  normal: {
                    show: false,
                    position: "left",
                    fontSize: font_size_child
                  }
                },
                x: data_pos.x - data_pos.child_x_increase - 42,
                y: data_pos.y + 2 * data_pos.child_y_increase
              },
              {
                name: "气象局",
                category: "所属部门",
                symbol: `image://${vm.ele_belong_ico}`,
                symbolSize: symbol_size_child,
                label: {
                  normal: {
                    show: true,
                    position: "left",
                    fontSize: font_size_child
                  }
                },
                x: belong_pos.x - belong_pos.child_x_increase,
                y: belong_pos.y
              },
              {
                name: "所属\n部门",
                symbol: `image://${vm.ele_belong_bg}`,
                x: belong_pos.x,
                y: belong_pos.y
              },
              {
                name: "使用\n部门",
                symbol: `image://${vm.ele_dept_bg}`,
                x: dept_pos.x,
                y: dept_pos.y
              },
              {
                name: "使用\n应用",
                symbol: `image://${vm.ele_app_bg}`,
                x: app_pos.x,
                y: app_pos.y
              },
  
              {
                name: "数据源",
                symbol: `image://${vm.ele_data_bg}`,
                x: data_pos.x,
                y: data_pos.y
              },
              {
                name: "全市灾害性\n天气预警信号",
                category: "数据集名称",
                symbol: `image://${vm.ele_big_bg}`,
                symbolSize: center_symbol_size,
                x: data_center.x,
                y: data_center.y
              },
              {
                name: "数据库IP：10.88.119.2",
                category: "数据源信息",
                x: data_pos.x - data_pos.child_x_increase,
                y: data_pos.y - 2 * data_pos.child_y_increase,
                symbol: `image://${vm.ele_data_ico}`,
                symbolSize: symbol_size_child,
                label: {
                  normal: {
                    show: true,
                    position: "left",
                    fontSize: font_size_child
                  }
                }
              },
              {
                name: "数据库类型：Oracle",
                category: "数据源信息",
                x: data_pos.x - data_pos.child_x_increase,
                y: data_pos.y - data_pos.child_y_increase,
                symbol: `image://${vm.ele_data_ico}`,
                symbolSize: symbol_size_child,
                label: {
                  normal: {
                    show: true,
                    position: "left",
                    fontSize: font_size_child
                  }
                }
              },
              {
                name: "来源前置机：气象局前置系统",
                category: "数据源信息",
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
              },
              {
                name: "数据库名：QXdb",
                category: "数据源信息",
                x: data_pos.x - data_pos.child_x_increase,
                y: data_pos.y + data_pos.child_y_increase,
                symbol: `image://${vm.ele_data_ico}`,
                symbolSize: symbol_size_child,
                label: {
                  normal: {
                    show: true,
                    position: "left",
                    fontSize: font_size_child
                  }
                }
              },
              {
                name: vm.item_selected_obj.database_table,
                category: "数据源信息",
                x: data_pos.x - data_pos.child_x_increase,
                y: data_pos.y + 2 * data_pos.child_y_increase,
                symbol: `image://${vm.ele_data_ico}`,
                symbolSize: symbol_size_child,
                label: {
                  normal: {
                    show: true,
                    position: "left",
                    fontSize: font_size_child
                  }
                }
              }
            ],

            links: [
              {
                source: "所属\n部门",
                target: "气象局",
                islink: true
              },
              // {
              //   source: "使用\n部门",
              //   target: "环保局",
              //   islink: true
              // },
              // {
              //   source: "使用\n部门",
              //   target: "国土局",
              //   islink: true
              // },
              // {
              //   source: "使用\n应用",
              //   target: "全市扬尘治\n理管理系统",
              //   islink: true
              // },
              // {
              //   source: "使用\n应用",
              //   target: "国土”一张图”\n业务办公系统",
              //   islink: true
              // },
              {
                source: "全市灾害性\n天气预警信号",
                target: "数据源",
                islink: true
              },
              {
                source: "全市灾害性\n天气预警信号",
                target: "所属\n部门",
                islink: true
              },
              {
                source: "全市灾害性\n天气预警信号",
                target: "使用\n部门",
                islink: true
              },
              {
                source: "全市灾害性\n天气预警信号",
                target: "使用\n应用",
                islink: true
              },
              {
                source: "数据源",
                target: "数据库IP：10.88.119.2",
                islink: true
              },
              {
                source: "数据源",
                target: "数据库类型：Oracle",
                islink: true
              },
              {
                source: "数据源",
                target: "来源前置机：气象局前置系统",
                islink: true
              },
              {
                source: "数据源",
                target: "数据库名：QXdb",
                islink: true
              },
              {
                source: "数据源",
                target: vm.item_selected_obj.database_table,
                islink: true
              },
              {
                source: "数据库",
                target: vm.item_selected_obj.database_table,
                islink: true
              }
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
      console.log(vm.useAppProducer(symbol_size_child,font_size_child,app_pos));
      console.log(vm.useAppLinksProducer());
      option.series[0].data = option.series[0].data.concat(
        vm.dataAttrProducer(symbol_size_child, font_size_child, data_attr),
        vm.useDeptProducer(symbol_size_child,font_size_child,dept_pos),
        vm.useAppProducer(symbol_size_child,font_size_child,app_pos)
      );
      option.series[0].links = option.series[0].links.concat(
        vm.dataAttrLinksProducer(),
        vm.useDeptLinksProducer(),
        vm.useAppLinksProducer()
      );
      myChart.setOption(option);
    },
    useDeptProducer(symbol_size_child,font_size_child,dept_pos) {
      var vm = this;
      var dept_items = [];
      vm.item_selected_obj.use_dept.forEach((item, index) => {
        dept_items.push({
          name: item,
          category: "使用部门",
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
          y: dept_pos.y + (2*index-1)*dept_pos.child_y_increase
        });
      });
      return dept_items;
    },
    useDeptLinksProducer(){
      var vm = this;
      var dept_items = [];
      vm.item_selected_obj.use_dept.forEach((item, index) => {
        dept_items.push({
          source: "使用\n部门",
          target: item
        });
      });
      return dept_items;
    },
    useAppProducer(symbol_size_child,font_size_child,app_pos) {
      var vm = this;
      var dept_items = [];
      vm.item_selected_obj.use_app.forEach((item, index) => {
        dept_items.push({
          name: item,
                category: "使用应用",
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
                y: app_pos.y + (2*index-1)*app_pos.child_y_increase
        });
      });
      return dept_items;
    },
    useAppLinksProducer(){
      var vm = this;
      var dept_items = [];
      vm.item_selected_obj.use_app.forEach((item, index) => {
        dept_items.push({
          source: "使用\n应用",
          target: item,
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
    dataAttrProducer(symbol_size_child, font_size_child, data_attr_pos) {
      var vm = this;
      var dataattr_items = [];
      vm.item_selected_obj.datababse_attr.forEach((item, index) => {
        dataattr_items.push({
          name: item,
          category: "数据源字段信息",
          x: data_attr_pos.x,
          y: data_attr_pos.y + (index + 1) * data_attr_pos.child_y_increase,
          symbol: `image://${vm.ele_attr_ico}`,
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
      return dataattr_items;
    },
    dataAttrLinksProducer() {
      var vm = this;
      var attr_links = [];
      vm.item_selected_obj.datababse_attr.forEach((item, index) => {
        attr_links.push({
          source: "数据库",
          target: item,
          islink: true
        });
      });
      return attr_links;
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