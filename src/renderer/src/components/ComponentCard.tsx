import { Component } from '@/types/Component'
import { Link } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@shadcn/components/ui/dropdown-menu'
import { BsThreeDotsVertical } from 'react-icons/bs'

const ComponentCard = ({
  id,
  catalogId,
  name,
  type,
  description,
  data
}: Component): JSX.Element => {
  console.log(type, data)
  return (
    <Link to={`/components/${id}`}>
      <article
        key={id}
        className="bg-zinc-900 text-white rounded-md list-none p-4 min-h-48 flex flex-col justify-between hover:-translate-y-1 hover:bg-white hover:text-black transition-all active:text-white active:bg-zinc-800 active:translate-y-1 hover:cursor-pointer"
      >
        <div className="flex flex-row items-start justify-between">
          <h1 className="text-3xl font-bold mb-8 line-clamp-2 text-ellipsis">{name}</h1>
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none text-2xl">
              <BsThreeDotsVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-white bg-zinc-950 py-4 flex flex-col gap-4 min-w-32">
              <Link to={`/components/${id}/edit-component`}>
                <DropdownMenuItem className="px-4 hover:border-none focus:border-none hover:bg-zinc-100 hover:text-zinc-950 font-semibold transition-colors py-2">
                  Edit
                </DropdownMenuItem>
              </Link>
              <Link to={`/components/${id}/delete-component`}>
                <DropdownMenuItem className="px-4 hover:border-none focus:border-none hover:bg-zinc-100 hover:text-zinc-950 font-semibold transition-colors py-2">
                  Delete
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex flex-col gap-4">
          <p className="line-clamp-2 text-ellipsis text-gray-500">
            {description ? description : <i>No description</i>}
          </p>
          <div className="flex justify-between">
            <h4 className="text-gray-400">Catalog: {catalogId}</h4>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default ComponentCard
