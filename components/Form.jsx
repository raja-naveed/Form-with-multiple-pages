import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { setFormValues } from "@/src/store/features/formSlice";
import schema from "./lib/schema";

const Form = () => {
  const [section, setSection] = useState(1);
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

  const handleBack = () => {
    setSection(section - 1);
  };
  const formValues = useSelector((state) => state.form.formValues);
  console.log(formValues)
 
  // date
  const currentDate = new Date();

  // Day of the week
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = days[currentDate.getDay()];

  // Get the current date, month, and year
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  // Format the date as "Day of the week, Day Month Year"
  const formattedDate = `${dayOfWeek}, ${day} ${month} ${year}`;

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
    <div
      className="mx-auto container relative"
      style={{ fontFamily: "Lato, sans-serif" }}
    >
      <header className="bg-transparent absolute right-4 xs:right-0 top-2 lg:top-0 p-2">
        <nav className="flex justify-center">
          <div className="text-end">
            <div className="flex justify-end items-center">
              <div className="flex undefined ">
                <h3 className="text-[11px]  md:text-[9px] xs:text-[7px] tracking-[2px] ml-2 uppercase">
                  <p className="text-inherit">{city}&nbsp;</p>
                </h3>
                <h3 className="text-[11px]  md:text-[9px] tracking-[2px] xs:text-[7px]  ml-2 uppercase undefined">
                  <p className="text-inherit">{country}</p>
                </h3>
              </div>
              <p></p>
            </div>
            <div>
              <p className="text-[#BE9F56] xs:text-[8px]  text-[11px]  md:text-[9px] tracking-[2px] uppercase">
                {formattedDate}
              </p>
            </div>
          </div>
          <div className="flex items-center ml-3">
            <img
              src="https://flagcdn.com/pk.svg"
              alt="Pakistan"
              className="h-7 w-7 object-contain"
            />
          </div>
        </nav>
      </header>

      {section === 1 && (
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
      )}
      {section === 2 && (
        <div className="block">
          <section className="min-h-screen relative flex flex-col justify-between  ">
            <div className="user-details absolute bg-center bg-no-repeat inset-0 blur-lg opacity-20 z-[-5] sm:bg-contain "></div>
            <header className="uppercase px-8 lg:px-2 grid grid-cols-3 my-8 lg:my-8 mb-16 tracking-widest text-[20px] lg:text-[16px]">
              <div className=" items-center">
                <h2 className="flex  ">APPLY</h2>
                <div className="flex  ">
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-1 uppercase tracking-widest text-[20px] lg:text-[16px]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 md:h-4 md:w-4 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.293 16.293a1 1 0 0 1-1.414 0L7 10.414V13a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1v2.586l6.293-6.293a1 1 0 0 1 1.414 1.414L8.414 9H17a1 1 0 1 1 0 2h-8.586l6.293 6.293a1 1 0 0 1 0 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Back
                  </button>
                </div>
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

            <div className="flex items-center justify-center sm:py-16 z-10  mt-[20px] lg:mt-[10px] ">
              <form
              onSubmit={handleSubmit}
                className="flex flex-col flex-1 items-center space-y-2 relative  text-[18px] lg:text-[16px]"
              >
                <div className="w-[90%] max-w-[580px]  text-center flex flex-col items-center space-y-2  text-[22px] lg:text-[18px] tracking-[2px]">
                  <h1>{values.email}</h1>
                  <div className="py-1"></div>
                  <h1>{`${values.firstName} ${values.lastName}`}</h1>
                  <div className="py-1"></div>
                </div>
                <input
                  type="text"
                  placeholder="NATIONAL ID NUMBER (CNIC)"
                  name="nic"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nic}
                  className="placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px] w-[90%] max-w-[580px]  text-center   bg-transparent text-black border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none"
                />
                  {errors.nic && touched.nic && (
                    <div className="text-[#dc3545]">{errors.nic}</div>
                  )}
                <div className="py-1"></div>
                <input
                  type="text"
                  placeholder="ADDRESS 1"
                  name="address1"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address1}
                  className="placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px] w-[90%] max-w-[580px]  text-center   bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none"
                />
                 {errors.address1 && touched.address1 && (
                    <div className="text-[#dc3545]">{errors.nic}</div>
                  )}
                <input
                  type="text"
                  placeholder="ADDRESS 2 (APARTMENT, SUITE, ETC.)"
                  name="address2"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address2}
                  className="placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px] w-[90%] max-w-[580px]  text-center   bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none"
                />
                {errors.address2 && touched.address2 && (
                    <div className="text-[#dc3545]">{errors.address2}</div>
                  )}
                <input
                  type="text"
                  placeholder="CITY"
                  name="city"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.city}
                  className="placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px] w-[90%] max-w-[580px]  text-center   bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none"
                />
                {errors.city && touched.city && (
                    <div className="text-[#dc3545]">{errors.city}</div>
                  )}
                <input
                  type="text"
                  placeholder="STATE / REGION"
                  name="state"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.state}
                  className="placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px] w-[90%] max-w-[580px]  text-center   bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none"
                />
                 {errors.state && touched.state && (
                    <div className="text-[#dc3545]">{errors.state}</div>
                  )}
                <div className="relative w-[90%] max-w-[580px]">
                  <input
                    type="text"
                    placeholder="ZIP CODE / POST CODE"
                    name="zipCode"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.zipCode}
                    className="placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px] w-full  text-center bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none"
                  />
                  {errors.zipCode && touched.zipCode && (
                    <div className="text-[#dc3545]">{errors.zipCode}</div>
                  )}
                  <button
                    onClick={handleContinue}
                    className=" h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] absolute bottom-0 right-[-200px] rounded-lg flex items-center text-center justify-center uppercase"
                  >
                    CONTINUE
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      )}
      {section === 3 && (
        <div className="block">
          <section className="min-h-screen relative flex flex-col  ">
            <div className="u absolute bg-center bg-no-repeat inset-0 blur-lg opacity-20 z-[-5] sm:bg-contain "></div>
            <header className="uppercase px-8 lg:px-2 grid grid-cols-3 my-8 lg:my-8 mb-16 tracking-widest text-[20px] lg:text-[16px]">
              <div className=" items-center">
                <h2 className="flex  ">APPLY</h2>
                <div className="flex  ">
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-1 uppercase tracking-widest text-[20px] lg:text-[16px]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 md:h-4 md:w-4 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.293 16.293a1 1 0 0 1-1.414 0L7 10.414V13a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1v2.586l6.293-6.293a1 1 0 0 1 1.414 1.414L8.414 9H17a1 1 0 1 1 0 2h-8.586l6.293 6.293a1 1 0 0 1 0 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Back
                  </button>
                </div>
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

            <div className="flex items-center justify-center sm:py-16 z-10  mt-1  ">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col flex-1 items-center space-y-2  text-[18px] lg:text-[16px]"
              >
                <div className="w-[90%] max-w-[580px] flex flex-col items-center space-y-2 text-[22px] lg:text-[18px] tracking-[2px]">
                  <h1>{values.email}</h1>
                  <div className="py-1"></div>
                  <h1>{`${values.firstName} ${values.lastName}`}</h1>
                  <div className="py-1"></div>
                </div>
                <div className="py-1"></div>
                <select
                  id="qualifications"
                  name="qualifications"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.qualifications}
                  className="placeholder:text-[18px]  text-[18px] md:tracking-[0px] tracking-[2px] w-[90%] max-w-[580px]  outline-none bg-transparent  border placeholder:text-center text-center border-gray-500/50 rounded-xl py-3 focus:border-[#BE9F56] "
                >
                  <option value="" className="" selected="">
                    QUALIFICATION(S)
                  </option>
                  <option value="BA" className="uppercase">
                    BA
                  </option>
                  <option value="BBA" className="uppercase">
                    BBA
                  </option>
                  <option value="BSCS" className="uppercase">
                    BSCS
                  </option>
                  <option value="BSSE" className="uppercase">
                    BSSE
                  </option>
                  <option value="BSIT" className="uppercase">
                    BSIT
                  </option>
                  <option value="BFA" className="uppercase">
                    BFA
                  </option>
                  <option value="BS. HONS." className="uppercase">
                    BS. HONS.
                  </option>
                  <option value="ACCA" className="uppercase">
                    ACCA
                  </option>
                  <option value="OTHER" className="uppercase">
                    OTHER
                  </option>
                </select>
                {errors.qualifications && touched.qualifications && (
                    <div className="text-[#dc3545]">{errors.qualifications}</div>
                  )}
                <select
                  name="yearOfCompletion"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.yearOfCompletion}
                  className="placeholder:text-[18px]   text-[18px] w-[90%] max-w-[580px]   outline-none bg-transparent md:tracking-[0px] tracking-[2px] border placeholder:text-center text-center border-gray-500/50 rounded-xl py-3 focus:border-[#BE9F56] "
                >
                  <option value="" selected="">
                    YEAR OF COMPLETION
                  </option>
                  <option value="2028" className="uppercase">
                    2028
                  </option>
                  <option value="2027" className="uppercase">
                    2027
                  </option>
                  <option value="2026" className="uppercase">
                    2026
                  </option>
                  <option value="2025" className="uppercase">
                    2025
                  </option>
                  <option value="2024" className="uppercase">
                    2024
                  </option>
                  <option value="2023" className="uppercase">
                    2023
                  </option>
                  <option value="2022" className="uppercase">
                    2022
                  </option>
                  <option value="2021" className="uppercase">
                    2021
                  </option>
                  <option value="2020" className="uppercase">
                    2020
                  </option>
                  <option value="2019" className="uppercase">
                    2019
                  </option>
                  <option value="2018" className="uppercase">
                    2018
                  </option>
                  <option value="2017" className="uppercase">
                    2017
                  </option>
                  <option value="2016" className="uppercase">
                    2016
                  </option>
                  <option value="2015" className="uppercase">
                    2015
                  </option>
                  <option value="2014" className="uppercase">
                    2014
                  </option>
                  <option value="2013" className="uppercase">
                    2013
                  </option>
                  <option value="2012" className="uppercase">
                    2012
                  </option>
                  <option value="2011" className="uppercase">
                    2011
                  </option>
                  <option value="2010" className="uppercase">
                    2010
                  </option>
                </select>
                {errors.yearOfCompletion && touched.yearOfCompletion && (
                    <div className="text-[#dc3545]">{errors.yearOfCompletion}</div>
                  )}
                <input
                  type="text"
                  name="university"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.university}
                  placeholder="UNIVERSITY"
                  className="placeholder:text-[18px]  text-[18px] md:tracking-[0px] placeholder:text-black tracking-[2px] w-[90%] max-w-[580px]  outline-none bg-transparent  border placeholder:text-center text-center border-gray-500/50 rounded-xl py-3 focus:border-[#BE9F56] "
                />
                 {errors.university && touched.university && (
                    <div className="text-[#dc3545]">{errors.university}</div>
                  )}
                <select
                  id="experience"
                  name="experience"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.experience}
                  className="placeholder:text-[18px]  text-[18px] md:tracking-[0px] tracking-[2px] w-[90%] max-w-[580px]   outline-none bg-transparent border placeholder:text-center text-center border-gray-500/50 rounded-xl py-3 focus:border-[#BE9F56] "
                >
                  <option value="" selected="">
                    EXPERIENCE
                  </option>
                  <option value="NO EXPERIENCE" className="uppercase">
                    NO EXPERIENCE
                  </option>
                  <option value="LESS THAN 1 Year" className="uppercase">
                    LESS THAN 1 YEAR
                  </option>
                  <option value="1 YEARS" className="uppercase">
                    1 YEARS
                  </option>
                  <option value="2 YEARS" className="uppercase">
                    2 YEARS
                  </option>
                  <option value="3 YEARS" className="uppercase">
                    3 YEARS
                  </option>
                  <option value="4 YEARS" className="uppercase">
                    4 YEARS
                  </option>
                  <option value="5 YEARS" className="uppercase">
                    5 YEARS
                  </option>
                  <option value="6 YEARS" className="uppercase">
                    6 YEARS
                  </option>
                  <option value="7 YEARS" className="uppercase">
                    7 YEARS
                  </option>
                  <option value="MORE THAN 7 YEARS" className="uppercase">
                    MORE THAN 7 YEARS
                  </option>
                </select>
                {errors.experience && touched.experience && (
                    <div className="text-[#dc3545]">{errors.experience}</div>
                  )}
                <select
                  id="employement"
                  name="employement"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.employement}
                  className="placeholder:text-[18px]  text-[18px] md:tracking-[0px] tracking-[2px] w-[90%] max-w-[580px]  outline-none bg-transparent  border placeholder:text-center text-center border-gray-500/50 rounded-xl py-3 focus:border-[#BE9F56] "
                >
                  <option value="" selected="">
                    CURRENT EMPLOYMENT STATUS
                  </option>
                  <option value="STUDENT" className="uppercase">
                    STUDENT
                  </option>
                  <option value="UNEMPLOYED" className="uppercase">
                    UNEMPLOYED
                  </option>
                  <option value="PART TIME" className="uppercase">
                    EMPLOYED (PART TIME)
                  </option>
                  <option value="FULL TIME" className="uppercase">
                    EMPLOYED (FULL TIME)
                  </option>
                  <option value="INTERNSHIP" className="uppercase">
                    EMPLOYED (INTERNSHIP)
                  </option>
                  <option value="OTHER" className="uppercase">
                    OTHER
                  </option>
                </select>
                {errors.employement && touched.employement && (
                    <div className="text-[#dc3545]">{errors.employement}</div>
                  )}
                <section className="space-y-1 w-[90%] max-w-[580px] relative">
                  <div className=" flex-col flex justify-center items-center">
                    <label
                      for="resume"
                      className="text-black font-normal text-[18px]   md:tracking-[0px] tracking-[2px] w-full text-center uppercase  bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none cursor-pointer"
                    >
                      CV / RESUME
                    </label>
                    <input
                      type="file"
                      id="resume"
                      accept=".pdf,.docx"
                      className="hidden"
                      name="file"
                    />
                  
                    <p className="text-[10px] absolute text-red-400 -bottom-2.5 w-full text-center"></p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <button
                      className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium block opacity-75 border-0 right-6 top-1/2 -translate-y-1/2 z-20 sm:right-4 focus:outline-none text-black rounded text-xs css-1hmxbfw"
                      type="button"
                      title="CLICK TO UPLOAD"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        className="w-[18px]"
                      >
                        <path d="M20 14H4v2h16v-2zM12 3L2 12h5v8h10v-8h5L12 3zm-2 15h4v-3h3l-5-6-5 6h3v3z" />
                      </svg>
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="lg:hidden h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] absolute bottom-0 right-[-200px] rounded-xl flex items-center text-center justify-center disabled:animate-pulse"
                  >
                    SUBMIT
                  </button>
                  <button
                    type="button"
                    className="lg:hidden h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] absolute top-[-200px] right-[-200px] rounded-xl flex items-center text-center  flex-col uppercase "
                  >
                    <span className="text-[10px] opacity-70 my-2">
                      optional
                    </span>
                    <p className="text-[14px]">ADD</p>
                    Supporting Statement
                  </button>
                </section>
                <p className="tracking-[2px] md:tracking-[0px] text-[14px] text-center text-[#737373] uppercase">
                  UPLOAD YOUR RESUME IN ENGLISH AS DOCX OR PDF ONLY.
                </p>
                <div className="flex gap-48 lg:gap-[340px] sm:gap-[110px]">
                  <button
                    type="submit"
                    className="lg:flex items-center justify-center hidden h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] rounded-lg text-center disabled:animate-pulse"
                  >
                    SUBMIT
                  </button>
                  <button
                    type="button"
                    className="lg:flex h-[120px] w-[120px] bg-black hidden text-white tracking-widest text-[14px]   rounded-xl items-center text-center  flex-col uppercase "
                  >
                    <span className="text-[10px] opacity-70 my-2">
                      optional
                    </span>
                    <p className="text-[14px]">ADD</p>
                    Supporting Statement
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Form;
