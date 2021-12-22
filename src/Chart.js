 //../src/Chart.js
 import {
    Line,
    mixins
} from 'vue-chartjs'

export default {
    extends: Line,
    mixins: [mixins.reactiveProp],
   /* components:{
        Line,
        mixins: [mixins.reactiveProp],
    },*/
    //name: "Chart",
    props: ['chartData', 'options'],
    data() {
        return {
           
        }
    },
    mounted() {
        this.renderChart(this.chartdata, this.options)
    }
    
}