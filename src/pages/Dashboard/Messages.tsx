import { Link } from "react-router-dom"

interface iUserMessage {
  id: string
  name: string
}

const users: iUserMessage[] = [
  { name: "Ana Clara", id: "message1" },
  { name: "João Pedro", id: "message2" },
  { name: "Maria Eduarda", id: "message3" },
  { name: "Lucas Gabriel", id: "message4" },
  { name: "Luísa Fernanda", id: "message5" },
  { name: "Rafael Henrique", id: "message6" },
  { name: "Lara Beatriz", id: "message7" },
  { name: "Bruno Miguel", id: "message8" },
  { name: "Alice Sofia", id: "message9" },
  { name: "Pedro Henrique", id: "message10" },
]

const CardMessage = ({ name, id }: iUserMessage) => {
  return (
    <li
      id={id}
    >
      <Link to={`/dashboard/messages/${name}`} className="flex gap-2 w-full border p-2 rounded">
        <div className="flex flex-col items-center gap-2">
          <span className="border p-2 w-8 h-8 rounded-full flex items-center justify-center">
            {name.split("")[0]}
          </span>
          <div className="w-[2px] border h-full" />
        </div>
        <div className="flex flex-col gap-4">
          <h6>{name}</h6>
          <p className="line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores porro accusantium in. Voluptas quas, sit labore nesciunt facilis minus deserunt aspernatur, veritatis sapiente eaque amet asperiores ratione! Optio, pariatur. Alias.</p>
        </div>
      </Link>
    </li>
  )
}

const Messages = () => {
  return (
    <main className="rounded-top z-10 w-full xl:w-4/6 lg:px-32 bg-black p-2 text-forest-50">
      <h4 className="text-2xl py-6">Mensagens:</h4>
      <ul className="mt-12 flex flex-col gap-8">
        {users.map(user => <CardMessage name={user.name} id={user.id} key={user.id} />)}
      </ul>
      <div className="flex flex-col my-8 w-full items-center">
        <h6>Parece que você chegou ao fim!</h6>
        <a href="#" className="w-max text-center hover:underline">
          Voltar ao topo
        </a>
      </div>
    </main>
  )
}

export default Messages