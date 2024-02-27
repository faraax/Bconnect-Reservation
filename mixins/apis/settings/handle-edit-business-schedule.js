import { viewError } from "~/utils/helpers";

export const handleEditBusinessSchedule = {
  data() {
    return {
      isHandleEditBusinessScheduleLoading: false,
      handleEditBusinessScheduleError: ''
    }
  },
  methods: {
    async handleEditBusinessScheduleMixinSubmit(data, scheduleId) {
      // console.log({ data, scheduleId });
      this.isHandleEditBusinessScheduleLoading = true
      this.handleEditBusinessScheduleError = false
      this.$api.put(`/business-setting/schedule?scheduleId=${scheduleId}`, { schedule: data })
        .then(() => {
          this.$emit('handle-edit-working-schedule', false)
          this.$emit('confirm-business-schedule')
        })
        .catch((e) => {
          console.log(e);
          console.log(scheduleId);
          this.handleEditBusinessScheduleError = viewError(e)
        })
        .finally(() => {
          this.isHandleEditBusinessScheduleLoading = false
        })
    },
  }
}
