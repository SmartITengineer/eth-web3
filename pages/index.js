import Head from 'next/head'
import Image from 'next/image'
import { useMoralis } from 'react-moralis'
import styles from '../styles/Home.module.css'
import Login from '../components/Login'

export default function Home() {
  const { isAuthenticated, logout } = useMoralis()
  return (
    <div>
      { isAuthenticated ? (
        <p>
          You are logged in
          <button onClick={logout}>Sign Out</button>
        </p>
      ) : (
        <Login />
      )}
    </div>
  )
}
