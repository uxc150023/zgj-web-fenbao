<template>
  <el-form-item
    v-if="!hasConfig('optionItems') && !optionModel.hiddenDefaultValue"
    :label="i18nt('designer.setting.defaultValue')"
  >
    <el-input
      type="text"
      v-model="optionModel.defaultValue"
      @change="emitDefaultValueChange"
      :disabled="!!optionModel.nameDisabled"
    ></el-input>
  </el-form-item>
</template>

<script>
  import i18n from '@/lib/vform/utils/i18n'
  import propertyMixin from '@/lib/vform/components/form-designer/setting-panel/property-editor/propertyMixin'

  export default {
    name: 'DefaultValueEditor',
    mixins: [i18n, propertyMixin],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object
    }
  }
</script>

<style scoped></style>
