import React from "react";

const MapLocation = () => {
  return (
    <section className="">
      {/* <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"> */}
       

        {/* Embedded Google Map */}
        <div className="w-full h-[60vh] rounded-md overflow-hidden hover: shadow-gray-300">
          <iframe
            title="Creation Paints Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.266203792301!2d75.87319407401985!3d22.7189303794048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd23c1b6311b%3A0xb4723d7a2b2e1892!2sShastri%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1720391402901!5m2!1sen!2sin"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      {/* </div> */}
    </section>
  );
};

export default MapLocation;
