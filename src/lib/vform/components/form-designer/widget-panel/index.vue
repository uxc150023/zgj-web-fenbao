<template>
  <el-scrollbar class="side-scroll-bar" :style="{ height: scrollerHeight }">
    <div class="panel-container">
      <el-tabs v-model="firstTab" class="no-bottom-margin indent-left-margin">
        <el-tab-pane name="componentLib">
          <template #label>
            <span
              ><svg-icon icon-class="el-set-up" />
              {{ i18nt('designer.componentLib') }}</span
            >
          </template>
          <el-scrollbar>
            <el-collapse v-model="activeNames" class="widget-collapse">
              <el-collapse-item
                name="1"
                :title="i18nt('designer.containerTitle')"
              >
                <draggable
                  tag="ul"
                  :list="containers"
                  item-key="key"
                  :group="{ name: 'dragGroup', pull: 'clone', put: false }"
                  :clone="handleContainerWidgetClone"
                  ghost-class="ghost"
                  :sort="false"
                  :move="checkContainerMove"
                  @end="onContainerDragEnd"
                >
                  <template #item="{ element: ctn }">
                    <li
                      class="container-widget-item"
                      :title="ctn.displayName"
                      @dblclick="addContainerByDbClick(ctn)"
                    >
                      <span
                        ><svg-icon
                          :icon-class="ctn.icon"
                          class-name="color-svg-icon"
                        />{{ getWidgetLabel(ctn) }}</span
                      >
                    </li>
                  </template>
                </draggable>
              </el-collapse-item>

              <el-collapse-item
                name="2"
                :title="i18nt('designer.basicFieldTitle')"
              >
                <draggable
                  tag="ul"
                  :list="basicFields"
                  item-key="key"
                  :group="{ name: 'dragGroup', pull: 'clone', put: false }"
                  :move="checkFieldMove"
                  :clone="handleFieldWidgetClone"
                  ghost-class="ghost"
                  :sort="false"
                >
                  <template #item="{ element: fld }">
                    <li
                      class="field-widget-item"
                      :title="fld.displayName"
                      @dblclick="addFieldByDbClick(fld)"
                    >
                      <span
                        ><svg-icon
                          :icon-class="fld.icon"
                          class-name="color-svg-icon"
                        />{{ getWidgetLabel(fld) }}</span
                      >
                    </li>
                  </template>
                </draggable>
              </el-collapse-item>

              <el-collapse-item
                name="3"
                :title="i18nt('designer.advancedFieldTitle')"
              >
                <draggable
                  tag="ul"
                  :list="advancedFields"
                  item-key="key"
                  :group="{ name: 'dragGroup', pull: 'clone', put: false }"
                  :move="checkFieldMove"
                  :clone="handleFieldWidgetClone"
                  ghost-class="ghost"
                  :sort="false"
                >
                  <template #item="{ element: fld }">
                    <li
                      class="field-widget-item"
                      :title="fld.displayName"
                      @dblclick="addFieldByDbClick(fld)"
                    >
                      <span
                        ><svg-icon
                          :icon-class="fld.icon"
                          class-name="color-svg-icon"
                        />{{ getWidgetLabel(fld) }}</span
                      >
                    </li>
                  </template>
                </draggable>
              </el-collapse-item>

              <el-collapse-item
                name="4"
                :title="i18nt('designer.customFieldTitle')"
              >
                <draggable
                  tag="ul"
                  :list="customFields"
                  item-key="key"
                  :group="{ name: 'dragGroup', pull: 'clone', put: false }"
                  :move="checkFieldMove"
                  draggable=".can-move"
                  :clone="handleFieldWidgetClone"
                  ghost-class="ghost"
                  :sort="false"
                >
                  <template #item="{ element: fld }">
                    <li
                      class="field-widget-item"
                      :class="[
                        haveWidgets.includes(fld.type) &&
                        fld.type !== 'moduleContainer'
                          ? 'disabled'
                          : 'can-move'
                      ]"
                      :title="fld.displayName"
                      @dblclick="addFieldByDbClick(fld)"
                    >
                      <svg
                        class="iconpark-icon"
                        style="
                          width: 20px;
                          height: 20px;
                          color: var(--jy-primary-6);
                        "
                      >
                        <use :href="`#${fld.icon}`"></use>
                      </svg>
                      {{ getWidgetLabel(fld) }}
                    </li>
                  </template>
                </draggable>
              </el-collapse-item>
            </el-collapse>
          </el-scrollbar>
        </el-tab-pane>

        <el-tab-pane
          v-if="showFormTemplates()"
          name="formLib"
          style="padding: 8px"
        >
          <template #label>
            <span
              ><svg-icon icon-class="el-form-template" />
              {{ i18nt('designer.formLib') }}</span
            >
          </template>
          <el-scrollbar height="calc(100vh - 110px)">
            <template v-for="(ft, idx) in formTemplates" :key="idx">
              <el-card
                :bordStyle="{ padding: '0' }"
                shadow="hover"
                class="ft-card"
              >
                <el-popover placement="right" trigger="hover">
                  <template #reference>
                    <img :src="ftImages[idx].imgUrl" style="width: 200px" />
                  </template>
                  <img
                    :src="ftImages[idx].imgUrl"
                    style="height: 600px; width: 720px"
                  />
                </el-popover>
                <div class="bottom clear-fix">
                  <span class="ft-title">#{{ idx + 1 }} {{ ft.title }}</span>
                  <el-button
                    link
                    type="primary"
                    class="right-button"
                    @click="loadFormTemplate(ft.jsonUrl)"
                  >
                    {{ i18nt('designer.hint.loadFormTemplate') }}</el-button
                  >
                </div>
              </el-card>
            </template>
          </el-scrollbar>
        </el-tab-pane>
      </el-tabs>
    </div>
  </el-scrollbar>
</template>

<script>
  import SvgIcon from '@/lib/vform/components/svg-icon'
  import {
    containers as CONS,
    basicFields as BFS,
    advancedFields as AFS,
    customFields as CFS
  } from './widgetsConfig'
  import { addWindowResizeHandler, generateId } from '@/lib/vform/utils/util'
  import i18n from '@/lib/vform/utils/i18n'
  import { getArrFromTree } from '@/utils/tools'

  import ftImg1 from '@/lib/vform/assets/ft-images/t1.png'
  import ftImg2 from '@/lib/vform/assets/ft-images/t2.png'
  import ftImg3 from '@/lib/vform/assets/ft-images/t3.png'
  import ftImg4 from '@/lib/vform/assets/ft-images/t4.png'
  import ftImg5 from '@/lib/vform/assets/ft-images/t5.png'
  import ftImg6 from '@/lib/vform/assets/ft-images/t6.png'
  import ftImg7 from '@/lib/vform/assets/ft-images/t7.png'
  import ftImg8 from '@/lib/vform/assets/ft-images/t8.png'

  export default {
    name: 'FieldPanel',
    mixins: [i18n],
    components: {
      SvgIcon
    },
    props: {
      designer: Object
    },
    inject: ['getBannedWidgets', 'getDesignerConfig', 'getTemplateList'],
    data() {
      return {
        designerConfig: this.getDesignerConfig(),

        firstTab: 'componentLib',

        scrollerHeight: 0,

        activeNames: ['1', '2', '3', '4'],

        containers: [],
        basicFields: [],
        advancedFields: [],
        customFields: [],

        // formTemplates: formTemplates,
        ftImages: [
          { imgUrl: ftImg1 },
          { imgUrl: ftImg2 },
          { imgUrl: ftImg3 },
          { imgUrl: ftImg4 },
          { imgUrl: ftImg5 },
          { imgUrl: ftImg6 },
          { imgUrl: ftImg7 },
          { imgUrl: ftImg8 }
        ]
      }
    },
    computed: {
      //
      formTemplates() {
        return this.getTemplateList()
      },
      haveWidgets() {
        const arrs = this.getWidgets(
          this.designer.widgetList,
          'widgetList',
          'type'
        )
        return arrs
      }
    },
    created() {
      this.loadWidgets()
    },
    mounted() {
      // this.loadWidgets()

      this.scrollerHeight = window.innerHeight + 'px'
      addWindowResizeHandler(() => {
        this.$nextTick(() => {
          this.scrollerHeight = window.innerHeight + 'px'
          // console.log(this.scrollerHeight)
        })
      })
    },
    methods: {
      getWidgets(widgetList) {
        const res = []
        const fn = (arr, formColumnModel = '') => {
          arr.forEach(v => {
            res.push(v.options.name)
            if (v.widgetList && v.widgetList.length) {
              fn(v.widgetList, formColumnModel)
            }
            if (v.cols && v.cols.length) {
              fn(v.cols, formColumnModel)
            }
          })
        }
        if (widgetList && widgetList.length) {
          widgetList.forEach(v => {
            if (v.category) {
              fn(v.widgetList || v.cols)
            } else {
              res.push(v.options.name)
            }
          })
        }
        return res
      },
      getWidgetLabel(widget) {
        if (widget.alias) {
          // 优先显示组件别名
          return this.i18n2t(
            `designer.widgetLabel.${widget.alias}`,
            `extension.widgetLabel.${widget.alias}`
          )
        }

        return this.i18n2t(
          `designer.widgetLabel.${widget.type}`,
          `extension.widgetLabel.${widget.type}`
        )
      },

      isBanned(wName) {
        return this.getBannedWidgets().indexOf(wName) > -1
      },

      showFormTemplates() {
        if (this.designerConfig.formTemplates === undefined) {
          return true
        }

        return !!this.designerConfig.formTemplates
      },

      loadWidgets() {
        this.containers = CONS.map(con => {
          return {
            key: generateId(),
            ...con,
            displayName: this.i18n2t(
              `designer.widgetLabel.${con.type}`,
              `extension.widgetLabel.${con.type}`
            )
          }
        }).filter(con => {
          return !con.internal && !this.isBanned(con.type)
        })

        this.basicFields = BFS.map(fld => {
          return {
            key: generateId(),
            ...fld,
            displayName: this.i18n2t(
              `designer.widgetLabel.${fld.type}`,
              `extension.widgetLabel.${fld.type}`
            )
          }
        }).filter(fld => {
          return !this.isBanned(fld.type)
        })

        this.advancedFields = AFS.map(fld => {
          return {
            key: generateId(),
            ...fld,
            displayName: this.i18n2t(
              `designer.widgetLabel.${fld.type}`,
              `extension.widgetLabel.${fld.type}`
            )
          }
        }).filter(fld => {
          return !this.isBanned(fld.type)
        })

        this.customFields = CFS.map(fld => {
          return {
            key: generateId(),
            ...fld,
            displayName: this.i18n2t(
              `designer.widgetLabel.${fld.type}`,
              `extension.widgetLabel.${fld.type}`
            )
          }
        }).filter(fld => {
          return !this.isBanned(fld.type)
        })
      },

      handleContainerWidgetClone(origin) {
        return this.designer.copyNewContainerWidget(origin)
      },

      handleFieldWidgetClone(origin) {
        return this.designer.copyNewFieldWidget(origin)
      },

      /* draggable组件的move钩子是在内部子组件被拖放到其他draggable组件时触发！！ */
      checkContainerMove(evt) {
        return this.designer.checkWidgetMove(evt)
      },

      /* draggable组件的move钩子是在内部子组件被拖放到其他draggable组件时触发！！ */
      checkFieldMove(evt) {
        return this.designer.checkFieldMove(evt)
      },

      onContainerDragEnd(evt) {
        // console.log('Drag end of container: ')
        // console.log(evt)
      },

      addContainerByDbClick(container) {
        return false
        this.designer.addContainerByDbClick(container)
      },

      addFieldByDbClick(widget) {
        return false
        this.designer.addFieldByDbClick(widget)
      },

      loadFormTemplate(res) {
        this.designer.loadFormJson(res)
        this.designer.emitHistoryChange()
        // if(!jsonUrl){
        // 	this.designer.loadFormJson(contactUnit)
        // } else {
        // 	this.$confirm(this.i18nt('designer.hint.loadFormTemplateHint'), this.i18nt('render.hint.prompt'), {
        // 	  confirmButtonText: this.i18nt('render.hint.confirm'),
        // 	  cancelButtonText: this.i18nt('render.hint.cancel')
        // 	}).then(() => {
        // 	  axios.get(jsonUrl).then(res => {
        // 	    let modifiedFlag = false
        // 	    if (typeof res.data === 'string') {
        // 	      modifiedFlag = this.designer.loadFormJson( JSON.parse(res.data) )
        // 	    } else if (res.data.constructor === Object) {
        // 	      modifiedFlag = this.designer.loadFormJson(res.data)
        // 	    }
        // 	    if (modifiedFlag) {
        // 	      this.designer.emitHistoryChange()
        // 	    }

        // 	    this.$message.success(this.i18nt('designer.hint.loadFormTemplateSuccess'))
        // 	  }).catch(error => {
        // 	    this.$message.error(this.i18nt('designer.hint.loadFormTemplateFailed') + ':' + error)
        // 	  })
        // 	}).catch(error => {
        // 	  console.error(error)
        // 	})
        // }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .color-svg-icon {
    color: var(--jy-primary-6);
  }

  .side-scroll-bar {
    :deep(.el-scrollbar__wrap) {
      overflow-x: hidden;
    }
  }

  div.panel-container {
    padding-bottom: 10px;
  }

  .no-bottom-margin :deep(.el-tabs__header) {
    margin-bottom: 0;
  }

  .indent-left-margin {
    :deep(.el-tabs__nav) {
      margin-left: 20px;
    }
  }

  .el-collapse-item :deep(ul) > li {
    list-style: none;
  }

  .widget-collapse {
    border-top-width: 0;

    :deep(.el-collapse-item__header) {
      margin-left: 8px;
      font-weight: bold;
      font-size: 14px;
    }

    :deep(.el-collapse-item__content) {
      ul {
        padding-left: 10px; /* 重置IE11默认样式 */
        margin: 0; /* 重置IE11默认样式 */
        margin-block-start: 0;
        margin-block-end: 0.25em;
        padding-inline-start: 10px;

        &:after {
          content: '';
          display: block;
          clear: both;
        }

        .container-widget-item,
        .field-widget-item {
          //text-align: center; // 居中显示不太美观
          display: inline-flex;
          align-items: center;
          height: 28px;
          line-height: 28px;
          width: 115px;
          margin: 2px 6px 6px 0;
          cursor: move;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.02);
          border: 1px #c1c2c3 solid;
          border-radius: 2px;
          font-size: 14px;
          color: rgba(0, 0, 0, 0.85);
          .iconpark-icon {
            margin: 0 0.35em;
            color: var(--jy-primary-6);
          }
        }

        .field-widget-item.disabled {
          background-color: #e9e9eb;
          cursor: auto;
        }

        .container-widget-item:hover,
        .field-widget-item:hover:not(.disabled) {
          background: #ebeef5;
          outline: 1px solid var(--jy-primary-6);
        }

        .drag-handler {
          position: absolute;
          top: 0;
          left: 160px;
          background-color: #dddddd;
          border-radius: 5px;
          padding-right: 5px;
          font-size: 11px;
          color: #666666;
        }
      }
    }
  }

  .el-card.ft-card {
    border: 1px solid #8896b3;
  }

  .ft-card {
    margin-bottom: 10px;

    .bottom {
      margin-top: 10px;
      line-height: 12px;
    }

    /*
    .image-zoom {
      height: 500px;
      width: 620px
    }
    */

    .ft-title {
      font-size: 13px;
      font-weight: bold;
    }

    .right-button {
      padding: 0;
      float: right;
    }

    .clear-fix:before,
    .clear-fix:after {
      display: table;
      content: '';
    }

    .clear-fix:after {
      clear: both;
    }
  }
</style>
