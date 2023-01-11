import React from 'react';
import {Button,Card,Form,Input,DatePicker,Select,InputNumber} from 'antd';

const {TextArea} = Input;
const FormItem = Form.Item;
const Option = Select.Option;



const formItemLayout = {
    labelCol: {
      xs: {span: 24},
      sm: {span: 8},
    },
    wrapperCol: {
      xs: {span: 24},
      sm: {span: 16},
    },
  };
  
const Postproject=()=>{

    function handleChange(value) 
    {
        console.log(`selected ${value}`);
    }
    
    function onChange(value) 
    {
        console.log('changed', value);
    }
return(
<>
    <Card  title="Post Project">
        
        <Form onSubmit="">
                    <FormItem {...formItemLayout} label="Tittle">
                    <Input id="tittle" placeholder='tittle'/>
                    </FormItem>
                    
                <FormItem {...formItemLayout} label="amount">
                    <InputNumber className="gx-w-100"
                   
                        defaultValue={1000}
                        formatter={value => `₹ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={value => value.replace(/\$\s?|(,*)/g, '')}
                        onChange={onChange}
                    />
                </FormItem>

                <FormItem {...formItemLayout} label="start Date">
                    <DatePicker className="gx-mb-3 gx-w-100" onChange={onChange}/>
                </FormItem>

                <FormItem {...formItemLayout} label="last Date">
                    <DatePicker className="gx-mb-3 gx-w-100" onChange={onChange}/>
                </FormItem>

                <FormItem {...formItemLayout} label="Location">
                    <Select className="gx-mr-3 gx-mb-3" defaultValue="Anywhere"  onChange={handleChange}>
                            <Option value="Anywhere">Anywhere</Option>
                            <Option value="specific Location">Current Location</Option>
                    </Select>
                </FormItem>

                <FormItem {...formItemLayout} label="Categories">
                    <Select className="gx-mr-3 gx-mb-3" defaultValue="Dancer"  onChange={handleChange}>
                        <Option value="Dancer">Dancer</Option>
                        <Option value="Singer">Singer</Option>
                        <Option value="MUSICIAN">MUSICIAN</Option>
                        <Option value="PHOTOGRAPHER">PHOTOGRAPHER</Option>
                        <Option value="MAKEUP ARTIST">MAKEUP ARTIST</Option>
                        <Option value="DJ">DJ</Option>
                    </Select>
                </FormItem>

                <FormItem {...formItemLayout} label="address">
                    <TextArea rows={4}/>
                </FormItem>

                <FormItem {...formItemLayout}>
                    <Button className="gx-mb-0"
                           
                            htmlType="submit"
                            disabled="" 
                            style={{width:'100%',backgroundColor: '#003366',
                            color:'#fffffd',justify:'center'}}>
                                Post
                    </Button>
                </FormItem>
             
        </Form>
    </Card>
        
  
    

</>
);
}
export default Postproject;