import {businessIdFromURL, dateFromUsersTimezone} from "~/utils/helpers";

export const fetchBusinessBookings =  {
  methods:{
    async fetchBusinessBookingsService(isPrev){
      try{
        let response = await this.$api.get(`/booking/business/filter?businessId=${businessIdFromURL(this)}&page=1&limit=99&isPrevious=${isPrev}`)
        this.bookings = response?.data?.data?.map(el=>{
          let startDate = dateFromUsersTimezone(el?.startDateTime) ? dateFromUsersTimezone(el?.startDateTime) : new Date()
          let endDate = dateFromUsersTimezone(el?.endDateTime) ? dateFromUsersTimezone(el?.endDateTime) : new Date()

          return{
            ...el,
            startDate:new Date(startDate).format('YYYY-MM-DD'),
            startTime:new Date(startDate).format('HH:mm'),
            endDate:new Date(endDate).format('YYYY-MM-DD'),
            endTime:new Date(endDate).format('HH:mm'),
          }
        })
      }
      catch (e) {
        console.log(e, "1")
      }
    }
  }
  // multiple components can return the same `fetchKey` and Nuxt will track them both separately
}
