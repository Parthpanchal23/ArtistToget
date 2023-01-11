
import React from "react";
import {Avatar,Col,Row,Form} from "antd";
import Widget from "components/Widget";
// import moment from "moment";
// const props = {
// action: '',
// onChange({file, fileList}) {
//   if (file.status !== 'uploading') {
//     console.log(file, fileList);
//   }
// },
// defaultFileList: [{
//   uid: 1,
//   name: 'xxx.png',
//   status: 'done',
//   reponse: 'Server Error 500', // custom error message to show
//   src: 'http://www.baidu.com/yyy.png',
// }, {
//   uid: 2,
//   name: 'yyy.png',
//   status: 'done',
//   url: 'http://www.baidu.com/yyy.png',
// }, {
//   uid: 3,
//   name: 'zzz.png',
//   status: 'error',
//   reponse: 'Server Error 500', // custom error message to show
//   url: 'http://www.baidu.com/zzz.png',
// }],
// };




class sProfile extends React.Component{
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
   
 

    // Only show error after a field is touched.
  
   
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
              <p className="gx-mb-0 gx-fs-lg">India,Canada</p>
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
           
          </span>
        </div>
      </div>
    </div>

    <div className="gx-profile-content">
        <Row>
          <Col xl={16} lg={16} md={16} sm={16} xs={24}>
            <Widget title="About" styleName="gx-card-tabs gx-card-tabs-right gx-card-profile">
                  <Row>
                      <Col  >
                      
                      </Col>
                  </Row>
            </Widget>
          </Col>
          <Col xl={8} lg={10} md={8} sm={8} xs={24}>
            <Widget title="Contact" styleName="gx-card-tabs gx-card-tabs-right gx-card-profile">
                  <Row>
                      
                  </Row>
            </Widget>
          </Col>

          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <Widget title="Contact" styleName="gx-card-tabs gx-card-tabs-right gx-card-profile">
                  <Row>
                      
                  </Row>
            </Widget>
          </Col>
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <Widget title="Project" styleName="gx-card-tabs gx-card-tabs-right gx-card-profile">
                  <Row>
                      
                  </Row>
            </Widget>
          </Col>
        </Row>
      </div>
    </>
)

}


}
const WrappedNormalEditForm = Form.create()(sProfile);
export default WrappedNormalEditForm;