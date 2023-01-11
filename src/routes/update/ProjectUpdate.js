import React from "react"
import {Avatar,Badge,Button,Card,Col,Row,Modal,Input,DatePicker} from "antd"
import moment from "moment";
const {TextArea} = Input;
const dateFormat = 'DD/MM/YYYY';


  class ProjectUpdate extends React.Component{
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
render() {
return(
  <>
   <div className="gx-profile-banner">
      <div className="gx-profile-container">
        <div className="gx-profile-banner-top">
          <div className="gx-profile-banner-top-left">
            <div className="gx-profile-banner-avatar">
              <Avatar className="gx-size-120" alt="..." src={require("assets/images/project1.png")}/>
            </div>
            <div className="gx-profile-banner-avatar-info">
              <h2 className="gx-mb-2 gx-mb-sm-3 gx-fs-xxl gx-font-weight-light">Kiley Brown</h2>
              <p className="gx-mb-0 gx-fs-lg">Dancer/Singer</p>
              <br/>
              <p className="gx-mb-0 gx-fs-lg">India</p>
              <br/>
              
              <br/>
             
            </div>
           
          </div>
          <div className="gx-profile-banner-top-right">
           
            <Badge className="gx-badge-radius-sm gx-mb-5" count="Verified" style={{backgroundColor: '#52c41a'}}/>
        
          </div>
        </div>
      
      </div>
    </div>

    <div className="gx-profile-content">
  
        <Row>
         
       
          <Col xl={16} lg={14} md={14} sm={24} xs={24}>
          <Card>
            <h3 >Description </h3>
            <hr/>
            <span><p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p><p>
            Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>.
            <p>
            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p></span>
            </Card>
            </Col>

            <Col xl={8} lg={14} md={14} sm={24} xs={24}>
              <Card>
              {/* <Button className="btn-primary" >Apply Now</Button> */}
              <Button className="btn-primary"  onClick={this.showModal} >Edit</Button>
                <Modal
                  title="Edit Detail"
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                > 
                  <Input placeholder="Name"/><br/>
                  <Input placeholder="Artist type"/><br/>
                  <Input placeholder="Location"/><br/>
                  <Input placeholder="Salery"/><br/>
                  <TextArea placeholder="Description" rows={4}/><br/>
                  <DatePicker className="gx-mb-3 gx-w-100" defaultValue={moment('11/05/2022', dateFormat)} format={dateFormat}/><br/>
                </Modal>
              <hr/>

              <div>
              <h3 >Summery </h3>
              <hr/>
              <div> <i className="icon icon-location gx-fs-lg gx-mr-2 gx-mr-sm-3 gx-d-inline-flex gx-vertical-align-middle"/>Location:-
              <span>Ahmedabad</span></div><br/>
              <div> <i className="icon icon-setting gx-fs-lg gx-mr-2 gx-mr-sm-3 gx-d-inline-flex gx-vertical-align-middle"/>Price:-
              <span>₹5000</span></div><br/>
              <div> <i className="icon icon-calendar-new gx-fs-lg gx-mr-2 gx-mr-sm-3 gx-d-inline-flex gx-vertical-align-middle"/>Posted date:-
              <span>11/05/2022</span></div>
              </div>
              </Card>
            </Col>

          <Col xl={24} lg={24} md={10} sm={24} xs={24}>
          <Card>
            <h3>Location</h3>
            <hr/>
            <img src={require("assets/images/location1.jpg")} alt="location" style={{width:"100%"}}></img>
   
          </Card>
          </Col>
        </Row>
        
      </div>
      </>
   
);
}
  }


export default ProjectUpdate;