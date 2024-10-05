import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Megakart"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          The Megakart features over 150 brands and thousands and thousands of watches (and it is growing every week). If you are a newbie to our industry, searching for a watch is as simple as finding a vacation home on Airbnb, – you just choose your preferences in our filters and let our search find you the perfect watch. And if you are a bit of an expert, you can have a lot of fun with our advanced filters and search watch functions and complications to your heart’s content.

In addition to the most advanced watch database you will find, the website also includes numerous articles to give you ideas, to help you make the right purchase and discover more about the wonders of watches.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;