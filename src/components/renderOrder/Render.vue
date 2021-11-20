<template>
  <div class="hello">
     <Header/> 
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
import SecondPage from '../scrollingPages/SecondPage.vue';
import ThirdPage from '../scrollingPages/ThirdPage.vue';
import FourthPage from '../scrollingPages/FourthPage.vue';
import FifthPage from '../scrollingPages/FifthPage.vue';
import LastPage from '../scrollingPages/LastPage.vue'

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
