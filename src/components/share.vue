<style lang="less" >
@import "../less/common.less";
@import "../libs/slick/slick.css";
.share-logs-wrap {
  .flex-num(1);
  .flex-column;
  overflow: hidden;
  padding: 1rem;
  .share-title {
    color: #fff;
    font-size: 0.875rem;
    padding-left: 1.625rem;
    min-width: 10rem;
    position: relative;
    left: -0.7rem;
    &:before {
      content: "";
      width: 1.2rem;
      height: 1.2rem;
      background: url(../images/share_icon.png) no-repeat left center;
      display: block;
      position: absolute;
      left: 0;
      background-size: 100%;
    }
  }
  .share-times {
    .flex-num(1);
    .flex-row;
    position: relative;
    @-webkit-keyframes spin {
        /*兼容性写法。spin是关键帧的动画名称*/
        from {
          /*动画起始状态*/
          -webkit-transform: rotate(0deg);
        }
        to {
          /*动画结束状态*/
          -webkit-transform: rotate(360deg);
        }
      }
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    .share-left {
      .flex-num(2);
      position: relative;
      background: url(../images/share_total.png) no-repeat left center;
      background-size: 100%;
      max-width: 6.25rem;
      -webkit-animation: spin 2s ease infinite; /*鼠标hover时，i图标旋转,infinite表示动画无限循环*/
      animation: spin 2s ease infinite;
    }
    .share-right {
      .flex-num(2);
      position: relative;
      background: url(../images/share_week.png) no-repeat left center;
      background-size: 100%;
      max-width: 6.25rem;
      
      -webkit-animation: spin 2s ease infinite; /*鼠标hover时，i图标旋转,infinite表示动画无限循环*/
      animation: spin 2s ease infinite;
    }
    .share-center {
      .flex-num(3);
      background: url(../images/share_trans.png) no-repeat center center;
      background-size: 100% auto;
    }
    .share-content-wrap-right {
      position: absolute;
      right: 0;
      height:100%;
      .share-title {
        left: 0;
      }
      .share-week-num {
        position: absolute;
        top: 50%;
        right: 4rem;
        transform: translate(100%, -50%);
        color: #fefb00;
        font-size: 1.6rem;
        font-weight: bold;
      }
    }
    .share-content-wrap-left {
      position: absolute;
      left: 0;
      height:100%;
      .share-total-num {
        position: absolute;
        top: 50%;
        transform: translate(50%, -50%);
        color: #00f7ff;
        font-size: 1.6rem;
        font-weight: bold;
      }
    }
  }
  .share-tables {
    .flex-num(1);
    .flex-column;
    overflow: hidden;
    font-size: 0.685rem;
    color: #fff;
  }
  .table-head {
    width: 100%;
    display: table;
    table-layout: fixed;
    background: rgba(0, 247, 255, 0.24);
    .thead-cell {
      display: inline-block;
      padding: 0.7rem 0.1rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .table-content {
    .flex-num(1);
  }
  .content-box {
    width: 100%;
    display: table;
    table-layout: fixed;
    &:nth-child(even) {
      background: rgba(0, 247, 255, 0.24);
    }
    .content-cell {
      display: inline-block;
      padding: 0.7rem 0.1rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .cell-date {
    width: 31%;
  }
  .cell-dept {
    width: 13%;
  }
  .cell-belongs {
    width: 13%;
  }
  .cell-resource {
    width: 33%;
  }
  .cell-status {
    width: 9%;
    text-align: right;
  }
  button {
    display: none !important;
  }
}
</style>
<template>
    <div class="share-logs-wrap">
        <div class="share-times">
            <div class="share-left">
                
            </div>
            <div class="share-center"></div>
            <div class="share-right">
                
            </div>
            <div class="share-content-wrap-left">
                <h5 class="share-title">累计数据交换次数</h5>
                <div class="share-total-num">{{share_total_num}}</div>
            </div>
            <div class="share-content-wrap-right">
                <h5 class="share-title">近一周数据交换次数</h5>
                <div class="share-week-num">{{share_week_num}}</div>
            </div>
        </div>
        <div class="share-tables">
            <div class="table-head">
                <div class="thead-cell cell-date">发生时间</div>
                <div class="thead-cell cell-dept">请求单位</div>
                <div class="thead-cell cell-resource">请求数据资源</div>
                <div class="thead-cell cell-belongs">资源所属</div>
                <div class="thead-cell cell-status">状态</div>
            </div>
            <div class="table-content">
                <div v-for="(item, index) in tableData" class="content-box">
                    <div class="content-cell cell-date">{{item.date}}</div>
                    <div class="content-cell cell-dept">{{item.dept}}</div>
                    <div class="content-cell cell-resource">{{item.resource}}</div>
                    <div class="content-cell cell-belongs">{{item.belongs}}</div>
                    <div class="content-cell cell-status">{{item.status}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import slick from "../libs/slick/slick.min.js";
export default {
  data() {
    return {
      share_total_num: 128,
      share_week_num: 65,
      tableData: [
        {
          date: "2018-04-14 18:30:01",
          dept: "环保局",
          resource: "气象区域自动站天气实况数据",
          belongs: "气象局",
          status: "成功"
        },
        {
          date: "2018-04-14 18:30:01",
          dept: "国土局",
          resource: "灾害性天气预警信号",
          belongs: "气象局",
          status: "成功"
        },
        {
          date: "2018-04-14 18:30:01",
          dept: "气象局",
          resource: "空气质量监测信息",
          belongs: "环保局",
          status: "成功"
        },
        {
          date: "2018-04-14 18:30:01",
          dept: "教育局",
          resource: "街道户籍人口适龄儿童信息",
          belongs: "公安局",
          status: "成功"
        },
        {
          date: "2018-04-14 18:30:01",
          dept: "民政局",
          resource: "机动车所有人登记信息",
          belongs: "公安局",
          status: "成功"
        },
        {
          date: "2018-04-14 18:30:01",
          dept: "水务局",
          resource: "灾害性天气预警信号",
          belongs: "气象局",
          status: "成功"
        },
        {
          date: "2018-04-14 18:30:01",
          dept: "交通局",
          resource: "气象区域自动站天气实况数据",
          belongs: "气象局",
          status: "成功"
        },
        {
          date: "2018-04-14 18:30:01",
          dept: "公安局",
          resource: "重点污染源基本信息",
          belongs: "环保局",
          status: "成功"
        },
        {
          date: "2018-04-14 18:30:01",
          dept: "安监局",
          resource: "重点娱乐场所基本",
          belongs: "文旅局",
          status: "成功"
        },
        {
          date: "2018-04-14 18:30:01",
          dept: "公安局",
          resource: "宣告死亡人员基本细信息",
          belongs: "卫计局",
          status: "成功"
        },
        {
          date: "2018-04-14 18:30:01",
          dept: "经信局",
          resource: "金开区土地划拨指标分派信息",
          belongs: "国土局",
          status: "成功"
        },
        {
          date: "2018-04-14 18:30:01",
          dept: "环保局",
          resource: "水源地基础设施违建投诉处理信息",
          belongs: "住建局",
          status: "成功"
        },
        {
          date: "2018-04-14 18:30:01",
          dept: "公安局",
          resource: "新生儿童基本信息",
          belongs: "卫计局",
          status: "成功"
        },
        {
          date: "2018-04-14 18:30:01",
          dept: "民政局",
          resource: "城乡居民社保养老金缴纳基本信息",
          belongs: "人社局",
          status: "成功"
        },
        {
          date: "2018-04-14 18:30:01",
          dept: "民政局",
          resource: "城乡居民房产所有人基本信息",
          belongs: "住建局",
          status: "成功"
        },
        {
          date: "2018-04-14 18:30:01",
          dept: "气象局",
          resource: "地质灾害易发区基本信息",
          belongs: "国土局",
          status: "成功"
        }
      ]
    };
  },
  mounted() {
    setTimeout(function() {
      $(".table-content").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        vertical: true,
        verticalSwiping: true
      });
    }, 80);
  }
};
</script>