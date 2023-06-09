<!-- eslint-disable vue/valid-v-slot -->
<template>
  <div class="components-table">
    <el-table
      v-bind="props.defaultAttribute"
      v-loading="loading"
      ref="tableRefs"
      :data="props.data"
      style="width: 100%"
      max-height="600"
      @select="select"
      @select-all="selectAll"
      @selection-change="selectionChange"
      @cell-click="cellClick"
      @row-click="rowClick"
      @sort-change="sortChange"
      class="ap-table"
      @getSelectionRows="getSelectionRows"
    >
      <el-table-column v-if="isSelection" type="selection" width="50" />
      <el-table-column
        label="序号"
        type="index"
        width="55"
        fixed="left"
        align="center"
        v-if="isNo"
      >
        <template #default="scope">
          <span>{{
            (props.paginationData.index
              ? (props.paginationData.index - 1) *
                props.paginationData.pageNumber
              : 0) +
            scope.$index +
            1
          }}</span>
        </template>
      </el-table-column>
      <!-- 列表内容 -->
      <template v-for="(item, index) in props.header">
        <el-table-column v-bind="item" :key="index" v-if="item.show !== false">
          <!-- 自定义内容显示 -->
          <template #default="scope" v-if="item.customDisplayType == 'switch'">
            <div class="switch">
              <el-switch v-model="scope.row.switchValue" />
            </div>
          </template>
          <template #default="scope" v-if="item.customDisplayType == 'format'">
            <span>{{ scope.row[item.prop] }} {{ item.unit }}</span>
          </template>
          <!-- 状态 -->
          <template #default="scope" v-if="item.prop == 'flag'">
            <span>{{
              scope.row[item.prop] === '1'
                ? '正常'
                : scope.row[item.prop] === '0'
                ? '停用'
                : scope.row[item.prop]
            }}</span>
          </template>
          <!-- 自定义内容显示 -->
          <template #default="scope" v-if="item.customDisplayType == 'custom'">
            <div class="custom" :index="scope.$index">
              <slot
                :name="'custom_' + item.prop"
                :value="scope.row[item.prop]"
              ></slot>
            </div>
          </template>
          <!-- 自定义内容显示 -->
          <template
            #default="scope"
            v-if="item.rankDisplayData && item.rankDisplayData.length > 0"
          >
            <div class="rankDisplayData">
              <div
                class="rankDisplayData-node"
                v-for="(data, num) in item.rankDisplayData.slice(0, 4)"
                :key="num"
                @click="customClick(scope.$index, scope.row, data)"
              >
                <span>{{
                  data.name === 'status'
                    ? scope.row[props.statusColoum] !== props.openValue
                      ? $t('t-zgj-Enable')
                      : $t('t-zgj-seal.deactivated')
                    : $t(data.name)
                }}</span>
              </div>
              <div
                class="rankDisplayData-more"
                v-if="item.rankDisplayData.length > 4"
              >
                <el-dropdown>
                  <span class="el-dropdown-link">
                    <img
                      class="rankDisplayData-node"
                      src="@/assets/svg/sangedian.svg"
                      alt=""
                    />
                  </span>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item
                        v-for="(data, num) in item.rankDisplayData.slice(4)"
                        :key="num"
                        @click="customClick(scope.$index, scope.row, data)"
                      >
                        {{
                          data.name === 'status'
                            ? scope.row[props.statusColoum] !== props.openValue
                              ? $t('t-zgj-Enable')
                              : $t('t-zgj-seal.deactivated')
                            : $t(data.name)
                        }}
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </div>
            </div>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>
<script setup>
  import {
    // reactive,
    ref,
    defineExpose,
    onBeforeMount,
    onMounted
  } from 'vue'
  defineExpose({
    clearSorts,
    getSelectionRows
  })
  const props = defineProps({
    // 标识
    refs: {
      type: String,
      default: ''
    },
    // 处理类型
    type: {
      type: String,
      default: '0'
    },
    loading: {
      type: Boolean,
      default: false
    },
    // 表头数据
    header: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 表格数据
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 是否多选
    isSelection: {
      type: Boolean,
      default: false
    },
    // 是否序号
    isNo: {
      type: Boolean,
      default: true
    },
    // 默认属性
    defaultAttribute: {
      type: Object,
      default: () => {
        return {}
      }
    },
    // 分页属性
    paginationData: {
      type: Object,
      default: () => {
        return {}
      }
    },
    statusColoum: {
      type: String
    },
    openValue: {}
  })
  const emit = defineEmits([
    'select',
    'select-all',
    'selection-change',
    'cell-click',
    'sort-change',
    'row-click',
    'custom-click'
  ])

  const tableRefs = ref(null)

  function clearSorts() {
    tableRefs.value.clearSort()
  }
  //   const state = reactive({})
  // console.log(props.defaultAttribute);
  // 	当用户手动勾选数据行的 Checkbox 时触发的事件
  function select(selection, row) {
    emit('select', selection, row)
  }
  // 当用户手动勾选全选 Checkbox 时触发的事件
  function selectAll(selection) {
    emit('select-all', selection)
  }
  // 当选择项发生变化时会触发该事件
  function selectionChange(selection) {
    emit('selection-change', selection)
  }
  //	当某个单元格被点击时会触发该事件
  function cellClick(row, column, cell, event) {
    emit('cell-click', row, column, cell, event)
  }
  // 自定义排序
  function sortChange(column) {
    emit('sort-change', column)
  }
  //	当某个单元格被点击时会触发该事件
  function rowClick(row, column, event) {
    emit('row-click', row, column, event)
  }
  // 点击自定义元素
  function customClick(index, row, item) {
    // console.log(index, row, item);
    emit('custom-click', index, row, item)
  }
  function getSelectionRows() {
    return tableRefs.value.getSelectionRows()
  }
  onBeforeMount(() => {
    // console.log(`the component is now onBeforeMount.`)
  })
  onMounted(() => {
    // console.log(`the component is now mounted.`)
    // console.log(JSON.parse(JSON.stringify(props.paginationData)))
  })
</script>
<style lang="scss" scoped>
  .components-table {
    margin: 0%;
    width: 100%;

    .rankDisplayData {
      display: flex;
      // justify-content: space-around;
      // text-align: center;
      color: var(--jy-info-6);

      .rankDisplayData-node {
        cursor: pointer;
        margin-right: 0.5rem;
      }

      .rankDisplayData-more {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    th {
      font-weight: var(--jy-font-weight-400);
    }

    :deep {
      .el-table thead {
        color: var(--jy-color-text-1);
        font-size: var(--jy-font-size-body-2);
        font-weight: var(--jy-font-weight-400);
      }

      .el-checkbox__input.is-checked .el-checkbox__inner {
        background-color: var(--jy-primary-6);
        border-color: var(--jy-primary-6);
      }

      .el-checkbox__inner:hover {
        border-color: var(--jy-primary-6);
      }

      .el-checkbox__input.is-indeterminate .el-checkbox__inner {
        background-color: var(--jy-primary-6);
        border-color: var(--jy-primary-6);
      }
      .el-table__body tr.hover-row.current-row > td,
      .el-table__body tr.hover-row.el-table__row--striped.current-row > td,
      .el-table__body tr.hover-row.el-table__row--striped > td,
      .el-table__body tr.hover-row > td {
        background-color: var(--jy-background-color-1);
      }
      .el-table tbody tr:hover > td {
        background-color: var(--jy-background-color-1);
      }
    }
  }
</style>
