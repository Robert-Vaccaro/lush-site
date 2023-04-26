import NavBar from '../components/NavBar'
import UserTable from '../components/UserTable'
export default function Dashboard() {
  return (
    <div className='usertable-container'>
        <div>
            <NavBar />
        </div>
        <div className='usertable-container'>
            <UserTable />
        </div>
    </div>
  )
}
//