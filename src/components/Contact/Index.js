import "./Index.scss"

const Contact = () => {
  return (
    <div className="min-h-[90vh]">
      <h1 className="text-2xl font-semibold mx-auto text-center mb-10">
        Contact Me
      </h1>
      <form method="post" className="flex flex-col align-center items-center justify-center">
        <input
          type="text"
          className="px-2 py-2 my-3 h-10 w-96 bg-black"
          placeholder="Name"
        />
        <input
          type="email"
          className="px-2 py-2 my-3 h-10 w-96 bg-black"
          placeholder="Email"
        />
        <textarea
          className="px-2 py-2 my-3 h-36 w-96 bg-black"
          placeholder="Message"
        />
        <button className="send">Send</button>
      </form>
    </div>
  )
}

export default Contact
