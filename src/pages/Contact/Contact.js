import "./Contact.css";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import ContactUsForm from "../../components/ContactUsForm/ContactUsForm";

// const iconsContact = [
//   { icon: <IoLocationOutline /> },
//   { icon: <HiOutlineMail /> },
//   { icon: <BsTelephone /> },
// ];

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="row">
          <div className="col col-lg-10 offset-lg-1">
            <div className="office-info">
              <div className="row">
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon flex-center">
                      <span className="flex-center">
                        <IoLocationOutline />
                      </span>
                    </div>
                    <div className="office-info-text">
                      <h2>Address</h2>
                      <p>7 Green Lake Street Crawfordsville, IN 47933</p>
                    </div>
                  </div>
                </div>
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon flex-center">
                      <span className="flex-center">
                        <HiOutlineMail />
                      </span>
                    </div>
                    <div className="office-info-text">
                      <h2>Email Us</h2>
                      <p>helloyou@gmail.com</p>
                      <p>helloyou@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon flex-center">
                      <span className="flex-center">
                        <BsTelephone />
                      </span>
                    </div>
                    <div className="office-info-text">
                      <h2>Call Now</h2>
                      <p>+1 800 123 654 987</p>
                      <p>+1 800 123 654 987</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-title">
              <h2>Have Any Question?</h2>
            </div>
            <ContactUsForm />
          </div>
        </div>
      </div>
      <div className="contactUs__mapGoogle pt-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13674.19505660097!2d31.38966175!3d31.038819299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1675327964925!5m2!1sen!2seg"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Kayan"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
