import emailjs from "@emailjs/browser"
import "./Index.scss"
import { useRef } from "react"

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_1w9qsq9",
        "template_udb8ly7",
        form.current,
        "r6bA_1PaRXsqVwM09"
      )
      .then((result) => {

      })
      .catch((error) => console.log("Error sending email: ", error))
  }

  return (
    <div className="min-h-[90vh]">
      <h1 className="text-2xl font-semibold mx-auto text-center mb-10 ">
        Contact Me
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        method="post"
        className="flex flex-col align-center items-center justify-center rounded-md"
        required
      >
        <input
          type="text"
          className="px-2 py-2 my-2 h-10 w-96 bg-black rounded-lg"
          name="user_name"
          placeholder="Name"
          required
        />
        <input
          type="email"
          className="px-2 py-2 my-2 h-10 w-96 bg-black rounded-lg"
          name="user_email"
          placeholder="Email"
          required
        />
        <textarea
          className="px-2 py-2 my-2 h-36 w-96 bg-black rounded-lg"
          name="message"
          placeholder="Message"
          required
        />
        <button className="send">Send</button>
      </form>
    </div>
  )
}

export default Contact
