import React from "react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setFormValues } from "@/src/store/features/formSlice";
import schema from "./lib/schema";


const Formtwo = ({section, setSection , handleBack}) => {
    const dispatch = useDispatch();


    const formValues = useSelector((state) => state.form.formValues);

    const { values, handleBlur, handleChange, handleSubmit, errors, touched, resetForm } = useFormik({
        initialValues: formValues,
        validationSchema: schema,
        onSubmit: (values, action) => {
          console.log(values);
          dispatch(setFormValues(values));
      
          if (section === 3) {
              resetForm(); // Reset the form fields
            setSection(1); // Reset section to 1 when the form reaches section 3
          } else {
            setSection(section + 1); // Move to the next section
          }
        },
      });

  return (
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
            type="submit"
              className=" h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] absolute bottom-0 right-[-200px] rounded-lg flex items-center text-center justify-center uppercase"
            >
              CONTINUE
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
  )
}

export default Formtwo
