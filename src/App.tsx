import './styles/global.css';
import topImage from './assets/top-image.svg';
import rocket from './assets/rocket.svg';
import bottomImage from './assets/bottom-image.svg';
import { useEffect, useState } from 'react';
import { Time } from './components/Time';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { Form } from './components/Form';

const timeProperties = ['Dias', 'Horas', 'Minutos', 'Segundos']

export function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("12/31/2023 23:59:59")

    const interval = setInterval(() => {
    const now = new Date()
    const difference = target.getTime() - now.getTime()
    const d = Math.floor(difference / (1000 * 60 * 60 * 24))
    setDays(d)
    const h = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    setHours(h)
    const m = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60))
    setMinutes(m)
    const s = Math.floor((difference % (1000 * 60) / 1000))
    setSeconds(s)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <header>
        <img className="w-full" src={topImage} alt="imagem do topo - top image" />
      </header>
      <main className="flex items-center justify-center gap-20 my-8">
        <div>
          <h1 className="text-5xl font-bold text-primary text-center">READY TO LAUNCH IN...</h1>
          <ul className="flex justify-center gap-20 text-secondary font-light text-base">
            {
              timeProperties.map(propertyOfTime => {
                return (
                  <li key={propertyOfTime}>
                    {propertyOfTime}
                  </li>
                )
              })
            }
          </ul>
          <div className="flex gap-16 justify-center mr-8">
            <Time date={days} />
            <Time date={hours} />
            <Time date={minutes} />
            <Time date={seconds} />
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm text-quarter font-normal my-8">Inscreva-se para saber mais sobre o lançamento</span>
            <Dialog.Root>
              <Dialog.Trigger
                type="button"
                className="max-w-xs p-3 rounded-xl bg-primary text-white"
              >
                Inscreva-se
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="w-screen h-screen bg-white/80 fixed inset-0" />
                <Dialog.Content className="absolute p-10 bg-white rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
                  <Dialog.Close className="absolute right-6 top-6 text-zinc-900 rounded-lg hover:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white">
                    <X size={24} aria-label="Fechar - Close" />
                  </Dialog.Close>
                  <Dialog.Title className="text-3xl leading-tight font-bold">
                    Inscrição
                  </Dialog.Title>
                  <Form />
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
        <img src={rocket} alt="foquete - rocket" />
      </main>
      <footer>
        <img className="w-full" src={bottomImage} alt="imagem do rodapé - bottom image" />
      </footer>
    </div>
  )
}
