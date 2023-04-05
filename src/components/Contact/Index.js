import emailjs from "@emailjs/browser"
import "./Index.scss"
import { useRef, useState } from "react"

const Contact = () => {
  const form = useRef()
  const [success, setSuccess] = useState(false)

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
        if (result.text === "OK") {
          setSuccess(true)
        }
      })
      .catch((error) => console.log("Error sending email: ", error))
  }

  return (
    <div className="min-h-[90vh]">
      <h1
        className={`text-5xl font-semibold mx-auto text-center mb-10 ${
          success ? "hidden" : ""
        } lg:text-3xl`}
      >
        Contact Me
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        method="post"
        className={`flex flex-col align-center items-center justify-center rounded-md ${
          success ? "hidden" : ""
        }`}
        required
      >
        <input
          type="text"
          className="px-4 py-2 my-2 h-24 lg:h-16 w-2/3 bg-black rounded-lg lg:w-1/2"
          name="user_name"
          placeholder="Name"
          required
        />
        <input
          type="email"
          className="px-4 py-2 my-2 h-24 lg:h-16 w-2/3 bg-black rounded-lg lg:w-1/2"
          name="user_email"
          placeholder="Email"
          required
        />
        <textarea
          className="px-4 py-2 my-2 h-60 lg:h-44 w-2/3 bg-black rounded-lg lg:w-1/2"
          name="message"
          placeholder="Message"
          required
        />
        <button class="button" type="submit">
          Send
        </button>
        <div class="loader">
          <div class="check">
            <span class="check-one"></span>
            <span class="check-two"></span>
          </div>
        </div>
      </form>

      <div className={`${!success ? "hidden" : ""} text-center mt-20`}>
        <h3 className="text-4xl font-semibold py-4">
          Thanks for contacting me
        </h3>
        <h3 className="text-2xl font-medium">I will get back to you soon ;)</h3>
      </div>
    </div>
  )
}

export default Contact
