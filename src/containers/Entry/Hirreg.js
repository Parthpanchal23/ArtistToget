import React from 'react';
import {Button, Form, Input,Select,Upload,Icon} from "antd";

const FormItem = Form.Item;
const Option = Select.Option;
const handleSubmit = (e) => {
    e.preventDefault();
    alert("hirer page");
  };


const Hirreg=() =>{
   
    return(
        <>
         <div className="gx-login-container">
      <div className="gx-login-content">
        <h1 className="gx-login-title">Sign Hirer</h1>
                    
                    <Form onSubmit={handleSubmit} className="gx-login-form gx-form-row0">
   
                    <FormItem>
                       <Input 
                       placeholder="Name"/>
                    </FormItem>

                    <FormItem>
                       <Input 
                       placeholder="Contact"/>
                    </FormItem>

                    <FormItem>
                        
                        <Select placeholder="Please select a country">
                            <Option value="china">India</Option>
                            <Option value="use">U.S.A</Option>
                            <Option value="use">Canada</Option>
                            <Option value="use">Russia</Option>
                            <Option value="use">Canada</Option>
                        </Select>
                        
                     </FormItem>

                     

                    

                    <FormItem>
                        <Input 
                         type="email"
                         placeholder="Email"/>
                    </FormItem>

                    <FormItem>
                       <Input 
                        type="password"
                        placeholder="Password"/>
                    </FormItem>
   
                   <FormItem>
                   <Input  
                        type="password"
                        placeholder="Confirm Password"/>
                      
                   </FormItem>
                   <FormItem>
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button>
                            <Icon type="upload"/> Click to upload
                            </Button>
                        </Upload>
                     </FormItem>
   
                   <FormItem className="gx-text-center">
                       <Button type="primary "  htmlType="submit">
                       Register
                       </Button>
                   </FormItem>
                   </Form>
                   </div></div>
        </>
    )
}
export default Hirreg;