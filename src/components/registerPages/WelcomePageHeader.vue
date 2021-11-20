<template>
<div id="TheHeader">
 
    <b-navbar class="NavBar" toggleable="sm" type="dark" variant="faded">
 
        <b-navbar-brand class="NavBarBrand" href="#">T4U</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                </b-nav-form>
            </b-navbar-nav>
            <div class="NavBarRight">
                <b-navbar-nav class="navButtons">
 
                     <b-button size="md" class="navButtons"  variant="success">Log in</b-button>
                    <b-button size="md" class="navButtons"  variant="primary">Sign up</b-button>
 
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
/*#TheHeader{
    text-align: center;
    line-height: 1.5;
    font-size: 1.5rem;
    padding: 3% 15% 7%;
    margin: 5% 3% 5% 0;
}*/
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

}
</style>


