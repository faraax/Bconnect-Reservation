import { businessIdFromURL } from "@/utils/helpers";
import TokenService from "@/services/token.service";

export const fetchBusinessById = {
  data() {
    return {
      businessData: {},
    }
  },
  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (!this.businessData?.id || this.$route.params.business !== TokenService.getBusiness(this.$cookies).id) { //This.id is the id stored in cookies
      this.$fetch()
    }
  },
  async fetch() {
    try {
      // let response = await this.$axios.get(`https://api.bconnect-staging.com/api/fetch-business/${businessIdFromURL(this)}`)
      this.businessData = {
        // business:{
        id: '65dd17bb8c7de73ade1cc268',
        // _id: 11231,
        business_name: "Bconnect Devs",
        package_tier: "High",
        google_place_id: "alksdjflkljlkjlkjaslkd",
        created_at: "2022-08-16",
        updated_at: "2022-08-16"
        // }
      }
      // console.log(this,"this")
      if (!this.businessData?.id) {
        TokenService.clearStorage(this.$cookies)
        return this.$nuxt.error({ statusCode: 404, message: 'The Business You Are Trying To Access Does Not Exists' })
      }
      TokenService.setBusiness(this.businessData, this.$cookies)
      console.log(this.businessData, this.$cookies);
    }
    catch (e) {
      console.log(e, "1")
    }
  },
}






