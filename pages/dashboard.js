import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../components/NavBar'
import UserTable from '../components/UserTable'
import "../styles/Dashboard.module.css"
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