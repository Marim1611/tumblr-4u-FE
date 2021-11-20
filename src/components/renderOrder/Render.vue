<template>
  <div class="hello">
     <Header ></Header>
     <WelcomePage/>
     <SecondPage/>
     <ThirdPage/>
     <FourthPage/>
     <FifthPage/>
     <LastPage/>



  </div>
</template>

<script>
import Header from '../registerPages/WelcomePageHeader.vue'; 
import WelcomePage from '../registerPages/WelcomePage.vue';
import SecondPage from '../Demo/SecondPage.vue';
import ThirdPage from '../Demo/ThirdPage.vue';
import FourthPage from '../Demo/FourthPage.vue';
import FifthPage from '../Demo/FifthPage.vue';
import LastPage from '../Demo/LastPage.vue'

export default {
  name: 'Render',
  components: {
    'Header':Header,
    'WelcomePage':WelcomePage,
    'SecondPage':SecondPage,
    'ThirdPage':ThirdPage,
    'FourthPage':FourthPage,
    'FifthPage':FifthPage,
    'LastPage':LastPage,
  }
  
}
</script>


<style scoped> 
.hello{
    margin-top:0;
}
 
</style>
