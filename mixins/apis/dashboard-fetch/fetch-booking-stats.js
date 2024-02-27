import {businessIdFromURL} from "~/utils/helpers";

export const fetchBookingStats =  {
  data(){
    return{
      stats:[],
    }
  },
  methods:{
    async fetchBookingStatsService(){
      try{
        let response = await this.$api.get(`/booking/stats?businessId=${businessIdFromURL(this)}`)
        this.stats = response.data?.data
      }
      catch (e) {
        console.log(e, "1")
      }
    }
  }
  // multiple components can return the same `fetchKey` and Nuxt will track them both separately
}
