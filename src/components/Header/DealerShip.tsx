import React, { useState } from 'react';
import { FaUser, FaComment, FaPhone, FaEnvelope } from 'react-icons/fa'; // Importing icons from react-icons/fa

// Define the URL for the hero background image
const DEALERSHIP_HERO_BG: string = 'https://www.creativepaints.in/themes/images/dealership.jpg'; // This image seems to match the background of the "BECOME A DEALER" banner

const Dealership: React.FC = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    company_name: '',
    company_address: '',
    business_type: '',
    gstin: '',
    company_pan_no: '',
    contact_name1: '',
    personal_pan1: '',
    mobile1: '',
    phone1: '',
    dob1: '',
    personal_email1: '',
    delivery_address: '',
    delivery_contact_name: '',
    delivery_contact_no: '',
    security_cheque: '',
    pdc_cheque: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the formData to your backend
    alert('Form submitted! Check console for data.');
  };

  // Common input field component for consistent styling
  interface InputFieldProps {
    name: string;
    placeholder: string;
    type?: string;
    icon: React.ElementType; // Type for React Icon component
    required?: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    isTextArea?: boolean;
    className?: string; // For additional tailwind classes
  }

  const InputField: React.FC<InputFieldProps> = ({ name, placeholder, type = 'text', icon: Icon, required = false, value, onChange, isTextArea = false, className = '' }) => (
    <div className="relative mb-6"> {/* Adjusted margin-bottom for spacing */}
      {isTextArea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full p-4 pl-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffae2b] resize-y min-h-[100px] ${className}`}
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full p-4 pl-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffae2b] ${className}`}
        />
      )}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
        <Icon className="h-5 w-5" />
      </div>
    </div>
  );

  return (
    <section id="dealership">
      {/* Hero Banner for BECOME A DEALER */}
      <div
        className="relative py-20 md:py-32 bg-cover bg-center text-white flex items-end justify-center"
        style={{ backgroundImage: `url(${DEALERSHIP_HERO_BG})` }}
      >
        {/* Overlay for background opacity */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 container mx-auto px-4 text-center pb-8 md:pb-12">
          <div className="inner-content-box">
            <div className="title-s2">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fadeInUp">BECOME A DEALER</h1>
              <ul className="flex justify-center space-x-3 mt-4">
                <li className="w-4 h-4 bg-[#ffae2b] rounded-full circle-color1"></li>
                <li className="w-4 h-4 bg-red-500 rounded-full circle-color2"></li>
                <li className="w-4 h-4 bg-[#34d399] rounded-full circle-color3"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area - Form */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-gray-700 text-lg mb-12 text-center max-w-2xl mx-auto">
            We are pleased to associate with our esteemed customer. Please fill all the details of the form and our representative will respond you soon.
          </p>

          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 md:p-12 shadow-lg rounded-lg">
            {/* Company Details */}
            <div className="inner-box mb-10">
              <div className="sec-title pb-8 border-b border-gray-200 mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Company Details</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                <div className="md:col-span-2"> {/* Company Name spans full width */}
                  <InputField
                    name="company_name"
                    placeholder="Company Name"
                    icon={FaUser}
                    required={true}
                    value={formData.company_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="md:col-span-2"> {/* Company Address spans full width */}
                  <InputField
                    name="company_address"
                    placeholder="Company Address..."
                    icon={FaComment}
                    required={true}
                    value={formData.company_address}
                    onChange={handleChange}
                    isTextArea={true}
                  />
                </div>
                <InputField
                  name="business_type"
                  placeholder="Business Type ( Distributor / wholesaler / Retailer / Broker )"
                  icon={FaUser}
                  required={true}
                  value={formData.business_type}
                  onChange={handleChange}
                />
                <InputField
                  name="gstin"
                  placeholder="GSTIN"
                  icon={FaUser} // Using FaUser as a placeholder for GSTIN, could be FaInfoCircle or similar
                  required={true}
                  value={formData.gstin}
                  onChange={handleChange}
                  className="mg-0" // Keeping original class if it has specific meaning, otherwise can remove
                />
                <InputField
                  name="company_pan_no"
                  placeholder="PAN Detail"
                  icon={FaUser} // Using FaUser as a placeholder for PAN, could be FaIdCard or similar
                  required={true}
                  value={formData.company_pan_no}
                  onChange={handleChange}
                  className="mg-0"
                />
              </div>
            </div>

            {/* Personal Details */}
            <div className="inner-box mb-10">
              <div className="sec-title pb-8 border-b border-gray-200 mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Personal Details</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                <InputField
                  name="contact_name1"
                  placeholder="Contact Person (Owner / Partner / Director / Proprietor)"
                  icon={FaUser}
                  value={formData.contact_name1}
                  onChange={handleChange}
                />
                <InputField
                  name="personal_pan1"
                  placeholder="PAN Detail"
                  icon={FaUser}
                  value={formData.personal_pan1}
                  onChange={handleChange}
                />
                <InputField
                  name="mobile1"
                  placeholder="Phone Number"
                  icon={FaPhone}
                  type="tel"
                  value={formData.mobile1}
                  onChange={handleChange}
                />
                <InputField
                  name="phone1"
                  placeholder="Landline Number"
                  icon={FaPhone}
                  type="tel"
                  value={formData.phone1}
                  onChange={handleChange}
                />
                <InputField
                  name="dob1"
                  placeholder="Date Of Birth (DOB)"
                  icon={FaUser} // Placeholder icon for DOB
                  type="date" // Use type="date" for native date picker
                  value={formData.dob1}
                  onChange={handleChange}
                  className="mg-0"
                />
                <InputField
                  name="personal_email1"
                  placeholder="Email Address"
                  icon={FaEnvelope}
                  type="email"
                  value={formData.personal_email1}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Delivery Details */}
            <div className="inner-box mb-10">
              <div className="sec-title pb-8 border-b border-gray-200 mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Delivery Details</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                <div className="md:col-span-2"> {/* Delivery Address spans full width */}
                  <InputField
                    name="delivery_address"
                    placeholder="Delivery Address..."
                    icon={FaComment}
                    value={formData.delivery_address}
                    onChange={handleChange}
                    isTextArea={true}
                  />
                </div>
                <InputField
                  name="delivery_contact_name"
                  placeholder="Contact Person"
                  icon={FaUser}
                  value={formData.delivery_contact_name}
                  onChange={handleChange}
                />
                <InputField
                  name="delivery_contact_no"
                  placeholder="Contact Number"
                  icon={FaPhone}
                  type="tel"
                  value={formData.delivery_contact_no}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Security Deposits */}
            <div className="inner-box mb-10">
              <div className="sec-title pb-8 border-b border-gray-200 mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Security Deposits</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                <InputField
                  name="security_cheque"
                  placeholder="Security Cheque Details"
                  icon={FaUser} // Placeholder icon
                  value={formData.security_cheque}
                  onChange={handleChange}
                />
                <InputField
                  name="pdc_cheque"
                  placeholder="PDC Cheque Details"
                  icon={FaPhone} // Placeholder icon
                  value={formData.pdc_cheque}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-10">
              <button
                type="submit"
                className="btn-one px-8 py-4 bg-[#ffae2b] text-white font-semibold rounded-md shadow-lg hover:bg-yellow-600 transition duration-300"
                data-loading-text="Please wait..."
              >
                Send Your Message <span className="ml-2">&#8594;</span> {/* Unicode right arrow */}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Dealership;