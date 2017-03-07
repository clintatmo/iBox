<template>
  <div>

    <!-- Page Content -->
    <div class="container">

      <!-- Marketing Icons Section -->
      <div class="row">
        <div class="col-lg-12">
          <h1 class="page-header">
            Login
          </h1>
        </div>
        <div class="col-md-6">
          <el-card :body-style="{ padding: '20px' }">
            <el-form label-position="left" :model="user" ref="loginForm" label-width="120px" class="demo-ruleForm">
              <hr>
              <el-form-item label="Username" prop="username">
                <el-input v-model="user.username"></el-input>
              </el-form-item>
              <el-form-item label="Password" prop="password">
                <el-input type="password" v-model="user.password" auto-complete="off"></el-input>
              </el-form-item>
              <hr>
              <el-form-item>
                <el-button type="primary" @click="login" class="pull-right">Submit</el-button>
                <!--<p class="">-->
                <!--Don't have an account? <router-link to="/auth/register">Sign up!</router-link>-->
                <!--</p>-->
              </el-form-item>
            </el-form>
          </el-card>
        </div>
      </div>
      <!-- /.row -->

    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        user: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      login: function () {
//        this.$http.post('/oauth/token?grant_type=password&username='+ this.user.username +'&password='+ this.user.password, {})
//          .then(function (res) {
//            this.$auth.setToken(res.data.access_token, Date.now() + res.data.expires_in, res.data.username, res.data.roles)
//            this.$router.push('/app/dashboard')
//          })
      }
    }
  }
</script>

<style>
</style>
