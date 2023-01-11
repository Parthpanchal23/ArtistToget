import React from 'react';
import {Button, Form, Input,Select,Upload,Icon, InputNumber} from "antd";

const handleSubmit = (e) => {
    e.preventDefault();
    alert("artist page");
  };
  const Option = Select.Option;
  const FormItem = Form.Item;
  const {TextArea} = Input;
    
const Artreg=() =>{
  
    return(
        <>
        <div className="gx-login-container">
         <div className="gx-login-content">
           <h1 className="gx-login-title">Sign in Artist</h1>
                    
                <Form onSubmit={handleSubmit} className="gx-login-form gx-form-row0">
        
                    <FormItem>
                        <Input 
                        placeholder="Name"/>
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
                        <InputNumber placeholder="Experience Year" min={1} max={10}/>
                    </FormItem>

                     <FormItem>
                        
                        <Select placeholder="Please select ">
                            <Option value="china">Expert</Option>
                            <Option value="use">intermediate</Option>
                            <Option value="use">Learner</Option>
                        </Select>
                        
                     </FormItem>
                     <FormItem>
                        <Select placeholder="Please select a Catrgory">
                            <Option value="china">Dancer</Option>
                            <Option value="use">Singer</Option>
                            <Option value="use">Painter</Option>
                            <Option value="use">Musician</Option>
                            <Option value="use">DJ</Option>
                            <Option value="use">MAkeup Arttist</Option>
                            <Option value="use">illustration</Option>

                        </Select>
                        
                     </FormItem>
                     <FormItem>
                        
                        <Select placeholder="Please select sub categories">
                            <Option value="china">Freestyle</Option>
                            <Option value="use">hiphop</Option>
                            <Option value="use">StreetDancer</Option>
                           
                        </Select>
                        
                     </FormItem>
                     <FormItem>
                     <TextArea rows={4}/>
                    </FormItem>

                     <FormItem>
                       <Input
                       placeholder="Contact"/>
                    </FormItem>

                     <FormItem>
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button>
                            <Icon type="upload"/> Click to upload
                            </Button>
                        </Upload>
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
export default Artreg;