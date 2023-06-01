import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from "next/router";
import {Card, CardActions, CardContent, Button, Typography} from '@mui/material'
export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Image
      style={{width:"100%", minWidth:"800px", height:"100vh", minHeight:"500px", objectFit:"fill"}}
       src={require("../images/banner.png")}
       alt='lush-image' 
       priority={false}
       onClick={() => router.push(`login`)}/>

     <Button onClick={() => router.push(`login`)} variant="contained" style={{position:"absolute", left:"50%", top:"80%"}} >Login</Button>
    </div>
  )
}
