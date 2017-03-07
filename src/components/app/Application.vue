<template>
  <div>
    <!-- Navigation -->
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <!--<a class="navbar-brand" href="/"><img src="/static/tpb_logo_big.png" style="width: 70px; margin-top: 0"></a>-->
          <router-link to="login" tag="a" class="navbar-brand"> The pitbull box application</router-link>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link to="finance" tag="a">Finance</router-link>
            </li>
            <li>
              <router-link to="athlete" tag="a">Athlete</router-link>
            </li>
            <li>
              <router-link to="settings" tag="a">Settings</router-link>
            </li>
            <li>
              <router-link to="logout" tag="a">Logout</router-link>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container -->
    </nav>

    <hr/>

    <router-view></router-view>

  </div>
</template>

<script>

  export default {
    name: 'application',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
