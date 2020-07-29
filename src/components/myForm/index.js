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
            this.formName=itemObj.name;
            itemObj.items.map((item)=>{
                this.formModel[item.name]= data[item.name] || null;
            })
        },
        generateFormItem(itemObj){

        }
    },
    create(){
      this.initForm(this.formOption)
    },
    render(h){
        let ele = [];
        ele = this.generateFormItem(this.formOption);
        return (
            <div>
                <Form name={this.formName} model={this.formModel}>
                    {ele}
                </Form>
            </div>
        )
    }
}
