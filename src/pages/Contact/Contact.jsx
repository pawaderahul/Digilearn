import "./Contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h1>Join the world largest online learning platform</h1>
      <section className="email-container">
        <img src="/assets/icons/Mail.svg" alt="Mail" />
        <input type="text" placeholder="name@email.com" />
        <button>Join now</button>
      </section>
    </section>
  );
};

export default Contact;
