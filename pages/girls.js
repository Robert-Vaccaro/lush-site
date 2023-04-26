import NavBar from '../components/NavBar'
import GirlsTable from '../components/GirlsTable'
export default function Girls() {
  return (
    <div className='usertable-container'>
        <div>
            <NavBar />
        </div>
        <div className='usertable-container'>
            <GirlsTable />
        </div>
    </div>
  )
}
//