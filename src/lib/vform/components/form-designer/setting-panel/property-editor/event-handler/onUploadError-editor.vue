<template>
  <el-form-item label="onUploadError" label-width="150px">
    <el-button type="info" icon="el-icon-edit" plain round :class="[eventHandled ? 'button-text-highlight' : '']"
               @click="editEventHandler('onUploadError', eventParams)">
      {{i18nt('designer.setting.addEventHandler')}}</el-button>
  </el-form-item>
</template>

<script>
  import i18n from "@/lib/vform/utils/i18n"
  import eventMixin from "@/lib/vform/components/form-designer/setting-panel/property-editor/event-handler/eventMixin"

  export default {
    name: "onUploadError-editor",
    mixins: [i18n, eventMixin],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
      eventHandled: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        eventParams: ['error', 'file', 'fileList'],
      }
    }
  }
</script>

<style scoped>

</style>
