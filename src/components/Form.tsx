import { Check } from "phosphor-react";

export function Form() {
  return (
    <form className="w-full flex flex-col mt-6">
      <input 
        type="text"
        placeholder="Seu Nome"
        className="p-4 rounded-lg mt-3 bg-zinc-100 text-black placeholder:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-zinc-100"
        autoFocus
      />
      <input 
        type="text"
        placeholder="Seu Email"
        className="p-4 rounded-lg mt-3 bg-zinc-100 text-black placeholder:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-zinc-100"
        autoFocus
      />
      <button
        className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 text-white font-semibold bg-primary hover:bg-primary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-zinc-100"
      >
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  )
}