<template>
  <el-row :gutter="10" type="flex" class="row-bg" justify="center">
      <el-col :span="12">
          <el-card class="grid-content">
              <el-form :inline="true" ref="form1" :model="form1" style="text-align: center">
                  <el-form-item>
                      <span style="font-size: 18px;color: #000000;" slot="label">Block_Height:</span>
                      <el-input style="width: 80px" class="queryitem1" v-model="form1.name"></el-input>
                  </el-form-item>
                  <el-form-item>
                      <span style="font-size: 18px;color: #000000" slot="label">From:</span>
                      <el-select class="queryitem2" v-model="form1.value" placeholder="请选择">
                          <el-option
                                  v-for="item in options"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                          </el-option>
                      </el-select>
                  </el-form-item>
                  <el-form-item>
                      <el-button style="float: right;margin-left: 50px;height: 40px" type="primary" @click="queryBlock">Query</el-button>
                  </el-form-item>
              </el-form>

              <el-card style="height: 720px;" >
                  <el-card style="width: 130px;height: 30px;background-color: #CFCFCF" :body-style="{ padding: '2px' }"><h4 style="float: left;margin: 3px">READ RESULT:</h4></el-card>
                <!--this is first query start-->
<!--                                      <div style="font-size: 19px;color: black">-->
<!--                                        <div style="display: inline;width: 100%;float: left">-->
<!--                                            <div style="float: left;padding-top: 10px">-->
<!--                                                <span style="color: blue">[INFO]</span>-->
<!--                                                send request to-->
<!--                                                <span style="color: red">Node1</span>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                        <div style="display: inline;width: 100%;float: left">-->
<!--                                            <div style="float: left;padding-top: 20px">-->
<!--                                                <span style="color: blue">[INFO]</span>-->
<!--                                                <span style="color: red">Node1</span>-->
<!--                                                receives request for-->
<!--                                            </div>-->
<!--                                            <div class="container">-->
<!--                                                <query-svg-icon icon-class="square_black" text-string="136"/>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                        <div style="display: inline;width: 100%;float: left">-->
<!--                                            <div style="float: left;padding-top: 20px">-->
<!--                                                <span style="color: blue">[INFO]</span>-->
<!--                                                <span style="color: red">Node1</span>-->
<!--                                                reads-->
<!--                                            </div>-->
<!--                                            <div class="container">-->
<!--                                              <query-svg-icon icon-class="square_black" text-string="136"/>-->
<!--                                            </div>-->
<!--                                            <div style="float: left;padding-top: 20px;padding-left: 55px">locally</div>-->
<!--                                        </div>-->
<!--                                        <div style="display: inline;width: 100%;float: left">-->
<!--                                            <div style="float: left;padding-top: 20px">-->
<!--                                                <span style="color: blue">[INFO]</span>-->
<!--                                                receive-->
<!--                                            </div>-->
<!--                                            <div class="container">-->
<!--                                                <query-svg-icon icon-class="square_black" text-string="136"/>-->
<!--                                            </div>-->
<!--                                            <div style="float: left;padding-top: 20px;padding-left: 55px">from <span style="color: red">Node1</span> (latency: 22.81 ms)</div>-->
<!--                                        </div>-->
<!--                                        </div>-->
                <!--this is first query end-->

                <!--this is second query start-->
<!--                                        <div style="font-size: 19px;color: black">-->
<!--                                        <div style="display: inline;width: 100%;float: left">-->
<!--                                            <div style="float: left;padding-top: 10px">-->
<!--                                                <span style="color: blue">[INFO]</span>-->
<!--                                                send request to-->
<!--                                                <span style="color: blueviolet">Node3</span>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                        <div style="display: inline;width: 100%;float: left">-->
<!--                                            <div style="float: left;padding-top: 20px">-->
<!--                                                <span style="color: blue">[INFO]</span>-->
<!--                                                <span style="color: blueviolet">Node3</span>-->
<!--                                                receives request for-->
<!--                                            </div>-->
<!--                                            <div class="container">-->
<!--                                                <query-svg-icon icon-class="square_black" text-string="124"/>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                        <div style="display: inline;width: 100%;float: left">-->
<!--                                            <div style="float: left;padding-top: 20px">-->
<!--                                                <span style="color: blue">[INFO]</span>-->
<!--                                                <span style="color: blueviolet">Node3</span>-->
<!--                                                sends request to-->
<!--                                                <span style="color: peru">Node4</span>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                        <div style="display: inline;width: 100%;float: left">-->
<!--                                            <div style="float: left;padding-top: 20px">-->
<!--                                                <span style="color: blue">[INFO]</span>-->
<!--                                                <span style="color: blueviolet">Node3</span>-->
<!--                                                receive-->
<!--                                            </div>-->
<!--                                            <div class="container">-->
<!--                                                <query-svg-icon icon-class="square_black" text-string="124"/>-->
<!--                                            </div>-->
<!--                                            <div style="float: left;padding-top: 20px;padding-left: 55px">from  <span style="color: peru">Node4</span></div>-->
<!--                                        </div>-->
<!--                                        <div style="display: inline;width: 100%;float: left">-->
<!--                                            <div style="float: left;padding-top: 20px">-->
<!--                                                <span style="color: blue">[INFO]</span>-->
<!--                                                receive-->
<!--                                            </div>-->
<!--                                            <div class="container">-->
<!--                                                <query-svg-icon icon-class="square_black" text-string="124"/>-->
<!--                                            </div>-->
<!--                                            <div style="float: left;padding-top: 20px;padding-left: 55px">from <span style="color: blueviolet">Node3</span> (latency: 37.85 ms)</div>-->
<!--                                        </div>-->
<!--                                        </div>-->
                <!--this is second query end-->

                <!--this is third query start-->
                  <div style="font-size:19px;color:black">
                    <div style="display: inline;width: 100%;float: left">
                        <div style="float: left;padding-top: 10px">
                            <span style="color: blue">[INFO]</span>
                            send request to
                            <span style="color: red">Node1</span>
                        </div>
                    </div>
                    <div style="display: inline;width: 100%;float: left">
                        <div style="float: left;padding-top: 20px">
                            <span style="color: blue">[INFO]</span>
                            <span style="color: red">Node1</span>
                            receives request for
                        </div>
                        <div class="container">
                            <query-svg-icon icon-class="square_black" text-string="127"/>
                        </div>
                    </div>
                    <div style="display: inline;width: 100%;float: left">
                        <div style="float: left;padding-top: 20px">
                            <span style="color: blue">[INFO]</span>
                            <span style="color: red">Node1</span>
                            sends request to
                            <span style="color: green">Node5</span>
                        </div>
                    </div>
                    <div style="display: inline;width: 100%;float: left">
                        <div style="float: left;padding-top: 20px">
                            <span style="color: blue">[INFO]</span>
                            timeout: 50ms...
                            <span style="color: red">Node1</span>
                            broadcasts request
                        </div>
                    </div>
                    <div style="display: inline;width: 100%;float: left">
                        <div style="float: left;padding-top: 20px">
                            <span style="color: blue">[INFO]</span>
                            <span style="color: red">Node1</span>
                            receive
                        </div>
                        <div class="container">
                        <my-svg-icon icon-class="square_blue_2" text-string="64"/>
                    </div>
                        <div style="float: left;padding-top: 20px;padding-left: 53px">from  <span style="color: darkcyan">Node2</span>,</div>
                        <div class="container">
                            <query-svg-icon icon-class="square_black" text-string="126"/>
                        </div>
                        <div style="float: left;padding-top: 20px;padding-left: 53px">from  <span style="color: peru">Node4</span>,</div>
                        <div class="container">
                            <query-svg-icon icon-class="square_black" text-string="128"/>
                        </div>
                        <div style="float: left;padding-top: 20px;padding-left: 53px">from  <span style="color: violet">Node6</span></div>
                    </div>
                    <div style="display: inline;width: 100%;float: left">
                        <div style="float: left;padding-top: 20px">
                            <span style="color: blue">[INFO]</span>
                            <span style="color: red">Node1</span>
                            recovers
                        </div>
                        <div class="container">
                            <query-svg-icon icon-class="square_black" text-string="127"/>
                        </div>
                        <div class="container" style="padding-left: 50px">
                            <array-svg-icon icon-class="arrow_left"/>
<!--                                          <span style="font-size:12px;overflow: hidden;>Decode</span>-->
                        </div>
                        <div class="container" style="padding-left: 100px">
                            <my-svg-icon icon-class="square_blue_2" text-string="63"/>
                        </div>
                      <div class="container" style="padding-left: 150px">
                            <my-svg-icon icon-class="square_blue_2" text-string="64"/>
                      </div>
                        <div class="container" style="padding-left: 200px">
                            <query-svg-icon icon-class="square_black" text-string="126"/>
                        </div>
                          <div class="container" style="padding-left: 250px">
                            <query-svg-icon icon-class="square_black" text-string="128"/>
                        </div>
                    </div>
                    <div style="display: inline;width: 100%;float: left">
                        <div style="float: left;padding-top: 20px">
                            <span style="color: blue">[INFO]</span>
                            receive
                        </div>
                        <div class="container">
                            <query-svg-icon icon-class="square_black" text-string="127"/>
                        </div>
                        <div style="float: left;padding-top: 20px;padding-left: 53px">from <span style="color: red">Node1</span> (latency: 152.41ms)</div>
                    </div>
                  </div>
                <!--this is third query end-->
                  <div style="display: inline;width: 100%;float: left;padding-top: 15px">
                      <el-card style="width: 120px;height: 30px;background-color: #CFCFCF" :body-style="{ padding: '2px' }"><h4 style="float: left;margin: 3px">BLOCK INFO:</h4></el-card>
                      <!--<span style="text-decoration:underline;font-size:25px;float: left;margin: 3px">BLOCK INFO:</span>-->
                  </div>
                  <div style="width:600px;float: left;text-align: left;">
                      <!--<el-scrollbar style="height: 100%;" :native="true">-->
                      <div style="padding-top: 5px"></div>
                      <pre style="margin: 0px;font-size: 19px;color: black">{{this.jsonvalue}}</pre>
                      <!--</el-scrollbar>-->
                      <div style="padding-top: 5px"></div>
                  </div>
                  <div style="display: inline;width: 100%;float: left">
                      <!--<el-card style="width: 162px"><div style="float: left;font-weight: bold;padding-top: 5px"> Transactions Detail:</div></el-card>-->
                      <el-card style="width: 210px;height: 30px;background-color: #CFCFCF" :body-style="{ padding: '2px' }"><h4 style="float: left;margin: 3px">TRANSACTIONS DETAIL:</h4></el-card>
                      <!--<span style="text-decoration:underline;font-size:25px;float: left;margin: 3px">TRANSACTIONS DETAIL:</span>-->
                  </div>
                  <div style="height: 300px;width: 100%;float: right">
                      <el-scrollbar style="height: 100%;">
                      <!--<happy-scroll color="rgba(0,0,0,0.5)" size="5">-->
                          <el-table
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
                                      <a target="_blank" :href="`https://kylin.bloks.io/block/${140}`">{{scope.row.height}}</a>
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
                      <!--</happy-scroll>-->
                      </el-scrollbar>
                  </div>
              </el-card>
          </el-card>
      </el-col>
      <!--<el-col :span="12">-->
          <!--<el-card class="grid-content">-->
              <!--<el-form :inline="true" ref="form2" :model="form2">-->
                  <!--<el-form-item label="Block_Height:">-->
                      <!--<el-input style="width: 80px" class="queryitem1" v-model="form2.name"></el-input>-->
                  <!--</el-form-item>-->
                  <!--<el-form-item label="From:">-->
                      <!--<el-select class="queryitem2" v-model="form2.value" placeholder="请选择">-->
                          <!--<el-option-->
                                  <!--v-for="item in options"-->
                                  <!--:key="item.value"-->
                                  <!--:label="item.label"-->
                                  <!--:value="item.value">-->
                          <!--</el-option>-->
                      <!--</el-select>-->
                  <!--</el-form-item>-->
                  <!--<el-form-item>-->
                      <!--<el-button style="float: right;margin-left: 50px" type="primary" @click="onSubmit">query</el-button>-->
                  <!--</el-form-item>-->
              <!--</el-form>-->
              <!--<el-card style="height: 1050px">-->
                  <!--<h4 style="float: left">QUERY RESULT:</h4>-->
                  <!--<br><br><br>-->
                  <!--<div>-->
                      <!--<p style="text-align: left"><span style="color: blue">[INFO]</span> send request to <span-->
                              <!--style="color: red">Node3</span></p>-->
                  <!--</div>-->
                  <!--<div style="display: inline;width: 100%">-->
                      <!--<div style="float: left;padding-top: 20px">-->
                          <!--<span style="color: blue">[INFO]</span>-->
                          <!--<span style="color: red">Node3</span>-->
                          <!--receives request for-->
                      <!--</div>-->
                      <!--<div class="container">-->
                          <!--<svg-icon icon-class="square_black" text-string="124"/>-->
                      <!--</div>-->
                  <!--</div>-->
                  <!--<div style="display: inline;width: 100%;float: left">-->
                      <!--<div style="float: left;padding-top: 20px">-->
                          <!--<span style="color: blue">[INFO]</span>-->
                          <!--<span style="color: red">Node3</span>-->
                          <!--sends request to-->
                          <!--<span style="color: peru">Node4</span>-->
                      <!--</div>-->
                      <!--<div class="container">-->
                          <!--<svg-icon icon-class="square_white"/>-->
                          <!--<span style="font-size:10px;overflow: hidden;color: white">block124</span>-->
                      <!--</div>-->
                  <!--</div>-->
                  <!--<div style="display: inline;width: 100%;float: left">-->
                      <!--<div style="float: left;padding-top: 20px">-->
                          <!--<span style="color: blue">[INFO]</span>-->
                          <!--<span style="color: red">Node3</span>-->
                          <!--receives-->
                      <!--</div>-->
                      <!--<div class="container">-->
                          <!--<svg-icon icon-class="square_black" text-string="124"/>-->
                      <!--</div>-->
                      <!--<div style="float: left;padding-top: 20px;">from <span style="color: peru">Node4</span></div>-->
                  <!--</div>-->
                  <!--<div style="display: inline;width: 100%;float: left">-->
                      <!--<div style="float: left;padding-top: 20px">-->
                          <!--<span style="color: blue">[INFO]</span>-->
                          <!--receive-->
                      <!--</div>-->
                      <!--<div class="container">-->
                          <!--<svg-icon icon-class="square_black" text-string="124"/>-->
                      <!--</div>-->
                      <!--<div style="float: left;padding-top: 20px;">from <span style="color: red">Node3</span></div>-->
                  <!--</div>-->
                  <!--<div style="display: inline;width: 100%;float: left">-->
                      <!--<div style="float: left;padding-top: 20px">-->
                          <!--<span style="color: blue">[INFO]</span>-->
                          <!--latency: 30.45 ms-->
                      <!--</div>-->
                  <!--</div>-->
                  <!--<div style="display: inline;width: 100%;float: left">-->
                      <!--<div class="container">-->
                          <!--<svg-icon icon-class="square_black" text-string="124"/>-->
                      <!--</div>-->
                      <!--<div style="float: left;padding-top: 20px;">Block Info:</div>-->
                  <!--</div>-->
                  <!--<div style="width:400px;height: 135px;float: left;text-align: left;">-->
                      <!--&lt;!&ndash;<el-scrollbar style="height: 100%;" :native="true">&ndash;&gt;-->
                      <!--<pre>{{this.jsonvalue}}</pre>-->
                      <!--&lt;!&ndash;</el-scrollbar>&ndash;&gt;-->
                  <!--</div>-->
                  <!--<div style="display: inline;width: 100%;float: left">-->
                      <!--<div class="container">-->
                          <!--<svg-icon icon-class="square_black" text-string="124"/>-->
                      <!--</div>-->
                      <!--<div style="float: left;padding-top: 20px;"> transactions detail:</div>-->
                  <!--</div>-->
                  <!--<div style="height: 570px;">-->
                      <!--&lt;!&ndash;<el-scrollbar style="height: 100%;" :native="true">&ndash;&gt;-->
                      <!--<happy-scroll color="rgba(0,0,0,0.5)" size="5">-->
                          <!--<el-table-->
                                  <!--:data="tableData"-->
                                  <!--style="width: 100%"-->
                                  <!--:header-cell-style="{color:'#000000'}">-->
                              <!--<el-table-column-->
                                      <!--prop="hash"-->
                                      <!--label="TX"-->
                                      <!--width="70"-->
                                      <!--align="center"-->
                                      <!--:formatter="formatTX">-->
                              <!--</el-table-column>-->
                              <!--<el-table-column-->
                                      <!--prop="hash"-->
                                      <!--label="BlockHeight"-->
                                      <!--width="65"-->
                                      <!--align="center"-->
                              <!--&gt;-->
                                  <!--<template slot-scope="scope">-->
                                      <!--<a target="_blank" :href="`https://kylin.bloks.io/block/${140}`">{{scope.row.height}}</a>-->
                                  <!--</template>-->
                              <!--</el-table-column>-->

                              <!--<el-table-column-->
                                      <!--prop="sender"-->
                                      <!--label="Sender"-->
                                      <!--align="center"-->
                                      <!--:formatter="formatSender">-->
                              <!--</el-table-column>-->
                              <!--<el-table-column-->
                                      <!--prop="receiver"-->
                                      <!--label="Receiver"-->
                                      <!--align="center"-->
                                      <!--:formatter="formatReceiver">-->
                              <!--</el-table-column>-->
                              <!--<el-table-column-->
                                      <!--prop="quantity"-->
                                      <!--label="Quantity"-->
                                      <!--align="center"-->
                                      <!--:formatter="formatQuantity">-->
                              <!--</el-table-column>-->
                          <!--</el-table>-->
                      <!--</happy-scroll>-->
                      <!--&lt;!&ndash;</el-scrollbar>&ndash;&gt;-->
                  <!--</div>-->

              <!--</el-card>-->
          <!--</el-card>-->
      <!--</el-col>-->
      <!--<el-col :span="12">-->
          <!--<el-card class="grid-content">-->
              <!--<el-form :inline="true" ref="form3" :model="form3">-->
                  <!--<el-form-item label="Block_Height:">-->
                      <!--<el-input style="width: 80px" class="queryitem1" v-model="form3.name"></el-input>-->
                  <!--</el-form-item>-->
                  <!--<el-form-item label="From:">-->
                      <!--<el-select class="queryitem2" v-model="form3.value" placeholder="请选择">-->
                          <!--<el-option-->
                                  <!--v-for="item in options"-->
                                  <!--:key="item.value"-->
                                  <!--:label="item.label"-->
                                  <!--:value="item.value">-->
                          <!--</el-option>-->
                      <!--</el-select>-->
                  <!--</el-form-item>-->
                  <!--<el-form-item>-->
                      <!--<el-button style="float: right;margin-left: 50px" type="primary" @click="onSubmit">query</el-button>-->
                  <!--</el-form-item>-->
              <!--</el-form>-->
              <!--<el-card style="height: 1050px">-->
                  <!--<h4 style="float: left">QUERY RESULT:</h4>-->
                  <!--<br><br><br>-->
                  <!--<div>-->
                      <!--<p style="text-align: left"><span style="color: blue">[INFO]</span> send request to <span-->
                              <!--style="color: red">Node1</span></p>-->
                  <!--</div>-->
                  <!--<div style="display: inline;width: 100%">-->
                      <!--<div style="float: left;padding-top: 20px">-->
                          <!--<span style="color: blue">[INFO]</span>-->
                          <!--<span style="color: red">Node1</span>-->
                          <!--receives request for-->
                      <!--</div>-->
                      <!--<div class="container">-->
                          <!--<svg-icon icon-class="square_black" text-string="124"/>-->
                      <!--</div>-->
                  <!--</div>-->
                  <!--<div style="display: inline;width: 100%;float: left">-->
                      <!--<div style="float: left;padding-top: 20px">-->
                          <!--<span style="color: blue">[INFO]</span>-->
                          <!--<span style="color: red">Node1</span>-->
                          <!--sends request to-->
                          <!--<span style="color: green">Node5</span>-->
                      <!--</div>-->
                      <!--<div class="container">-->
                          <!--<svg-icon icon-class="square_white"/>-->
                          <!--<span style="font-size:10px;overflow: hidden;color: white">block124</span>-->
                      <!--</div>-->
                  <!--</div>-->
                  <!--<div style="display: inline;width: 100%;float: left">-->
                      <!--<div style="float: left;padding-top: 20px">-->
                          <!--<span style="color: blue">[INFO]</span>-->
                          <!--timeout,-->
                          <!--<span style="color: red">Node1</span>-->
                          <!--broadcasts request-->
                      <!--</div>-->
                      <!--<div class="container">-->
                          <!--<svg-icon icon-class="square_white"/>-->
                          <!--<span style="font-size:10px;overflow: hidden;color: white">block124</span>-->
                      <!--</div>-->
                  <!--</div>-->
                  <!--<div style="display: inline;width: 100%;float: left">-->
                      <!--<div style="float: left;padding-top: 20px">-->
                          <!--<span style="color: blue">[INFO]</span>-->
                          <!--<span style="color: red">Node1</span>-->
                          <!--receives-->
                      <!--</div>-->
                      <!--<div class="container">-->
                          <!--<my-svg-icon icon-class="square_blue" text-string="64"/>-->
                      <!--</div>-->
                      <!--<div class="container">-->
                          <!--<svg-icon icon-class="square_black" text-string="126"/>-->
                      <!--</div>-->
                      <!--<div class="container">-->
                          <!--<svg-icon icon-class="square_black" text-string="128"/>-->
                      <!--</div>-->
                  <!--</div>-->
                  <!--<div style="display: inline;width: 100%;float: left">-->
                      <!--<div style="float: left;padding-top: 20px">-->
                          <!--<span style="color: blue">[INFO]</span>-->
                          <!--<span style="color: red">Node1</span>-->
                          <!--recovers-->
                      <!--</div>-->
                      <!--<div class="container">-->
                          <!--<svg-icon icon-class="square_black" text-string="127"/>-->
                      <!--</div>-->
                      <!--<div style="float: left;padding-top: 20px;">based on</div>-->
                      <!--<div style="padding-left: 2px;width: 49px;float: left">-->
                          <!--<my-svg-icon icon-class="square_blue" text-string="63"/>-->
                      <!--</div>-->
                      <!--<div style="padding-left: 2px;width: 49px;float: left">-->
                          <!--<my-svg-icon icon-class="square_blue" text-string="64"/>-->
                      <!--</div>-->
                      <!--<div style="padding-left: 2px;width: 49px;float: left">-->
                          <!--<svg-icon icon-class="square_black" text-string="126"/>-->
                      <!--</div>-->
                      <!--<div style="padding-left: 2px;width: 49px;float: left">-->
                          <!--<svg-icon icon-class="square_black" text-string="128"/>-->
                      <!--</div>-->
                  <!--</div>-->
                  <!--<div style="display: inline;width: 100%;float: left">-->
                      <!--<div style="float: left;padding-top: 20px">-->
                          <!--<span style="color: blue">[INFO]</span>-->
                          <!--receive-->
                      <!--</div>-->
                      <!--<div class="container">-->
                          <!--<svg-icon icon-class="square_black" text-string="127"/>-->
                      <!--</div>-->
                      <!--<div style="float: left;padding-top: 20px;">from <span style="color: red">Node1</span></div>-->
                  <!--</div>-->
                  <!--<div style="display: inline;width: 100%;float: left">-->
                      <!--<div style="float: left;padding-top: 20px">-->
                          <!--<span style="color: blue">[INFO]</span>-->
                          <!--latency: 91.80 ms-->
                      <!--</div>-->
                  <!--</div>-->
                  <!--<div style="display: inline;width: 100%;float: left">-->
                      <!--<div class="container">-->
                          <!--<svg-icon icon-class="square_black" text-string="127"/>-->
                      <!--</div>-->
                      <!--<div style="float: left;padding-top: 20px;">BLock Info:</div>-->
                  <!--</div>-->
                  <!--<div style="width:400px;height: 135px;float: left;text-align: left;">-->
                      <!--&lt;!&ndash;<el-scrollbar style="height: 100%;" :native="true">&ndash;&gt;-->
                      <!--<pre>{{this.jsonvalue}}</pre>-->
                      <!--&lt;!&ndash;</el-scrollbar>&ndash;&gt;-->
                  <!--</div>-->
                  <!--<div style="display: inline;width: 100%;float: left">-->
                      <!--<div class="container">-->
                          <!--<svg-icon icon-class="square_black" text-string="127"/>-->
                      <!--</div>-->
                      <!--<div style="float: left;padding-top: 20px;"> transactions detail:</div>-->
                  <!--</div>-->
                  <!--<div style="height: 570px;">-->
                      <!--&lt;!&ndash;<el-scrollbar style="height: 100%;" :native="true">&ndash;&gt;-->
                      <!--<happy-scroll color="rgba(0,0,0,0.5)" size="5">-->
                          <!--<el-table-->
                                  <!--:data="tableData"-->
                                  <!--style="width: 100%"-->
                                  <!--:header-cell-style="{color:'#000000'}">-->
                              <!--<el-table-column-->
                                      <!--prop="hash"-->
                                      <!--label="TX"-->
                                      <!--width="70"-->
                                      <!--align="center"-->
                                      <!--:formatter="formatTX">-->
                              <!--</el-table-column>-->
                              <!--<el-table-column-->
                                      <!--prop="hash"-->
                                      <!--label="BlockHeight"-->
                                      <!--width="65"-->
                                      <!--align="center"-->
                              <!--&gt;-->
                                  <!--<template slot-scope="scope">-->
                                      <!--<a target="_blank" :href="`https://kylin.bloks.io/block/${140}`">{{scope.row.height}}</a>-->
                                  <!--</template>-->
                              <!--</el-table-column>-->

                              <!--<el-table-column-->
                                      <!--prop="sender"-->
                                      <!--label="Sender"-->
                                      <!--align="center"-->
                                      <!--:formatter="formatSender">-->
                              <!--</el-table-column>-->
                              <!--<el-table-column-->
                                      <!--prop="receiver"-->
                                      <!--label="Receiver"-->
                                      <!--align="center"-->
                                      <!--:formatter="formatReceiver">-->
                              <!--</el-table-column>-->
                              <!--<el-table-column-->
                                      <!--prop="quantity"-->
                                      <!--label="Quantity"-->
                                      <!--align="center"-->
                                      <!--:formatter="formatQuantity">-->
                              <!--</el-table-column>-->
                          <!--</el-table>-->
                      <!--</happy-scroll>-->
                      <!--&lt;!&ndash;</el-scrollbar>&ndash;&gt;-->
                  <!--</div>-->
              <!--</el-card>-->
          <!--</el-card>-->
      <!--</el-col>-->
  </el-row>
<!--  </el-container>-->
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
        name: "QueryBlock",
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
                form3: {
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
                    value: '/api1/',
                    label: 'Node1'
                }, {
                    value: '/api2/',
                    label: 'Node2'
                }, {
                    value: '/api3/',
                    label: 'Node3'
                }, {
                    value: '/api4/',
                    label: 'Node4'
                }, {
                    value: '/api5/',
                    label: 'Node5'
                }, {
                    value: '/api6/',
                    label: 'Node6'
                }],
                value: '',
                radio:1,
                jsonvalue: JSON.parse(jsonData),
                tableData: []
            }
        },
        mounted() {
            this.refresh()
        },
        methods: {
            formatTX: function(row, column) {
                return row.hash.substr(0,6)+'......'+row.hash.substr(56,66)
            },
            formatReceiver: function(row, column) {
                return row.receiver.substr(0,10)+'......'+row.receiver.substr(row.receiver.length-10,row.receiver.length)
            },
            formatSender: function(row, column) {
                return row.sender.substr(0,6)+'......'+row.sender.substr(row.sender.length-10,row.sender.length)
            },
            formatTime: function(row, column) {
                return row.time.substr(0,8)
            },
            formatQuantity: function(row, column) {
                return row.quantity
            },
            refresh() {
                for (var i = 0; i < 10; i++) {
                    this.tableData.unshift(
                        {
                            height: 127,
                            hash: '0x3d85ead403864524ed2b9df99c131edb58be1762170aca4c9b7c1563c669b53d',
                            //time: formatDateMill(new Date(new Date().getTime() + 2000)),
                            //size: 0.96 + ' MB'
                            sender: '0x159b7395c44c37034c51a5072eba811abed1c36f',
                            receiver: '0xc97a4ed29f03fd549c4ae79086673523122d2bc5',
                            quantity: '2021-01-13 21:33:14'
                        }, {
                            height: 127,
                            hash: '0x5955bd104fd178ae4bd1d29420f5370ce7f7a4ec34da5b76f48d4189d73b4c5e',
                            sender: '0xc3aae58ab81663872dd36d73613eb295b167f546',
                            receiver: '0xc97a4ed29f03fd549c4ae79086673523122d2bc5',
                            quantity: '2021-01-13 21:33:14'
                            //time: formatDateMill(new Date(new Date().getTime() + 1000)),
                            //size: 1.2 + ' MB'
                        }, {
                            height: 127,
                            hash: '0x1e35a4c501eb8476d74a5b211246c328b3ee2f2fb5064c5b79feca92e75988e9',
                            sender: '0x95c98112bd9635a3159518401ae227d5a296e994',
                            receiver: '0xdac17f958d2ee523a2206206994597c13d831ec7',
                            quantity: '2021-01-13 21:33:14'
                            //time: formatDateMill(new Date(new Date().getTime())),
                            //size: 0.98 + ' MB'
                        },
                        // {
                        //     height: 136,
                        //     hash: '0x9de3373ff21528cab41f7bd6421fc4f64c4bb47ad552eabf297deafc3bb073f1',
                        //     //time: formatDateMill(new Date(new Date().getTime() + 2000)),
                        //     //size: 0.96 + ' MB'
                        //     sender: '0xab5c66752a9e8167967685f1450532fb96d5d24f',
                        //     receiver: '0xc97a4ed29f03fd549c4ae79086673523122d2bc5',
                        //     quantity: '2021-01-13 21:33:20'
                        // }, {
                        //     height: 136,
                        //     hash: '0x0c25d5eb016d288d89ac950a520d31347308ce01cf8e7b987c1e555a53f6cf50',
                        //     sender: '0xdac17f958d2ee523a2206206994597c13d831ec7',
                        //     receiver: '0xc97a4ed29f03fd549c4ae79086673523122d2bc5',
                        //     quantity: '2021-01-13 21:33:20'
                        //     //time: formatDateMill(new Date(new Date().getTime() + 1000)),
                        //     //size: 1.2 + ' MB'
                        // }, {
                        //     height: 136,
                        //     hash: '0xe37ccf8d4fd1b71cedc021d910dc8d56e97faf8fdb0c9092f154032b4ee8ab93',
                        //     sender: '0x6f48a3e70f0251d1e83a989e62aaa2281a6d5380',
                        //     receiver: '0xdac17f958d2ee523a2206206994597c13d831ec7',
                        //     quantity: '2021-01-13 21:33:20'
                        //     //time: formatDateMill(new Date(new Date().getTime())),
                        //     //size: 0.98 + ' MB'
                        // },
                        // {
                        //     height: 124,
                        //     hash: '0x4ece195830583162427e770a8c07229ee70fe7acfd03bdadbdb703f8ac9f5b5d',
                        //     //time: formatDateMill(new Date(new Date().getTime() + 2000)),
                        //     //size: 0.96 + ' MB'
                        //     sender: '0x2b5634c42055806a59e9107ed44d43c426e58258',
                        //     receiver: '0xc97a4ed29f03fd549c4ae79086673523122d2bc5',
                        //     quantity: '2021-01-13 21:33:13'
                        // }, {
                        //     height: 124,
                        //     hash: '0xada4cd00bf7a7d3b10ac61fa3a8c27d994319c4c3c6869d0de0f18261ba37e50',
                        //     sender: '0x6b175474e89094c44da98b954eedeac495271d0f',
                        //     receiver: '0xc97a4ed29f03fd549c4ae79086673523122d2bc5',
                        //     quantity: '2021-01-13 21:33:13'
                        //     //time: formatDateMill(new Date(new Date().getTime() + 1000)),
                        //     //size: 1.2 + ' MB'
                        // }, {
                        //     height: 124,
                        //     hash: '0x5a7bb63df53ca69541551aa8fb04bdf01acdc5020ab4da394d2b531d199fe8ea',
                        //     sender: '0x2b5634c42055806a59e9107ed44d43c426e58258',
                        //     receiver: '0xdac17f958d2ee523a2206206994597c13d831ec7',
                        //     quantity: '2021-01-13 21:33:13'
                        //     //time: formatDateMill(new Date(new Date().getTime())),
                        //     //size: 0.98 + ' MB'
                        // },
                    );
                }
                // this.data.splice(3, this.data.length);
            },
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
        border-width:2px;
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

    .queryitem1{
        width: 199px;
    }
    .queryitem2{
        width: 90px;
    }
    .editor-container{
        position: relative;
        height: 100%;
    }
</style>