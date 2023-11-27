import React from "react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setFormValues } from "@/src/store/features/formSlice";
import schema from "./lib/schema";

const Formthree = ({section, setSection , handleBack}) => {
  const dispatch = useDispatch();


  const formValues = useSelector((state) => state.form.formValues);

  const { values, handleBlur, handleChange, handleSubmit, errors, touched, resetForm } = useFormik({
      initialValues: formValues,
      validationSchema: schema,
      onSubmit: (values, action) => {
        console.log(values);
        dispatch(setFormValues(values));
    
        if (section === 3) {
          resetForm(); 
          setSection(1); // Reset section to 1 when the form reaches section 3
        } else {
          setSection(section + 1); // Move to the next section
        }
      },
    });
  return (
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
  )
}

export default Formthree
