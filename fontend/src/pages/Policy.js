import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Time and Watches has established its Privacy Policy in conformity with the highest standards of data protection to which it is committed. 

Personal information provided by Users on the News Subscription or the Contact Us forms will be made accessible to duly authorised Time and Watches personnel or external parties (such as third party technical service providers, mail carriers, hosting providers, IT companies) appointed as data processors by Time and Watches.</p>
         
        </div>
      </div>
    </Layout>
  );
};

export default Policy;