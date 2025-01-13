import { Link } from 'react-router-dom'

export function Navegation() {
  return (
    <div className='flex justify-between py-3'>
        <Link to={"/tasks"}><h5 className='font-bold text-3xl mb-4 hover:underline'>List tasks</h5></Link>
          <Link to={"/tasks-create"}>
            <button className='bg-indigo-500 px-3 py-2 rounded-lg'>
              Create task
            </button>
          </Link>
    </div>
  )
}