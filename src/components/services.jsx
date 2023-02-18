import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
          At CHEERIFIT, we provide a comprehensive range of services designed to help you achieve your health and fitness goals. Our personalized services are tailored to your unique needs and are delivered by highly skilled and experienced professionals who are dedicated to your success.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {""}
                  <i className={"fa fa-check-square-o"}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p style={{textAlign: 'justify'}}>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
        <p className="section-title">
          At CHEERIFIT, we are committed to helping you achieve your best health and fitness. Contact us today to schedule a consultation and start your journey to a healthier you.
        </p>
      </div>
    </div>
  );
};
