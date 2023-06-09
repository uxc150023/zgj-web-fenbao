<template>
  <el-drawer
    class="right-bar"
    v-model="layoutStore.rightBarVisible"
    direction="rtl"
    size="400"
  >
    <template #header>
      <span>主题定制器</span>
    </template>

    <template #default>
      <div>
        <p class="label">整体风格设置</p>
        <p class="label-normal">选择浅色或深色方案</p>
        <div class="select-img">
          <div
            @click="layoutStore.themeType = 'light'"
            :class="layoutStore.themeType === 'light' ? 'active' : ''"
          >
            <img src="@/assets/svg/rightbar/lightColor.svg" alt="" />
          </div>
          <div
            @click="messageWarning('敬请期待')"
            :class="layoutStore.themeType === 'dark' ? 'active' : ''"
          >
            <img src="@/assets/svg/rightbar/darkColor.svg" alt="" />
          </div>
        </div>
      </div>

      <div>
        <p class="label">主题色</p>
        <div class="theme-color-list">
          <span class="color-1" @click="colorChange('#448ef7')"></span>
          <span class="color-2" @click="colorChange('#e13c39')"></span>
          <span class="color-3" @click="colorChange('#e76033')"></span>
          <span class="color-4" @click="colorChange('#efb041')"></span>
          <span class="color-5" @click="colorChange('#5abfc1')"></span>
          <span class="color-6" @click="colorChange('#72c240')"></span>
          <span class="color-7" @click="colorChange('#3853e2')"></span>
          <span class="color-8" @click="colorChange('#6a32c9')"></span>
        </div>
        <div class="custom-color">
          <span class="custom-label">自定义</span>
          <el-color-picker
            v-model="layoutStore.customColor"
            @change="colorChange"
          />
          <span>{{ layoutStore.customColor }}</span>
        </div>
      </div>

      <div>
        <p class="label">顶栏颜色</p>
        <p class="label-normal">选择浅色或深色顶栏颜色</p>
        <div class="select-img">
          <div
            @click="layoutStore.topbar = 'light'"
            :class="layoutStore.topbar === 'light' ? 'active' : ''"
          >
            <img src="@/assets/svg/rightbar/lightColor.svg" alt="" />
          </div>
          <div
            @click="layoutStore.topbar = 'dark'"
            :class="layoutStore.topbar === 'dark' ? 'active' : ''"
          >
            <img src="@/assets/svg/rightbar/topDarkColor.svg" alt="" />
          </div>
        </div>
      </div>

      <div>
        <p class="label">侧边栏大小</p>
        <p class="label-normal">选择侧边栏的大小</p>
        <div class="select-img">
          <div
            @click="layoutStore.isCollapse = false"
            :class="!layoutStore.isCollapse ? 'active' : ''"
          >
            <img src="@/assets/svg/rightbar/lightColor.svg" alt="" />
          </div>
          <div
            @click="layoutStore.isCollapse = true"
            :class="layoutStore.isCollapse ? 'active' : ''"
          >
            <img src="@/assets/svg/rightbar/small.svg" alt="" />
          </div>
        </div>
      </div>

      <div>
        <p class="label">侧边栏视图</p>
        <p class="label-normal">选择默认或分离的侧边栏视图</p>

        <div class="select-img">
          <div
            @click="sidebarTypeChange('1')"
            :class="layoutStore.sidebarType === '1' ? 'active' : ''"
          >
            <img src="@/assets/svg/rightbar/lightColor.svg" alt="" />
          </div>
          <div
            @click="sidebarTypeChange('2')"
            :class="layoutStore.sidebarType === '2' ? 'active' : ''"
          >
            <img src="@/assets/svg/rightbar/combination.svg" alt="" />
          </div>
        </div>
      </div>

      <div>
        <p class="label">侧边栏颜色</p>
        <p class="label-normal">选择侧边栏的颜色</p>

        <div class="select-img">
          <div
            @click="layoutStore.menuColor = 'light'"
            :class="layoutStore.menuColor === 'light' ? 'active' : ''"
          >
            <img src="@/assets/svg/rightbar/lightColor.svg" alt="" />
          </div>
          <div
            @click="layoutStore.menuColor = 'dark'"
            :class="layoutStore.menuColor === 'dark' ? 'active' : ''"
          >
            <img src="@/assets/svg/rightbar/menuDark.svg" alt="" />
          </div>
        </div>
      </div>
    </template>

    <template #footer>
      <el-button @click="reset">重置</el-button>
    </template>
  </el-drawer>
</template>

<script setup>
  import { messageWarning } from '@/hooks/useMessage'
  import { useLayoutStore } from '@/store/layout'
  import { useMenusInfoStore } from '@/store/menus'
  import { TinyColor } from '@ctrl/tinycolor'

  const layoutStore = useLayoutStore()
  const menusInfoStore = useMenusInfoStore()

  const reset = () => {
    layoutStore.reset()
  }

  const sidebarTypeChange = value => {
    layoutStore.sidebarType = value
    if (layoutStore.sidebarType === '1') {
      menusInfoStore.menus =
        menusInfoStore.currentType === 'business'
          ? menusInfoStore.businessMenus
          : menusInfoStore.systemMenus
    }
  }

  const darken = (color, amount = 20) => {
    return color.mix('#141414', amount).toString()
  }

  const colorChange = value => {
    const color = new TinyColor(value)
    layoutStore.customColor = value
    const hoverBgColor = color.tint(30).toString()
    const hoverBgColor1 = color.tint(90).toString()
    const activeBgColor = darken(color, 20)
    const node = document.getElementsByTagName('body')[0]
    node.style.setProperty('--jy-primary-6', value)
    node.style.setProperty('--jy-primary-5', hoverBgColor)
    node.style.setProperty('--jy-primary-1', hoverBgColor)
    node.style.setProperty('--jy-primary-9', hoverBgColor1)
    node.style.setProperty('--jy-primary-4', activeBgColor)
    node.style.setProperty('--jy-primary-2', hoverBgColor1)
    node.style.setProperty(
      '--jy-primary-11',
      color.isDark() || value === '#efb041' || value === '#D0963E'
        ? '#fff'
        : '#000'
    )
    node.style.setProperty('--jy-primary-3', value)
    // --jy-color-text-1

    // node.style.setProperty('--jy-color-text-1', value)
    // node.style.setProperty(
    //   '--jy-color-text-1',
    //   color.isDark() ? '#fff' : '#000'
    // )
    // styles = ns.cssVarBlock({
    //   'bg-color': buttonColor,
    //   'text-color': textColor,
    //   'border-color': buttonColor,
    //   'hover-bg-color': hoverBgColor,
    //   'hover-text-color': textColor,
    //   'hover-border-color': hoverBgColor,
    //   'active-bg-color': activeBgColor,
    //   'active-border-color': activeBgColor
    // })
  }
</script>

<style lang="scss">
  .right-bar {
    .el-drawer__header {
      background-color: var(--jy-primary-6);
      height: 50px;
      display: flex;
      align-items: center;
      padding: 0 20px;
      margin-bottom: 0;

      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #ffffff;
    }
    .el-drawer__body {
      padding: 40px 20px;
      .label {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: rgba(0, 0, 0, 0.85);
        margin-bottom: 4px;
      }
      .label-normal {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: rgba(0, 0, 0, 0.45);
        margin-bottom: 12px;
      }
      .select-img {
        display: flex;
        margin-bottom: 40px;
        div {
          margin-right: 12px;
          cursor: pointer;
          border: 1px solid rgba(0, 0, 0, 0.02);
          border-radius: 4px;
          width: 114px;
          height: 76px;
          img {
            width: 112px;
            height: 74px;
          }
        }
        .active {
          border-color: var(--jy-primary-6);
        }
      }
      .theme-color-list {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        margin-bottom: 12px;
        span {
          width: 26px;
          height: 26px;
          background: #448ef7;
          border-radius: 2px;
          cursor: pointer;
        }
        .color-1 {
          background-color: #448ef7;
        }
        .color-2 {
          background-color: #e13c39;
        }
        .color-3 {
          background-color: #e76033;
        }
        .color-4 {
          background-color: #efb041;
        }
        .color-5 {
          background-color: #5abfc1;
        }
        .color-6 {
          background-color: #72c240;
        }
        .color-7 {
          background-color: #3853e2;
        }
        .color-8 {
          background-color: #6a32c9;
        }
      }
      .custom-color {
        display: flex;
        align-items: center;
        margin-bottom: 40px;
        .custom-label {
          font-weight: 400;
          font-size: 14px;
          line-height: 22px;
          color: #000000;
        }
        .el-color-picker {
          .el-color-picker__trigger {
            border: 1px solid rgba(0, 0, 0, 0.15);
            width: 86px;
            height: 26px;
            margin: 0 12px;
          }
          i {
            display: none;
          }
          .el-color-picker__color {
            border: 0;
          }
          .el-color-picker__color-inner {
            // display: none;
          }
        }
      }
    }
  }
</style>
