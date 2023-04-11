<template>
  <el-container>
    <el-container>
      <el-main>
        
        <!-- 节点详细信息展示 -->
        <div class="block">
          <el-card style="height:616px; padding: 0px;border-color: #8a8a8a;border-width:2px;">
            <div style="height:100%;width:100%;padding-top: 5px;padding-bottom: 10px;">
              <el-row :gutter="10" type="flex" class="row-bg" justify="center">
                <el-col :span="8">
                  <el-card class="grid-content">
                    <div style="height:68px">
                      <div style="float: left;padding-left: 0px">
                        <pc-svg-icon icon-class="pc"/>
                      </div>
                      <div style="float: left">
                        <div style="height: 50%;position: absolute;padding-top: 15px;padding-left: 10px">Node_1</div>
                        <div style="height: 50%;padding-top: 35px;padding-left: 10px">10.11.7.63</div>
                      </div>
                    </div>
                    <div class="aline3"></div>
                    <div class="lay2">
                      <div style="float:left;width: 20%">
                        <h3 style="text-align: center;overflow: hidden">Buffer:</h3>
                      </div>
                      <div style="float:right;width: 80%">
                        <div v-for="(item,index) of node1Buffer" >
                          <div v-if="index === 0" class="containerD">
                            <svg-icon icon-class="square_black"/>
                            <div style="padding-right:3px;text-align: center"><span class="downtext">{{ item.id }}</span></div>
                          </div>
                          <div v-else class="container">
                            <svg-icon icon-class="square_black"/>
                            <div style="padding-right:3px;text-align: center"><span class="downtext">{{ item.id }}</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="aline"></div>
                    <div class="lay2">
                      <div style="float:left;width: 20%">
                        <h3 style="text-align: center;">Chunk:</h3>
                      </div>
                      <div style="float:right;width: 80%">
                        <div v-for="(item,index) of node1Chunk">
                          <div v-if="index===0" class="containerD">
                              <div v-if="item.blockType===0">
                                <svg-icon icon-class="square_black"/>
                                <div style="padding-right:3px;text-align: center"><span class="downtext">{{ item.id }}</span></div>
                              </div>
                              <div v-else>
                                <svg-icon icon-class="square_blue_2"/>
                                <div style="padding-right:3px;text-align: center"><span class="downtext">{{ item.id }}</span></div>
                              </div>
                          </div>
                          <div v-else class="container">
                            <div v-if="item.blockType===0">
                              <svg-icon icon-class="square_black"/>
                              <div style="padding-right:3px;text-align: center"><span class="downtext">{{ item.id }}</span></div>
                            </div>
                            <div v-else>
                              <svg-icon icon-class="square_blue_2"/>
                              <div style="padding-right:3px;text-align: center"><span class="downtext">{{ item.id }}</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </el-card>
                </el-col>
                
                <el-col :span="8">
                  <el-card class="grid-content">
                    <div style="height:68px">
                      <div style="float: left;padding-left: 0px">
                        <pc-svg-icon icon-class="pc"/>
                      </div>
                      <div style="float: left">
                        <div style="height: 50%;position: absolute;padding-top: 15px;padding-left: 10px;">Node_2</div>
                        <div style="height: 50%;padding-top: 35px;padding-left: 10px">10.11.7.71</div>
                      </div>
                    </div>
                    <div class="aline3"></div>
                    <div class="lay2">
                      <div style="float:left;width: 20%">
                        <h3 style="text-align: center;">Buffer:</h3>
                      </div>
                      <div style="float:right;width: 80%">
                        <div v-for="(item,index) of node2Buffer">
                          <div v-if="index === 0" class="containerD">
                            <svg-icon icon-class="square_black"/>
                            <div style="padding-right:3px;text-align: center"><span class="downtext">{{ item.id }}</span></div>
                          </div>
                          <div v-else class="container">
                            <svg-icon icon-class="square_black"/>
                            <div style="padding-right:3px;text-align: center"><span class="downtext">{{ item.id }}</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="aline"></div>
                    <div class="lay2">
                      <div style="float:left;width: 20%">
                        <h3 style="text-align: center;">Chunk:</h3>
                      </div>
                      <div style="float:right;width: 80%">
                        <div v-for="(item,index) of node2Chunk">
                          <div v-if="index===0" class="containerD">
                            <div v-if="item.blockType===0">
                              <svg-icon icon-class="square_black"/>
                              <div style="padding-right:3px;text-align: center"><span class="downtext">{{ item.id }}</span></div>
                            </div>
                            <div v-else>
                              <svg-icon icon-class="square_blue_2"/>
                              <div style="padding-right:3px;text-align: center"><span class="downtext">{{ item.id }}</span></div>
                            </div>
                          </div>
                          <div v-else class="container">
                            <div v-if="item.blockType===0">
                              <svg-icon icon-class="square_black"/>
                              <div style="padding-right:3px;text-align: center"><span class="downtext">{{ item.id }}</span></div>
                            </div>
                            <div v-else>
                              <svg-icon icon-class="square_blue_2"/>
                              <div style="padding-right:3px;text-align: center"><span class="downtext">{{ item.id }}</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </el-card>
                </el-col>

                <el-col :span="8">
                  <el-card class="grid-content">
                    <div style="height:68px">
                      <div style="float: left;padding-left: 0px">
                        <pc-svg-icon icon-class="pc"/>
                      </div>
                      <div style="float: left">
                        <div style="height: 50%;position: absolute;padding-top: 15px;padding-left: 10px;">Node_3</div>
                        <div style="height: 50%;padding-top: 35px;padding-left: 10px">10.11.7.72</div>
                      </div>
                    </div>
                    <div class="aline3"></div>
                    <div class="lay2">
                      <div style="float:left;width: 20%">
                        <h3 style="text-align: center;">Buffer:</h3>
                      </div>
                      <!--<div style="padding-top: 0px">-->
                      <!--<h3 style="font-size:24px;text-align: center;">NodeID: 0 1 2 3</h3>-->
                      <!--<h3 style="font-size:24px;text-align: center;">Permut: 2 3 1 0</h3>-->
                      <!--</div>-->
                      <div style="float:right;width: 80%">
                        <div v-for="(item,index) of node3Buffer">
                          <div v-if="index === 0" class="containerD">
                            <svg-icon icon-class="square_black"/>
                            <div style="padding-right:3px;text-align: center"><span class="downtext">{{ item.id }}</span></div>
                          </div>
                          <div v-else class="container">
                            <svg-icon icon-class="square_black"/>
                            <div style="padding-right:3px;text-align: center"><span class="downtext">{{ item.id }}</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="aline"></div>
                    <div class="lay2">
                      <div style="float:left;width: 20%">
                        <h3 style="text-align: center;">Chunk:</h3>
                      </div>
                      <div style="float:right;width: 80%">
                        <div v-for="(item,index) of node3Chunk">
                          <div v-if="index===0" class="containerD">
                            <div v-if="item.blockType===0">
                              <svg-icon icon-class="square_black"/>
                              <div style="padding-right:3px;text-align: center"><span class="downtext">{{ item.id }}</span></div>
                            </div>
                            <div v-else>
                              <svg-icon icon-class="square_blue_2"/>
                              <div style="padding-right:3px;text-align: center"><span class="downtext">{{ item.id }}</span></div>
                            </div>
                          </div>
                          <div v-else class="container">
                            <div v-if="item.blockType===0">
                              <svg-icon icon-class="square_black"/>
                              <div style="padding-right:3px;text-align: center"><span class="downtext">{{ item.id }}</span></div>
                            </div>
                            <div v-else>
                              <svg-icon icon-class="square_blue_2"/>
                              <div style="padding-right:3px;text-align: center"><span class="downtext">{{ item.id }}</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
              <br>
              <el-row :gutter="10" type="flex" class="row-bg" justify="center">
                <el-col :span="8">
                  <el-card class="grid-content">
                    <div style="height:68px">
                      <div style="float: left;padding-left: 0px">
                        <pc-svg-icon icon-class="pc"/>
                      </div>
                      <div style="float: left">
                        <div style="height: 50%;position: absolute;padding-top: 15px;padding-left: 10px">Node_4</div>
                        <div style="height: 50%;padding-top: 35px;padding-left: 10px">10.11.7.73</div>
                      </div>
                    </div>
                    <div class="aline3"></div>
                    <div class="lay2">
                      <div style="float:left;width: 20%">
                        <h3 style="text-align: center;">Buffer:</h3>
                      </div>
                      <!--<div style="padding-top: 0px">-->
                      <!--<h3 style="font-size:24px;text-align: center;">NodeID: 0 1 2 3</h3>-->
                      <!--<h3 style="font-size:24px;text-align: center;">Permut: 2 3 1 0</h3>-->
                      <!--</div>-->
                      <div style="float:right;width: 80%">
                        <div v-for="(item,index) of node4Buffer">
                          <div v-if="index === 0" class="containerD">
                            <svg-icon icon-class="square_black"/>
                            <div style="padding-right:3px;text-align: center"><span class="downtext">{{ item.id }}</span></div>
                          </div>
                          <div v-else class="container">
                            <svg-icon icon-class="square_black"/>
                            <div style="padding-right:3px;text-align: center"><span class="downtext">{{ item.id }}</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="aline"></div>
                    <div class="lay2">
                      <div style="float:left;width: 20%">
                        <h3 style="text-align: center;">Chunk:</h3>
                      </div>
                      <div style="float:right;width: 80%">
                        <div v-for="(item,index) of node4Chunk">
                          <div v-if="index===0" class="containerD">
                            <div v-if="item.blockType===0">
                              <svg-icon icon-class="square_black"/>
                              <div style="padding-right:3px;text-align: center"><span class="downtext">{{ item.id }}</span></div>
                            </div>
                            <div v-else>
                              <svg-icon icon-class="square_blue_2"/>
                              <div style="padding-right:3px;text-align: center"><span class="downtext">{{ item.id }}</span></div>
                            </div>
                          </div>
                          <div v-else class="container">
                            <div v-if="item.blockType===0">
                              <svg-icon icon-class="square_black"/>
                              <div style="padding-right:3px;text-align: center"><span class="downtext">{{ item.id }}</span></div>
                            </div>
                            <div v-else>
                              <svg-icon icon-class="square_blue_2"/>
                              <div style="padding-right:3px;text-align: center"><span class="downtext">{{ item.id }}</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </el-card>
                </el-col>
                <el-col :span="8">
                  <el-card class="grid-content">
                    <div style="height:68px">
                      <div style="float: left;padding-left: 0px">
                        <pc-svg-icon icon-class="pc"/>
                      </div>
                      <div style="float: left">
                        <div style="height: 50%;position: absolute;padding-top: 15px;padding-left: 10px">Node_5</div>
                        <div style="height: 50%;padding-top: 35px;padding-left: 10px">10.11.7.74</div>
                      </div>
                      <div style="float:right;padding-left: 90px;padding-top: 10px">
                        <he-svg-icon icon-class="hostile"/>
                      </div>
                    </div>
                    <div class="aline3"></div>
                    <!--<he-svg-icon icon-class="hostile"/>-->
                    <!--<div style="height: 39px"></div>-->
                    <div class="lay2">
                      <div style="float:left;width: 20%">
                        <h3 style="text-align: center;">Buffer:</h3>
                      </div>
                      <!--<div style="padding-top: 0px">-->
                      <!--<h3 style="font-size:24px;text-align: center;">NodeID: 0 1 2 3</h3>-->
                      <!--<h3 style="font-size:24px;text-align: center;">Permut: 1 2 0 3</h3>-->
                      <!--</div>-->
                      <!--<div style="float:right;width: 80%">-->
                      <!--<div class="container">-->
                      <!--<svg-icon icon-class="square_white"/>-->
                      <!--<span style="overflow: hidden;color: white;">133</span>-->
                      <!--</div>-->
                      <!--</div>-->
                    </div>
                    <div class="aline"></div>
                    <div class="lay2">
                      <div style="float:left;width: 20%">
                        <h3 style="text-align: center;">Chunk:</h3>
                      </div>
                      <div style="float:right;width: 80%;">
                        <div class="container">
                          <svg-icon icon-class=""/>
                          <span style="overflow: hidden;color: rgba(0,0,0,0);">parity133</span>
                        </div>
                      </div>
                    </div>
                  </el-card>
                </el-col>
                <el-col :span="8">
                  <el-card class="grid-content">
                    <div style="height:68px">
                      <div style="float: left;padding-left: 0px">
                        <pc-svg-icon icon-class="pc"/>
                      </div>
                      <div style="float: left">
                        <div style="height: 50%;position: absolute;padding-top: 15px;padding-left: 10px">Node_6</div>
                        <div style="height: 50%;padding-top: 35px;padding-left: 10px">10.11.7.75</div>
                      </div>
                    </div>
                    <div class="aline3"></div>
                    <div class="lay2">
                      <div style="float:left;width: 20%">
                        <h3 style="text-align: center;">Buffer:</h3>
                      </div>
                      <div style="float:right;width: 80%">
                        <div v-for="(item,index) of node6Buffer">
                          <div v-if="index === 0" class="containerD">
                            <svg-icon icon-class="square_black"/>
                            <div style="padding-right:3px;text-align: center"><span class="downtext">{{ item.id }}</span></div>
                          </div>
                          <div v-else class="container">
                            <svg-icon icon-class="square_black"/>
                            <div style="padding-right:3px;text-align: center"><span class="downtext">{{ item.id }}</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="aline"></div>
                    <div class="lay2">
                      <div style="float:left;width: 20%">
                        <h3 style="text-align: center;">Chunk:</h3>
                      </div>
                      <div style="float:right;width: 80%">
                        <div v-for="(item,index) of node6Chunk">
                          <div v-if="index===0" class="containerD">
                            <div v-if="item.blockType===0">
                              <svg-icon icon-class="square_black"/>
                              <div style="padding-right:3px;text-align: center"><span class="downtext">{{ item.id }}</span></div>
                            </div>
                            <div v-else>
                              <svg-icon icon-class="square_blue_2"/>
                              <div style="padding-right:3px;text-align: center"><span class="downtext">{{ item.id }}</span></div>
                            </div>
                          </div>
                          <div v-else class="container">
                            <div v-if="item.blockType===0">
                              <svg-icon icon-class="square_black"/>
                              <div style="padding-right:3px;text-align: center"><span class="downtext">{{ item.id }}</span></div>
                            </div>
                            <div v-else>
                              <svg-icon icon-class="square_blue_2"/>
                              <div style="padding-right:3px;text-align: center"><span class="downtext">{{ item.id }}</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </div>

        <!-- 近期区块/交易信息展示 -->
        <el-card style="height: 340px;border-color: #8a8a8a;border-width:2px;">
          <new-latest-block :blockData="blocks" :txData="txns"></new-latest-block>
          <el-row style="padding: 12px 0px;">
            <el-card style="height: 100px;border-color: #ffffff;
      border-width:2px;" shadow="never">
              <div style="float:left;width: 30%">
                <h2 style="text-align: center; padding-top: 10px">Latest Coding Group</h2>
              </div>
              <div v-for="(item,index) of codingGroup.block">
                <div v-if="index===0" class="containerSP">
                  <my-svg-icon icon-class="square_black" style="padding-left: 5px"/>
                  <span style="font-size:18px;overflow: hidden">block{{ item }}</span>
                </div>
                <div v-else class="containerSS">
                  <my-svg-icon icon-class="square_black" style="padding-left: 5px"/>
                  <span style="font-size:18px;overflow: hidden">block{{ item }}</span>
                </div>
              </div>

              <div class="containerSS" style="padding-left: 22px">
                <my-svg-icon icon-class="arrow" style="padding-left: 5px"/>
                <span style="font-size:20px;overflow: hidden">Encode</span>
              </div>

              <div v-for="item of codingGroup.parity">
                <div class="containerSS">
                  <my-svg-icon icon-class="square_blue_2" style="padding-left: 1px"/>
                  <span style="font-size:18px;overflow: hidden">parity{{item}}</span>
                </div>
              </div>
            </el-card>
          </el-row>
        </el-card>
        
        <!-- 页面底部按键 -->
        <!-- <div>
          <span>Sampling Frequency:</span>
          <el-radio-group v-model="radio">
            <el-radio-button label="1s"></el-radio-button>
            <el-radio-button label="60s"></el-radio-button>
          </el-radio-group>

          <span style="padding-left: 10px">Invoke Interface:</span>
          <el-button class="blackborder" @click="dialogInvokeVisible = true" plain>Send Txns</el-button>

          <span style="padding-left: 10px">Query Interface:</span>
          <el-button class="blackborder" @click="dialogQueryVisible = true" plain>Query Block</el-button>
        </div> -->
      </el-main>
    </el-container>

    <el-dialog
        width="353px"
        :visible.sync="dialogInvokeVisible">
      <new-invoke-txns></new-invoke-txns>
    </el-dialog>

    <el-dialog
        width="759px"
        :visible.sync="dialogQueryVisible">
      <new-query-block></new-query-block>
    </el-dialog>

    <el-aside width="550px" class="block1">
      <el-card
          style="border-width:2px;border-color: #8a8a8a;background: -webkit-linear-gradient(bottom,hsla(0,0%,89%,.15),hsla(0,0%,89%,0),white) no-repeat;">
        <!--<el-form :inline="true" ref="form" :model="form">-->
        <!--<el-form-item label="Block_Height" label-width="110px">-->
        <!--<el-input v-model="form.name"></el-input>-->
        <!--</el-form-item>-->
        <!--<el-form-item>-->
        <!--<el-button type="primary" @click="onSubmit">query</el-button>-->
        <!--</el-form-item>-->
        <!--</el-form>-->
        <!--<el-card>-->
        <!--<h4 style="float: left">QUERY RESULT:</h4>-->
        <!--<br><br><br>-->
        <!--<p style="text-align: left"><span style="color: blue">[INFO]</span> query <span style="color: red">block1</span>: 0x123351243354213</p>-->
        <!--<p style="text-align: left"><span style="color: blue">[INFO]</span> query <span style="color: peru">ecblock1</span>: 0x123351243354213 from node1</p>-->
        <!--<p style="text-align: left"><span style="color: blue">[INFO]</span> query <span style="color: peru">ecblock2</span>: 0x123351243354213 from node2</p>-->
        <!--<p style="text-align: left"><span style="color: blue">[INFO]</span> query <span style="color: red">block1</span>: 0x123351243354213 <span style="color: green">Success</span></p>-->
        <!--&lt;!&ndash;<div class="aline2"></div>&ndash;&gt;-->
        <!--</el-card>-->
        <!--<el-card class="block2">-->
        <!--<h4 style="float: left">QUERY HISTORY:</h4>-->
        <!--<br><br><br>-->
        <!--<p style="text-align: left"><span style="color: blue">[INFO]</span> query block1: 0x4123123123113</p>-->
        <!--<p style="text-align: left"><span style="color: blue">[INFO]</span> retrieve <span style="color: red">block1</span> from node1: 0x4123123123113... <span style="color: green">Success</span></p>-->
        <!--<p style="text-align: left"><span style="color: blue">[INFO]</span> query block1: 0x4123123123113 <span style="color: green">Success</span></p>-->
        <!--<br><br><br><br><br><br><br>-->
        <!--<div id="myChart" :style="{width: '550px', height: '300px'}"></div>-->
        <div class="chart-container1">
          <t-chart :tpsData="tps" height="100%" width="100%" />
        </div>
        <div style="padding-top: 13px"></div>
        <div class="chart-container">
          <line-chart :ecStorage="ecStorage" :fullStorage="fullStorage" :judge="storageChanged" height="100%" width="100%"/>
        </div>
        <div style="padding-top: 12px"></div>
        <div class="chart-container">
          <bar-chart :barBlock="barBlock" :barBuffer="barBuffer" :barParity="barParity" height="100%" width="100%"/>
        </div>
        <!--</el-card>-->
      </el-card>
    </el-aside>
    <!--  <el-dialog-->
    <!--      :modal-append-to-body="false"-->
    <!--      title="提示"-->
    <!--      :visible.sync="dialogVisible"-->
    <!--      width="30%">-->
    <!--    <span>这是一段信息</span>-->
    <!--    <span slot="footer" class="dialog-footer">-->
    <!--    <el-button @click="dialogVisible = false">取 消</el-button>-->
    <!--    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
    <!--  </span>-->
    <!--  </el-dialog>-->
  </el-container>
</template>

<script>
import NewLatestBlock from './NewLatestBlock'
import SvgIcon from '~/components/SvgIcon'
import MySvgIcon from '~/components/SvgIcon2'
import PCSvgIcon from '~/components/SvgIcon3'
import HeSvgIcon from '~/components/SvgIcon4'
import LineChart from '~/components/Charts/LineMarker'
import BarChart from '~/components/Charts/BarChart'
import TChart from '~/components/Charts/TChart'
import NewQueryBlock from '~/views/query/NewQueryBlock'
import NewInvokeTxns from '~/views/invoke/InvokeTxns'

export default {
  name: "BlockInfo",
  components: {
    NewLatestBlock,
    SvgIcon,
    BarChart,
    MySvgIcon,
    PCSvgIcon,
    TChart,
    NewQueryBlock,
    NewInvokeTxns,
    LineChart,
  },
  data() {
    return {
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
      data1: [],
      data2: [],
      index: 1,
      value1: 300,
      value2: 100,
      now: new Date(1997, 9, 3),
      oneDay: 24 * 3600 * 1000,
      dialogInvokeVisible: false,
      dialogQueryVisible: false,
      codingGroup: {},
      blocks: [],
      txns: [],
      tps: [],
      fullStorage: [],
      ecStorage: [],
      storageChanged:false,
      barBlock: [],
      barBuffer: [],
      barParity: [],

      /*nodes info*/
      node1Buffer: [],
      node1Chunk: [],

      node2Buffer: [1, 2, 3],
      node2Chunk: [],

      node3Buffer: [],
      node3Chunk: [],

      node4Buffer: [],
      node4Chunk: [],

      node6Buffer: [],
      node6Chunk: [],

      timer: null,
      interval: 1000,
      start1s: true,
      start60s: false,

      radio: '1s'
    }
  },
  mounted() {
    this.timer = this.simulateInterval1s(this.queryAllInfo, 1000)
    console.log(this.timer)
  },
  methods: {
    onSubmit() {
      this.dialogVisible = true
    },
    simulateInterval1s(callback, interval) {
      let timerId = null;
      let _this = this;
      function fn() {
        let _self = _this;
        if(!_self.start1s) {
          clearTimeout(timerId);
          return
        }
        callback();
        const prevTimmerId = timerId;
        timerId = setTimeout(fn, interval);
        clearTimeout(prevTimmerId);
      }

      return setTimeout(fn, interval);
    },
    simulateInterval60s(callback, interval) {
      let timerId = null;
      let _this = this;
      function fn() {
        let _self = _this;
        if(!_self.start60s) {
          clearTimeout(timerId);
          return
        }
        callback();
        const prevTimmerId = timerId;
        timerId = setTimeout(fn, interval);
        clearTimeout(prevTimmerId);
      }

      return setTimeout(fn, interval);
    },
    // simulateInterval(callback) {
    //   let timerId = null;
    //
    //   function fn() {
    //     callback();
    //     const prevTimerId = timerId;
    //     console.log(this.interval)
    //     timerId = window.setTimeout(fn, this.interval);
    //   }
    //
    //   return setTimeout(fn, this.interval);
    // },
    queryAllInfo() {
      this.queryLatestStatus()
      // this.queryStorage()
      this.queryOccupation()
      this.queryNodesInfo()
    },
    queryLatestStatus() {
      let url = "/api1/"
      this.$http.post(url,"{\"jsonrpc\":\"2.0\",\"method\":\"getLatestStatus\",\"params\":[],\"id\":1}").then(response => {
        if(response.status === 200){
          let res = response.body.result
          // format block
          let tmpBlocks = res.latestBlocks
          for(let i=0;i<tmpBlocks.length;i++){
            let curBlock = tmpBlocks[i]
            // res.block_height =
            curBlock.block_size = parseFloat(curBlock.block_size).toFixed(2)
            curBlock.hash = "0x"+ curBlock.hash.substr(0,6)+"..."+curBlock.hash.substr(curBlock.hash.length-6,curBlock.hash.length)
            curBlock.timestamp = curBlock.timestamp.substr(11,curBlock.timestamp.length)
            // res.txn_num =
            curBlock.packerNode = "Node_" + curBlock.packerNode
          }
          this.blocks = tmpBlocks

          // format txn
          let tmpTxns = res.latestTransactions
          for(let i=0;i<tmpTxns.length;i++){
            let curTxn = tmpTxns[i]
            curTxn.hash = "0x"+ curTxn.hash.substr(0,4)+"..."+curTxn.hash.substr(curTxn.hash.length-4,curTxn.hash.length)
            curTxn.timestamp = curTxn.timestamp.substr(11,curTxn.timestamp.length)
            curTxn.from = "0x"+ curTxn.from.substr(0,6)+"..."+curTxn.from.substr(curTxn.from.length-6,curTxn.from.length)
            curTxn.to = "0x"+ curTxn.to.substr(0,6)+"..."+curTxn.to.substr(curTxn.to.length-6,curTxn.to.length)
          }
          this.txns = tmpTxns

          // format group
          this.codingGroup = res.latestGroup

          //format tps
          let tmpTps = res.tps
          let len = this.tps.length
          this.tps.push({
            name: tmpTps.timestamp,
            value: [
              tmpTps.timestamp,
              Math.round(tmpTps.tps)
            ],
            show: 1
          })
          if(len+1>=7){
              this.tps=this.tps.slice(1,len+1)
          }
        }
      }, () => {
        // alert('sorry your network is not stable!')
      })
    },
    queryOccupation() {
      let tmpBlock = []
      let tmpBuffer = []
      let tmpParity = []
      let url = ["/api1/", "/api2/", "/api3/", "/api4/", "/api5/", "/api6/"]
      for(let i=0;i<url.length;i++){
        this.$http.post(url[i],"{\"jsonrpc\":\"2.0\",\"method\":\"getStorage\",\"params\":[],\"id\":1}").then(response => {
          if(response.status === 200){
            let res = response.body.result
            let ecStorage = res.ecStorage
            let buffer = parseFloat(res.buffer).toFixed(2)

            for(let j=0;j<ecStorage.length;j++){
               if(j==4){
                 tmpBuffer.push(0)
                 tmpBlock.push(0)
                 tmpParity.push(0)
                 continue;
               }
               let tmpStorage = ecStorage[j]
               tmpBuffer.push(buffer)
               tmpBlock.push(parseFloat(tmpStorage.block).toFixed(2))
               tmpParity.push(parseFloat(tmpStorage.parity).toFixed(2))
            }
            if(i==0){
              let systemStorage = res.systemStorage
              for(let j=0;j<systemStorage.length;j++){
                let ecValue = systemStorage[j].ec

                if(ecValue !== -1){
                  this.ecStorage.push({
                    value: [
                      systemStorage[j].blockId,
                      ecValue
                    ]
                  });
                }

                this.fullStorage.push({
                    // name: this.now.toString(),
                    value: [
                      systemStorage[j].blockId,
                      systemStorage[j].full
                    ]
                });
              }
              this.storageChanged = ! this.storageChanged
            }
           
          }
        }, () => {
          // alert('sorry your network is not stable!')
        })
      }
      this.barBlock = tmpBlock
      this.barBuffer = tmpBuffer
      this.barParity = tmpParity
    },
    queryNodesInfo() {
      let url = ["/api1/", "/api2/", "/api3/", "/api4/", "/api5/", "/api6/"]
      for(let i=0;i<url.length;i++){
        this.$http.post(url[i],"{\"jsonrpc\":\"2.0\",\"method\":\"getChunk\",\"params\":[],\"id\":1}").then(response => {
          if(response.status === 200){
            let res = response.body.result
            switch (i) {
              case 0:
                this.node1Buffer = res.buffer
                this.node1Chunk = res.chunk
                break
              case 1:
                this.node2Buffer = res.buffer
                this.node2Chunk = res.chunk
                break
              case 2:
                this.node3Buffer = res.buffer
                this.node3Chunk = res.chunk
                break
              case 3:
                this.node4Buffer = res.buffer
                this.node4Chunk = res.chunk
                break
              case 5:
                this.node6Buffer = res.buffer
                this.node6Chunk = res.chunk
                break
            }
          }
        }, () => {
          // alert('sorry your network is not stable!')
        })
      }
    }
  },
  watch:{
    radio(newV, oldV){
      // do something, 可使用this
      if(newV === "1s"){
        this.start60s = false
        this.start1s = true
        this.timer = this.simulateInterval1s(this.queryAllInfo, 1000)
      }else if(newV === "60s"){
        this.start1s = false
        this.start60s = true
        this.timer = this.simulateInterval60s(this.queryAllInfo, 6000000)
      }
      console.log(newV,oldV)
    }
  }
}


</script>

<style scoped>
/* .el-dialog__header {
  padding: 0px;
}

.el-dialog__body {
  padding: 10px;
}

.el-radio-button__inner {
  border: 1px solid #8F8F8F;
}

.el-radio-button:first-child .el-radio-button__inner {
  border: 1px solid #8F8F8F;
} */

.blackborder {
  border: 1px solid #8F8F8F;
}

.block {
  padding: 10px 0px;
}

.block1 {
  padding: 20px 0px;
}

.block2 {
  margin-top: 20px;
}

.grid-content {
  /*background-color: rgb(44, 143, 121);*/
  border-radius: 40px;
  min-height: 240px;
  min-width: 100px;
  /*border-color: #8a8a8a;*/
  border-color: #dfdfdf;
  border-width: 2px;
  /*background: -webkit-linear-gradient(bottom,hsla(0,0%,59%,.15),hsla(0,0%,59%,0),white) no-repeat;*/
}

.lay1 {
  width: 100%;
  height: 80px;
}

.lay2 {
  width: 100%;
  height: 80px;
  padding-top: 10px
}

.lay3 {
  width: 100%;
}

.container {
  float: left;
  width: 64px;
  padding-left: 2px;
  font-size: 20px
}

.containerD {
  float: left;
  width: 64px;
  padding-left: 15px;
  font-size: 20px
}

.containerSS {
  float: left;
  width: 64px;
  padding-left: 17px;
  font-size: 20px
}

.containerSP {
  float: left;
  width: 64px;
  padding-left: 70px;
  font-size: 20px
}

.chart-container {
  position: relative;
  width: 100%;
  /*height: 419px;*/
  height: 325px;
}

.chart-container1 {
  position: relative;
  width: 100%;
  /*height: 419px;*/
  height: 270px;
}

.blocknum {
  z-index: 100;
  position: relative;
  float: left;
}

.aline {
  margin-top: 10px;
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

.aline3 {
  margin-top: 0px;
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

.downtext {
  /*padding-left: 14px;*/
  /*text-align:center;*/
  font-size: 18px;
  overflow: hidden
}

.downtextb {
  padding-left: 20px;
  font-size: 18px;
  overflow: hidden
}
</style>