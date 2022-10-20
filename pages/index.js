import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import "@mui/material"



export default function Home() {
  return (



      <div className={"firstPage"}>
          <Link href="/">
              <h1>All Payments Up to Date</h1>
          </Link>
        <div className={"linkBar"}>
            <Link href="/cyberneticstream">
            <h4 className={"itemOne"}>cybernetic stream</h4>
            </Link>
            <Link href="/autopay">
            <h4 className={"itemTwo"}>autopay</h4>
            </Link>

        </div>
      </div>
  )
}
