import React, { useState } from 'react'

const Contact = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  // handles btn when clicked
  const handleSend = async (e) => {
    // stop page from reloading
    e.preventDefault();
    //clear and change btn txt
    setIsLoading(true);
    setStatus("");

    // save user inputs
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    // message to be sent to me
    const text = `New message

      Screen Name: ${name}
      E-Mail: ${email}
      Message:
      ${message}
      — ${new Date().toLocaleString()}`;

    try {
      //try to deliver the message
      //documentation for api https://core.telegram.org/bots/api#sendmessage
      const res = await fetch(
        `https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: import.meta.env.VITE_TELEGRAM_CHAT_ID,
            text: text,
            parse_mode: "HTML"
          })
        }
      );

      //check if messsage was sent
      if (res.ok) {
        setStatus("Message delivered");
        e.target.reset();

        setTimeout(() => {
          setStatus("");
        }, 3000); //remove message after 3 sec
      } else {
        setStatus("Telegram error");
      }
    } catch (err) {
      //if err exists
      setStatus("No connection");
    } finally {
      //run this after regardless of outcome
      setIsLoading(false);
    }
  };


  return (
    <section className="fixed inset-0 flex items-center justify-center bg-transparent px-4 overflow-hidden">
      <div className="w-full max-w-2xl border-4 border-gray-500 rounded-lg overflow-hidden shadow-2xl">
        {/* create title bar for new message */}
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 px-3 py-1 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-600 rounded-full"></div>
            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
            {/* add animation to green dot only to appear online */}
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <span className="text-white font-bold text-sm tracking-wider">
            AOL Instant Messenger™ – Send Message To: mbatorek7
          </span>
          <div className="w-16"></div>
        </div>

        {/* fake chat log area */}
        <div className="bg-gray-900 bg-opacity-90 p-6 h-48 font-mono text-sm text-gray-300">
          <p className="text-yellow-400 animate-pulse">mbatorek7 is online</p>
          <p className="mt-4">
            <span className="text-gray-500">&lt;System&gt;</span> You've entered the Matrix. Leave your message.
          </p>
          <p className="mt-6 text-cyan-400">
            mbatorek7:<span className="text-gray-200 ml-2">I know you're out there...</span>
          </p>
        </div>

        {/* contact form setup */}
        <form onSubmit={handleSend}
          className="bg-gray-800 bg-opacity-95 p-4 border-t-4 border-gray-600">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
            <input
              name="name"
              placeholder="Screen Name"
              required
              className="bg-gray-900 border-2 border-lime-600 px-3 py-2 text-lime-400 placeholder-gray-500 font-mono text-sm focus:outline-none focus:border-lime-400"
            />
            <input
              name="email"
              type="email"
              placeholder="E-Mail"
              required
              className="bg-gray-900 border-2 border-lime-600 px-3 py-2 text-lime-400 placeholder-gray-500 font-mono text-sm focus:outline-none focus:border-lime-400"
            />
          </div>

          <textarea
            name="message"
            rows="4"
            placeholder="Type your message here..."
            required
            className="w-full bg-gray-900 border-2 border-lime-600 px-4 py-3 text-lime-400 placeholder-gray-600 font-mono text-sm resize-none focus:outline-none focus:border-lime-400 mb-4"
          />

          <div className="flex justify-start items-center gap-6">
            <button
              type="submit"
              disabled={isLoading}
              className="px-8 py-3 bg-lime-500 hover:bg-lime-400 disabled:bg-gray-600 text-black font-bold tracking-wider transition shadow-lg"
            >
              {/* use loading status to change btn txt */}
              {isLoading ? "SENDING..." : "SEND"}
            </button>

            {status && <p className="text-yellow-400 font-mono text-lg">{status}</p>}
          </div>

        </form>
      </div>
    </section>
  )
}

export default Contact
