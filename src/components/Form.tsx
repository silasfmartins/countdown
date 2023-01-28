import { useState } from "react";
import { Check } from "phosphor-react";
import { validateEmail } from "../utils/regex";

export function Form() {
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState(false);

  const validate = () => {
    if(!validateEmail.test(email)) {
      setEmailErr(true)
    } else {
      setEmailErr(false)
    }
  }

  return (
    <form className="w-full flex flex-col mt-6">
      <input 
        type="text"
        placeholder="Seu Nome"
        className="p-4 rounded-lg mt-3 bg-zinc-100 text-black placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-zinc-100"
        autoFocus
        required
      />
      <input 
        type="email"
        placeholder="Seu Email"
        className="p-4 rounded-lg mt-3 bg-zinc-100 text-black placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-zinc-100"
        required
        onBlur={validate}
        onChange={event => setEmail(event.target.value)}
        value={email}
      />
      {emailErr && <span className="p-4 mt-3 text-black">Por favor digite um email válido!</span>}
      <button
        className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 text-white font-semibold bg-primary hover:bg-primary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-zinc-100"
      >
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  )
}