<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 表单</el-breadcrumb-item>
                <el-breadcrumb-item>账号信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="密码">
                    <el-input v-model="form.passoword"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>

<script>
    import { changepassword } from "../../api/api";
    export default {
        data: function(){
            return {
                form: {
                    passoword: ''
                }
            }
        },
        methods: {
        onSubmit() {
            let para = {
                id: localStorage.getItem("ms_username")  ,
                password: this.form.passoword
            };
            var res = changepassword(para);
            this.$message.success('提交成功！');
        }
        }
    }
</script>