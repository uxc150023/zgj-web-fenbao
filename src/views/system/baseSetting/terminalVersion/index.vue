<template>
  <div>
    <componentsLayout Layout="title,searchForm,table,pagination,tabs,batch">
      <template #title>
        <div class="title">
          <div>终端版本管理</div>
          <div>
            <el-button type="primary">+ 新建</el-button>
          </div>
        </div>
      </template>

      <template #tabs>
        <componentsTabs
          :activeName="state.componentsTabs.activeName"
          :data="state.componentsTabs.data"
          @tab-change="tabChange"
          style="margin-top: 12px"
        ></componentsTabs>
      </template>

      <template #searchForm>
        <div>
          <componentsSearchForm
            :data="state.componentsSearchForm.data"
            :butData="state.componentsSearchForm.butData"
            :style="state.componentsSearchForm.style"
          >
          </componentsSearchForm>
        </div>
      </template>

      <template #batch>
        <div class="batch">
          <el-button>批量操作</el-button>
          <componentsBatch></componentsBatch>
        </div>
      </template>

      <template #table>
        <div>
          <componentsTable
            :defaultAttribute="state.componentsWorkbenchTable.defaultAttribute"
            :data="state.componentsWorkbenchTable.data"
            :header="state.componentsWorkbenchTable.header"
            :paginationData="state.componentsPagination.data"
            :isSelection="true"
            @selection-change="selectionChange"
            v-if="state.componentsTabs.activeName === 'first'"
          >
          </componentsTable>

          <componentsTable
            :defaultAttribute="state.componentsAPPSealTable.defaultAttribute"
            :data="state.componentsAPPSealTable.data"
            :header="state.componentsAPPSealTable.header"
            :paginationData="state.componentsPagination.data"
            :isSelection="true"
            @selection-change="selectionChange"
            v-if="state.componentsTabs.activeName === 'second'"
          >
          </componentsTable>

          <componentsTable
            :defaultAttribute="
              state.componentsSmartSealCabinetTable.defaultAttribute
            "
            :data="state.componentsSmartSealCabinetTable.data"
            :header="state.componentsSmartSealCabinetTable.header"
            :paginationData="state.componentsPagination.data"
            :isSelection="true"
            @selection-change="selectionChange"
            v-if="state.componentsTabs.activeName === 'third'"
          >
          </componentsTable>

          <componentsTable
            :defaultAttribute="
              state.componentsSmartSealBoxTable.defaultAttribute
            "
            :data="state.componentsSmartSealBoxTable.data"
            :header="state.componentsSmartSealBoxTable.header"
            :paginationData="state.componentsPagination.data"
            :isSelection="true"
            @selection-change="selectionChange"
            v-if="state.componentsTabs.activeName === 'fourth'"
          >
          </componentsTable>
        </div>
      </template>

      <template #pagination>
        <componentsPagination
          :data="state.componentsPagination.data"
          :defaultAttribute="state.componentsPagination.defaultAttribute"
        >
        </componentsPagination>
      </template>
    </componentsLayout>
  </div>
</template>

<script setup>
  import { reactive } from 'vue'
  import componentsTable from '@/views/components/table'
  import componentsSearchForm from '@/views/components/searchForm'
  import componentsPagination from '@/views/components/pagination'
  import componentsLayout from '@/views/components/Layout'
  import componentsTabs from '@/views/components/JyTabs.vue'
  import componentsBatch from '@/views/components/batch.vue'
  const state = reactive({
    componentsTabs: {
      data: [
        {
          label: 't-zgj-logRecord.Workbench',
          name: 'first'
        },
        {
          label: 't-app',
          name: 'second'
        },
        {
          label: 't-zgj-cg-menu-zhineng-yinzhang-gui',
          name: 'third'
        },
        {
          label: 't-zgj-cg-menu-zhineng-yinzhang-he',
          name: 'fourth'
        }
      ],
      activeName: 'first'
    },
    componentsSearchForm: {
      style: {
        lineStyle: {
          width: '30%'
        },
        labelStyle: {
          width: '100px'
        }
      },

      data: [
        {
          id: 'name',
          label: '关键词',
          type: 'input',
          inCommonUse: true,
          // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
          defaultAttribute: {
            placeholder: '请输入'
          }
        },
        {
          id: 'name',
          label: '强制升级',
          type: 'select',
          inCommonUse: true,
          // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
          defaultAttribute: {
            placeholder: '请选择'
          },
          options: []
        },
        {
          id: 'picker',
          label: '创建时间',
          type: 'picker',
          inCommonUse: true,
          // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
          defaultAttribute: {
            type: 'daterange',
            'start-placeholder': '开始时间',
            'end-placeholder': '结束时间'
          },
          style: {}
        }
      ],
      butData: [
        {
          id: 'more',
          name: '展开',
          type: 'unfold',
          // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
          defaultAttribute: {
            type: 'primary'
          },
          style: {}
        },
        {
          id: 'inquire',
          name: '查询',
          type: 'click',
          // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
          defaultAttribute: {
            type: 'primary'
          },
          style: {}
        },
        {
          id: 'reset',
          name: '重置',
          type: 'click',
          // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
          defaultAttribute: {},
          style: {}
        }
      ]
    },

    componentsWorkbenchTable: {
      header: [
        {
          prop: '1',
          label: '版本号',
          sortable: true,
          'min-width': 100
        },
        {
          prop: '2',
          label: '安卓版本编号',
          sortable: true,
          'min-width': 140
        },
        {
          prop: '3',
          label: '是否强制升级',
          sortable: true,
          'min-width': 140
        },
        {
          prop: '4',
          label: 'apk名称',
          sortable: true,
          'min-width': 120
        },
        {
          prop: '5',
          label: '创建人',
          sortable: true,
          'min-width': 100
        },
        {
          prop: '6',
          label: '创建时间',
          sortable: true,
          'min-width': 180
        },
        {
          prop: '7',
          label: '版本说明',
          sortable: true,
          'min-width': 180
        },
        {
          prop: 'caozuo',
          label: '操作',
          fixed: 'right',
          'min-width': 180,
          rankDisplayData: [
            {
              name: '修改'
            },
            {
              name: '删除'
            },
            {
              name: '下载版本包'
            }
          ]
        }
      ],
      data: [
        {
          1: 'V1.1.2',
          2: '863',
          3: '是',
          4: '测试版本',
          5: '汤博',
          6: '2022-04-23 08:00:00',
          7: '无'
        },
        {
          1: 'V4.1.2',
          2: '126',
          3: '否',
          4: '测试版本',
          5: '汤博',
          6: '2022-04-23 08:00:00',
          7: '无'
        },
        {
          1: 'V1.1.2',
          2: '863',
          3: '是',
          4: '测试版本',
          5: '汤博',
          6: '2022-04-23 08:00:00',
          7: '无'
        },
        {
          1: 'V1.5.2',
          2: '863',
          3: '否',
          4: '测试版本',
          5: '岳海涛',
          6: '2022-04-23 08:00:00',
          7: '无'
        }
      ],
      // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
      defaultAttribute: {
        stripe: true,
        'header-cell-style': {
          background: 'var(--jy-color-fill--3)'
        }
      }
    },
    componentsAPPSealTable: {
      header: [
        {
          width: 50,
          type: 'selection'
        },
        {
          prop: '0',
          label: '序号',
          width: 60,
          align: 'center'
        },
        {
          prop: '1',
          label: '版本号',
          sortable: true,
          'min-width': 100
        },
        {
          prop: '2',
          label: '安卓版本编号',
          sortable: true,
          'min-width': 140
        },
        {
          prop: '3',
          label: '是否强制升级',
          sortable: true,
          'min-width': 140
        },
        {
          prop: '4',
          label: 'apk名称',
          sortable: true,
          'min-width': 120
        },
        {
          prop: '5',
          label: '创建人',
          sortable: true,
          'min-width': 100
        },
        {
          prop: '6',
          label: '创建时间',
          sortable: true,
          'min-width': 180
        },
        {
          prop: '7',
          label: '版本说明',
          sortable: true,
          'min-width': 180
        },
        {
          prop: 'caozuo',
          label: '操作',
          fixed: 'right',
          'min-width': 180,
          rankDisplayData: [
            {
              name: '修改'
            },
            {
              name: '删除'
            },
            {
              name: '下载版本包'
            }
          ]
        }
      ],
      data: [
        {
          0: 1,
          1: 'V1.1.2',
          2: '863',
          3: '是',
          4: '测试版本',
          5: '汤博',
          6: '2022-04-23 08:00:00',
          7: '无'
        },
        {
          0: 2,
          1: 'V4.1.2',
          2: '126',
          3: '否',
          4: '测试版本',
          5: '汤博',
          6: '2022-04-23 08:00:00',
          7: '无'
        },
        {
          0: 3,
          1: 'V1.1.2',
          2: '863',
          3: '是',
          4: '测试版本',
          5: '汤博',
          6: '2022-04-23 08:00:00',
          7: '无'
        }
      ],
      // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
      defaultAttribute: {
        stripe: true,
        'header-cell-style': {
          background: 'var(--jy-color-fill--3)'
        }
      }
    },
    componentsSmartSealCabinetTable: {
      header: [
        {
          width: 50,
          type: 'selection'
        },
        {
          prop: '0',
          label: '序号',
          width: 60,
          align: 'center'
        },
        {
          prop: '1',
          label: '版本号',
          sortable: true,
          'min-width': 100
        },
        {
          prop: '2',
          label: '安卓版本编号',
          sortable: true,
          'min-width': 140
        },
        {
          prop: '3',
          label: '是否强制升级',
          sortable: true,
          'min-width': 140
        },
        {
          prop: '4',
          label: 'apk名称',
          sortable: true,
          'min-width': 120
        },
        {
          prop: '5',
          label: '创建人',
          sortable: true,
          'min-width': 100
        },
        {
          prop: '6',
          label: '创建时间',
          sortable: true,
          'min-width': 180
        },
        {
          prop: '7',
          label: '版本说明',
          sortable: true,
          'min-width': 180
        },
        {
          prop: 'caozuo',
          label: '操作',
          fixed: 'right',
          'min-width': 180,
          rankDisplayData: [
            {
              name: '修改'
            },
            {
              name: '删除'
            },
            {
              name: '下载版本包'
            }
          ]
        }
      ],
      data: [
        {
          0: 1,
          1: 'V1.1.2',
          2: '863',
          3: '是',
          4: '测试版本',
          5: '汤博',
          6: '2022-04-23 08:00:00',
          7: '无'
        },
        {
          0: 2,
          1: 'V4.1.2',
          2: '126',
          3: '否',
          4: '测试版本',
          5: '汤博',
          6: '2022-04-23 08:00:00',
          7: '无'
        },
        {
          0: 3,
          1: 'V1.1.2',
          2: '863',
          3: '是',
          4: '测试版本',
          5: '汤博',
          6: '2022-04-23 08:00:00',
          7: '无'
        },
        {
          0: 4,
          1: 'V1.5.2',
          2: '863',
          3: '否',
          4: '测试版本',
          5: '岳海涛',
          6: '2022-04-23 08:00:00',
          7: '无'
        }
      ],
      // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
      defaultAttribute: {
        stripe: true,
        'header-cell-style': {
          background: 'var(--jy-color-fill--3)'
        }
      }
    },
    componentsSmartSealBoxTable: {
      header: [
        {
          width: 50,
          type: 'selection'
        },
        {
          prop: '0',
          label: '序号',
          width: 60,
          align: 'center'
        },
        {
          prop: '1',
          label: '版本号',
          sortable: true,
          'min-width': 100
        },
        {
          prop: '2',
          label: '安卓版本编号',
          sortable: true,
          'min-width': 140
        },
        {
          prop: '3',
          label: '是否强制升级',
          sortable: true,
          'min-width': 140
        },
        {
          prop: '4',
          label: 'apk名称',
          sortable: true,
          'min-width': 120
        },
        {
          prop: '5',
          label: '创建人',
          sortable: true,
          'min-width': 100
        },
        {
          prop: '6',
          label: '创建时间',
          sortable: true,
          'min-width': 180
        },
        {
          prop: '7',
          label: '版本说明',
          sortable: true,
          'min-width': 180
        },
        {
          prop: 'caozuo',
          label: '操作',
          fixed: 'right',
          'min-width': 180,
          rankDisplayData: [
            {
              name: '修改'
            },
            {
              name: '删除'
            },
            {
              name: '下载版本包'
            }
          ]
        }
      ],
      data: [
        {
          0: 1,
          1: 'V1.1.2',
          2: '863',
          3: '是',
          4: '测试版本',
          5: '汤博',
          6: '2022-04-23 08:00:00',
          7: '无'
        },
        {
          0: 2,
          1: 'V4.1.2',
          2: '126',
          3: '否',
          4: '测试版本',
          5: '汤博',
          6: '2022-04-23 08:00:00',
          7: '无'
        },
        {
          0: 3,
          1: 'V1.1.2',
          2: '863',
          3: '是',
          4: '测试版本',
          5: '汤博',
          6: '2022-04-23 08:00:00',
          7: '无'
        },
        {
          0: 4,
          1: 'V1.5.2',
          2: '863',
          3: '否',
          4: '测试版本',
          5: '岳海涛',
          6: '2022-04-23 08:00:00',
          7: '无'
        },
        {
          0: 5,
          1: 'V1.1.2',
          2: '863',
          3: '是',
          4: '测试版本',
          5: '汤博',
          6: '2022-04-23 08:00:00',
          7: '无'
        },
        {
          0: 6,
          1: 'V1.5.2',
          2: '863',
          3: '否',
          4: '测试版本',
          5: '岳海涛',
          6: '2022-04-23 08:00:00',
          7: '无'
        }
      ],
      // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
      defaultAttribute: {
        stripe: true,
        'header-cell-style': {
          background: 'var(--jy-color-fill--3)'
        }
      }
    },
    componentsPagination: {
      data: {
        amount: 60,
        index: 1,
        pageNumber: 10
      },
      // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
      defaultAttribute: {
        layout: 'prev, pager, next, jumper',
        total: 60,
        'page-sizes': [10, 100, 200, 300, 400],
        background: true
      }
    }
  })

  // 当选择项发生变化时会触发该事件
  function selectionChange(selection) {
    //    console.log(selection);
    state.componentsBatch.selectionData = selection
  }
</script>

<style lang="scss" scoped>
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
