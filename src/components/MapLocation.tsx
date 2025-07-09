import React from "react";

const MapLocation = () => {
  return (
    <section className="w-full px-4 my-10">
      <div className="w-full h-[60vh] rounded-md overflow-hidden shadow-md">
        <iframe
          title="Creation Paints Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14720.981227662357!2d75.8915!3d22.7178!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd34a6f944d1%3A0xc8124b7a83a7d8fa!2sDinesh%20Nagar%2C%20Palda%2C%20Indore%2C%20Madhya%20Pradesh%20452020!5e0!3m2!1sen!2sin!4v1720519413921!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default MapLocation;
