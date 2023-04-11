<template>
    <div>
        <div style="height: 170px;">
            <el-scrollbar style="height: 100%;" :native="true">
                <el-table
                        :data="tableData"
                        style="width: 95%;font-size: 17px"
                        :header-cell-style="{color:'#000000'}">
                    <el-table-column
                            prop="height"
                            label="BlockNumber"
                            width="180"
                            align="center">
                        <template slot-scope="scope">
                            <a target="_blank" :href="`https://kylin.bloks.io/block/${140}`">{{scope.row.height}}</a>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="hash"
                            label="BlockHash"
                            width="130"
                            align="center"
                            :formatter="formatHash">
                    </el-table-column>
                    <el-table-column
                            prop="size"
                            label="BlockSize"
                            align="center"
                            :formatter="formatBlockSize">
                    </el-table-column>
                    <el-table-column
                            prop="time"
                            label="Time"
                            align="center"
                            :formatter="formatTime">
                    </el-table-column>
                </el-table>
            </el-scrollbar>
        </div>
        <!--<ul>-->
        <!--<li class="mytitle">-->
        <!--<p style="text-align: center">Block_Height</p>-->
        <!--<p style="text-align: center">Block_Hash</p>-->
        <!--<p style="text-align: center">Block_Size</p>-->
        <!--<p style="text-align: center">Time</p>-->
        <!--</li>-->
        <!--<div class="myli" v-for="(x,item) in data" :key="item">-->
        <!--<li style="list-style: none;"><a target="_blank" :href="`https://kylin.bloks.io/block/${x.num}`">{{x.num}}</a>-->
        <!--</li>-->
        <!--<li style="list-style: none;"><span style="position: relative;-->
        <!--margin: 0;overflow: hidden;">-->
        <!--<i style="-->
        <!--overflow: hidden;-->
        <!--font-style: normal;">{{x.id.substr(0,10)+'......'+x.id.substr(56,66)}}</i>-->
        <!--</span></li>-->
        <!--<li style="list-style: none;">{{x.blocksize}}</li>-->
        <!--<li style="list-style: none;"><span>{{x.time.substr(0,8)}}</span></li>-->
        <!--</div>-->
        <!--</ul>-->
    </div>
</template>

<script>
    import {formatDateMill, formatDateMillSelf} from '~/assets/common'

    export default {
        name: 'LatestBlock',
        data: () => ({
            data: [], count: 93655490, tableData: []
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
            this.refresh()
        },
        methods: {
            formatHash: function(row, column) {
                return row.hash.substr(0,10)+'......'+row.hash.substr(58,66)
            },
            formatBlockSize: function(row, column) {
                return row.size
            },
            formatTime: function(row, column) {
                return row.time.substr(0,8)
            },
            refresh() {
                for (var i = 0; i < 5; i++) {
                    this.tableData.unshift({
                            height: 10100,
                            hash: '0x1d7cb4a4c5a4f3fc97efb462a205a29f72f4043c3c6def46c06bd0b93y3517a0',
                            time: '21:33:24',
                            size: 0.96 + ' MB'
                        }, {
                            height: 10099,
                            hash: '0xa5913c656e2f5635f4681dda9ca77edfe8b6d1f02bff3aea1fdae06a379b39fb',
                            time: '21:33:23',
                            size: 1.2 + ' MB'
                        }, {
                            height: 10098,
                            hash: '0x39aec83df1dfded8851c83bda1ca2e586c2e21815q1bffeddb61f3658255444f',
                            time: '21:33:22',
                            size: 0.98 + ' MB'
                        },
                    );
                }
                // this.data.splice(3, this.data.length);
            }
        },
        props: ['innerWidth']
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

    /*.el-scrollbar__wrap {*/
    /*overflow-y: hidden;*/
    /*}*/
</style>
