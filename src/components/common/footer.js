import React from 'react';
import {FacebookFilled,TwitterCircleFilled,LinkedinFilled,WhatsAppOutlined,InstagramOutlined} from '@ant-design/icons';
import { BackTop } from 'antd';

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="http://google.com">Tech</a>
        </div>
        <ul className="socials">
          <li><a href="https://www.facebook.com/"><FacebookFilled  /></a></li>
          <li><a href="https://www.twitter.com/"><TwitterCircleFilled /></a></li>
          <li><a href="https://www.linkedin.com/"><LinkedinFilled /></a></li>
          <li><a href="https://www.pinterest.com/"><WhatsAppOutlined /></a></li>
          <li><a href="https://www.instagram.com/"><InstagramOutlined /></a></li>
        </ul>
        <div className="copyright">Copyright &copy; 2020 Tech</div>
        <BackTop>
          <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>
    </div>
  );
}

export default AppFooter;