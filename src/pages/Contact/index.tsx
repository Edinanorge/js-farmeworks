import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import styles from "./style.module.css";
import image from "../../assets/address.png";

interface IFormData {
  name: string;
  subject: string;
  email: string;
  message: string;
}

function Contact() {
  const [formData, setFormData] = useState<IFormData>({ name: "", subject: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState<{
    name?: string;
    subject?: string;
    email?: string;
    message?: string;
  }>({});
  const [isSubmit, setIsSubmit] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormErrors(validateForm(formData));
    setIsSubmit(true);
  }

  function validateForm(values: IFormData) {
    const errors: {
      name?: string;
      subject?: string;
      email?: string;
      message?: string;
    } = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = "Username is required!";
    } else if (values.name.length < 3) {
      errors.name = "Username must be more than 3 characters.";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.subject) {
      errors.subject = "Subject is required!";
    } else if (values.subject.length < 3) {
      errors.subject = "Subject must be more than 3 characters.";
    }
    if (!values.message) {
      errors.message = "Message is required!";
    } else if (values.message.length < 3) {
      errors.message = "Message must be more than 3 characters.";
    }
    return errors;
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formData);
    }
  }, [formErrors, formData, isSubmit]);

  return (
    <main className={styles.container}>
      <section>
        <div className="formContainer">
          <form action="" className={styles.form} onSubmit={handleSubmit}>
            <h1>Contact us</h1>
            <label htmlFor="name">Full Name:</label>
            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange}></input>
            <p className={styles.formError}>{formErrors.name}</p>
            <label htmlFor="subject">Subject:</label>
            <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange}></input>
            <p className={styles.formError}>{formErrors.subject}</p>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange}></input>
            <p className={styles.formError}>{formErrors.email}</p>
            <label htmlFor="message">Message: </label>
            <textarea name="message" id="message" value={formData.message} onChange={handleChange}></textarea>
            <p className={styles.formError}>{formErrors.message}</p>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className={styles.addressContainer}>
          <p>
            <FaMapMarkerAlt />
            <span>Haugteigveien 107, Ski</span>
          </p>
          <p>
            <FaEnvelope />
            <span>OneStopShop@gmail.com</span>
          </p>
          <img src={image} alt="Map" />
        </div>
      </section>
    </main>
  );
}
export default Contact;
