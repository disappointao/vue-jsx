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
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>
