<template>
  <div class="main">
    <a-col :xs="{span:20,offset:2}" :sm="{span:20,offset:2}" :md="{span:6,offset:9}" :lg="{span:6,offset:9}" :xl="{span:4,offset:10}">
      <a-form-model
        :model="formData"
        id="formLogin"
        class="user-layout-login"
        ref="ruleForm"
        :rules = 'rules'
      >
        <a-tabs
          :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' }"
        >
          <a-tab-pane key="tab1" tab="admin管理系统">
            <a-form-model-item  prop = "username">
              <a-input
                ref="input"
                size="large"
                type="text"
                v-model="formData.username"
                placeholder="admin:123/normal:123"
              >
                <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
              </a-input>
            </a-form-model-item>
            <a-form-model-item  prop="password">
              <a-input
                size="large"
                type="password"
                autocomplete="false"
                v-model="formData.password"
                placeholder="admin:123/normal:123"
              >
                <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
              </a-input>
            </a-form-model-item>
          </a-tab-pane>
        </a-tabs>
        <a-form-model-item style="margin-top:24px">
          <a-button
            size="large"
            type="primary"
            htmlType="submit"
            class="login-button"
            @click="formSubmit"
            :disabled = 'this.$store.state.user.submitDisabled'
          >确定
          </a-button>
        </a-form-model-item>
         <a-form-model-item style="margin-top:24px">
          <a-button
            size="large"
            type="default"
            htmlType="reset"
            class="login-button"
            @click = "clickRegister"
          >注册
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </a-col>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  beforeCreate () {
    // TODO 自动登录
    // if (this.$cookies.isKey('token')) {
    //   this.$store.dispatch('loginByCookieAction', this.$cookies.get('token'))
    //     .then(res => this.$router.push({ name: 'home' }))
    // }
  },
  created () {
  },
  mounted () {
    // this.$refs.input.focus()
    // this.$store.commit('removeUserInfo')
    // console.log(this.$cookies.isKey('token'))
    // console.log(this.$store.getters.getUserInfo)
    // this.$store.dispatch('loginByCookieAction', this.$cookies.get('token'))
    //   .then(res => {
    //     console.log(res.data)
    //     console.log(this.$store.getters.getUserInfo)
    //   })
    // console.log('====')
    // console.log(this.$store.getters.getUserInfo)
  },
  methods: {
    formSubmit () {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.$store.dispatch('loginByUsernameAction', this.formData)
            .then(
              (msg) => {
                this.$message.info('登录成功')
                // 重新登录需要重新初始化
                this.$store.commit('setHasInited', false)
                this.$router.push({ path: '/' })
              },
              (reason) => {
                this.$message.error('账号密码错误')
              })
        } else {
          // console.log('error submit!!')
          this.$message.error('请填写完整信息')
          return false
        }
      })
    },
    clickRegister () {
      // TODO
      this.$message.info('注册功能待开发中')
    }
  }
}
</script>

<style lang="less" scoped>
  .main{
    width: 100%;
    height: 100%;
    background: url('../../../static/img/login/background.svg') no-repeat;
    background-size:cover;
    .user-layout-login {
      margin-top: 15vh;
      label {
        font-size: 14px;
      }

      .getCaptcha {
        display: block;
        width: 100%;
        height: 40px;
      }

      .forge-password {
        font-size: 14px;
      }

      button.login-button {
        padding: 0 15px;
        font-size: 16px;
        height: 40px;
        width: 100%;
      }

      .user-login-other {
        text-align: left;
        margin-top: 24px;
        line-height: 22px;

        .item-icon {
          font-size: 24px;
          color: rgba(0, 0, 0, 0.2);
          margin-left: 16px;
          vertical-align: middle;
          cursor: pointer;
          transition: color 0.3s;

          &:hover {
            color: #1890ff;
          }
        }

        .register {
          float: right;
        }
      }
    }
  }
</style>
