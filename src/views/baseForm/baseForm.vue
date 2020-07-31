<template>
    <div>
        <MyForm :form-option="formOption"/>
    </div>
</template>

<script>
    import MyForm from "../../components/myForm";
    export default {
        name: "baseForm",
        components:{
            MyForm
        },
        data(){
            return {
                formOption:{
                    name:'channal-form',
                    data:{
                    },
                    items:[
                        {
                            label:'姓名',
                            type:'input',
                            name:'name'
                        },
                        {
                            label:'账号',
                            type:'input',
                            name:'account'
                        }
                    ],
                    rules:
                        {
                            name: [{required: true, message: '请输入名字', trigger: 'blur'}],
                            account: [{required: true, message: '请输入账号', trigger: 'blur'}],
                        },
                    buttons:[

                    ],
                    formAttributes:{
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
