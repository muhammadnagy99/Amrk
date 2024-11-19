"use client";

import React, { useEffect, useState } from "react";
import Select, { SingleValue, StylesConfig } from "react-select";
import countries from "i18n-iso-countries";
import en from "i18n-iso-countries/langs/en.json";
import ar from "i18n-iso-countries/langs/ar.json";
import callingCodes from "country-calling-code";

countries.registerLocale(en);
countries.registerLocale(ar);

interface CountryOption {
  value: string;
  label: string;
}

interface DemoFormProps {
    content: {
      labels: {
        name: string;
        phone: string;
        email: string;
        restaurantName: string;
        branches: string;
        countryPlaceholder: string;
        submit: string;
        successMessage: string;
      };
      branchOptions: {
        value: string;
        label: string;
      }[];
      lang: "en" | "ar"
    };
  }
  

const customStyles: StylesConfig<CountryOption, false> = {
  control: (provided) => ({
    ...provided,
    borderRadius: "12px",
    borderColor: "#23314c4d",
    padding: "2px",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#23314c4d",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#F5F5F5" : "#FFFFFF",
    color: state.isSelected ? "#B0438A" : "#333333",
    cursor: "pointer",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "12px",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#333333",
  }),
};

export default function DemoForm({ content }: DemoFormProps) {
  const [language, setLanguage] = useState<"en" | "ar">(content.lang);
  const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(
    null
  );
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [restaurantName, setRestaurantName] = useState<string>("");
  const [branches, setBranches] = useState<string>("1");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isClient, setIsClient] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const countryOptions: CountryOption[] = Object.entries(
    countries.getNames(language)
  ).map(([code, name]) => ({
    value: code,
    label: name,
  }));

  const handleCountryChange = (selectedOption: SingleValue<CountryOption>) => {
    if (selectedOption) {
      setSelectedCountry(selectedOption);
      const countryCallingCode = callingCodes.find(
        (entry) => entry.isoCode2 === selectedOption.value
      )?.countryCodes[0];

      if (countryCallingCode) {
        setPhoneNumber(`+${countryCallingCode}`);
      }
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!selectedCountry) newErrors.country = "Country is required.";
    if (!/^\+?\d+$/.test(phoneNumber))
      newErrors.phone = "Phone number is invalid.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Email is invalid.";
    if (!restaurantName.trim())
      newErrors.restaurantName = "Restaurant name is required.";
    if (!branches) newErrors.branches = "Number of branches is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setShowSuccessMessage(false);

    const formData = {
      firstName: name,
      lastName: "",
      country: selectedCountry?.label || "",
      mobile: phoneNumber,
      email,
      restaurantName: restaurantName,
      numberOfBranches: branches,
    };

    console.log(JSON.stringify(formData));
    try {
      const response = await fetch("https://api.amrk.app/amrk-landing/reserve-appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        mode: 'cors',
      });
      if (!response.ok) throw new Error("Form submission failed.");
      setShowSuccessMessage(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-start h-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[588px] bg-white form-shadow rounded-3xl p-10 gap-4"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-primText text-s">
            {content.labels.name}
          </label>
          <input
            className="w-full h-[40px] bg-InputColor input-border rounded-[12px] p-2"
            type="text"
            id="name"
            name="name"
            required
            aria-required="true"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="text-red-500">{errors.name}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-primText text-s">
            {content.labels.phone}
          </label>
          <div className="flex flex-col md:flex-row w-full justify-between gap-2">
            <div className="relative w-full md:w-5/12">
              {isClient && (
                <Select
                  options={countryOptions}
                  className="basic-single"
                  classNamePrefix="select"
                  id="country"
                  name="country"
                  required
                  placeholder={content.labels.countryPlaceholder}
                  isSearchable={true}
                  onChange={handleCountryChange}
                  styles={customStyles}
                />
              )}
              {errors.country && (
                <span className="text-red-500">{errors.country}</span>
              )}
            </div>
            <input
              className="w-full md:w-[55%] h-[40px] bg-InputColor input-border rounded-[12px] p-2"
              type="tel"
              id="phone"
              name="phone"
              required
              aria-required="true"
              value={phoneNumber}
              onChange={handleInputChange}
            />
            {errors.phone && (
              <span className="text-red-500">{errors.phone}</span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-primText text-s">
            {content.labels.email}
          </label>
          <input
            className="w-full h-[40px] bg-InputColor input-border rounded-[12px] p-2"
            type="text"
            id="email"
            name="email"
            required
            aria-required="true"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
        </div>

        <div className="flex flex-col md:flex-row w-full justify-between gap-4">
          <div className="flex flex-col gap-2 w-full md:w-[65%]">
            <label htmlFor="restaurant-name" className="text-primText text-s">
              {content.labels.restaurantName}
            </label>
            <input
              className="w-full h-[40px] bg-InputColor input-border rounded-[12px] p-2"
              type="text"
              id="restaurant-name"
              name="restaurant-name"
              required
              aria-required="true"
              value={restaurantName}
              onChange={(e) => setRestaurantName(e.target.value)}
            />
            {errors.restaurantName && (
              <span className="text-red-500">{errors.restaurantName}</span>
            )}
          </div>
          <div className="flex flex-col gap-2 w-full md:w-[30%]">
            <label htmlFor="branches" className="text-primText text-s">
              {content.labels.branches}
            </label>
            <div className="relative w-full">
              <select
                className="w-full h-[40px] bg-InputColor input-border rounded-[12px] p-2 appearance-none cursor-pointer"
                id="branches"
                name="branches"
                required
                aria-required="true"
                value={branches}
                onChange={(e) => setBranches(e.target.value)}
              >
                {content.branchOptions.map((option, index) => (
                  <option
                    key={index}
                    value={option.value}
                    className="rounded-sm"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
              <svg
                className={`absolute ${content.lang == 'ar' ? 'left-3' : 'right-3'} top-1/2 transform -translate-y-1/2 pointer-events-none`}
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.49947 9.97411e-07L0.499468 1.78422e-06C0.408347 0.000268821 0.31903 0.0237669 0.24113 0.0679664C0.16323 0.112165 0.0996975 0.175392 0.0573705 0.25084C0.0150436 0.326289 -0.00447426 0.411103 0.000916866 0.496152C0.00630799 0.581201 0.036405 0.663265 0.0879683 0.73351L4.58797 6.81101C4.77447 7.063 5.22347 7.063 5.41047 6.81101L9.91047 0.733509C9.96256 0.66341 9.9931 0.581306 9.99879 0.496115C10.0045 0.410924 9.98508 0.325906 9.94271 0.250297C9.90035 0.174689 9.83663 0.111381 9.75849 0.0672536C9.68034 0.0231262 9.59076 -0.000133479 9.49947 9.97411e-07Z"
                  fill="#B0438A"
                />
              </svg>
              {errors.branches && (
                <span className="text-red-500">{errors.branches}</span>
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className={`flex items-center justify-center bg-PrimBtn w-[139px] h-[48px] rounded-xl text-white submit-btn mt-[40px] mb-2 ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="loader"></span>
          ) : (
            content.labels.submit
          )}
        </button>

        {showSuccessMessage && (
          <p className="text-green-500 mt-2">{content.labels.successMessage}</p>
        )}
      </form>

      <style jsx>{`
        .loader {
          border: 4px solid #f3f3f3;
          border-top: 4px solid #3498db;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
