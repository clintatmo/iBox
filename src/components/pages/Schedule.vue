<template>
  <div>
    <!-- Page Content -->
    <div class="container">

      <!-- Marketing Icons Section -->
      <div class="row">
        <div class="col-lg-12">
          <h1 class="page-header">
            Schedule
          </h1>
        </div>
        <div class="col-lg-12">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="day"
              label="Day"
              width="180">
            </el-table-column>
            <el-table-column
              prop="time"
              label="Time"
              width="180">
            </el-table-column>
            <el-table-column
              prop="class"
              label="Class type">
            </el-table-column>
            <el-table-column
              prop="classAmount"
              label="Amount of classes">
            </el-table-column>
          </el-table>
        </div>
      </div>
      <!-- /.row -->

    </div>
  </div>
</template>

<script>
  export default {
    time: 'schedule',
    data () {
      return {
        tableData: [{
          day: 'monday',
          time: '17.00-21.00',
          class: 'Functional training',
          classAmount: '4'
        }, {
          day: 'tuesday',
          time: '17.00-21.00',
          class: 'Functional training',
          classAmount: '4'
        }, {
          day: 'wednesday',
          time: '17.00-21.00',
          class: 'Functional training',
          classAmount: '4'
        }, {
          day: 'thursday',
          time: '17.00-21.00',
          class: 'Functional training',
          classAmount: '4'
        }, {
          day: 'friday',
          time: '17.00-21.00',
          class: 'Functional training',
          classAmount: '4'
        }, {
          day: 'saturday',
          time: '8.00-10.00',
          class: 'Functional training',
          classAmount: '2'
        }]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
