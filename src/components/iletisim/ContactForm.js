import React, { Component } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./Iletisim.css";
import MailIcon from "@material-ui/icons/Mail";

// Email validation
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

// Form validation
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // Validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // Validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === "" && (valid = false);
  });

  return valid;
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      formErrors: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  }

  toastifySuccess() {
    toast.success("Mesajiniz Gonderildi!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
    });
  }

  toastifyFail() {
    toast.error("Mesaj Gonderilemedi!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback fail",
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      // Handle form validation success
      const { name, email, subject, message } = this.state;

      // Set template params
      let templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };

      emailjs.send(
        "service_temizlik",
        "template_czu7njj",
        templateParams,
        "user_uT2lSvbaBrUGUSXgj8ILm"
      );

      console.log(`
        --SUBMITTING--
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `);

      this.toastifySuccess();
      this.resetForm();
    } else {
      // Handle form validation failure
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
      this.toastifyFail();
    }
  };

  // Function to reset form
  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "name":
        formErrors.name = value.length < 1 ? "Lütfen adınızı giriniz." : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Lütfen geçerli bir mail adresi giriniz.";
        break;
      case "subject":
        formErrors.subject = value.length < 1 ? "Lütfen mesaj konusunu giriniz." : "";
        break;
      case "message":
        formErrors.message = value.length < 1 ? "Lütfen mesajınızı giriniz" : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div>
        <div
          className="col-12"
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#333",
          }}
        >
          <div className="col-lg-8 col-md-8 col-sm-12 col-12 m-5">
            <h2 style={{ display: "flex", justifyContent: "center",color:'white' }}>
             <MailIcon style={{ fontSize: 30,color:"white" }} /> BİZİMLE İLETİŞİME GEÇEBİLİRSİNİZ
            </h2>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "18px",
                color: "white",
              }}
            >
              Size yardımcı olabilmek için buradayız.
            </p>
            <form id="contact-form" onSubmit={this.handleSubmit} noValidate>
              <div className="row m-5 p-1">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    className={`form-control formInput ${
                      formErrors.name.length > 0 ? "error" : null
                    }`}
                    onChange={this.handleChange}
                    placeholder="Adınız"
                    noValidate
                  ></input>
                  {formErrors.name.length > 0 && (
                    <span className="errorMessage">{formErrors.name}</span>
                  )}
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    className={`form-control formInput ${
                      formErrors.email.length > 0 ? "error" : null
                    }`}
                    onChange={this.handleChange}
                    placeholder="Email"
                    noValidate
                  ></input>
                  {formErrors.email.length > 0 && (
                    <span className="errorMessage">{formErrors.email}</span>
                  )}
                </div>
              </div>

              <div className="row m-5">
                <div className="col-12">
                  <input
                    type="subject"
                    name="subject"
                    value={this.state.subject}
                    className={`form-control formInput ${
                      formErrors.subject.length > 0 ? "error" : null
                    }`}
                    onChange={this.handleChange}
                    placeholder="Konu"
                    noValidate
                  ></input>
                  {formErrors.subject.length > 0 && (
                    <span className="errorMessage">{formErrors.subject}</span>
                  )}
                </div>

                <div className="col-12 mt-5">
                  <textarea
                    rows="5"
                    name="message"
                    value={this.state.message}
                    className={`form-control formInput ${
                      formErrors.message.length > 0 ? "error" : null
                    }`}
                    onChange={this.handleChange}
                    placeholder="Mesajınız"
                    noValidate
                  ></textarea>
                  {formErrors.message.length > 0 && (
                    <span className="errorMessage">{formErrors.message}</span>
                  )}
                </div>
              </div>
            </form>

            <div
              className="col-12"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="col-4">
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={{ width: "100%" }}
                >
                  Gönder
                </button>
              </div>
            </form>
          </div>
        </div>

        <ToastContainer />
      </div>
    );
  }
}

export default ContactForm;
