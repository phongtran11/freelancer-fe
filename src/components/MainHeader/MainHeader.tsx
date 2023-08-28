import SearchLineIcon from 'remixicon-react/SearchLineIcon'
import EditBoxLineIcon from 'remixicon-react/EditBoxLineIcon'
import { OperatorGroup } from './components'

export const MainHeader = () => {
  return (
    <nav className="bg-primary border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center gap-3">
          <a href="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white ">
              Freelancer
            </span>
          </a>
          <SearchLineIcon className="text-secondary" />
          <EditBoxLineIcon className="text-secondary" />
        </div>

        <div className="flex items-center gap-3">
          <OperatorGroup />
        </div>
      </div>
    </nav>
  )
}
