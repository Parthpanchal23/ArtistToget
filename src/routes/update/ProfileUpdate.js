
import React from "react";
import {Avatar,Col,Row,Modal,Input,Button,Icon,Form, Upload} from "antd";

import Widget from "components/Widget";
// import moment from "moment";
const props = {
action: '',
onChange({file, fileList}) {
  if (file.status !== 'uploading') {
    console.log(file, fileList);
  }
},
defaultFileList: [{
  uid: 1,
  name: 'xxx.png',
  status: 'done',
  reponse: 'Server Error 500', // custom error message to show
  src: 'http://www.baidu.com/yyy.png',
}, {
  uid: 2,
  name: 'yyy.png',
  status: 'done',
  url: 'http://www.baidu.com/yyy.png',
}, {
  uid: 3,
  name: 'zzz.png',
  status: 'error',
  reponse: 'Server Error 500', // custom error message to show
  url: 'http://www.baidu.com/zzz.png',
}],
};
const {TextArea} = Input;
const FormItem = Form.Item;
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

class ProfileUpdate extends React.Component{
    state = {visible: false};
    showModal = () => {
      this.setState({
        visible: true,
      });
    };
    handleOk = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
    handleCancel = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
    
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
      }

render() {
   
  
    const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;

    // Only show error after a field is touched.
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');
   
return(
    <>
    <div className="gx-profile-banner">
      <div className="gx-profile-container">
        <div className="gx-profile-banner-top">
          <div className="gx-profile-banner-top-left">
            <div className="gx-profile-banner-avatar">
              <Avatar className="gx-size-90" alt="..." src={require("assets/images/image2.jpg")}/>
            </div>
            <div className="gx-profile-banner-avatar-info">
              <h2 className="gx-mb-2 gx-mb-sm-3 gx-fs-xxl gx-font-weight-light">Kiley Brown</h2>
              <p className="gx-mb-0 gx-fs-lg">India</p>
            </div>
          </div>
          <div className="gx-profile-banner-top-right">
            <ul className="gx-follower-list">
              <li>
                <span className="gx-follower-title gx-fs-lg gx-font-weight-medium">2k+</span>
                <span className="gx-fs-sm">Project</span>
              </li>
              <li>
                <span className="gx-follower-title gx-fs-lg gx-font-weight-medium">847</span>
                <span className="gx-fs-sm">client</span>
              </li>
            
            </ul>
          </div>
        </div>
        <div className="gx-profile-banner-bottom">
          <div className="gx-tab-list">
            <ul className="gx-navbar-nav">
              <li>
                <span className="gx-link">About</span>
              </li>
              <li>
                <span className="gx-link">Client <span className="gx-fs-xs">287</span></span>
              </li>
              <li>
                <span className="gx-link">Contact</span>
              </li>
              <li>
                <span className="gx-link">Project</span>
              </li>
            </ul>
          </div>
          <span className="gx-link gx-profile-setting">
            <i className="icon icon-setting gx-fs-lg gx-mr-2 gx-mr-sm-3 gx-d-inline-flex gx-vertical-align-middle"/>
            <span className="gx-d-inline-flex gx-vertical-align-middle gx-ml-1 gx-ml-sm-0"> <Button className="primary" onClick={this.showModal} >Edit</Button>
                <Modal
                  title={ <i className="icon icon-setting gx-fs-lg gx-mr-2 gx-mr-sm-3 gx-d-inline-flex gx-vertical-align-middle"/>}
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                > 
                  <Input placeholder="Name"/><br/>
                  <Input placeholder="Artist type"/><br/>
                  <Input placeholder="Location"/><br/>
                  <Input placeholder="Salery"/><br/>
                  <TextArea placeholder="Description" rows={4}/><br/>
                  {/* <DatePicker className="gx-mb-3 gx-w-100" defaultValue={moment('11/05/2022', dateFormat)} format={dateFormat}/><br/> */}
                </Modal></span>
          </span>
        </div>
      </div>
    </div>

    <div className="gx-profile-content">
        <Row>
          <Col xl={24} lg={14} md={14} sm={24} xs={24}>
          <Widget title="Edit" styleName="gx-card-tabs gx-card-tabs-right gx-card-profile">
                <Row>
                    <Col  xl={24} lg={12} md={12} sm={12} xs={24}>
                    <br/>
                    <Form layout="inline" onSubmit={this.handleSubmit}>
                        <FormItem
                            validateStatus={userNameError ? 'error' : ''}
                            help={userNameError || ''}
                        >
                            {getFieldDecorator('Name', {
                            rules: [{required: true, message: 'Please input your name!'}],
                            })(
                            <Input  placeholder="name"/>
                            
                            )}
                        </FormItem>

                        <FormItem
                            validateStatus={userNameError ? 'error' : ''}
                            help={userNameError || ''}
                        >
                            {getFieldDecorator('userType', {
                            rules: [{required: true, message: 'Please input your usertype!'}],
                            })(
                            
                            <Input prefix={<Icon type="Usertype" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="type"/>
                            )}
                        </FormItem>
                               
                        <FormItem
                            validateStatus={passwordError ? 'error' : ''}
                            help={passwordError || ''}
                        >
                            {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Please input your Password!'}],
                            })(
                            <Input  type="password"
                                    placeholder="Password"/>
                            )}
                        </FormItem>
                        
                        <FormItem
                            validateStatus={passwordError ? 'error' : ''}
                            help={passwordError || ''}
                        >
                            {getFieldDecorator('confirm password', {
                            rules: [{required: true, message: 'Please input your confirm Password!'}],
                            })(
                            <Input  type="password"
                                    placeholder="Password"/>
                            )}
                        </FormItem>
                <hr/>
                <h4>Contact </h4>
                        <FormItem
                            validateStatus={userNameError ? 'error' : ''}
                            help={userNameError || ''}
                        >
                            {getFieldDecorator('Contact number', {
                            rules: [{required: true, message: 'Please input your number!'}],
                            })(
                            
                            <Input  placeholder="91******56"/>
                            )}
                        </FormItem>
                        <FormItem
                            validateStatus={userNameError ? 'error' : ''}
                            help={userNameError || ''}
                        >
                            {getFieldDecorator('Email', {
                            rules: [{required: true, message: 'Please input your Email!'}],
                            })(
                            
                            <Input  placeholder="abc@gmail.com"/>
                            )}
                        </FormItem>
                       
                        <FormItem
                            validateStatus={userNameError ? 'error' : ''}
                            help={userNameError || ''}
                        >
                            {getFieldDecorator('Description', {
                            rules: [{required: true, message: 'Please input your discrption!'}],
                            })(
                            
                            <TextArea placeholder="Description" rows={4}/>
                            )}
                        </FormItem>
                        <FormItem
                            validateStatus={userNameError ? 'error' : ''}
                            help={userNameError || ''}
                        >
                            {getFieldDecorator('Description', {
                            rules: [{required: true, message: 'Please input your discrption!'}],
                            })(
                            
                                <Upload {...props}>
                                <Button>
                                  <Icon type="upload"/> Upload
                                </Button>
                              </Upload>
                            )}
                        </FormItem>
                       
                        <FormItem>
                            <Button className="gx-mb-0"
                                    type="primary"
                                    htmlType="submit"
                                    disabled={hasErrors(getFieldsError())}
                            >
                            Log in
                            </Button>
                        </FormItem>
                        <hr/>
                
                    </Form>
                    </Col>
                   
                </Row>
               
            
          
       </Widget>

            
            
          </Col>

        </Row>
      </div>
    </>
)

}


}
const WrappedNormalEditForm = Form.create()(ProfileUpdate);
export default WrappedNormalEditForm;