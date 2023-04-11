<template>
  <div>
    <el-card style="width: 330px;height: 480px; border-color: #8a8a8a;
        border-width:2px;">
      <div style="width: 100%">
        <h3>Send Transactions</h3>
      </div>
      <el-form :model="form" size="mini" style="padding-top: 5px">
        <el-form-item style="padding-top: 3px" label="To Node" :label-width="formLabelWidth" required>
          <el-select v-model="form.region" placeholder="">
            <el-option label="Node_1" value="1"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item style="padding-top: 3px" label="Tx Type" :label-width="formLabelWidth" required>
          <el-select v-model="form.region" placeholder="">
            <el-option label="Invoke Contract" value="1"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item style="padding-top: 3px" label="Sender"  :label-width="formLabelWidth" required>
          <el-select v-model="form.region" placeholder="">
            <el-option label="0x2b92d09ea59a68c427b4fd24b4bfe78bdbac21d" value="1"></el-option>
          </el-select>
        </el-form-item>


        <el-form-item style="padding-top: 3px" label="To Contract" :label-width="formLabelWidth" >
          <el-select v-model="form.region" placeholder="choose contract">
            <el-option label="SmallBank" value="1"></el-option>
<!--            <el-option label="SmallBank" value="2"></el-option>-->
          </el-select>
        </el-form-item>

        <el-form-item style="padding-top: 3px" label="Function" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="select function">
            <el-option label="Transfer" value="1"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item style="padding-top: 3px" label="Memo" :label-width="formLabelWidth">
          <el-input style="width: 179px" v-model="form.name" placeholder="A Memo to attach"></el-input>
        </el-form-item>

        <el-form-item style="padding-top: 3px" label="Batch Size" :label-width="formLabelWidth" required>
          <el-checkbox-group v-model="form.type" >
            <el-checkbox-button label="1" name="type"></el-checkbox-button>
            <el-checkbox-button label="50" name="type"></el-checkbox-button>
            <el-checkbox-button label="100" name="type"></el-checkbox-button>
            <el-checkbox-button label="1000" name="type"></el-checkbox-button>
            <!--<el-checkbox-button label="500" name="type"></el-checkbox-button>-->
            <!--<el-checkbox-button label="1000" name="type"></el-checkbox-button>-->
          </el-checkbox-group>
        </el-form-item>
        <el-form-item style="padding-left: 60px;padding-top: 3px">
          <el-button size="medium" type="primary" @click="onSubmit">Send</el-button>
          <el-button size="medium" >Cancel</el-button>
        </el-form-item>


      </el-form>
      <!--<div slot="footer">-->
      <!--<el-button @click="dialogFormVisible = false">Cancel</el-button>-->
      <!--<el-button type="primary" @click="dialogFormVisible = false">Submit</el-button>-->
      <!--</div>-->
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: true,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '100px',
      formLabelWidth2: '150px'
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>
<!--tableData: [{-->
<!--txHash: '0xfb5727c48b6cfa64...',-->
<!--Block: '32',-->
<!--From: '0xfd770b9c9a210f2b...',-->
<!--To: '0xc94ebb328ac25b9...',-->
<!--Status: 'Executed'-->
<!--}, {-->
<!--txHash: '0x5dde7b146e450b2a...',-->
<!--Block: '32',-->
<!--From: '0xb135f44e3e2d0b98...',-->
<!--To: '0xc94ebb328ac25b9...',-->
<!--Status: 'Not Executed'-->
<!--}, {-->
<!--txHash: '0xc2c9b3d7a33f1955...',-->
<!--Block: '32',-->
<!--From: '0x4b7730fc7dff2cb1...',-->
<!--To: '0xc94ebb328ac25b9...',-->
<!--Status: 'Not Executed'-->
<!--}, {-->
<!--txHash: '0x550c6f4215804953...',-->
<!--Block: '32',-->
<!--From: '0xedfd15f573587752...',-->
<!--To: '0xc94ebb328ac25b9...',-->
<!--Status: 'Not Executed'-->
<!--}, {-->
<!--txHash: '0x83427c34f288a4c5...',-->
<!--Block: '32',-->
<!--From: '0xaf51b7c2fef05815...',-->
<!--To: '0xc94ebb328ac25b9...',-->
<!--Status: 'Executed'-->
<!--}, {-->
<!--txHash: '0x413d2bf74383b981...',-->
<!--Block: '32',-->
<!--From: '0xb0ed597c92ca6ec2...',-->
<!--To: '0xc94ebb328ac25b9...',-->
<!--Status: 'Executed'-->
<!--},-->
<!--{-->
<!--txHash: '0x29c245c5a56865f5...',-->
<!--Block: '32',-->
<!--From: '0x6b45719fdb238c8d...',-->
<!--To: '0xc94ebb328ac25b9...',-->
<!--Status: 'Not Executed'-->
<!--}, {-->
<!--txHash: '0x80dd63ffeadefbf0...',-->
<!--Block: '32',-->
<!--From: '0xaec07c3ca696ad25...',-->
<!--To: '0xc94ebb328ac25b9...',-->
<!--Status: 'Executed'-->
<!--}, {-->
<!--txHash: '0x62ecf85ff579193c...',-->
<!--Block: '32',-->
<!--From: '0xbe28f0699a3614cb...',-->
<!--To: '0xc94ebb328ac25b9...',-->
<!--Status: 'Not Executed'-->
<!--}-->
<style scoped>
/deep/ .el-checkbox-button--mini .el-checkbox-button__inner{
  padding: 5px 13.5px;
}
/deep/ .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #21BAA9;
}
.myh1{
  float: left;
}
.myh2{
  float: right;
}
a {
  color: #3399FF;
  background-color: transparent;
}

/deep/ .el-checkbox-button.is-checked .el-checkbox-button__inner {
  /*color: #fff;*/
  background-color: #409eff;
  /*border-color: #21BAA9;*/
  /*-webkit-box-shadow: -1px 0 0 0 rgb(122, 214, 203);*/
  /*box-shadow: -1px 0 0 0 rgb(122, 214, 203);*/
}

/deep/ .el-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
/deep/ .el-form-item__label {
  text-align: right;
  float: left;
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
/*#409eff*/
</style>
