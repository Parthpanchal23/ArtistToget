import React from "react";
import {Button, Form, Input} from "antd";
import IntlMessages from "util/IntlMessages";
import {Link} from "react-router-dom";
const FormItem = Form.Item;


const ForgotPassword = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  const compareToFirstPassword = (rule, value, callback) => {
    const form = props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  const validateToNextPassword = (rule, value, callback) => {
    const form = props.form;
    if (value && props.confirmDirty) {
      form.validateFields(['confirm'], {force: true});
    }
    callback();
  };

  const {getFieldDecorator} = props.form;

  return (
    <div className="gx-login-container">
      <div className="gx-login-content">

        <div className="gx-login-header">
          <img src={require("assets/images/logo.png")} alt="Logo" title="logo"/>
        </div>
        <div className="gx-mb-4">
          <h2>Reset Password</h2>
          <p><IntlMessages id="appModule.enterPasswordReset"/></p>
        </div>


        <Form onSubmit={handleSubmit} className="gx-login-form gx-form-row0">

          <FormItem>
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'Please input your password!',
              }, {
                validator: validateToNextPassword,
              }],
            })(
              <Input type="password" placeholder="New Password"/>
            )}
          </FormItem>

          <FormItem>
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: 'Please confirm your password!',
              }, {
                validator: compareToFirstPassword,
              }],
            })(
              <Input placeholder="Retype New Password" type="password"/>
            )}
          </FormItem>

          <FormItem>
          <Link to="/SignIn"><Button type="primary" htmlType="submit">
              <IntlMessages id="app.userAuth.reset"/>
            </Button></Link>
          </FormItem>
        </Form>
      </div>
    </div>
  );
};


const WrappedForgotPasswordForm = Form.create()(ForgotPassword);

export default WrappedForgotPasswordForm;
