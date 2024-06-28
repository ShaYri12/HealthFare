'use client'
import { useEffect } from 'react';

const ZohoSalesIQWidget = ({ user }) => {
  useEffect(() => {
    // Zoho SalesIQ script
    (function() {
      var d = document;
      var s = d.createElement('script');
      s.type = 'text/javascript';
      s.defer = true;
      s.src = 'https://salesiq.zohopublic.com/widget?wc=siq49883d2d20fdd9d31ae257ca9427e7ef9c84260574a9bca6f846c4e55bce240c';
      s.id = 'zsiqscript';
      var t = d.getElementsByTagName('script')[0];
      t.parentNode.insertBefore(s, t);

      // Zoho SalesIQ initialization script
      window.$zoho = window.$zoho || {};
      window.$zoho.salesiq = window.$zoho.salesiq || { ready: function() {} };
    })();

    // Cleanup function to remove Zoho SalesIQ script on component unmount
    return () => {
      const zohoScript = document.getElementById('zsiqscript');
      if (zohoScript) {
        zohoScript.parentNode.removeChild(zohoScript);
        delete window.$zoho;
      }
    };
  }, [user]);

  return null;
};

export default ZohoSalesIQWidget;
