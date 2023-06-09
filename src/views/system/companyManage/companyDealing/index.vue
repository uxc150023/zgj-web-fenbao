<!--
* @Descripttion 往来企业
* @FileName index.vue
* @Author Guanpf
* @LastEditTime 2023-03-14 15:43:20
!-->
<template>
  <div>
    <JyTable
      url="/tenant/relatedCompany/list"
      ref="table"
      :needAutoRequest="true"
      :componentsSearchForm="state.componentsSearchForm"
      :componentsTableHeader="state.componentsTable.header"
      :componentsBatch="state.componentsBatch"
      tableClick="relatedCompanyName"
      @cellClick="cellClick"
      @customClick="customClick"
      @clickBatchButton="clickBatchButton"
    >
      <template #title>
        <div class="title">
          <div>{{ $t('t-zgj-F_CUSTOMER_MANAGE') }}</div>
          <div class="title-more">
            <div class="title-more-add">
              <el-button
                type="primary"
                @click="
                  () => {
                    ;(showFormDialog = true),
                      (state.title = 't-zgj-add'),
                      (state.column = {})
                  }
                "
              >
                + {{ $t('t-zgj-add') }}
              </el-button>
            </div>
            <div class="title-more-down">
              <el-dropdown>
                <el-button>
                  <img
                    class="button-icon"
                    src="@/assets/svg/gengduo-caozuo.svg"
                    alt=""
                    srcset=""
                  />
                  <span>{{ $t('t-zgj-table.more.Operation') }}</span>
                </el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>{{
                      $t('t-zgj-importCustomer.title')
                    }}</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
        </div>
      </template>
    </JyTable>
    <!-- 往来详情 -->

    <JyDetailDrawer
      v-model="detailDrawerShow"
      modulesName="dealing_unit"
      :detailParams="detailParams"
      :importParams="importParams"
    ></JyDetailDrawer>

    <!-- 新建 -->
    <componetsAddForm
      :showAdd="showFormDialog"
      :title="state.title"
      :column="state.column"
      @on-cancel="closeFormDialog"
      @on-confirm="submitFromDialog"
    >
    </componetsAddForm>
    <JyElMessageBox
      v-model="state.JyElMessageBox.show"
      :show="state.JyElMessageBox.show"
      :defaultAttribute="{}"
      :showClose="false"
      @confirmClick="confirmClick($t(state.JyElMessageBox.header.data))"
    >
      <template #header>
        <div class="header-div">
          <img :src="state.JyElMessageBox.header.icon" alt="" />
          <span>{{ $t(state.JyElMessageBox.header.data) }}</span>
        </div>
      </template>
      <template #content>
        {{ state.JyElMessageBox.content.data }}
      </template>
    </JyElMessageBox>
  </div>
</template>

<script setup>
  import { ref, reactive, onBeforeMount } from 'vue'
  import JyTable from '@/views/components/JyTable.vue'
  import componetsAddForm from './modules/addDealing.vue'
  import { ElMessage } from 'element-plus'
  import api from '@/api/system/companyManagement/companyDealing'
  import JyDetailDrawer from '@/views/components/drawerDetails/index.vue'

  const detailDrawerShow = ref(false)
  const detailParams = ref([])

  const showFormDialog = ref(false)
  const table = ref(null)
  const state = reactive({
    title: '新增',
    column: {},
    relatedCompanyIds: [],
    componetsAddForm: {
      showAddDialog: false
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
          id: 'relatedCompanyName',
          label: '关键词',
          type: 'input',
          inCommonUse: true,
          // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
          defaultAttribute: {
            placeholder: '企业名称/企业编码/联系人/联系方式'
          }
        },
        {
          id: 'organId',
          requestParams: 'organId',
          label: '所属部门',
          type: 'derivable',
          inCommonUse: true,
          // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
          defaultAttribute: {
            type: 'organ',
            placeholder: '+所属部门',
            joinStr: ',',
            multiple: true
          },
          values: []
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
          name: 't-zgj-query',
          type: 'click',
          // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
          defaultAttribute: {
            type: 'primary'
          },
          style: {}
        },
        {
          id: 'reset',
          name: 't-zgj-reset',
          type: 'click',
          // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
          defaultAttribute: {},
          style: {}
        }
      ]
    },

    componentsTable: {
      header: [
        {
          prop: 'relatedCompanyName',
          label: '企业名称',
          sortable: true,
          'min-width': 150,
          fixed: true,
          'show-overflow-tooltip': true,
          show: true
        },
        {
          prop: 'relatedCompanyNo',
          label: '企业编码',
          sortable: true,
          show: true,
          'min-width': 150
        },

        {
          prop: 'organName',
          label: '所属部门',
          sortable: true,
          show: true,
          'min-width': 150
        },
        {
          prop: 'contactName',
          label: '联系人',
          sortable: true,
          show: true,
          'min-width': 150
        },
        {
          prop: 'contactInformation',
          label: '联系方式',
          sortable: true,
          show: true,
          'min-width': 150
        },
        {
          prop: 'readme',
          label: '备注',
          sortable: true,
          show: true,
          'min-width': 150,
          'show-overflow-tooltip': true
        },
        {
          prop: '7',
          label: '操作',
          fixed: 'right',
          width: '120px',
          show: true,
          align: 'center',
          rankDisplayData: [
            {
              name: 't-zgj-Edit'
            },
            {
              name: 't-zgj-Delete'
            }
          ]
        }
      ],
      data: [],
      // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
      defaultAttribute: {
        stripe: true,
        'header-cell-style': {
          background: 'var(--jy-color-fill--3)'
        },
        'cell-style': ({ row, column, rowIndex, columnIndex }) => {
          if (column.property === 'relatedCompanyName') {
            return {
              color: 'var(--jy-info-6)',
              cursor: 'pointer'
            }
          }
        }
      },
      loading: false
    },

    componentsPagination: {
      data: {
        amount: 0,
        index: 1,
        pageNumber: 10
      },
      // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
      defaultAttribute: {
        layout: 'prev, pager, next, jumper',
        total: 0,
        'page-sizes': [10, 50, 100],
        background: true
      }
    },

    componentsBatch: {
      selectionData: [],
      defaultAttribute: {
        disabled: true
      },
      data: [
        {
          name: 't-zgj-seal.BatchDelete'
        }
      ]
    },
    JyElMessageBox: {
      show: false,
      header: {
        data: '',
        icon: '/src/assets/svg/common/warning.svg'
      },
      content: {
        data: ''
      },
      type: '删除'
    }
  })
  // 关闭新增弹窗
  const closeFormDialog = () => {
    showFormDialog.value = false
  }
  // 提交
  const submitFromDialog = (data, type) => {
    if (data.code === 200) {
      ElMessage.success(`${type}成功！`)
      showFormDialog.value = false
      table.value.reloadData()
    }
  }
  // 点击表格单元格
  function cellClick(row, column, cell, event) {
    if (column.property === 'relatedCompanyName') {
      detailDrawerShow.value = true
      detailParams.value = [
        {
          value: 'detail',
          params: row.relatedCompanyId
        }
      ]
    }
  }
  // 点击表格按钮
  function customClick(row, column, cell, event) {
    state.relatedCompanyIds = []
    state.relatedCompanyIds.push(column.relatedCompanyId)
    if (cell.name === 't-zgj-Edit') {
      state.title = 't-zgj-Edit'
      api.detailRelatedCompany(column.relatedCompanyId).then(res => {
        if (res.code === 200) {
          state.column = res.data
          showFormDialog.value = true
        }
      })
    }
    if (cell.name === 't-zgj-Delete') {
      state.JyElMessageBox.header.data = 't-zgj-Delete'
      state.JyElMessageBox.content.data = '请问确定要删除吗？'
      state.JyElMessageBox.show = true
    }
  }
  const confirmClick = data => {
    delRows(data)
  }
  const delRows = delType => {
    api
      .deleteRelatedCompany({ relatedCompanyIds: state.relatedCompanyIds })
      .then(res => {
        if (res.code === 200) {
          ElMessage.success(`${delType}成功！`)
          state.JyElMessageBox.show = false
          // getFormPage()
          table.value.reloadData()
        }
      })
  }
  // 批量操作
  const clickBatchButton = (item, selection) => {
    state.relatedCompanyIds = []
    const list = (state.componentsBatch.selectionData = selection)
    let nameList = ''
    const nameArr = []
    const nameIdArr = []
    list.forEach(el => {
      nameArr.push(`[${el.relatedCompanyName}]`)
      nameIdArr.push(el.relatedCompanyId)
    })
    state.relatedCompanyIds = nameIdArr
    nameList = nameArr.join('、')
    if (item.name === 't-zgj-seal.BatchDelete') {
      state.JyElMessageBox.header.data = 't-zgj-seal.BatchDelete'
      state.JyElMessageBox.content.data = `已选中往来企业：${nameList}，请问确定要批量删除吗？`
      state.JyElMessageBox.show = true
      state.JyElMessageBox.type = '批量删除'
    }
  }
  onBeforeMount(() => {})
</script>

<style lang="scss" scoped>
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title-more {
      height: 100%;
      display: flex;
      align-items: center;

      .title-more-add {
        margin-right: 0.5rem;
        height: 100%;
        display: flex;
        align-items: center;
      }

      .title-more-down {
        height: 100%;
        display: flex;
        align-items: center;
        img {
          margin-right: 5px;
        }
      }
    }
  }
</style>
