import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./style.module.css";
import image from "../../assets/address.png";

interface IFormData {
  name: string;
  subject: string;
  email: string;
  message: string;
}

function Contact() {
  const schema = yup.object({
    name: yup.string().required("Name is required!").min(3, "Name must be more than 3 characters."),
    subject: yup.string().required("Subject is required!").min(3, "Subject must be more than 3 caracters."),
    email: yup.string().email("Email must be a valid email.").required("Email is required!"),
    message: yup.string().required("Message is required!").min(3, "Message must be more than 3 caracters."),
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(formData: IFormData) {
    console.log(formData);
    reset({ name: "", subject: "", email: "", message: "" });
    setIsSubmit(true);
  }

  return (
    <main className={styles.container}>
      <section>
        <div className="formContainer">
          <form action="" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h1>Contact us</h1>
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" autoComplete="name" {...register("name")}></input>
            <p className={styles.formError}>{errors.name?.message}</p>
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" {...register("subject")}></input>
            <p className={styles.formError}>{errors.subject?.message}</p>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" autoComplete="email" {...register("email")}></input>
            <p className={styles.formError}>{errors.email?.message}</p>
            <label htmlFor="message">Message: </label>
            <textarea id="message" {...register("message")}></textarea>
            <p className={styles.formError}>{errors.message?.message}</p>
            {isSubmit && (
              <div className={styles.message}>
                Thanks for getting in touch!
                <p>One of our colleagues will get back in touch with you soon!Have a great day!</p>
              </div>
            )}

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
