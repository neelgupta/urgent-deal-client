import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Container } from "react-bootstrap";
import "leaflet/dist/leaflet.css";
import "./VendorOnboarding.scss";
import { Link } from "react-router-dom";
import images from "../../Utils/constants/images";


// Form Validation
const stepOneValidationSchema = Yup.object({
  f_name: Yup.string().required("First name is required"),
  l_name: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^([0-9\s\-\+\(\)]*)$/, "Phone number is not valid")
    .min(9, "Phone number must be at least 9 digits")
    .max(12, "Phone number must be at most 12 digits")
    .required("Phone number is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[@$!%*?&]/, "Password must contain at least one special character")
    .required("Password is required"),
});

const stepTwoValidationSchema = Yup.object({
  storeImage: Yup.mixed()
    .required("Store image is required")
    .test("fileType", "The file must be an image (png, jpg, jpeg, svg, etc.)", (value) => {
      const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg", "image/svg+xml"];
      return value && allowedMimeTypes.includes(value.type);
    })
    .test("fileExtension", "Only PNG, JPG, JPEG, and SVG are allowed", (value) => {
      if (!value) return false;
      const allowedExtensions = ['.png', '.jpg', '.jpeg', '.svg'];
      const fileExtension = value.name.toLowerCase().split('.').pop();
      return allowedExtensions.includes(`.${fileExtension}`);
    }),
  store_name: Yup.string().required("Store Name is required"),
  store_number: Yup.string().required("Store Number is required"),
  store_floor: Yup.string().required("Floor is required"),
  complex_name: Yup.string().required("Building/Mall/Complex Name is required"),
  pin_code: Yup.string()
    .matches(/^[0-9]{6}$/, "Pincode must be exactly 6 digits")
    .required("Pincode is required"),
});

const stepThreeValidationSchema = Yup.object({
  address: Yup.string().required("Location is required"),
  zone_id: Yup.string().required("Zone is required"),
});

const stepFourValidationSchema = Yup.object({
  fssai_number: Yup.string()
    .matches(/^[A-Za-z0-9]{14}$/, "FSSAI number must be exactly 14 characters")
    .nullable(),
  gst_number: Yup.string()
    .matches(/^([0-9]{2})([A-Z]{5})([0-9]{4})([A-Z]{1})([A-Z0-9]{1})([Z]{1})([A-Z0-9]{1})$/, "GST number format is invalid")
    .nullable(),
  pan_number: Yup.string()
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "PAN number format is invalid")
    .nullable(),
});

// Store form data
const VendorOnboarding = () => {

  const [alert, setAlert] = useState(null);
  const [formStep, setFormStep] = useState("stepOne");
  const [formData, setFormData] = useState({
    f_name: "",
    l_name: "",
    email: "",
    phone: "",
    password: "",
    storeImage: null,
    store_name: "",
    store_number: "",
    store_floor: "",
    complex_name: "",
    pin_code: "",
    address: "",
    zone_id: "",
    fssai_number: "",
    gst_number: "",
    pan_number: "",
  });

  // StoreImg
  const handleImageChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    if (file) {
      setFieldValue("storeImage", file);
    }
  };


  // Steps
  const handleStepOneSubmit = (values, { setSubmitting }) => {
    setFormData((prevData) => ({ ...prevData, ...values }));
    setSubmitting(false);
    setFormStep("stepTwo");
  };

  const handleStepTwoSubmit = (values, { setSubmitting }) => {
    setFormData((prevData) => ({ ...prevData, ...values }));
    setSubmitting(false);
    setFormStep("stepThree");
  };

  const handleStepThreeSubmit = (values, { setSubmitting }) => {
    setFormData((prevData) => ({ ...prevData, ...values }));
    setSubmitting(false);
    setFormStep("stepFour");
  };

  const handleStepFourSubmit = (values, { setSubmitting }) => {
    setFormData((prevData) => ({ ...prevData, ...values }));
    setSubmitting(false);
    hndelSave();
  };


  const gotoStepOne = () => {
    setFormStep("stepOne");
  };
  const gotoStepTwo = () => {
    setFormStep("stepTwo");
  };
  const gotoStepThree = () => {
    setFormStep("stepThree");
  };
  const gotoStepFour = () => {
    setFormStep("stepFour");
  };


  // Get Location
  const [locationData, setLocationData] = useState(null);
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);

  const getCurrentLocation = async () => {
    if (navigator.geolocation) {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const { latitude, longitude } = position.coords;
        setLocationData({ latitude, longitude });

        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`
        );
        const data = await response.json();

        if (data && data.address) {
          const {
            road,
            neighbourhood,
            suburb,
            village,
            town,
            district,
            county,
            state,
            country,
            postcode,
          } = data.address;
          let fullAddress = "";

          if (neighbourhood) fullAddress += neighbourhood + ", ";
          else if (suburb) fullAddress += suburb + ", ";
          else if (village) fullAddress += village + ", ";

          if (road) fullAddress += road + ", ";

          if (town) fullAddress += town + ", ";
          else if (district) fullAddress += district + ", ";
          else if (county) fullAddress += county + ", ";

          if (state) fullAddress += state + ", ";
          if (country) fullAddress += country;

          if (postcode) fullAddress += " - " + postcode;

          return fullAddress.trim();
        }
      } catch (err) {
        setError("Unable to fetch address or location.");
        return;
      }
    } else {
      setError("Geolocation is not supported by this browser.");
      return;
    }
  };

  const defaultLocation = { latitude: 21.1702, longitude: 72.8311 };
  const center = locationData || defaultLocation;


  // Zone API 
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.urgentdeal.com/UD-Quick-Admin-Seller-Panels/public/index.php/api/v1/zone/list');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setOptions(data);

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  //Fetch API
  const postFormData = async (value) => {
    // console.log('formData', formData)
    try {
      const getZoneData = options.find(ele => ele.id === parseInt(value.zone_id))

      const data = new FormData();
      data.append("f_name", value.f_name);
      data.append("l_name", value.l_name);
      data.append("email", value.email);
      data.append("phone", value.phone);
      data.append("store_name", value.store_name);
      data.append("store_number", value.store_number);
      data.append("store_floor", value.store_floor);
      data.append("complex_name", value.complex_name);
      data.append("pin_code", value.pin_code);
      data.append("location", value.address);
      data.append("zone_id", value.zone_id);
      data.append("password", value.password);
      data.append("fssai_number", value.fssai_number);
      data.append("gst_number", value.gst_number);
      data.append("pan_number", value.pan_number);
      data.append("latitude", getZoneData.formated_coordinates?.[0].lat);
      data.append("longitude", getZoneData.formated_coordinates?.[0].lng);


      if (value.storeImage) {
        data.append("logo", value.storeImage);
      }

      // data.forEach((value, key) => {
      //   console.log(`${key}:`, value);
      // });

      const response = await fetch("https://www.urgentdeal.com/UD-Quick-Admin-Seller-Panels/public/index.php/api/v1/auth/vendor/onboarding", {
        method: "POST",
        body: data,
        headers: {
        },
      });

      const result = await response.json();
      if (response.ok) {
        setAlert({ type: 'success', message: result.message || "Data posted successfully!" });
      } else {
        if (result.errors && result.errors.length > 0) {
          const errorMessages = Array.isArray(result.errors)
            ? result.errors.map((err, index) => err.message).join(' ')
            : 'Something went wrong, Please try again latter';
          setAlert({
            type: 'error',
            message: errorMessages || "Something went wrong!"
          });
        } else {
          setAlert({
            type: 'error',
            message: "An unknown error occurred."
          });
        }
      }
    } catch (error) {
      setAlert({
        type: 'error',
        message: error.message || "Network error occurred!"
      });
    }
  };


  // Show Alert
  const closeAlert = () => setAlert(null);

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        closeAlert();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [alert]);

  return (
    <div className="vendor-onboarding">
      <Container>
        <div className="position-relative">
          {alert && (
            <div className={`alert alert-dismissible fade show ${alert.type === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert" >
              {alert.message}
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={closeAlert}
              ></button>
            </div>
          )}
        </div>
        <div className="row align-items-center gy-5">
          <div className="col-md-6">
            <div className="onboarding-rightpart">
              <img src={images.logo} alt="Logo" className="logo" />
              <div className="title">
                <p>PARTNER WITH Tazzy!</p>
                <h1>Increase your online orders</h1>
              </div>

              <div className="easy-steps">
                <p className="step-sm-title">In just 3 easy steps</p>
                <h6 className="step-title">
                  Get your store delivery-ready in 24hrs!
                </h6>
                <div className="steps">
                  <div className="step">
                    <span>01</span>
                    <p>Install the Tazzy Owner App</p>
                  </div>
                  <div className="step">
                    <span>02</span>
                    <p>Register using your phone number</p>
                  </div>
                  <div className="step">
                    <span>03</span>
                    <p>Enter Store & Owner details</p>
                  </div>
                </div>
              </div>

              <div className="easy-process">
                <p className="process-sm-title">
                  For an easy form filling process,
                </p>
                <h5 className="process-title">
                  You may need these documents to Join UD
                </h5>
                <div className="process-card">
                  <div>
                    <img src={images.check} alt="Check Icon" />
                    <p>
                      FSSAI License copy <a href="#">Apply Here</a>
                    </p>
                  </div>
                  <div>
                    <img src={images.check} alt="Check Icon" />
                    <p>Your store menu</p>
                  </div>
                  <div>
                    <img src={images.check} alt="Check Icon" />
                    <p>Bank details</p>
                  </div>
                  <div>
                    <img src={images.check} alt="Check Icon" />
                    <p>
                      GSTIN <a href="#">Apply Here</a>
                    </p>
                  </div>
                  <div>
                    <img src={images.check} alt="Check Icon" />
                    <p>PAN card copy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="onboarding-form">
              {formStep === "stepOne" && (
                <div>
                  <h4>Get Started</h4>
                  <Formik
                    initialValues={formData}
                    validationSchema={stepOneValidationSchema}
                    onSubmit={handleStepOneSubmit}
                  >
                    {({ isValid, isSubmitting }) => (
                      <FormikForm>

                        <div className="row g-2">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="f_name">First Name</label>
                              <Field
                                type="text"
                                id="f_name"
                                name="f_name"
                                placeholder="Enter Full Name"
                                className="form-control"
                              />
                              <ErrorMessage
                                name="f_name"
                                component="div"
                                style={{ color: "red" }}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="l_name">Last Name</label>
                              <Field
                                type="text"
                                id="l_name"
                                name="l_name"
                                placeholder="Enter Full Name"
                                className="form-control"
                              />
                              <ErrorMessage
                                name="l_name"
                                component="div"
                                style={{ color: "red" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Email Address</label>
                          <Field
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter Email Address"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            style={{ color: "red" }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="phone">Mobile Number</label>
                          <Field
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Enter Mobile Number"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="phone"
                            component="div"
                            style={{ color: "red" }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <Field
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            style={{ color: "red" }}
                          />
                        </div>
                        <Button
                          type="submit"
                          className="common-btn"
                        >
                          Continue
                        </Button>
                      </FormikForm>
                    )}
                  </Formik>
                </div>
              )}

              {formStep === "stepTwo" && (
                <div>
                  <h4>Store Details</h4>
                  <Formik
                    initialValues={formData}
                    validationSchema={stepTwoValidationSchema}
                    onSubmit={handleStepTwoSubmit}
                    enableReinitialize={true}
                  >
                    {({ isValid, isSubmitting, values, setFieldValue }) => {
                      return (
                        <FormikForm>
                          <div className="form-group">
                            <label>Store Image</label>
                            <input
                              type="file"
                              name="storeImage"
                              className="form-control"
                              onChange={(e) => handleImageChange(e, setFieldValue)}
                            />
                            <ErrorMessage
                              name="storeImage"
                              component="div"
                              style={{ color: "red" }}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="store_name">Store Name</label>
                            <Field
                              type="text"
                              id="store_name"
                              name="store_name"
                              className="form-control"
                              placeholder="Enter Store Name"
                            />
                            <ErrorMessage
                              name="store_name"
                              component="div"
                              style={{ color: "red" }}
                            />
                          </div>
                          <div className="form-group">
                            <div className="d-flex gap-2">
                              <div>
                                <label htmlFor="store_number">Store Number</label>
                                <Field
                                  type="text"
                                  name="store_number"
                                  id="store_number"
                                  placeholder="Store Number"
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name="store_number"
                                  component="div"
                                  style={{ color: "red" }}
                                />
                              </div>
                              <div>
                                <label htmlFor="store_number">Floor</label>
                                <Field
                                  type="text"
                                  name="store_floor"
                                  id="Floor"
                                  placeholder="Floor"
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name="store_floor"
                                  component="div"
                                  style={{ color: "red" }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="complex_name">Building/Mall/Complex Name</label>
                            <Field
                              type="text"
                              name="complex_name"
                              id="complex_name"
                              placeholder="Enter Building/Mall/Complex Name"
                              className="form-control"
                            />
                            <ErrorMessage
                              name="complex_name"
                              component="div"
                              style={{ color: "red" }}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="pin_code">Pincode</label>
                            <Field
                              type="text"
                              name="pin_code"
                              id="pin_code"
                              placeholder="Enter Pincode"
                              className="form-control"
                            />
                            <ErrorMessage
                              name="pin_code"
                              component="div"
                              style={{ color: "red" }}
                            />
                          </div>
                          <div className="d-flex gap-2">
                            <Button
                              type="button"
                              onClick={gotoStepOne}
                              className="common-btn btn-gray"
                            >
                              Back
                            </Button>
                            <Button
                              type="submit"
                              className="common-btn"
                            >
                              Continue
                            </Button>
                          </div>
                        </FormikForm>
                      )
                    }}
                  </Formik>
                </div>
              )}

              {formStep === "stepThree" && (
                <div>
                  <h4>Current Location</h4>
                  <Formik
                    initialValues={{ ...formData }}
                    validationSchema={stepThreeValidationSchema}
                    onSubmit={handleStepThreeSubmit}
                  >
                    {({ isValid, isSubmitting, setFieldValue, values }) => {
                      return (
                        <FormikForm>
                          <MapContainer
                            center={[center.latitude, center.longitude]}
                            zoom={13}
                            style={{ height: "220px", width: "100%" }}
                          >
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <Marker position={[center.latitude, center.longitude]}>
                              <Popup>{address}</Popup>
                            </Marker>
                          </MapContainer>

                          <Button
                            type="button"
                            onClick={async () => {
                              const loc = await getCurrentLocation();
                              setFieldValue("address", loc || "");
                            }}
                            className="common-btn btn-gray"
                          >
                            Get My Current Location
                          </Button>

                          <div className="form-group">
                            <textarea
                              className="form-control"
                              value={values.address}
                              name="address"
                              onChange={(e) => setFieldValue("address", e.target.value || "")}
                              rows={3}
                              placeholder="Your full address will appear here..."
                            ></textarea>
                            <ErrorMessage
                              name="address"
                              component="div"
                              style={{ color: "red" }}
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="zone_id">Select Zone</label>
                            {!loading && !error && (
                              <select
                                name="zone_id"
                                id="zone_id"
                                value={values.zone_id}
                                onChange={(e) => {
                                  setFieldValue("zone_id", e.target.value)
                                }}
                                className="form-select">
                                <option value="" hidden selected>Select Zone</option>
                                {options.map((item) => (
                                  <option key={item.id} value={item.id}>
                                    {item.name}
                                  </option>
                                ))}
                              </select>
                            )}
                            <ErrorMessage
                              name="zone_id"
                              component="div"
                              style={{ color: "red" }}
                            />
                          </div>

                          <div className="d-flex gap-2">
                            <Button
                              type="button"
                              onClick={gotoStepTwo}
                              className="common-btn btn-gray"
                            >
                              Back
                            </Button>

                            <Button
                              type="submit"
                              className="common-btn"
                            >
                              Continue
                            </Button>
                          </div>
                        </FormikForm>
                      )
                    }}
                  </Formik>
                </div>
              )}

              {formStep === "stepFour" && (
                <div>
                  <h4>Other Details</h4>
                  <Formik
                    initialValues={formData}
                    validationSchema={stepFourValidationSchema}
                    onSubmit={handleStepFourSubmit}
                  >
                    {({ isValid, isSubmitting, values, setFieldValue }) => (
                      <FormikForm>
                        <div className="form-group">
                          <label htmlFor="fssai_number">FSSAI Number</label>
                          <Field
                            type="text"
                            className="form-control"
                            name="fssai_number"
                            id="fssai_number"
                            placeholder="Enter FSSAI Number"
                          />
                          <ErrorMessage
                            name="fssai_number"
                            component="div"
                            style={{ color: "red" }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="gst_number">GST Number</label>
                          <Field
                            type="text"
                            className="form-control"
                            name="gst_number"
                            id="gst_number"
                            placeholder="Enter GST Number"
                          />
                          <ErrorMessage
                            name="gst_number"
                            component="div"
                            style={{ color: "red" }}
                          />
                        </div>
                        <div className="form-group">
                          <label>PAN Number</label>
                          <Field
                            type="text"
                            className="form-control"
                            name="pan_number"
                            placeholder="Enter PAN Number"
                          />
                          <ErrorMessage
                            name="pan_number"
                            component="div"
                            style={{ color: "red" }}
                          />
                        </div>

                        <div className="d-flex gap-2">
                          <Button
                            type="button"
                            onClick={gotoStepThree}
                            className="common-btn btn-gray"
                          >
                            Back
                          </Button>
                          <Button
                            type="submit"
                            className="common-btn"
                            disabled={isSubmitting}
                            onClick={(e) => {
                              e.preventDefault();
                              postFormData(values)
                            }}
                          >
                            Submit
                          </Button>
                        </div>
                      </FormikForm>
                    )}
                  </Formik>
                </div>
              )}

              <p className="terms-text">By logging in, I agree to Tazzy’s <Link to="vendor-terms-condition">terms & conditions</Link></p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default VendorOnboarding;
