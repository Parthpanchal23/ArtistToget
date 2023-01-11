import React, {useEffect,useState} from "react";
import {Button, Checkbox,Select, Form, Icon, Input,InputNumber,Upload} from "antd";
import {Link, useHistory} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";
import {
  hideMessage,
  showAuthLoader,
  userSignUp,
} from "appRedux/actions/Auth";

import IntlMessages from "util/IntlMessages";
import {message} from "antd/lib/index";
import CircularProgress from "components/CircularProgress/index";
const FormItem = Form.Item;
const Option = Select.Option;
const SignUp = (props) => {
  const [toggle, settoggle] = useState(1);

  const dispatch = useDispatch();
  const history = useHistory();
  const {TextArea} = Input;
  const {loader, alertMessage, showMessage, authUser} = useSelector(({auth}) => auth);
  function handleChange(value) {
   
  }
useState(()=>{
  
});

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        dispatch(hideMessage());
      }, 100);
    }
    if (authUser !== null) {
      history.push('/');
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      console.log("values", values);
      if (!err) {
        dispatch(showAuthLoader());
        dispatch(userSignUp(values));
      }
    });
  };
  

  const {getFieldDecorator} = props.form;

    return (
      <div className="gx-app-login-wrap" >
        <div className="gx-app-login-container" style={{width:'auto'}}>
          <div className="gx-app-login-main-content">
           

            <div className="gx-app-login-content"style={{width:'auto'}}>
            <center>

                <img alt="logo" style={{marginBottom:'3%'}} src={require("assets/images/logo.png")}></img>
              
                <Button style={{width:'40%'}}  value="Hirer" key="Hirer" onClick={() => settoggle(2)  }>Hirer</Button>
            
                <Button style={{width:'40%'}}  value="Artist" key="Artist" onClick={() => settoggle(1) }>Artist</Button>
                
            </center>

              <Form onSubmit={handleSubmit} className="gx-signup-form gx-form-row0">
             
              {toggle === 2 ? <div   >
            <FormItem>
              
            {getFieldDecorator('UserType_id' ,{
                   
                    initialValue: 2,
                  })}

            </FormItem>
            <FormItem>
                  {getFieldDecorator('Name', {
                    rules: [{required: true, message: 'Please input your username!'}],
                  })(
                    <Input placeholder="Username"/>
                  )}
                </FormItem>
                <FormItem>
                {getFieldDecorator('Contact', {
                    rules: [{required: true, message: 'Please input your contact Number!'}],
                  })(
                       <Input 
                       placeholder="contact"/>
                       )}
                    </FormItem>

                    <FormItem>
                    {getFieldDecorator('City_id', {
                    rules: [{required: true, message: 'Please input your country!'}],
                  })(
                       
                        <Select placeholder="Please select a country">
                            <Option value="china">India</Option>
                            <Option value="U.S.A">U.S.A</Option>
                            <Option value="Canada">Canada</Option>
                            <Option value="Russia">Russia</Option>
                            
                        </Select>
                        )}
                     </FormItem>
                <FormItem>
                  {getFieldDecorator('Email', {
                    rules: [{
                      required: true, type: 'email', message: 'The input is not valid E-mail!',
                    }],
                  })(
                    <Input placeholder="Email"/>
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('Password', {
                    rules: [{required: true, message: 'Please input your Password!'}],
                  })(
                    <Input type="password" placeholder="Password"/>
                  )}
                </FormItem>
                <FormItem>
                {getFieldDecorator('Photo', {
                    rules: [{ message: 'Please input your photo!'}],})(
                        <Upload name="Photo" action="/upload.do" listType="picture" >
                            <Button >
                            <Icon type="upload"/> Click to upload
                            </Button>
                        </Upload>
                    )}
                     </FormItem>
                

            </div>:
              <div title="Artist">
                       <FormItem>
              
              {getFieldDecorator('UserType_id' ,{
                      valuePropName: 'toggle',
                      initialValue: 1,
                    })}
  
              </FormItem>
              <FormItem>
                  {getFieldDecorator('Name', {
                    rules: [{required: true, message: 'Please input your username!'}],
                    })(
                    <Input placeholder="Username"/>
                  )}
              </FormItem>

              <FormItem>
                  {getFieldDecorator('City_id', {
                    rules: [{required: true, message: 'Please select a country!'}],
                    })(
                    <Select placeholder="country">
                            <Option value="china">India</Option>
                            <Option value="U.s.a">U.S.A</Option>
                            <Option value="Canada">Canada</Option>
                            <Option value="Russia">Russia</Option>
                            <Option value="Canada">Canada</Option>
                    </Select>
                  )}
              </FormItem>

              <FormItem>
                  {getFieldDecorator('Exp_Year', {
                    rules: [{required: true, message: 'Please select a Experince!'} ],
                    })(
                    <InputNumber placeholder="Experience Year" min={1} max={10}/>)}
              </FormItem>

              <FormItem>
              {getFieldDecorator('Exp_level_id', {
                    rules: [{required: true, message: 'Please select a Experince!'} ],
                    })(
                    <Select placeholder="Please select ">
                      <Option value="china">Expert</Option>
                      <Option value="intermediate">intermediate</Option>
                      <Option value="Learner">Learner</Option>
                    </Select>  
                    )}
              </FormItem>

              <FormItem>
              {getFieldDecorator('ArtCat_id', {
                    rules: [{required: true, message: 'Please select a Experince!'} ],
                    })
                    (<Select classname="cat1" placeholder="Please select a Catrgory" onChange={handleChange}>
                      <Option value="Dancer">Dancer</Option>
                      <Option value="Singer">Singer</Option>
                      <Option value="Painter">Painter</Option>
                      <Option value="Musician">Musician</Option>
                      <Option value="DJ">DJ</Option>
                      <Option value="MAkeup Artist">MAkeup Artist</Option>
                      <Option value="illustration">illustration</Option>
                    </Select>)
                  }
              </FormItem>
           
                
              

              <FormItem>
              {getFieldDecorator('SubCat_id', {
                    rules: [{required: true, message: 'Please select a Experince!'} ],
                    })(
                    <Select classname="cat2" placeholder="Please select sub categories" onChange={handleChange}>
                      <Option value="Freestyle">Freestyle</Option>
                      <Option value="hi[hop">hiphop</Option>
                      <Option value="StreetDancer">StreetDancer</Option>
                    </Select>)}
              </FormItem>

              <FormItem>
              {getFieldDecorator('Description', {
                    rules: [{required: true, message: 'Please select a Experince!'} ],
                    })(
                  <TextArea rows={4}/>)}
              </FormItem>

              <FormItem>
              {getFieldDecorator('Contact', {
                    rules: [{required: true, message: 'Please select a Experince!'} ],
                    })(
                    <Input
                    placeholder="Contact"/>)}
              </FormItem>

              <FormItem>
                  {getFieldDecorator('Email', {
                  rules: [{
                    required: true, type: 'email', message: 'The input is not valid E-mail!',
                  }],
                  })(
                  <Input placeholder="Email"/>
                  )}
              </FormItem>

              <FormItem>
                  {getFieldDecorator('Password', {
                  rules: [{required: true, message: 'Please input your Password!'}],
                  })(
                  <Input type="password" placeholder="Password"/>
                  )}
              </FormItem>

              <FormItem>
              {getFieldDecorator('Photo', {
                    rules: [{ message: 'Please input your photo!'}],})(
                  <Upload name="Photo" action="/upload.do" listType="picture">
                      <Button>
                        <Icon type="upload"/> Click to upload
                      </Button>
                  </Upload>
                    )}
              </FormItem>

            </div>
            }
               
            

                <FormItem>
                  {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                  })(
                    <Checkbox><IntlMessages id="appModule.iAccept"/></Checkbox>
                  )}
                  <span className="gx-link gx-signup-form-forgot"><IntlMessages
                    id="appModule.termAndCondition"/></span>
                </FormItem>
                <FormItem>
                  <Button type="primary" className="gx-mb-0" htmlType="submit">
                    <IntlMessages id="app.userAuth.signUp"/>
                  </Button>
                  <span><IntlMessages id="app.userAuth.or"/></span> <Link to="/signin"><IntlMessages
                  id="app.userAuth.signIn"/></Link>
                </FormItem>
                
              </Form>
            </div>
            {loader &&
            <div className="gx-loader-view">
              <CircularProgress/>
            </div>
            }
            {showMessage &&
            message.error(alertMessage)}
          </div>
        </div>
      </div>
    );
};


const WrappedSignUpForm = Form.create()(SignUp);


export default WrappedSignUpForm;
