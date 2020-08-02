import {Input, Form, FormItem, Checkbox, Radio, Select, Button, Option, CheckboxGroup, RadioGroup} from 'element-ui'

export default {
    name: 'myForm',
    props: {
        formOption: {
            type: Object,
            default: () => {
            }
        }
    },
    components: {
        Input, Form, FormItem, Checkbox, Radio, Select, Button,Option,CheckboxGroup,RadioGroup
    },
    data() {
        return {
            formName: '',
            formModel:{},
            check:[]
        }
    },
    computed: {},
    watch: {},
    methods: {
        initForm(itemObj) {
            this.formName = itemObj.name;
            itemObj.items.map((item) => {
                this.$set(this.formModel, item.name, this.generateFormModelName(item));
            });
        },
        generateFormModelName(item,data){
            try{
                if(data[item.name]){
                    return data[item.name]
                }
            }catch (e) {
                if(item.type==='checkbox'){
                    return []
                }
                return null
            }
        },
        generateFormItem(itemsObj) {
            let itemEle = [];
            itemsObj.items.map((item) => {
                switch (item.type) {
                    case 'input':
                        itemEle.push(
                            <FormItem label={item.label} prop={item.name} props = {
                                {
                                    ...item.itemAttr
                                }
                            }>
                                <Input v-model={this.formModel[item.name]} placeholder={item.placeholder}/>
                            </FormItem>
                        );
                         break;
                    case 'select':
                        itemEle.push(this.generateSelect(item));
                        break;
                    case 'checkbox':
                        itemEle.push(this.generateCheckbox(item));
                        break;
                    case 'radio':
                        itemEle.push(this.generateRadio(item));
                }
            });
            itemEle.push(
                <FormItem>
                    <Button type={'primary'} onClick={() => this.$refs[this.formName].resetFields()}>清除</Button>
                </FormItem>
            );
            return itemEle;
        },
        generateSelect(selectObj){
            return (
              <FormItem label={selectObj.label} prop={selectObj.name}>
                  <Select
                    v-model={this.formModel[selectObj.name]}
                    palceholder={selectObj.placeholder}
                    style={{width:'100%'}}
                  >
                      {
                          this.generateOption(selectObj)
                      }
                  </Select>
              </FormItem>
            )
        },
        generateCheckbox(checkboxObj){
            return (
              <FormItem label={checkboxObj.label} prop={checkboxObj.name}>
                  <CheckboxGroup
                        v-model={this.formModel[checkboxObj.name]}
                        style={{width:'100%',textAlign:'left'}}
                  >
                      {
                          this.generateOption(checkboxObj)
                      }
                  </CheckboxGroup>
              </FormItem>
            )
        },
        generateRadio(radioObj){
            return (
              <RadioGroup
                v-model={this.formModel[radioObj.name]}
              >
                  {
                      this.generateOption(radioObj)
                  }
              </RadioGroup>
            )
        },
        generateOption(optionObj){
            let optionEle = [];
            optionObj.optionList.map(item=>{
                switch (optionObj.type) {
                    case "select":
                        optionEle.push(
                          <Option label={item.label} value={item.value}/>
                        );
                        break;
                    case "checkbox":
                        optionEle.push(
                          <Checkbox label={item.label} name={item.name}/>
                        );
                        break;
                    case "radio":
                        optionEle.push(
                          <Radio label={item.label}/>
                        );
                        break;
                }
            });
            return optionEle;
        }
    },
    created() {
        this.initForm(this.formOption);

    },
    render() {
        let ele = [];
        ele = this.generateFormItem(this.formOption);
        console.log({...this.formOption.option});

        return (
            <div>
                <Form
                    ref={this.formName || 'form'}
                    props={
                        {
                            model:this.formModel,
                            rules:this.formOption.rules,
                            ...this.formOption.formAttributes
                        }
                    }
                >
                    {ele}
                </Form>
            </div>
        )
    }
}
