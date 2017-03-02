<template>
  <div>
    <!-- Navigation -->
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <a class="navbar-brand" href="/"><img src="/static/tpb_logo_big.png" style="width: 70px; margin-top: 0"></a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link to="home" tag="a">Home</router-link>
            </li>
            <li>
              <router-link to="about" tag="a">About</router-link>
            </li>
            <li>
              <router-link to="staff" tag="a">Staff</router-link>
            </li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Programs <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li>
                  <router-link to="programs/hiit-training" tag="a">HIIT training</router-link>
                </li>
                <li>
                  <router-link to="programs/weightloss" tag="a">Weightloss</router-link>
                </li>
                <li>
                  <router-link to="programs/student-package" tag="a">Student package</router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link to="schedule" tag="a">Schedule</router-link>
            </li>
            <li>
              <router-link to="contact-us" tag="a">Contact us</router-link>
            </li>
            <li>
              <router-link to="/app/login" tag="a">Login</router-link>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container -->
    </nav>

    <hr/>

    <router-view></router-view>

    <div class="container">
      <!-- Footer -->
      <footer>
        <!-- Features Section -->
        <div class="row">
          <div class="col-lg-12">
            <h2 class="page-header">Location</h2>
          </div>
          <div class="col-md-6">
            <p>The Modern Business template by Start Bootstrap includes:</p>
            <ul>
              <li><strong>Bootstrap v3.3.7</strong>
              </li>
              <li>jQuery v1.11.1</li>
              <li>Font Awesome v4.2.0</li>
              <li>Working PHP contact form with validation</li>
              <li>Unstyled page elements for easy customization</li>
              <li>17 HTML pages</li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>
          </div>
          <div class="col-md-6">
            <gmap></gmap>
          </div>
        </div>

        <hr>

        <!-- Call to Action Section -->
        <div class="well">
          <div class="row">
            <div class="col-md-8">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.</p>
            </div>
            <div class="col-md-4">
              <a class="btn btn-lg btn-default btn-block" href="#">Call to Action</a>
            </div>
          </div>
        </div>

        <hr>
        <!-- /.row -->
        <div class="row">
          <div class="col-lg-12">
            <p>Copyright &copy; Your Website 2014</p>
          </div>
        </div>
      </footer>
    </div>

  </div>
</template>

<script>

  import GoogleMap from '../maps/GoogleMap.vue'

  export default {
    name: 'navigation',
    components: {
      gmap: GoogleMap
    },
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
