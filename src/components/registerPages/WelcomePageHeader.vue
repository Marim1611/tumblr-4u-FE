<template>
<div id="TheHeader">
 
    <b-navbar class="NavBar" toggleable="sm" type="dark" variant="faded">
        
        <router-link to="/">
        <b-navbar-brand class="NavBarBrand bra" >T4U</b-navbar-brand>
        </router-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                </b-nav-form>
            </b-navbar-nav>
            <div class="NavBarRight">
                <b-navbar-nav class="navButtons">
                    
                    
                    <router-link to="/signIn">
                     <b-button size="md" class="navButtons"  variant="success">Log in</b-button>
                     </router-link>

                     <router-link to="/signUp">
                    <b-button size="md" class="navButtons"  variant="info">Sign up</b-button>
                    </router-link>
 
                </b-navbar-nav>
            </div>
            
        </b-collapse>
    </b-navbar>

</div>

</template>

<script>
export default {

  name: 'Header',

  props: {

    msg: String

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#TheHeader{
    background-image: url("../../assets/images/HomeBackground.jpg");
    background-position: center;
    background-size: cover;
}

.NavBarBrand{
    padding: 0 0 0 20px;
     color:navy;
}

.NavBar{
   
    padding:4.5 4.3  4.5rem;
}
.NavBarBrand{
    font-family: 'Ubuntu', sans-serif;
    font-size: 2.5rem;
    font-weight: bold;
}
.Brand:hover{
    color: hotpink;
}
.NavBarRight{
    margin-left: auto;
}
.navButtons{
    
    margin-right:10px;
    margin-left:10px;
    font-weight: bold;
    color: black;

}
</style>


