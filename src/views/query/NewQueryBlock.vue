<template>
  <div>
    <el-card class="grid-content">
      <el-form :inline="true" ref="form1" :model="form1" style="text-align: center;padding-top: 5px">
        <el-form-item>
          <span style="font-size: 18px;color: #000000;" slot="label">Block_Height:</span>
          <el-input style="width: 80px" class="queryitem1" v-model="form1.name"></el-input>
        </el-form-item>
        <el-form-item>
          <span style="font-size: 18px;color: #000000" slot="label">From:</span>
          <el-select class="queryitem2" v-model="form1.value" placeholder="select">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button style="float: right;margin-left: 50px;height: 40px" type="primary" @click="queryBlock">Query
          </el-button>
        </el-form-item>
      </el-form>

      <el-card style="height: 720px;" v-loading="loading">
        <el-card style="width: 110px;height: 30px;background-color: #CFCFCF" :body-style="{ padding: '2px' }">
          <h4 style="float: left;margin: 3px">READ RESULT:</h4></el-card>
          <div style="height: 150px" v-if="!showTable"></div>

        <div v-for="(item,index) of readResult" style="font-size:19px;color:black">
          <div v-if="index===0" style="display: inline;width: 100%;float: left">
            <div style="float: left;padding-top: 10px">
              <span style="color: blue">[INFO]</span>
              sends request to
              <span :style="colorMap[form2.value]">{{ nodeMap[form2.value] }}</span>
            </div>
          </div>
          <div v-if="index===0" style="display: inline;width: 100%;float: left">
            <div style="float: left;padding-top: 20px">
              <span style="color: blue">[INFO]</span>
              <span :style="colorMap[form2.value]">{{ nodeMap[form2.value] }}</span>
              receives request for
            </div>
            <div class="container">
              <query-svg-icon icon-class="square_black" :text-string="form2.name"/>
            </div>
          </div>

          <div v-if="item.type==='localRead'" style="display: inline;width: 100%;float: left">
              <div style="float: left;padding-top: 20px">
                  <span style="color: blue">[INFO]</span>
                  <span :style="colorMap[form2.value]">{{ nodeMap[form2.value] }}</span>
                  reads
              </div>
              <div class="container">
                <query-svg-icon icon-class="square_black" :text-string="item.blockId"/>
              </div>
              <div style="float: left;padding-top: 20px;padding-left: 55px">locally</div>
          </div>


          <div v-if="item.type==='send'" style="display: inline;width: 100%;float: left">
            <div style="float: left;padding-top: 20px">
              <span style="color: blue">[INFO]</span>
              <span :style="colorMap[item.from-1]">{{ nodeMap[item.from-1] }}</span>
              sends request to
              <span :style="colorMap[item.to-1]">{{ nodeMap[item.to-1] }}</span>
            </div>
          </div>

          <div v-if="item.type==='timeout'" style="display: inline;width: 100%;float: left">
            <div style="float: left;padding-top: 20px">
              <span style="color: #E6A23C">[WARN]</span>
              timeout: 50ms...
              <span :style="colorMap[form2.value]">{{ nodeMap[form2.value] }}</span>
              broadcasts request
            </div>
          </div>

          <div v-if="item.type==='validationFailure'" style="display: inline;width: 100%;float: left">
            <div style="float: left;padding-top: 20px">
              <span style="color: #E6A23C">[WARN]</span>
              block validation fails...
              <span :style="colorMap[form2.value]">{{ nodeMap[form2.value] }}</span>
              broadcasts request
            </div>
          </div>

          <div v-if="item.type==='receive'" style="display: inline;width: 100%;float: left">
            <div style="float: left;padding-top: 20px">
              <span style="color: blue">[INFO]</span>
              <span :style="colorMap[form2.value]">{{ nodeMap[form2.value] }}</span>
              receives
            </div>

            <div v-for="(item1,index) of item.receivedBlocks">
              <div v-if="item1.blockType===0" class="container">
                <query-svg-icon icon-class="square_black" :text-string="item1.blockId"/>
              </div>
              <div v-else class="container">
                <my-svg-icon icon-class="square_blue_2" :text-string="item1.blockId"/>
              </div>

              <div style="float: left;padding-top: 20px;padding-left: 53px"><span v-if="item.receivedBlocks.length===1">from</span><span v-else>fr.</span> <span :style="colorMap[item1.from-1]">{{ nodeMap[item1.from-1] }}</span><span v-show="index<item.receivedBlocks.length-1">,</span></div>
            </div>
          </div>

            <div v-if="item.type==='decode'" style="display: inline;width: 100%;float: left">
              <div style="float: left;padding-top: 20px">
                <span style="color: blue">[INFO]</span>
                <span :style="colorMap[form2.value]">{{ nodeMap[form2.value] }}</span>
                recovers
              </div>
              <div class="container">
                <query-svg-icon icon-class="square_black" :text-string="item.to"/>
              </div>
              <div class="container" style="padding-left: 50px">
                <array-svg-icon icon-class="arrow_left"/>
                <!--                                          <span style="font-size:12px;overflow: hidden;>Decode</span>-->
              </div>
              <div v-for="(item,index) of item.from">
                <div v-if="index===0" class="container" style="padding-left: 100px">
                  <query-svg-icon v-if="item.blockType===0" icon-class="square_black" :text-string="item.blockId"/>
                  <my-svg-icon v-else icon-class="square_blue_2" :text-string="item.blockId"/>
                </div>
                <div v-if="index===1" class="container" style="padding-left: 150px">
                  <query-svg-icon v-if="item.blockType===0" icon-class="square_black" :text-string="item.blockId"/>
                  <my-svg-icon v-else icon-class="square_blue_2" :text-string="item.blockId"/>
                </div>
                <div v-if="index===2" class="container" style="padding-left: 200px">
                  <query-svg-icon v-if="item.blockType===0" icon-class="square_black" :text-string="item.blockId"/>
                  <my-svg-icon v-else icon-class="square_blue_2" :text-string="item.blockId"/>
                </div>
                <div v-if="index===3" class="container" style="padding-left: 250px">
                  <query-svg-icon v-if="item.blockType===0" icon-class="square_black" :text-string="item.blockId"/>
                  <my-svg-icon v-else icon-class="square_blue_2" :text-string="item.blockId"/>
                </div>
              </div>
            </div>

          <div v-if="item.type==='retBlock'" style="display: inline;width: 100%;float: left">
            <div style="float: left;padding-top: 20px">
              <span style="color: blue">[INFO]</span>
              receives
            </div>
            <div class="container">
              <query-svg-icon icon-class="square_black" :text-string="item.blockId"/>
            </div>
            <div style="float: left;padding-top: 20px;padding-left: 53px">from <span :style="colorMap[item.nodeId-1]">{{ nodeMap[item.nodeId-1] }}</span>
              (latency: {{ parseFloat(item.costTime).toFixed(2) }}ms)
            </div>
          </div>
        </div>

        <div style="display: inline;width: 100%;float: left;padding-top: 15px">
          <el-card style="width: 105px;height: 30px;background-color: #CFCFCF" :body-style="{ padding: '2px' }"><h4
              style="float: left;margin: 3px">BLOCK INFO:</h4></el-card>
          <!--<span style="text-decoration:underline;font-size:25px;float: left;margin: 3px">BLOCK INFO:</span>-->
        </div>
        <div style="height: 200px" v-if="!showTable"></div>
        <div style="width:600px;float: left;text-align: left;">
          <!--<el-scrollbar style="height: 100%;" :native="true">-->
          <div style="padding-top: 5px"></div>
          <pre style="margin: 0px;font-size: 19px;color: black">{{ this.jsonvalue }}</pre>
          <!--</el-scrollbar>-->
          <div style="padding-top: 5px"></div>
        </div>
        <div style="display: inline;width: 100%;float: left">
          <!--<el-card style="width: 162px"><div style="float: left;font-weight: bold;padding-top: 5px"> Transactions Detail:</div></el-card>-->
          <el-card style="width: 180px;height: 30px;background-color: #CFCFCF" :body-style="{ padding: '2px' }"><h4
              style="float: left;margin: 3px">TRANSACTIONS DETAIL:</h4></el-card>
          <!--<span style="text-decoration:underline;font-size:25px;float: left;margin: 3px">TRANSACTIONS DETAIL:</span>-->
        </div>
        <div style="height: 300px;width: 100%;float: right">
          <el-scrollbar style="height: 100%;">
            <!--<happy-scroll color="rgba(0,0,0,0.5)" size="5">-->
            <el-table
                v-show="showTable"
                :data="tableData"
                style="font-size: 19px;color: black;"
                :header-cell-style="{color:'#000000', fontSize: '17px'}">
              <el-table-column
                  prop="hash"
                  label="TXN"
                  align="center"
                  :formatter="formatTX"
                  width="145px">
              </el-table-column>
              <el-table-column
                  prop="hash"
                  label="BlockHeight"
                  align="center"
                  width="125px">
                <template slot-scope="scope">
                  <a style="color: #0000EE" href=".">{{ scope.row.height }}</a>
                </template>
              </el-table-column>

              <el-table-column
                  prop="sender"
                  label="Sender"
                  align="center"
                  :formatter="formatSender"
                  width="145px">
              </el-table-column>
              <!--<el-table-column-->
              <!--prop="receiver"-->
              <!--label="Receiver"-->
              <!--align="center"-->
              <!--:formatter="formatReceiver">-->
              <!--</el-table-column>-->
              <el-table-column
                  prop="time"
                  label="Timestamp"
                  align="center"
                  :formatter="formatQuantity">
              </el-table-column>
            </el-table>
          </el-scrollbar>
        </div>
      </el-card>
    </el-card>
  </div>
</template>

<script>
import {formatDateMill, formatDateMillSelf} from '~/assets/common'
import LatestBlock from '~/views/homepage/LatestBlock'
import SvgIcon from '~/components/SvgIcon'
import MySvgIcon from '~/components/SvgIcon2'
import Chart from '~/components/Charts/LineMarker'
import BarChart from '~/components/Charts/BarChart'
import JsonEditor from '~/components/JsonEditor'
import QuerySvgIcon from '~/components/QuerySvgIcon'
import ArraySvgIcon from '~/components/ArraySvgIcon'

const jsonData = '{"block_height":"127","hash":"0x5a0b54d5......0d3e029c4c","txn_num":"1000","block_size":"0.69M","transactions":"[......]","timestamp":"2021-01-13 21:33:14"}'
// const jsonData = '{"block_height":"136","hash":"0x1e961efe......818c7be227","txn_num":"1000","block_size":"0.71M","transactions":"[......]","timestamp":"2021-01-13 21:33:20"}'
// const jsonData = '{"block_height":"124","hash":"0x69031bd0......f1688aff0d","txn_num":"853","block_size":"0.62M","transactions":"[......]","timestamp":"2021-01-13 21:33:13"}'
export default {
  name: "NewQueryBlock",
  components: {
    LatestBlock,
    SvgIcon,
    MySvgIcon,
    Chart,
    BarChart,
    JsonEditor,
    QuerySvgIcon,
    ArraySvgIcon
  },
  data() {
    return {
      colorMap: ["color: red", "color: darkcyan", "color: blueviolet", "color: peru", "color: darkgreen", "color: violet"],
      nodeMap: ["Node1","Node2","Node3","Node4","Node5","Node6"],
      selected: 0,
      layouts: [
        {'name': '1x1模式', 'value': '0'},
        {'name': '2x1模式', 'value': '1'},
        {'name': '2x2模式', 'value': '2'},
        {'name': '3x2模式', 'value': '3'},
        {'name': '3x3模式', 'value': '4'},
        {'name': '1+5模式', 'value': '5'}
      ],
      form: {
        name: '',
      },
      form1: {
        name: '',
      },
      form2: {
        name: '',
      },
      data1: [],
      data2: [],
      index: 1,
      value1: 300,
      value2: 100,
      now: new Date(1997, 9, 3),
      oneDay: 24 * 3600 * 1000,
      dialogVisible: false,
      options: [{
        value: '0',
        label: 'Node1'
      }, {
        value: '1',
        label: 'Node2'
      }, {
        value: '2',
        label: 'Node3'
      }, {
        value: '3',
        label: 'Node4'
      }, {
        value: '4',
        label: 'Node5'
      }, {
        value: '5',
        label: 'Node6'
      }],
      value: '',
      radio: 1,
      // jsonvalue: JSON.parse(jsonData),
      jsonvalue: '',
      tableData: [],
      loading: false,
      showTable: false,
      readResult: [],
      queryName: '',
      queryValue: ''
    }
  },
  mounted() {
    // this.refresh()
  },
  methods: {
    onSubmit() {
      this.dialogVisible = true
    },
    formatTX: function (row, column) {
      return row.hash.substr(0, 6) + '......' + row.hash.substr(56, 66)
    },
    formatReceiver: function (row, column) {
      return row.receiver.substr(0, 10) + '......' + row.receiver.substr(row.receiver.length - 10, row.receiver.length)
    },
    formatSender: function (row, column) {
      return row.sender.substr(0, 6) + '......' + row.sender.substr(row.sender.length - 10, row.sender.length)
    },
    formatTime: function (row, column) {
      return row.time.substr(0, 8)
    },
    formatQuantity: function (row, column) {
      return row.quantity
    },
    queryBlock() {
      // this.loading = true
      // console.log("query"+this.form2.value+" "+this.form2.name)
      this.queryName = this.form1.name
      this.queryValue = this.form1.value
      let url = ["/api1/", "/api2/", "/api3/", "/api4/", "/api5/", "/api6/"]
      this.loading = true
      this.$http.post(url[this.queryValue],"{\"jsonrpc\":\"2.0\",\"method\":\"decodeBlockByNumber\",\"params\":["+this.queryName+"],\"id\":1}").then(response => {
        if(response.status === 200){
          let res = response.body.result
          // format block
          let tmpBlock = res.block
          let tmpcostTime = res.costTime
          let tmpProcess = res.process


          for(let i=0;i<tmpBlock.transactions.length;i++){
            let curTx = tmpBlock.transactions[i]
            this.tableData.unshift(
                {
                  height: tmpBlock.block_height,
                  hash: curTx.hash,
                  //time: formatDateMill(new Date(new Date().getTime() + 2000)),
                  //size: 0.96 + ' MB'
                  sender: curTx.from,
                  receiver: curTx.to,
                  quantity: curTx.timestamp
                }
            )
          }

          this.readResult = tmpProcess
          let len = tmpBlock.hash.length
          this.jsonvalue = {
            block_height: tmpBlock.block_height.toString(),
            hash: "0x"+tmpBlock.hash.substr(0,8)+'......'+tmpBlock.hash.substr(len-8,len),
            txn_num: tmpBlock.txn_num,
            block_size : parseFloat(tmpBlock.block_size).toFixed(2) + "M",
            transactions : "[......]",
            timestamp: tmpBlock.timestamp,
          }
          this.loading = false
          this.form2.value = this.queryValue
          this.form2.name = this.queryName
          this.showTable = true
        }
      }, () => {
        alert('sorry your network is not stable!')
      })
    }
  }
}
</script>

<style scoped>
.block {
  padding: 20px 0px;
}

.block1 {
  padding: 20px 0px;
}

.block2 {
  margin-top: 20px;
}

.grid-content {
  /*background-color: rgb(44, 143, 121);*/
  /*min-height: 800px;*/
  /*min-width: 100px;*/
  width: 736px;
  border-color: #8a8a8a;
  border-width: 2px;
}

/*.lay1 {*/
/*width: 100%;*/
/*height: 80px;*/
/*}*/

/*.lay2 {*/
/*width: 100%;*/
/*height: 80px;*/
/*padding-top: 10px*/
/*}*/

.lay3 {
  width: 100%;
}

.container {
  position: absolute;
  float: left;
  width: 52px;
  padding-top: 5px;
  display: inline-block;
}

.containerSP {
  float: left;
  width: 64px;
  padding-left: 150px
}

.chart-container {
  position: relative;
  width: 100%;
  height: 399.5px;
}

.blocknum {
  z-index: 100;
  position: relative;
  float: left;
}

.aline {
  margin-top: 15px;
  content: "";
  top: 0;
  height: 1px;
  background-image: linear-gradient(to right, transparent, darkgrey, transparent);
}

.aline2 {
  margin-top: 15px;
  content: "";
  top: 0;
  height: 1px;
  background-color: black;
  /*background-image: linear-gradient(to right, transparent, darkgrey, transparent);*/
}

.svgtext {
  font-size: 10px;
  overflow: hidden
}

.queryitem1 {
  width: 199px;
}

.queryitem2 {
  width: 90px;
}

.editor-container {
  position: relative;
  height: 100%;
}
</style>