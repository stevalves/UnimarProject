import { useParams } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import { useEffect, useRef } from "react"

const MessageCard = ({ name, notMe = false }: { name: string, notMe?: boolean }) => {
  return (
    <li className={notMe ? "" : "flex flex-col items-end"}>
      <div className={`flex gap-2 items-center mb-2 py-2 w-full ${notMe ? "" : 'flex-row-reverse'}`}>
        <span className="w-6 h-6 flex items-center justify-center text-3xl p-5 rounded-full border">
          {name.split("")[0]}
        </span>
        <h6 className="text-xl">{name}</h6>
      </div>
      <p className="sm:w-2/3 border rounded-xl p-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat beatae, quaerat ipsa nostrum error saepe, sunt provident iste hic exercitationem velit! Iusto necessitatibus obcaecati quisquam? Ipsam natus pariatur accusantium exercitationem?
      </p>
    </li>
  )
}

const Chat = () => {
  const { name } = useParams() as { name: string }
  const { user } = useAuth()

  const chatbox = useRef<HTMLUListElement>(null)

  useEffect(() => {
    chatbox.current?.scrollTo(0, chatbox.current.scrollHeight)
  }, [])

  return (
    <main className="rounded-top z-10 w-full xl:w-4/6 lg:px-32 bg-black p-2 text-forest-50">
      <div className="flex gap-2 items-center mb-2 border-b border-forest-50 py-2 w-full">
        <span className="w-8 h-8 flex items-center justify-center text-3xl p-6 rounded-full border">
          {name.split("")[0]}
        </span>
        <h6>{name}</h6>
      </div>
      <ul ref={chatbox} className="flex flex-col border-b border-forest-50 gap-8 max-h-[65vh] p-2 overflow-y-auto">
        <MessageCard name={user} />
        <MessageCard name={name} notMe />
        <MessageCard name={user} />
        <MessageCard name={name} notMe />
        <MessageCard name={user} />
        <MessageCard name={name} notMe />
        <MessageCard name={user} />
        <MessageCard name={name} notMe />
        <MessageCard name={user} />
        <MessageCard name={name} notMe />
        <MessageCard name={user} />
        <MessageCard name={name} notMe />
        <MessageCard name={user} />
      </ul>
      <div className="my-8 flex items-end flex-col">
        <textarea
          id="publi"
          className="bg-forest-800 p-2 text-forest-50 resize-none placeholder:text-forest-50/75 w-full rounded min-h-[90px]"
          placeholder="Digite sua mensagem"
          required />
        <button className="py-2 px-4 m-2 border border-forest-50 rounded">Enviar</button>
      </div>
    </main>
  )
}

export default Chat