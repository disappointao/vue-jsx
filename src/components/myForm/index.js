import {Input, Form, FormItem, Checkbox, Radio, Select, Button} from 'element-ui'

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
        Input, Form, FormItem, Checkbox, Radio, Select, Button
    },
    data() {
        return {
            formName: '',
            formModel: {}
        }
    },
    computed: {},
    watch: {},
    methods: {
        initForm(itemObj) {
            this.formName = itemObj.name;
            itemObj.items.map((item) => {
                this.$set(this.formModel, item.name, itemObj.data[item.name]);
            });
        },
        generateFormItem(itemObj) {
            let itemEle = [];
            itemObj.items.map((item) => {
                switch (item.type) {
                    case 'input':
                        itemEle.push(
                            <FormItem label={item.label} prop={item.name}>
                                <Input v-model={this.formModel[item.name]}/>
                            </FormItem>
                        )
                }
            })
            itemEle.push(
                <FormItem>
                    <Button type={'primary'} onClick={() => this.$refs[this.formName].resetFields()}>清除</Button>
                </FormItem>
            )
            return itemEle;
        }
    },
    created() {
        this.initForm(this.formOption)
    },
    render(h) {
        let ele = [];
        ele = this.generateFormItem(this.formOption);
        console.log({...this.formOption.option})

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
