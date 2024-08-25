import { useEffect, useState } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";

const sendContactData = async (contactDetails) => {
  const respnse = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await respnse.json();
  if (!respnse.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState(null);
  const [requestError, setRequestError] = useState();

  const sendMessageHandler = async (event) => {
    event.preventDefault();
    setRequestStatus("pending");
    try {
      await sendContactData({ email, name, message });
      setRequestStatus("success");
      setEmail("");
      setMessage("");
      setName("");
    } catch (error) {
      setRequestError(error);
      setRequestStatus("error");
    }
  };

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  let notificationData;
  if (requestStatus === "pending") {
    notificationData = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on it's way.",
    };
  }
  if (requestStatus === "success") {
    notificationData = {
      status: "success",
      title: "Success!",
      message: "Your message is submited successfully.",
    };
  }
  if (requestStatus === "error") {
    notificationData = {
      status: "error",
      title: "Error",
      message: requestError.message,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you ? </h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            rows={5}
            id="message"
            required
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </div>
        <div className={classes.actions}>
          <button type="submit">Send Message</button>
        </div>
      </form>
      {notificationData && (
        <Notification
          status={notificationData.status}
          message={notificationData.message}
          title={notificationData.title}
        />
      )}
    </section>
  );
};

export default ContactForm;
