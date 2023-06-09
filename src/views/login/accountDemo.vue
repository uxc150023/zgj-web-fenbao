<template>
  <div class="vertify">
    <!-- 验证box -->
    <div class="vertify-box">
      <div
        className="vertifyWrap"
        :style="{
          width: width + 'px',
          margin: '0 auto',
          display: visible ? '' : 'none'
        }"
        @mousemove="handleDragMove"
        @mouseup="handleDragEnd"
        @touchmove="handleDragMove"
        @touchend="handleDragEnd"
      >
        <div className="canvasArea">
          <canvas ref="canvasRef" :width="width" :height="height"></canvas>
          <canvas
            ref="blockRef"
            className="block"
            :width="width"
            :height="height"
            @mousedown="handleDragStart"
            @touchstart="handleDragStart"
          ></canvas>
        </div>
        <div
          :className="sliderClass"
          :style="{
            pointerEvents: isLoading ? 'none' : 'auto',
            width: width + 'px'
          }"
        >
          <div
            className="sliderMask"
            :style="{
              width: sliderLeft > 0 ? sliderLeft + 8 + 'px' : sliderLeft + 'px'
            }"
          >
            <div
              className="slider"
              :style="{ left: sliderLeft + 'px' }"
              @mousedown="handleDragStart"
              @touchstart="handleDragStart"
            >
              <div className="sliderIcon">&rarr;</div>
            </div>
          </div>
          <div className="sliderText">{{ textTip }}</div>
        </div>
        <div
          className="refreshIcon"
          v-if="false"
          @click="handleRefresh"
          :style="{ backgroundImage: `url(${refreshIcon})` }"
        ></div>
        <div
          className="loadingContainer"
          :style="{
            width: width + 'px',
            height: height + 'px',
            display: isLoading ? '' : 'none'
          }"
        >
          <div className="loadingIcon"></div>
          <span>加载中...</span>
        </div>
      </div>

      <!-- footer -->
      <div class="vertify-footer">
        <img
          class="image"
          src="../../assets/images/login/close_circle_line.svg"
        />
        <img
          @click="handleRefresh"
          src="../../assets/images/login/refresh_line.svg"
          :class="isLoading ? 'loading-icon' : ''"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { getRandomNumberByRange, sum, square } from './tool'
  import { ref, watch, onMounted } from 'vue'
  // interface VertifyType {
  //   spliced: boolean;
  //   verified: boolean; // 简单验证拖动轨迹，为零时表示Y轴上下没有波动，可能非人为操作
  //   left: number; // 滑块的移动位置
  //   destX: number; // 滑块的目标位置
  // }
  defineEmits(['click'])

  const props = defineProps({
    width: {
      type: Number,
      default: 270
    },
    height: {
      type: Number,
      default: 160
    },
    visible: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    refreshIcon: {
      type: String,
      default: 'http://cdn.dooring.cn/dr/icon12.png'
    },
    l: {
      type: Number,
      default: 42
    },
    r: {
      type: Number,
      default: 9
    },
    imgUrl: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: '拖动滑块完成拼图'
    },
    /**
     * @description   拖拽滑块时的回调, 参数为当前滑块拖拽的距离
     * @default       (l: number):void => {}
     */
    onDraw: () => {},
    /**
     * @description   用户的自定义验证逻辑
     * @default       (arg: VertifyType) => VertifyType
     */
    onCustomVertify: () => {},
    /**
     * @description   重制刷新前的回调
     * @default       ():void => {}
     */
    onBeforeRefresh: () => {},
    /**
     * @description   验证成功回调
     * @default       ():void => {}
     */
    onSuccess: () => {},
    /**
     * @description   验证失败回调
     * @default       ():void => {}
     */
    onFail: () => {},
    /**
     * @description   刷新时回调
     * @default       ():void => {}
     */
    onRefresh: () => {}
  })

  // eslint-disable-next-line vue/no-setup-props-destructure
  const {
    text,
    l,
    r,
    imgUrl,
    width,
    height,
    visible,
    onBeforeRefresh,
    onRefresh,
    onFail,
    onSuccess,
    onCustomVertify,
    onDraw
  } = props

  const isLoading = ref(false)
  const sliderLeft = ref(0)
  const sliderClass = ref('sliderContainer')
  const textTip = ref(text)
  const canvasRef = ref(null)
  const blockRef = ref(null)
  const imgRef = ref(null)
  const isMouseDownRef = ref(false)
  const trailRef = ref([])
  const originXRef = ref(0)
  const originYRef = ref(0)
  const xRef = ref(0)
  const yRef = ref(0)
  const PI = Math.PI
  const L = l + r * 2 + 3 // 滑块实际边长
  const drawPath = (ctx, x, y, operation) => {
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.arc(x + l / 2, y - r + 2, r, 0.72 * PI, 2.26 * PI)
    ctx.lineTo(x + l, y)
    ctx.arc(x + l + r - 2, y + l / 2, r, 1.21 * PI, 2.78 * PI)
    ctx.lineTo(x + l, y + l)
    ctx.lineTo(x, y + l)
    ctx.arc(x + r - 2, y + l / 2, r + 0.4, 2.76 * PI, 1.24 * PI, true)
    ctx.lineTo(x, y)
    ctx.lineWidth = 2
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)'
    ctx.stroke()
    ctx.globalCompositeOperation = 'destination-over'
    operation === 'fill' ? ctx.fill() : ctx.clip()
  }

  const getRandomImgSrc = () => {
    return (
      imgUrl ||
      `https://picsum.photos/id/${getRandomNumberByRange(
        0,
        1084
      )}/${width}/${height}`
    )
  }

  const createImg = onload => {
    const img = new Image()
    img.crossOrigin = 'Anonymous'
    img.onload = onload
    img.onerror = () => {
      img.setSrc(getRandomImgSrc()) // 图片加载失败的时候重新加载其他图片
    }

    img.setSrc = src => {
      const isIE = window.navigator.userAgent.indexOf('Trident') > -1
      if (isIE) {
        // IE浏览器无法通过img.crossOrigin跨域，使用ajax获取图片blob然后转为dataURL显示
        const xhr = new XMLHttpRequest()
        xhr.onloadend = function (e) {
          const file = new FileReader() // FileReader仅支持IE10+
          file.readAsDataURL(e.target.response)
          file.onloadend = function (e) {
            img.src = e.target.result
          }
        }
        xhr.open('GET', src)
        xhr.responseType = 'blob'
        xhr.send()
      } else img.src = src
    }

    img.setSrc(getRandomImgSrc())
    return img
  }

  const draw = img => {
    const canvasCtx = canvasRef.value.getContext('2d')
    const blockCtx = blockRef.value.getContext('2d')
    // 随机位置创建拼图形状
    xRef.value = getRandomNumberByRange(L + 10, width - (L + 10))
    yRef.value = getRandomNumberByRange(10 + r * 2, height - (L + 10))
    drawPath(canvasCtx, xRef.value, yRef.value, 'fill')
    drawPath(blockCtx, xRef.value, yRef.value, 'clip')

    // 画入图片
    canvasCtx.drawImage(img, 0, 0, width, height)
    blockCtx.drawImage(img, 0, 0, width, height)

    // 提取滑块并放到最左边
    const y1 = yRef.value - r * 2 - 1
    const ImageData = blockCtx.getImageData(xRef.value - 3, y1, L, L)
    blockRef.value.width = L
    blockCtx.putImageData(ImageData, 0, y1)
  }

  const initImg = () => {
    const img = createImg(() => {
      isLoading.value = false
      draw(img)
    })
    imgRef.value = img
  }
  const reset = () => {
    const canvasCtx = canvasRef.value.getContext('2d')
    const blockCtx = blockRef.value.getContext('2d')
    // 重置样式
    sliderLeft.value = 0
    sliderClass.value = 'sliderContainer'
    blockRef.value.width = width
    blockRef.value.style.left = 0 + 'px'

    // 清空画布
    canvasCtx.clearRect(0, 0, width, height)
    blockCtx.clearRect(0, 0, width, height)

    onBeforeRefresh && onBeforeRefresh()

    // 重新加载图片
    isLoading.value = true
    imgRef.value.setSrc(getRandomImgSrc())
  }

  const handleRefresh = () => {
    reset()
    typeof onRefresh === 'function' && onRefresh()
  }

  const verify = () => {
    const arr = trailRef.value // 拖动时y轴的移动距离
    const average = arr.reduce(sum) / arr.length
    const deviations = arr.map(x => x - average)
    const stddev = Math.sqrt(deviations.map(square).reduce(sum) / arr.length)
    const left = parseInt(blockRef.value.style.left)
    return {
      spliced: Math.abs(left - xRef.value) < 10,
      verified: stddev !== 0, // 简单验证拖动轨迹，为零时表示Y轴上下没有波动，可能非人为操作
      left,
      destX: xRef.value
    }
  }

  const handleDragStart = function (e) {
    originXRef.value = e.clientX || e.touches[0].clientX
    originYRef.value = e.clientY || e.touches[0].clientY
    isMouseDownRef.value = true
  }

  const handleDragMove = e => {
    if (!isMouseDownRef.value) return false
    e.preventDefault()
    const eventX = e.clientX || e.touches[0].clientX
    const eventY = e.clientY || e.touches[0].clientY
    const moveX = eventX - originXRef.value
    const moveY = eventY - originYRef.value
    if (moveX < 0 || moveX + 38 >= width) return false
    sliderLeft.value = moveX
    const blockLeft = ((width - 40 - 20) / (width - 40)) * moveX
    blockRef.value.style.left = blockLeft + 'px'

    sliderClass.value = 'sliderContainer sliderContainer_active'
    trailRef.value.push(moveY)
    onDraw && onDraw(blockLeft)
  }

  const handleDragEnd = e => {
    if (!isMouseDownRef.value) return false
    isMouseDownRef.value = false
    const eventX = e.clientX || e.changedTouches[0].clientX
    if (eventX === originXRef.value) return false
    sliderClass.value = 'sliderContainer'
    const { spliced, verified } = onCustomVertify
      ? onCustomVertify(verify())
      : verify()
    if (spliced) {
      if (verified) {
        sliderClass.value = 'sliderContainer sliderContainer_success'
        typeof onSuccess === 'function' && onSuccess()
      } else {
        sliderClass.value = 'sliderContainer sliderContainer_fail'
        textTip.value = '请再试一次'
        reset()
      }
    } else {
      sliderClass.value = 'sliderContainer sliderContainer_fail'
      typeof onFail === 'function' && onFail()
      setTimeout(reset.bind(this), 1000)
    }
  }

  onMounted(() => {
    initImg()
  })

  watch(
    () => visible,
    () => {
      if (visible) {
        imgRef.value ? reset() : initImg()
      }
    }
  )
</script>

<style scoped lang="scss">
  .vertify {
    height: 100vh;
    width: 100vw;
    position: relative;

    .vertify-box {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 298px;
      height: 320px;
      background: #ffffff;
      // border: 1px solid #F0F0F0;
      box-shadow: 0 8px 100px 0 rgba(19, 59, 99, 0.07);
      border-radius: 4px;
      margin: auto;
      z-index: 9999;
      padding-top: 12px;

      .vertifyWrap {
        position: relative;

        .block {
          position: absolute;
          left: 0;
          top: 0;
          cursor: pointer;
          cursor: grab;
        }

        .block:active {
          cursor: grabbing;
        }

        .sliderContainer {
          position: relative;
          text-align: center;
          width: 310px;
          height: 40px;
          line-height: 40px;
          margin-top: 15px;
          background: #dddfe0;
          color: #45494c;
          border-radius: 20px;
          // border: 1px solid #e4e7eb;
        }

        .sliderContainer_active .slider {
          // height: 39px;
          top: -5px;
          // border: 1px solid var(--jy-primary-6);
        }

        .sliderContainer_active .sliderMask {
          // height: 39px;
          border-width: 1px;
        }

        .sliderContainer_success .slider {
          // height: 39px;
          top: -5px;
          // border: 1px solid #0db87f;
          background-color: #0ca14a !important;
        }

        .sliderContainer_success .sliderMask {
          // height: 39px;
          // border: 1px solid #0db87f;
          background-color: #d2f4ef;
        }

        .sliderContainer_success .sliderIcon {
          background-position: 0 -26px !important;
        }

        .sliderContainer_fail .slider {
          // height: 39px;
          top: -5px;
          // border: 1px solid #f57a7a;
          background-color: #f57a7a !important;
        }

        .sliderContainer_fail .sliderMask {
          // height: 39px;
          // border: 1px solid #f57a7a;
          background-color: #fce1e1;
        }

        .sliderContainer_fail .sliderIcon {
          top: 14px;
          background-position: 0 -82px !important;
        }

        .sliderContainer_active .sliderText,
        .sliderContainer_success .sliderText,
        .sliderContainer_fail .sliderText {
          display: none;
        }

        .sliderMask {
          position: absolute;
          left: 0;
          top: 0;
          height: 40px;
          // border: 0 solid var(--jy-primary-6);
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
          background: rgba(var(--jy-primary-6), 0.3);
        }

        .slider {
          position: absolute;
          top: -5px;
          left: 0;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 0 3px rgba(#999, 0.6);
          transition: background 0.2s linear;
          cursor: pointer;
          cursor: grab;
        }

        .slider:active {
          cursor: grabbing;
        }

        .slider:hover {
          background: var(--jy-primary-6);
        }

        .sliderIcon {
          margin-top: 5px;
          font-size: 18px;
          color: #000;
        }

        .slider:hover .sliderIcon {
          color: #fff;
        }

        .refreshIcon {
          position: absolute;
          right: 5px;
          top: 5px;
          width: 30px;
          height: 30px;
          cursor: pointer;
          background-size: 32px;
        }

        .loadingContainer {
          position: absolute;
          left: 0;
          top: 0;
          width: 310px;
          height: 155px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          color: #45494c;
          z-index: 2;
          background: rgba(var(--jy-primary-6), 0.1);
        }

        .loadingIcon {
          width: 32px;
          height: 32px;
          margin-bottom: 10px;
          background: url(http://cdn.dooring.cn/dr/icon12.png);
          background-size: 32px;
          animation: loading-icon-rotate 0.8s linear infinite;
        }

        @keyframes loading-icon-rotate {
          from {
            transform: rotate(0);
          }

          to {
            transform: rotate(360deg);
          }
        }
      }
    }

    .vertify-footer {
      height: 60px;
      margin-top: 24px;
      border-top: 1px solid #eee;
      display: flex;
      align-items: center;

      .image {
        margin: 0 10px;
      }

      img {
        cursor: pointer;
      }

      .loading-icon {
        animation: loading-icon-rotate1 0.8s linear infinite;
      }
      @keyframes loading-icon-rotate1 {
        from {
          transform: rotate(0);
        }

        to {
          transform: rotate(180deg);
        }
      }
    }
  }
</style>
