<template>
<div class="main">
    <Chart v-bind:chartData="graph.weekly_note"
     v-bind:options="options"></Chart>

    <div class="row">
        <div class="col">
        <button class="button-note">{{statistics.notesCnt}} <br/> Note </button>
        </div>

        <div class="col">
        <button class="button-new-followers">{{statistics.newFCnt}} <br/>New Followers</button>
        </div>

        <div class="col">
        <button class="button-total-followers">{{statistics.totalFCnt}} <br/> Total Followers</button>
        </div>
    </div>
    <p class="top" v-if="!flag"><br/>Top Post</p>
    <div class="view-top-post" v-if="!flag"><!--error hna fl console!?!-->
    <li class="top-posts-list" v-for="topPost of topPosts " :key="topPost.id">
        <div class="row">
            <div class="col-8">
                <v-img class="imgg" :src=" topPost.image_link" ></v-img>         
            </div>

            <div class="col-2">
                <button class="button-total-notes"> Total Notes<br/> {{topPost.total_notes}}</button>
            </div>

            <div class="col-2">
                <button class="button-notes">  Notes<br/> +{{topPost.notes}}</button>
            </div>
        </div>
    </li>    
    </div>

    <p class="top" v-if="!flag" ><br/>Biggest Fan</p>
    <div class="view-biggest-fan" v-if="!flag">
    <li class="bFan-list" v-for="bFan of bFans " :key="bFan.id">
        <v-img class="imggg-fan" :src="bFan.image_link" ></v-img> 
        <p class="username"><br/>{{bFan.username}}</p>
        <button class="button-followw"> follow</button>
    </li>
    </div>

    <p class="top" v-if="!flag" ><br/>Latest Notes</p>


</div>
  
</template>

<script>
 import Chart from "../../Chart.js";
 import axios from "axios";
import Browser from '../../mocks/browser'

export default {

  name: 'Activity',
   props: {
    flag:Boolean ,
    //Notes:Array
},

  components: {
      Chart
  },
  data(){
    return{
        topPosts:[],
        bFans:[],
        graph:[],
        statistics:[],
        options: { //Chart.js options
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            display: true
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false
                        }
                    }]
                },
                legend: {
                    display: true
                },
                responsive: true,
                maintainAspectRatio: false
            }
    }
  },
    async created(){
        try {
    
         await axios.get(Browser().baseURL+'/activity').then(res => {
            this.topPosts = res.data.topPost;
            this.bFans= res.data.bFan;
            this.graph= res.data.graph;
            this.statistics=res.data.statistics;
          //console.log(res.data)    
          })
        } catch (e) {
            console.log("^^^^^^^^^^^^^^^^^^")
        console.error(e);
        }
    }

}


</script>

<style>
.button-note{
 background-color:rgb(104, 104, 116);
 color: rgb(217, 217, 236); 
 width: 150px;
 border-style: solid ;
 border-color: rgb(170, 170, 216);
 height: 60px;
}
.button-new-followers{
 background-color:rgb(104, 104, 116);
 color: rgb(217, 217, 236); 
 width: 150px;
 border-style: solid ;
 border-color: rgb(170, 170, 216);
 height: 60px;
}
.button-total-followers{
 background-color:rgb(104, 104, 116);
 color: rgb(217, 217, 236); 
 width: 150px;
 border-style: solid ;
 border-color: rgb(170, 170, 216);
 height: 60px;
}
.top{
    color: white;
}
.button-total-notes{
    color:black;
    font-weight: bold;
}
.button-notes{
    color: black;
    font-weight: bold;
}
.view-top-post{
      background-color: white;
      padding: 10px;
      border-radius: 25px;

}
.imgg{
    width: 140px;
    height: 70px;
}
.imggg-fan{
    width: 80px;
    height: 40px;
    border-radius: 50% ;
    border: solid white;
    position: relative;
    left:15px;
    top:15px;
    background-color: violet;
}
.view-biggest-fan{
    background: linear-gradient(to bottom, #680b70ce 0%, white 50%, white 50%, #ddd 100%);
    width:145px;
    padding: 20px;

}
.username{
    font-weight: bold;
    position: relative;
    top:-15px;
    left: 25px;
}
.button-followw{
    background-color:rgb(23, 163, 228);
    color: white; 
    width: 120px;
    height: 1px;
    border-style: solid ;
    border-color: rgb(170, 170, 216);
    height: 40px;
    position: relative;
    left: -5px;
}
.view-biggest-fan{
    list-style-type: none;

}
.top-posts-list{
    list-style-type: none;
}

</style>