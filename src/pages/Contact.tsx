import React, { useState } from "react";
import { FaDiscord, FaFacebookMessenger, FaInstagram } from "react-icons/fa";
import { SlSocialGithub } from "react-icons/sl";
import { useFormik } from "formik";
import * as Yup from "yup";

type IContact = {
  theme: boolean;
};

const Contact: React.FC<IContact> = ({ theme }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFeedbackSent(false);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      feedback: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      feedback: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      setFeedbackSent(true);
      formik.resetForm();
    },
  });

  return (
    <div className={theme ? "dark" : ""}>
      <div className="text-gray-700 dark:text-gray-100 max-w-screen-xl mx-auto px-4 lg:px-6 flex flex-col items-center py-10">
        <div className="flex space-x-10">
          <div className="flex flex-col">
            <span className="flex font-bold text-sm mb-1">Send a message.</span>
            <span className="text-xs text-gray-500 mb-3 dark:text-gray-400">
              For questions and new projects.
            </span>
            <a
              className="flex items-center rounded py-2 px-4 bg-gray-200 dark:text-gray-400 text-gray-700 hover:text-gray-900 dark:hover:text-gray-100 dark:bg-[#1f2937] transition-all mb-2 text-xs"
              href="https://github.com/NikkaNamoradze"
              target="_blank"
            >
              <SlSocialGithub className="h-4 mr-2" />
              Github
            </a>
            <a
              className="flex items-center rounded py-2 px-4 bg-gray-200 dark:text-gray-400 text-gray-700 hover:text-gray-900 dark:hover:text-gray-100 dark:bg-[#1f2937] transition-all mb-2 text-xs"
              href="https://www.instagram.com/nikkanamoradze/"
              target="_blank"
            >
              <FaInstagram className="h-4 mr-2" />
              Instagram
            </a>
            <button
              className="flex items-center rounded py-2 px-4 bg-gray-200 dark:text-gray-400 text-gray-700 hover:text-gray-900 dark:hover:text-gray-100 dark:bg-[#1f2937] transition-all mb-2 text-xs"
              onClick={handleOpenModal}
            >
              <FaFacebookMessenger className="h-4 mr-2" />
              Send Feedback
            </button>
          </div>
          <div className="flex flex-col">
            <span className="max-w-[400px] mb-2 font-semibold text-sm">
              Hello I'm Nika, Mobile Developer with over 1 year of experience, I'm a
              results-driven mobile developer skilled in React Native for
              cross-platform development and Kotlin for native Android apps.
            </span>
            <span className="max-w-[400px] mb-2 font-semibold text-sm">
              I've worked on diverse projects, from business process management
              systems to finance apps, mastering unique industry demands. I'm
              proud to deliver efficient, user-friendly, and innovative mobile
              solutions that exceed client expectations.
            </span>
            <span className="max-w-[400px] mb-2 font-semibold text-sm">
              I thrive in dynamic environments, embracing continuous learning.
              Eager for new challenges and collaborations to push the boundaries
              of mobile technology.
            </span>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className=" sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        className="text-lg font-medium leading-6 text-gray-900"
                        id="modal-title"
                      >
                        Send Feedback
                      </h3>
                      <div className="mt-2">
                        <form onSubmit={formik.handleSubmit}>
                          <div className="mb-4">
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Email
                            </label>
                            <input
                              type="text"
                              id="email"
                              name="email"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.email}
                              className=" dark:text-gray-800 mt-1 p-2 w-full border rounded-md"
                            />
                            {formik.touched.email && formik.errors.email ? (
                              <div className="text-red-500">
                                {formik.errors.email}
                              </div>
                            ) : null}
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="feedback"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Feedback Description
                            </label>
                            <textarea
                              id="feedback"
                              name="feedback"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.feedback}
                              className="dark:text-gray-800 mt-1 p-2 w-full border rounded-md"
                            />
                            {formik.touched.feedback &&
                            formik.errors.feedback ? (
                              <div className="text-red-500">
                                {formik.errors.feedback}
                              </div>
                            ) : null}
                          </div>
                          <div className="flex items-center justify-between">
                            <button
                              type="submit"
                              className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
                            >
                              Submit
                            </button>

                            <button
                              onClick={handleCloseModal}
                              type="button"
                              className="rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-800 text-white font-medium hover:bg-gray-700"
                            >
                              Close
                            </button>
                          </div>
                        </form>
                      </div>
                      {feedbackSent && (
                        <p className="text-green-500 mt-2">Feedback Sent</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
