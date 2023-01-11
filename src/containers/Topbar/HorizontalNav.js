import React from "react";
import {useSelector} from "react-redux";
import {Menu} from "antd";
import {Link} from "react-router-dom";
import IntlMessages from "../../util/IntlMessages";

let UserType_id='';

    const SubMenu = Menu.SubMenu;
const HorizontalNav = () => {

  let userdata = localStorage.getItem('UserType_id');
  if (userdata !== '' && userdata !== null)
  {
      let userData = JSON.parse(userdata);
      if((userData !== '' && userData !== null))
      {
        UserType_id = userData['UserType_id'];
      
      }    
  }
  const pathname = useSelector(({settings}) => settings.pathname);
  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];
  return (
    
    <Menu
      defaultOpenKeys={[defaultOpenKeys]}
      selectedKeys={[selectedKeys]}
      mode="horizontal">

     
        <Menu.Item  key="/main/dashboard/Home" >
          <Link to="/main/dashboard/Home" style={{color:'white'}}>
            Home</Link>
        </Menu.Item>

        {UserType_id === '2' ?<Menu.Item  key="/custom-views/eCommerce/product-grid" >
          <Link to="/custom-views/eCommerce/product-grid" style={{color:'white'}}>
          Find Artist</Link>
        </Menu.Item>:<Menu.Item  key="/custom-views/list-type/card-List" >
             <Link to="/custom-views/list-type/card-List" style={{color:'white'}}>
            Find Project</Link>
        </Menu.Item>
          
      
            }

      <SubMenu title="About">
        <Menu.Item key="/About">
          <Link to="/About">
            <IntlMessages
              id="artisttoget"/>
            </Link>
        </Menu.Item>

        <Menu.Item key="/CurrencyCalculator">
          <Link to="/CurrencyCalculator">
            <IntlMessages
                id="How To Work"/>
          </Link>
        </Menu.Item>

        <Menu.Item key="/Whywe">
          <Link to="/Whywe">
            <IntlMessages
                id="Why artisttoget"/>
          </Link>
        </Menu.Item>
          <Menu.Item key="/custom-views/extras/pricing-table">
            <Link to="/custom-views/extras/pricing-table">
              <IntlMessages
                id="Pricing"/>
            </Link>
        </Menu.Item>
      </SubMenu>

      <Menu.Item key="/Postproject"  style={{ background:"transparent",
          border:'1px solid white',
          margin:'2px', color:'white'}}>
            <Link to="/Postproject" style={{color:'white'}}>
              <IntlMessages
                id="Post Task"/>
            </Link>
        </Menu.Item>

    </Menu>
    
  );
};

HorizontalNav.propTypes = {};

export default HorizontalNav;

