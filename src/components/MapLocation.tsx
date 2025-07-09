import React from "react";

const MapLocation = () => {
  return (
    <section className="w-full px-4 my-10">
      <div className="relative w-full h-[60vh] rounded-md overflow-hidden shadow-md">
        {/* Google Map iframe */}
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

        {/* Red SVG pin (overlayed in center) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14 text-blue-500 drop-shadow-md animate-bounce"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default MapLocation;
