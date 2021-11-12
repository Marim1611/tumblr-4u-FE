<template>
<div class='root'>
    <b-container class="bv-example-row">
      <b-row>
        <b-col></b-col>

        <b-col col lg="3">
          <h1>Tumblr4U</h1>
          <div class="TheForm">
            <b-form @submit="onSubmit" v-if="show">
                <b-form-group
                  id="input-group-1"
                  label-for="input-1"
                >
                  <b-form-input
                    class="formInput"
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    placeholder="Email"
                    required
                  ></b-form-input>
                </b-form-group>
                  

                <b-form-group id="input-group-2" label-for="input-2" >
                  <b-form-input
                      class="formInput"
                      type="password" 
                      id="input-2" 
                      v-model="form.password"
                      aria-describedby="password-help-block" 
                      placeholder="Password">
                  </b-form-input>

                </b-form-group>
                  
              <b-form-group id="input-group-3" label-for="input-3">
                <b-form-input
                  class="formInput"
                  id="input-3"
                  v-model="form.name"
                  placeholder="Blog name"
                  required
                ></b-form-input>
              </b-form-group>
              <h6>By clicking "sign up", or continuing with the other options below, you agree to Tumblr’s Terms of Service and have read the Privacy Policy</h6>
              <b-button size="lg" class="buttonTop" type="submit" block variant="info">Sign up</b-button>
          </b-form>

          </div>
          
          <div class="striped-border"></div>
          

        </b-col>

        <b-col></b-col>
      </b-row>
</b-container>
</div>

</template>

<script>
export default {

  name: 'SignIn',
  data(){

    return{

      form: {
          email: '',
          password: '',
          blogName: '',
      },

      show: true
    }
  },

  

  props: {

    msg: String

  }
}
  
</script>


<style scoped>
.root{

  font-family: 'Ubuntu', sans-serif;
  margin: 20px 0 20px 0;
  line-height: 1.5;
  text-align: center;
 
}
.TheForm{
  
}
.formInput
{
  margin: 5px auto 5px auto;
  height: 45px;
  width:90%;
}
.buttonTop{
  margin:20px 0 20px 0 ;
  width: 230px;
}

</style>