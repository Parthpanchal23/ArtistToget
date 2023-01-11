import React from 'react';
import {Button,Checkbox, Form, Icon, Input,Modal,Tabs} from "antd";
import {Link} from "react-router-dom";

import IntlMessages from '../../util/IntlMessages';

const FormItem = Form.Item;



const TabPane = Tabs.TabPane;
const callback = (key) => {
    console.log(key);
  };
const handleSubmit = (e) => {
    e.preventDefault();

  };

class Entry extends React.Component {
    state = {visible: false};
    showModal = () => {
      this.setState({
        visible: true,
      });
    };
    
    handleCancel = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
     
  
  


    render()
    {
    return(
        <>
 
        <Button type="primary" onClick={this.showModal}>Open</Button>
        <Modal
          visible={this.state.visible}
          footer={null}
          onCancel={this.handleCancel}
        >
        

        <Tabs defaultActiveKey='1' animated={false} onChange={callback}>

            <TabPane key={'1'} tab={<h4>Login</h4>}>

           
            <div className="gx-login-container">
      <div className="gx-login-content">
               
                     <h1 className="gx-login-title">Sign In</h1>
                    
                 <Form onSubmit={handleSubmit} className="gx-login-form gx-form-row0">

                 <FormItem>
                    
                    <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                     placeholder="Email"/>
                   
                 </FormItem>

                 <FormItem>
                     
                   
                    <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                     type="password"
                     placeholder="Password"/>
                    
                 </FormItem>

                <FormItem>
                   
                    <Checkbox>Remember me</Checkbox>
                   
                    <Link className="gx-login-form-forgot" to="/custom-views/user-auth/forgot-password">Forgot password</Link>
                </FormItem>

                <FormItem className="gx-text-center">
                    <Button type="primary "  htmlType="submit">
                    Log in
                    </Button>
                    <span><IntlMessages id="app.userAuth.or"/></span> <Link to=""><IntlMessages
                  id="app.userAuth.signUp"/></Link>
                </FormItem>
                </Form>
           
           </div></div>
      
            </TabPane>

            <TabPane key={'2'} tab={<h4>Registration</h4>} >

            
                    <Button  value="Hirer" key="Artist">Hirer</Button>
                 
                    <Button  value="Artist" key="Hirer">Artist</Button>

                    {/* style={{display: 'none'}} */}
                    <div id="Hir" >
                        
                    </div>
                  
                   
                    <div id="Art" >
                      
                    </div>
            </TabPane>
        </Tabs>

        </Modal>
     
        </>
    )
    }
};

export default Entry;