<template>
  <div class="update-password">
    <!-- top -->
    <div class="up-top">
      <!-- 返回按钮 -->
      <div class="back-btn" @click="$emit('close')">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect opacity="0.01" width="24" height="24" fill="black" />
          <path
            d="M5.43286 11.2172C5.05786 11.5922 5.05786 12.1992 5.43286 12.5742L14.5407 21.682C14.9157 22.057 15.5227 22.057 15.8977 21.682C16.2727 21.307 16.2727 20.7 15.8977 20.325L6.78989 11.2172C6.41489 10.8422 5.80786 10.8422 5.43286 11.2172Z"
            fill="#242424"
          />
          <path
            d="M5.43286 12.6071C5.80786 12.9821 6.41489 12.9821 6.78989 12.6071L15.8977 3.49924C16.2727 3.12424 16.2727 2.51721 15.8977 2.14221C15.5227 1.76721 14.9157 1.76721 14.5407 2.14221L5.43286 11.25C5.05786 11.625 5.05786 12.2321 5.43286 12.6071Z"
            fill="#242424"
          />
        </svg>
      </div>
      <!-- title -->
      <div class="back-t">{{
        $t('t-zgj-F_SYSTEM_PERSON_MANAGE_RESET_PWD')
      }}</div>

      <div class="back-btn"></div>
    </div>

    <!-- 步骤条 -->
    <div class="l-steps">
      <VSteps :active="state.active" :lists="state.lists"></VSteps>
    </div>

    <!-- 输入框 -->
    <div class="l-u-inpt">
      <!-- ① - 验证码 -->
      <div class="login-input" v-if="state.active === state.lists[0].value">
        <el-form
          label-position="left"
          ref="loginformCodeRef"
          label-width="1"
          :model="codeLoginForm"
          hide-required-asterisk
          :rules="codeRules"
        >
          <el-form-item prop="inputPhone" class="l-inpt">
            <el-input
              v-model.number="codeLoginForm.inputPhone"
              :placeholder="state.placeholderPhone"
              size="large"
              clearable
              maxlength="11"
            >
              <template #prepend>
                <el-select
                  v-model="state.select"
                  placeholder="+86"
                  style="width: 80px"
                  size="large"
                  disabled
                >
                  <el-option label="+86" value="1" />
                </el-select>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item prop="inputCode">
            <div class="l-code">
              <el-input
                v-model.number="codeLoginForm.inputCode"
                :placeholder="state.placeholderCode"
                size="large"
                clearable
              />

              <VerificationBtn :customStyle="customStyle" />
            </div>
          </el-form-item>
        </el-form>
      </div>

      <!-- ② - 重置密码 -->
      <div class="login-input" v-if="state.active === state.lists[1].value">
        <el-form
          label-position="left"
          ref="loginformPassRef"
          label-width="1"
          :model="passLoginForm"
          hide-required-asterisk
          :rules="passRules"
        >
          <el-form-item prop="inputAccount" class="l-inpt">
            <el-input
              v-model="passLoginForm.inputAccount"
              :placeholder="state.placeholderPassword"
              size="large"
              :type="state.showPass1 ? 'text' : 'password'"
              class="l-code-inpt"
            >
              <template #prefix>
                <div class="icon">
                  <img src="../../../assets/images/login/l_password_icon.svg" />
                </div>
              </template>
              <template #suffix>
                <div
                  class="open-pass"
                  @click="state.showPass1 = !state.showPass1"
                >
                  <img
                    v-if="state.showPass1"
                    src="../../../assets/images/login/l_open_pass.svg"
                  />
                  <img
                    v-else
                    src="../../../assets/images/login/l_close_pass.svg"
                  />
                </div>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item prop="inputPassword" class="l-inpt">
            <div class="l-code">
              <el-input
                v-model="passLoginForm.inputPassword"
                :placeholder="state.placeholderPasswordAgain"
                size="large"
                :type="state.showPass2 ? 'text' : 'password'"
                class="l-code-inpt"
              >
                <template #prefix>
                  <div class="icon">
                    <img
                      src="../../../assets/images/login/l_password_icon.svg"
                    />
                  </div>
                </template>
                <template #suffix>
                  <div
                    class="open-pass"
                    @click="state.showPass2 = !state.showPass2"
                  >
                    <img
                      v-if="state.showPass2"
                      src="../../../assets/images/login/l_open_pass.svg"
                    />
                    <img
                      v-else
                      src="../../../assets/images/login/l_close_pass.svg"
                    />
                  </div>
                </template>
              </el-input>
            </div>
          </el-form-item>
        </el-form>
      </div>

      <!-- ③ - 重置完成 -->
      <div class="l-u-succcess" v-if="state.active === state.lists[2].value">
        <img src="../../../assets/images/login/l_success_icon.png" />
        <div>{{ $t('t-zgj-pwd.succeeded') }}</div>
      </div>
    </div>

    <!-- footer -->
    <div class="l-u-footer">
      <!-- 下一步 -->
      <el-button
        type="primary"
        class="btn"
        @click="goNext"
        v-if="state.active === state.lists[0].value"
      >
        {{ $t('t-zgj-next') }}
      </el-button>
      <el-button
        type="primary"
        class="btn"
        @click="goConfirm"
        v-if="state.active === state.lists[1].value"
      >
        {{ $t('t-zgj-operation.submit') }}
      </el-button>
      <el-button
        type="primary"
        class="btn"
        @click="$emit('close')"
        v-if="state.active === state.lists[2].value"
      >
        {{ $t('t-zgj-chooseUnit.ReturnLogin') }}
      </el-button>
    </div>
  </div>
</template>

<script setup>
  import VSteps from '../components/VSteps.vue'
  import VerificationBtn from '../components/VerificationBtn.vue'
  import i18n from '@/utils/i18n'
  import { reactive, watch, ref } from 'vue'
  import { ElMessage } from 'element-plus'
  const loginformPassRef = ref(null)
  const state = reactive({
    active: 1,
    placeholderPhone: null,
    placeholderCode: null,
    placeholderPassword: null,
    placeholderPasswordAgain: null,
    lists: [
      {
        value: 1,
        label: '验证手机号'
      },
      {
        value: 2,
        label: '重置密码'
      },
      {
        value: 3,
        label: '重置完成'
      }
    ],
    showPass1: false,
    showPass2: false
  })

  // 监听 语言切换
  watch(
    () => i18n.global.locale,
    () => {
      state.placeholderPhone = i18n.global.t(
        't-zgj-sealElectronic.mobilePlease'
      )
      state.placeholderCode = i18n.global.t('t-zgj-verification.required')
      state.placeholderPassword = i18n.global.t('t-zgj-password.PleaseSet816')
      state.placeholderPasswordAgain = i18n.global.t(
        't-zgj-password.PleaseNewAgain'
      )
    },
    { immediate: true, deep: true }
  )

  // 验证手机号
  const codeLoginForm = reactive({
    inputPhone: null,
    inputCode: null
  })

  const validatePhone = (rule, value, callback) => {
    const reg = /^1[3-9]\d{9}$/
    if (reg.test(value)) {
      callback()
    } else {
      callback(new Error('手机号格式不正确'))
    }
  }
  const codeRules = {
    inputPhone: [
      { required: true, message: '请输入手机号', trigger: ['blur', 'change'] },
      {
        type: 'number',
        message: '请输入正确的格式',
        trigger: ['blur', 'change']
      },
      { validator: validatePhone, trigger: 'blur' }
    ],
    inputCode: [
      {
        required: true,
        message: '请输入验证码',
        trigger: ['blur', 'change']
      },
      {
        type: 'number',
        message: '请输入正确的格式',
        trigger: ['blur', 'change']
      }
    ]
  }

  const loginformCodeRef = ref(null)
  // 下一步
  const goNext = () => {
    loginformCodeRef.value.validate(valid => {
      if (valid) {
        state.active = 2
      } else {
        ElMessage.warning('请正确填写信息')
      }
    })
  }

  // 重置密码
  const passLoginForm = reactive({
    inputAccount: null,
    inputPassword: null
  })

  const validateSamePass = (rule, value, callback) => {
    if (value !== passLoginForm.inputAccount) {
      callback(new Error('两次输入密码不一致'))
    } else {
      callback()
    }
  }
  const passRules = {
    inputAccount: [
      { required: true, message: '请输入新密码', trigger: ['blur', 'change'] }
    ],
    inputPassword: [
      {
        required: true,
        message: '请再次输入新密码',
        trigger: ['blur', 'change']
      },
      { validator: validateSamePass, trigger: 'blur' }
    ]
  }

  const goConfirm = () => {
    loginformPassRef.value.validate(valid => {
      if (valid) {
        state.active = 3
      } else {
        ElMessage.warning('请正确填写信息')
      }
    })
  }

  const customStyle = {
    height: '48px'
  }
</script>

<style scoped lang="scss">
  .el-input {
    --el-component-size-large: 48px;
  }
  .update-password {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    right: 0;
    bottom: 0;
    width: 790px;
    height: 530px;
    background: #ffffff;
    border: 1px solid #f0f0f0;
    box-shadow: 0 8px 100px 0 rgba(19, 59, 99, 0.07);
    border-radius: 4px;
    margin: auto;
    z-index: 999;
    padding: 35px;

    .up-top {
      display: flex;
      align-items: center;
      .back-btn {
        width: 40px;
        font-size: 34px;
        font-weight: 400;
        cursor: pointer;
      }

      .back-t {
        flex: 1;
        font-family: PingFang-SC-Bold;
        font-weight: 700;
        font-size: 20px;
        color: #303133;
        text-align: center;
      }
    }

    .l-steps {
      margin: 30px 0 70px 0;
    }

    .l-u-inpt {
      padding: 0 172px;
      margin: 27px 0 0px 0;
      height: 168px;

      .l-inpt {
        padding-bottom: 20px;
        .open-pass {
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 16px;
            height: 16px;
            cursor: pointer;
          }
        }
      }

      .l-code {
        display: flex;
        width: 100%;
        .btn {
          font-size: 16px;
          color: #fafafa;
          width: 180px;
          height: 44px;
          border-radius: 2px;
          text-align: center;
          line-height: 44px;
          background: var(--jy-primary-6);
          margin-left: 10px;
        }
      }

      .l-code-inpt {
        .icon {
          position: relative;
          padding-right: 16px;
          margin-right: 16px;
          img {
            width: 16px;
            height: 16px;
          }

          &::after {
            content: '';
            position: absolute;
            right: 0;
            top: 52%;
            transform: translateY(-50%);
            width: 1px;
            height: 18px;
            background: #f0f0f0;
          }
        }
      }

      .l-u-succcess {
        display: flex;
        justify-items: center;
        align-items: center;
        flex-direction: column;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        font-size: 16px;
        color: #303133;
        img {
          width: 102px;
          height: 102px;
          margin-bottom: 45px;
        }
      }
    }

    .l-u-footer {
      display: flex;
      justify-content: center;
      margin-top: 70px;
      .btn {
        font-size: 16px;
        color: #fafafa;
        width: 362px;
        height: 44px;
        border-radius: 2px;
        text-align: center;
        line-height: 44px;
        background: var(--jy-primary-6);
      }
    }
  }
</style>
