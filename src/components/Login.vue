<style scoped>
    .loginContainer {
        border-radius: 15px;
        background-clip: padding-box;
        margin: 100px auto;
        width: 350px;
        padding: 15px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }

    .loginTitle {
        margin: 15px auto 20px auto;
        text-align: center;
        color: #505458;
    }

    .loginRemember {
        text-align: left;
        margin: 0px 0px 15px 0px;
    }
    .el-form-item__content{
        display: flex;
        align-items: center;
    }
    #container{
    /*保证footer是相对于container位置绝对定位*/
    position:relative;  
    width:100%;
    min-height:100%; 
    /*设置padding-bottom值大于等于footer的height值，以保证main的内容能够全部显示出来而不被footer遮盖；*/  
    padding-bottom: 100px;  
    box-sizing: border-box;
}
</style>
<template>
    <div  id="container">
        <el-form
                :rules="rules"
                ref="loginForm"
                v-loading="loading"
                element-loading-text="Logining in..."
                element-loading-spinner="el-icon-loading"
                element-loading-background="rgba(0, 0, 0, 0.8)"
                :model="loginForm"
                class="loginContainer">
            <h3 class="loginTitle">System Login</h3>
            <el-form-item prop="username">
                <el-input size="normal" type="text" v-model="loginForm.username" auto-complete="off"
                          placeholder="Please enter the user name"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input size="normal" type="password" v-model="loginForm.password" auto-complete="off"
                          placeholder="Please input a password"></el-input>
            </el-form-item>            
            <el-checkbox size="normal" class="loginRemember" v-model="checked">Keep me logged in</el-checkbox>
            <el-button size="normal" type="primary" style="width: 100%;" @click="submitLogin">Sign in</el-button>
        </el-form>
    </div>
</template>

<script>

    export default {
        name: "Login",
        data() {
            return {
                loading: false,
                vcUrl: '/verifyCode?time='+new Date(),
                loginForm: {
                    username: '',
                    password: '',
                    code:''
                },
                checked: true,
                rules: {
                    username: [{required: true, message: 'Please enter the user name', trigger: 'blur'}],
                    password: [{required: true, message: 'Please input a password', trigger: 'blur'}],
                }
            }
        },
        methods: {
            updateVerifyCode() {
                this.vcUrl = '/verifyCode?time='+new Date();
            },
            submitLogin() {
                this.$refs.loginForm.validate((valid) => {
                    if (valid) {
                        this.loading = true;
                        var userJson = {};
                        userJson["name"] = this.loginForm.username;
                        userJson["password"] = this.loginForm.password;
                        this.axios
                            .post("/dataConversionJS/login", userJson)
                            .then(res => {
                                let data = res.data;
                                if(data.code == 0){
                                    this.$router.replace('/template');
                                }else{
                                    alert("error");
                                }
                            })
                    }
                    else {
                        return false;
                    }
                });
            }
        }
    }
</script>