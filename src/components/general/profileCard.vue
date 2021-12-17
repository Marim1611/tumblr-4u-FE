<template>
  <div class="postCards">
    <b-card >
        <b-card-text>{{content}}</b-card-text>
        <div>
            <router-link class="note" to="/nopage">{{notes}} note</router-link>
            <a href=""><b-icon class="h4 mb-2 cardIcons" icon="three-dots"></b-icon></a>
            <a href=""><b-icon class="h4 mb-2 cardIcons" icon="arrow-repeat"></b-icon></a>
            <a href=""><b-icon class="h4 mb-2 cardIcons" icon="heart"></b-icon></a>
        </div>
    </b-card>
</div>
</template>

<script>

export default {
  name: 'profilecard',
  props:['content','notes'],
  components: {
    
     
  }
  
}
</script>


<style scoped>
.postCards{
    width:35%;
    margin-top:25px;
    margin-left:auto;
    margin-right:auto;
}
.note{
    text-align: center;

}
.cardIcons{
    position: relative;
    left:360px;
    top: 10px;
    margin:0 5px 0 5px;
}

 
 
</style>
