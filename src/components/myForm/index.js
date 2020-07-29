import {Input,Form,FormItem,Checkbox,Radio,Select,Button} from 'element-ui'

export default {
    name:'myForm',
    props:{
        formOption: {
            type:Object,
            default:()=>{}
        },
        formData:{
            type:Object,
            default:()=>{}
        }
    },
    components:{
        Input,Form,FormItem,Checkbox,Radio,Select,Button
    },
    data(){
        return {
            formName:'',
            formModel:{
            }
        }
    },
    computed:{

    },
    watch:{

    },
    methods:{
        initForm(itemObj){
            console.log(itemObj)
            this.formName=itemObj.name;
            itemObj.items.map((item)=>{
                console.log(item);
                this.formModel[item.name]= null;
            });
        },
        generateFormItem(itemObj){
            let itemEle = [];
            itemObj.items.map((item)=>{
                switch (item.type) {
                    case 'input':
                        itemEle.push(
                          <FormItem label={item.label}>
                              <Input nativeOnClick = {()=>{console.log('123')}}/>
                          </FormItem>
                        )
                }
            })
            return itemEle;
        }
    },
    created(){
      this.initForm(this.formOption)
    },
    render(h){
        let ele = [];
        console.log(this.formModel)
        ele = this.generateFormItem(this.formOption);
        return (
            <div>
                <Form name={this.formName} onClick={()=>console.log(123)}>
                    {ele}
                </Form>
            </div>
        )
    }
}
