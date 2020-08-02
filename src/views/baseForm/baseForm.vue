<template>
    <div>
        <MyForm :form-option="formOption"/>
    </div>
</template>

<script>
  import MyForm from '../../components/myForm';

  export default {
    name: 'baseForm',
    components: {
      MyForm,
    },
    data() {
      return {
        formOption: {
          name: 'channal-form',
          data: {},
          items: [
            {
              label: '姓名',
              type: 'input',
              name: 'name',
              placeholder: '请输入姓名',
              itemAttr: {
                size: 'mini',
              },
            },
            {
              label: '账号',
              type: 'input',
              name: 'account',
              placeholder: '请输入账号',
            },
            {
              label: '活动性质',
              type: 'select',
              name: 'active',
              placeholder: '请选择活动性质',
              optionList: [
                {
                  label: '美食/餐厅线上活动',
                  value: 1,
                },
                {
                  label: '地摊活动',
                  value: 2,
                },
                {
                  label: '线下主题活动',
                  value: 3,
                },
              ],
            },
            {
              label:'特点',
              name:'feature',
              type:'checkbox',
              optionList: [
                {
                  label:'牛批'
                },
                {
                  label:'不牛批'
                }
              ]
            }
          ],
          rules:
            {
              name: [{required: true, message: '请输入名字', trigger: 'blur'}],
              account: [{required: true, message: '请输入账号', trigger: 'blur'}],
              active: [{required: true, message: '请选择', trigger: 'blur'}],
              feature:[{required: true, message: '请至少选择一个选项', trigger: 'blur'}],
            },
          btnList: [
            {

            }
          ],
          formAttributes: {
            labelWidth: '120px',
          },
        },
      };
    },
  };
</script>

<style scoped>

</style>
