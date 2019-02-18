import React from 'react';

const Footer = () => {

  const items = [
    ['HELP & SUPPORT', 'Help Center', 'Service Area', 'Contact Support', 'Privacy and Terms'],
    ['COMPANY', 'How It Works', 'Blog', 'Press', 'About Us'],
    ['PRODUCTS', 'Gift Card', 'iOS App', 'Android App'],
    ['JOIN US', 'Facebook', 'Instagram', 'Subscribe']
  ];
     return(
      <footer>
        <div className="container footer">
          <div className="logo-cntnr">
          <span className="logo"></span>
          </div>
          <div className="links-cntnr">
            {
              items.map((el, i) => {
                return(<div className="link-section" key={'foot-sec'+i}>
                  {el.map((linkEl, LinkIndex) => {
                    return(
                      <span className="footLink" key={'footLink'+LinkIndex}>{linkEl}</span>
                    )
                  })}
                </div>);
              })
            }
          </div>
        </div>
      </footer>
     );
   };

export default Footer;