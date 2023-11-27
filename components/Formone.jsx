import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setFormValues } from "@/src/store/features/formSlice";
import schema from "./lib/schema";

const Formone = ({section, setSection , handleBack}) => {
  const router = useRouter();
  const [flagUrl, setFlagUrl] = useState("");
  const userLocation = useSelector((state) => state.location.userLocation);
  const city = userLocation ? userLocation.city : "";
  const country = userLocation ? userLocation.country : "";
  const dispatch = useDispatch();

  const countryOptions = [
    { code: "US", name: "+1" }, // United States with dial code +1
    { code: "CA", name: "+1" }, // Canada with dial code +1
    { code: "GB", name: "+44" }, // United Kingdom with dial code +44
    { code: "PK", name: "+92" }, // Pakistan with dial code +92
    { code: "AU", name: "+61" }, // Australia with dial code +61
    { code: "DE", name: "+49" }, // Germany with dial code +49
    { code: "FR", name: "+33" }, // France with dial code +33
    { code: "JP", name: "+81" }, // Japan with dial code +81
    { code: "IT", name: "+39" }, // Italy with dial code +39
    { code: "BR", name: "+55" }, // Brazil with dial code +55
    { code: "IN", name: "+91" }, // India with dial code +91
    { code: "CN", name: "+86" }, // China with dial code +86
    { code: "RU", name: "+7" }, // Russia with dial code +7
    { code: "MX", name: "+52" }, // Mexico with dial code +52
    { code: "ES", name: "+34" }, // Spain with dial code +34
    { code: "KR", name: "+82" }, // South Korea with dial code +82
    { code: "SA", name: "+966" }, // Saudi Arabia with dial code +966
    { code: "ZA", name: "+27" }, // South Africa with dial code +27
    { code: "AE", name: "+971" }, // United Arab Emirates with dial code +971
    { code: "SG", name: "+65" }, // Singapore with dial code +65
    // Add more countries as needed
  ];

  const handleContinue = () => {
    setSection(section + 1);
  };

  
  const formValues = useSelector((state) => state.form.formValues);
  console.log(formValues)
 
  // date


  // console.log(formattedDate); // Output: "Monday, 27 November 2023"
  // const currentTime = new Date();

  // // Get the current hours, minutes, and seconds
  // const hours = currentTime.getHours();
  // const minutes = currentTime.getMinutes();
  // const seconds = currentTime.getSeconds();

  // // Format the time as HH:MM:SS (optional for seconds)
  // const formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

  // console.log(formattedTime); // Output: "15:25:10" (example)

  // fetchflag
  const fetchFlag = async (countryCode) => {
    try {
      const response = await fetch(
        `https://flagcdn.com/${countryCode.toLowerCase()}.svg`
      );
      if (response.ok) {
        setFlagUrl(response.url);
      } else {
        // Handle errors if necessary
      }
    } catch (error) {
      // Handle fetch errors
    }
  };

 
 
  const { values, handleBlur, handleChange, handleSubmit, errors, touched, resetForm } = useFormik({
    initialValues: formValues,
    validationSchema: schema,
    onSubmit: (values, action) => {
      console.log(values);
      dispatch(setFormValues(values));
  
      if (section === 3) {
        setSection(1); // Reset section to 1 when the form reaches section 3
        resetForm(); // Reset the form fields
      } else {
        setSection(section + 1); // Move to the next section
      }
    },
  });
  


   // Use useEffect to fetch the flag when the country code changes
   useEffect(() => {
    if (values.countrycode) {
      fetchFlag(values.countrycode);
    }
  }, [values.countrycode]);
  
    

  return (
    <div className="block">
          <section className="min-h-screen relative flex flex-col justify-between  ">
            <div className="user-details absolute bg-center bg-no-repeat inset-0 blur-lg opacity-20 z-[-5] sm:bg-contain "></div>
            <header className="uppercase px-8 lg:px-2 grid grid-cols-3 my-8 lg:my-8 mb-16 tracking-widest text-[20px] lg:text-[16px]">
              <div className=" items-center">
                <h2 className="flex  ">APPLY</h2>
              </div>

              <section className="flex flex-col items-center justify-center text-center sm:text-[14px] ">
                <h1>YOUR APPLICATION</h1>
                <div className="flex items-center justify-center gap-x-2 mt-7">
                  <div className="bg-[#BE9f56] h-[2px] w-[60px] lg:w-[20px]"></div>
                  <div className="bg-black h-[2px] w-[60px] lg:w-[20px]"></div>
                  <div className="bg-black h-[2px] w-[60px] lg:w-[20px]"></div>
                </div>
              </section>
            </header>

            <div className="flex items-center justify-center sm:py-16 z-10 mt-[20px] lg:mt-[10px]">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col flex-1 items-center space-y-2 text-[18px] lg:text-[16px]"
              >
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="tracking-[2px] md:tracking-[0px] w-[90%] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none"
                />

                {errors.email && touched.email && (
                  <div className="text-[#dc3545]">{errors.email}</div>
                )}
                <div className="w-[90%] max-w-[580px] relative">
                  <input
                    type="email"
                    placeholder="CONFIRM EMAIL ADDRESS"
                    name="confirmEmail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmEmail}
                    className="tracking-[2px] md:tracking-[0px] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px] w-full text-center focus:bg-transparent   bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none"
                  />
                  {errors.confirmEmail && touched.confirmEmail && (
                    <div className="text-[#dc3545]">{errors.confirmEmail}</div>
                  )}
                </div>
                <div className="py-1"></div>
                <div className="relative flex flex-col w-[90%] max-w-[580px]">
                  <input
                    type="text"
                    placeholder="FIRST NAME"
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    className="tracking-[2px] md:tracking-[0px] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px]  focus:bg-transparent w-full text-center bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none"
                  />
                  {errors.firstName && touched.firstName && (
                    <div className="text-[#dc3545]">{errors.firstName}</div>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="LAST NAME "
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  className="tracking-[2px] md:tracking-[0px] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px] w-[90%] max-w-[580px] text-center   bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none focus:bg-transparent"
                />
                {errors.lastName && touched.lastName && (
                  <div className="text-[#dc3545]">{errors.lastName}</div>
                )}
                <div className="py-1"></div>
                <div className="w-[90%] max-w-[580px]">
                  <input
                    type="date"
                    max="2050-12-25"
                    name="dateOfBirth"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dateOfBirth}
                    className="w-full tracking-[2px] md:tracking-[0px] font-normal placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px]  text-center uppercase   bg-transparent border  placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none focus:bg-transparent"
                  />
                  {errors.dateOfBirth && touched.dateOfBirth && (
                    <div className="text-[#dc3545]">{errors.dateOfBirth}</div>
                  )}
                  <p className="text-center text-[12px] hidden sm:block text-[#737373]">
                    Date of Birth
                  </p>
                </div>
                <p className="text-black font-normal text-[18px]  tracking-[2px] w-[90%] max-w-[580px]  outline-none bg-transparent  border placeholder:text-center text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] uppercase">
                  {city}
                </p>
                <div className="py-1"></div>
                <div className="flex w-[90%] max-w-[580px] text-center items-center  gap-2 h-14 relative focus:bg-transparent">
                  <div className="w-[200px]  p-[4px] text-sm  outline-none bg-transparent text-gray-500 border placeholder:text-center text-center border-gray-500/50 rounded-xl focus:border-[#BE9F56]">
                    <div className="w-full py-[2px] " id="countryCode">
                      <div className="flex justify-around items-center">
                        <span className="flex text-[18px] lg:text-[16px] items-center relative">
                          <select
                            id="countrycode"
                            name="countrycode"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.countrycode}
                            className="placeholder:text-[18px] ml-4   text-[18px] md:tracking-[0px] tracking-[2px] w-[90%] max-w-[580px] outline-none bg-transparent  placeholder:text-center text-center  rounded-xl py-3"
                          >
                            <option
                              value=""
                              className=""
                              defaultValue={"Country Code"}
                            >
                              Country Code
                            </option>
                            {countryOptions.map((country) => (
                              <option key={country.code} value={country.code}>
                                {country.name}
                              </option>
                            ))}
                          </select>
                          {flagUrl && (
                            <img
                              src={flagUrl}
                              alt="Flag"
                              className="absolute border rounded-sm left-0 mr-4 top-1/2 -translate-y-1/2  w-10"
                            />
                          )}
                          
                        </span>
                      </div>
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="PHONE NUMBER"
                    name="phoneNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phoneNumber}
                    className="tracking-[2px] md:tracking-[0px] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px] w-full text-center  bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none focus:bg-transparent"
                  />
                  {errors.phoneNumber && touched.phoneNumber && (
                    <div className="text-[#dc3545]">{errors.phoneNumber}</div>
                  )}
                  <button
                    type="submit"
                    className="h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] absolute bottom-0 right-[-200px] rounded-lg flex items-center text-center justify-center uppercase"
                  >
                    CONTINUE
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
  );
};

export default Formone;