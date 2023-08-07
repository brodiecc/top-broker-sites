"use client";
import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        async
        id="ga-script-1"
        src="https://www.googletagmanager.com/gtag/js?id=G-SZ21P7SG07%22%3E"
      ></Script>
      <Script id="ga-script-2">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-SZ21P7SG07');
    `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
