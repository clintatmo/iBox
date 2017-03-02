<template>
  <div>
    <!-- Page Content -->
    <div class="container">

      <!-- Marketing Icons Section -->
      <div class="row">
        <div class="col-lg-12">
          <h1 class="page-header">
            Staff
          </h1>
        </div>
      </div>
      <el-row>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }">
            <img src="/static/staff_ka.jpg" class="image">
            <div style="padding: 14px;">
              <span><strong>Kimberly Jong</strong></span>
              <br>
              <hr>
              <span>" Crossfit changed my life! "</span>
              <div class="bottom clearfix">
                <el-button type="text" class="button">Read more</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }">
            <img src="/static/staff_ca.jpg" class="image">
            <div style="padding: 14px;">
              <span><strong>Clint Atmosoerodjo</strong></span>
              <br>
              <hr>
              <span>" I live for the challenge! "</span>
              <div class="bottom clearfix">
                <el-button type="text" class="button">Read more</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <!-- /.row -->

    </div>
  </div>
</template>

<script>
  export default {
    name: 'staff',
    data () {
      return {
        msg: ''
      }
    }
  }
</script>

<style>
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: auto;
    height: 300px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
