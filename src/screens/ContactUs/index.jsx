import { useForm, ValidationError } from '@formspree/react';
export default function ContactUs() {
  return (
    <div className="contact-us-page-view mt-4">
      <ContactForm />
    </div>
  )
}

function ContactForm() {
  const [state, handleSubmit] = useForm("TheTokenOfTheForm");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <br />
      <br />
      <br />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
