<template>
    <div>
      <el-row>
          <el-col :span="12" style="padding-top: 5px; padding-right: 5px">
              <el-card class="grid-content1">
                  <div slot="header">
                      <span class="myfont">Latest Blocks</span>
                      <el-button style="float: right; padding: 2px 0; color: #3399FF; font-size: 16px" type="text">View all blocks</el-button>
                  </div>
                  <div v-for="item of blockData">
                      <div class="row">
                          <div class="row1">
                              <div class="row2">
                                  <div class="row3">
                                      <span class="btn btn-icon btn-soft-secondary">
                                        <span class="btn-icon__inner text-dark">BLK</span>
                                      </span>
                                  </div>
                                  <div class="row4">
                                      <span class="row5">Block</span>
                                      <a href="http://www.baidu.com">{{item.block_height}}</a>
                                      <span class="row6">{{item.timestamp}}</span>
                                  </div>
                              </div>
                          </div>
                          <div class="row7">
                              <div class="row8">
                                  <div class="row9">
                                      <span class="row10">
                                        Packer  <span>{{item.packerNode}}</span>
                                      </span>
                                      <span class="row11">includes</span>
                                      <span href="dashboard.vue">{{item.txn_num}} txns</span>
                                  </div>
                              </div>
                          </div>
                          <div class="row12">
                              <span class="row10">Block Hash: {{item.hash}}</span>
                              <span class="row14">Block Size: <a href="dashboard.vue">{{item.block_size}} MB</a></span>
                          </div>
                      </div>
                      <hr class="hr-space">
                  </div>
              </el-card>
          </el-col>

          <el-col :span="12" style="padding-top: 5px; padding-left: 5px">
              <el-card class="grid-content1">
                  <div slot="header" class="clearfix">
                      <span class="myfont">Latest Transactions</span>
                      <el-button style="float: right; padding: 2px 0; color: #3399FF; font-size: 16px" type="text">View all transactions</el-button>
                  </div>
                  <div v-for="item of txData">
                      <div class="row">
                          <div style="width: 33%">
                              <!--<div class="media align-items-sm-center mr-4 mb-1 mb-sm-0 float-left d-inline-block">-->
                              <div class="row2">
                                  <div class="row3">
                                     <span class="btn btn-icon btn-soft-secondary rounded-circle">
                                         <span class="btn-icon__inner text-dark">TXN</span>
                                     </span>
                                  </div>
                                  <div class="row4">
                                      <span class="row5">Block</span>
                                      <span href="http://www.baidu.com">{{item.hash}}</span>
                                      <span class="row6">{{item.timestamp}}</span>
                                  </div>
                              </div>
                          </div>
                          <div style="width: 33%">
                              <div class="row8">
                                  <div class="row9">
                                      <span class="row10" style="padding-top: 10px">
                                        From:  <span href="dashboard.vue">{{item.from}}</span>
                                      </span>
                                  </div>
                              </div>
                          </div>
                          <div class="row12">
                             <span class="row14" style="padding-top: 10px;padding-left: 10px">
                               To:  <span href="dashboard.vue">{{item.to}}</span>
                             </span>
                          </div>
                      </div>
                      <hr class="hr-space">
                  </div>
              </el-card>
          </el-col>
      </el-row>
    </div>
</template>

<script>
    import {formatDateMill, formatDateMillSelf} from '~/assets/common'

    export default {
        name: 'LatestBlock',
        data: () => ({
            data: [], count: 93655490, tableData: [],
        }),
        mounted() {
            // const { createDfuseClient, InboundMessageType } = require('@dfuse/client')
            //
            // const client = createDfuseClient({ apiKey: 'web_5fd3093906dd5dcd694b59b4dd31b3af', network: 'kylin' })

            // client.streamHeadInfo((message) => {
            //   if (message.type === InboundMessageType.HEAD_INFO) {
            //     const { head_block_num, head_block_id, head_block_time } = message.data
            //     this.data.unshift({
            //       num: head_block_num,
            //       id: head_block_id,
            //       time: formatDateMill(head_block_time)
            //     });
            //     this.data.splice(3, this.data.length);
            //   }
            // }).catch((error) => {
            //   console.log("An error occurred.", error)
            // })
            // setInterval(this.refresh, 1000);
            // this.refresh()
          // this.intervalBlocksFunction = setInterval(this.queryBlock, 1000);
          // this.intervalTxnsFunction = setInterval(this.queryTxns, 1000);
        },
        methods: {
            formatHash: function (row, column) {
                return row.hash.substr(0, 10) + '......' + row.hash.substr(58, 66)
            },
            formatBlockSize: function (row, column) {
                return row.size
            },
            formatTime: function (row, column) {
                return row.time.substr(0, 8)
            },
            // queryBlock() {
            //     // --data '{"jsonrpc":"2.0","method":"getRecentTransaction","params":[],"id":1}'
            //   this.$http.post("/api/","{\"jsonrpc\":\"2.0\",\"method\":\"getLatestBlocks\",\"params\":[],\"id\":1}").then(response => {
            //     if(response.status === 200){
            //         let res = response.body.result
            //         // console.log(res)
            //         for(let i=0;i<res.length;i++){
            //           // res.block_height =
            //           res[i].block_size = parseFloat(res[i].block_size).toFixed(2)
            //           res[i].hash = "0x"+ res[i].hash.substr(0,6)+"..."+res[i].hash.substr(res[i].hash.length-6,res[i].hash.length)
            //           res[i].timestamp = res[i].timestamp.substr(11,res[i].timestamp.length)
            //           // res.txn_num =
            //           res[i].packerNode = "Node_" + res[i].packerNode
            //         }
            //         this.blockData = res
            //     }
            //   }, () => {
            //     alert('sorry your network is not stable!')
            //   })
            // },
            // queryTxns() {
            //   this.$http.post("/api/","{\"jsonrpc\":\"2.0\",\"method\":\"getLatestTxns\",\"params\":[],\"id\":1}").then(response => {
            //     if(response.status === 200){
            //       let res = response.body.result
            //       // console.log(res)
            //       for(let i=0;i<res.length;i++){
            //         res[i].hash = "0x"+ res[i].hash.substr(0,4)+"..."+res[i].hash.substr(res[i].hash.length-4,res[i].hash.length)
            //         res[i].timestamp = res[i].timestamp.substr(11,res[i].timestamp.length)
            //         res[i].from = "0x"+ res[i].from.substr(0,6)+"..."+res[i].from.substr(res[i].from.length-6,res[i].from.length)
            //         res[i].to = "0x"+ res[i].to.substr(0,6)+"..."+res[i].to.substr(res[i].to.length-6,res[i].to.length)
            //       }
            //       this.txData = res
            //     }
            //   }, () => {
            //     alert('sorry your network is not stable!')
            //   })
            // },
        },
        props: ['innerWidth', 'blockData', 'txData'],
        watch:{
          // interval(newV, oldV){
          //   // do something, 可使用this
          //   clearInterval(this.intervalBlocksFunction)
          //   clearInterval(this.intervalTxnsFunction)
          //
          //   if(newV === "1s"){
          //     this.intervalBlocksFunction = setInterval(this.queryBlock, 1000)
          //     this.intervalTxnsFunction = setInterval(this.queryTxns, 1000)
          //   }else if(newV === "60s"){
          //     this.intervalBlocksFunction = setInterval(this.queryBlock, 60000)
          //     this.intervalTxnsFunction = setInterval(this.queryTxns, 60000)
          //   }
          //   // console.log(newV,oldV)
          // }
        }
    }
</script>

<style>
    .mytitle {
        display: flex;
        justify-content: space-between;
    }

    .myli {
        display: flex;
        justify-content: space-between;
        line-height: 35px;
        color: rgba(83, 94, 152, 1);
        text-decoration: none;
    }

    .el-table__row > td {
        border: none;
    }

    .el-table::before {
        height: 0px;
    }

    .item {
        margin-bottom: 16px;
    }
    .myfont{
        font-weight: bold;
    }
    /*.el-card /deep/ .el-card__header {*/
    /*    padding: 10px 10px;*/
    /*    padding-top: 8px;*/
    /*    padding-bottom: 8px;*/
    /*}*/

    .el-card__header {
        padding: 10px;
        padding-top: 8px;
        padding-bottom: 8px;
    }
    .el-card__body {
        /*padding: 10px;*/
        padding-top: 5px;
    }


    .aline{
        content: "";
        top: 0;
        height: 1px;
        background-image: linear-gradient(to right, transparent, darkgrey, transparent);
    }

    .row {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-right: -7.5px;
        margin-left: -7.5px;
    }

    .row1{
        flex: 0 0 28%;
        max-width: 33%;
    }

    .row2{
        /*min-width: 576px;*/
        margin-bottom: 0;
        margin-right: 1.25rem;
        align-items: center;
        display: flex;
    }

    .row3{
        display: flex;
        margin-right: .5rem;
    }

    .row4 {
        flex: 1;
        display: block;
    }

    .row5{
        display: none;
    }

    .row6{
        color: #77838f;
        white-space: nowrap;
        margin-left: 0;
        font-size: 80%;
        font-weight: 400;
        display: block;
    }

    .row7 {
        flex: 0 0 30%;
        max-width: 33%;
    }

    .row71 {
        flex: 0 0 40%;
        max-width: 40%;
    }
    .row8 {
        justify-content: space-between;
        display: flex;
    }

    .row9 {
        white-space: nowrap;
    }

    .row10 {
        display: block;
        margin-bottom: 0;
    }

    .row14 {
        display: block;
        margin-bottom: 0;
    }

    .row11{
        color: #77838f;
        font-size: 80%;
        font-weight: 400;
    }

    .row12{
        display: block;
    }

    .row13{
        display: inline-block;
        transition: .2s;
        font-size: .60938rem;
        line-height: 1.7;
        padding: .2rem .5rem;
        font-weight: 500;
        color: #77838f;
        background-color: rgba(119,131,143,.1);
        position: relative;
        padding-left: 1.15rem;
        letter-spacing: .8px;
        border-top-right-radius: .25rem;
        border-bottom-right-radius: .25rem;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    .row13::after{
        position: absolute;
        left: 0;
        top: 0;
        content: "";
        border-top: .7rem solid transparent;
        border-bottom: .7rem solid transparent;
        border-left: .7rem solid #fff;
    }

    .btn {
        display: inline-block;
        font-weight: 500;
        color: #1e2022;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-color: transparent;
        border: 1px solid transparent;
        padding: .75rem 1rem;
        font-size: .8125rem;
        line-height: 1.5;
        border-radius: .35rem;
        transition: all .2s ease-in-out;
    }

    .btn-icon {
        position: relative;
        line-height: 0;
        font-size: .8125rem;
        width: 2.53906rem;
        height: 2.53906rem;
        padding: 0;
    }

    .btn-soft-secondary {
        color: #77838f;
        background: rgba(119,131,143,.1);
        border-color: transparent;
    }

    .btn-icon__inner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .text-dark {
        color: #1e2022!important;
    }

    hr {
        margin-top: 1rem;
        margin-bottom: 1rem;
        border: 0;
        border-top: 1px solid #e7eaf3;
    }

    .hr-space {
        margin-top: .35rem;
        margin-bottom: .35rem;
        opacity: .75;
    }

    .rounded-circle {
        border-radius: 50%!important;
    }

    a{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        /*color: #3399FF;*/
        /*color: #2f54eb;*/
        color: #000000;
    }
    .grid-content1 {
      height: 199px;
      border-color: #dfdfdf;
      border-width: 2px;
    }
</style>
