'use client'
import { useEffect } from 'react';

const IntercomWidget = ({ user }) => {
  useEffect(() => {
    window.intercomSettings = {
      api_base: "https://api-iam.intercom.io",
      app_id: "yaxie5q2",
      user_id: user?.id, // Replace "user.id" with the variable you use to capture the user's ID
      name: user?.name, // Replace "user.name" with the variable you use to capture the user's name
      email: user?.email, // Replace "user.email" with the variable you use to capture the user's email address
      created_at: user?.createdAt, // Replace "user.createdAt" with the variable you use to capture the user's sign-up date
    };

    (function(){
      var w=window;
      var ic=w.Intercom;
      if(typeof ic==="function"){
        ic('reattach_activator');
        ic('update',w.intercomSettings);
      }else{
        var d=document;
        var i=function(){i.c(arguments);};
        i.q=[];
        i.c=function(args){i.q.push(args);};
        w.Intercom=i;
        var l=function(){
          var s=d.createElement('script');
          s.type='text/javascript';
          s.async=true;
          s.src='https://widget.intercom.io/widget/yaxie5q2';
          var x=d.getElementsByTagName('script')[0];
          x.parentNode.insertBefore(s,x);
        };
        if(document.readyState==='complete'){
          l();
        }else if(w.attachEvent){
          w.attachEvent('onload',l);
        }else{
          w.addEventListener('load',l,false);
        }
      }
    })();

    return () => {
      if (typeof window.Intercom === "function") {
        window.Intercom('shutdown');
      }
    };
  }, [user]);

  return null;
};

export default IntercomWidget;
