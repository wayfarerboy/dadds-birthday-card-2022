import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import classes from '../styles/Home.module.css'

import image from '../images/image.jpg';

export default function Home() {
  return (
    <div className={classes.container}>
<div className={classes.card}>
  <div className={classes.back} />
  <div className={classes.front}>
    <div className={classes.covershapelarge}>
      <Image src={image} alt="birthday image" layout="fill" />
    </div>
  </div>
  
  <div className={classes.textcontainer}>
    <p className={classes.head}>Happy Father&apos;s Day Pa!</p>
    <p>Hope you&apos;re having an awesome time away. I&apos;ve no doubt you&apos;re probably writing or sketching or learning about something new and complicated! I&apos;m always amazed at how you never stop learning about new things.</p>
    <p>I&apos;m thinking this will help you to pass those relaxing evenings in your apartment, sketching and painting away on your iPad! It should work well as an accompaniment to your book (which will be waiting for you when you get back home).</p>
    <p className={classes.last}>Hope you have an ace day. Love you. Al xxx</p>
    <div className={classes.buttons}>
    <Link external  target="_blank" href="https://pay.monzo.com/#F04EGRf_rHpfTiup1FH8WjIOge2MODAqZLWyNwdYr6Sn558nyzJteL25Ng%3D%3D">Money from me</Link>
    <p className={classes.topay}>to pay for</p>
    <Link external target="_blank" href="https://www.udemy.com/share/1013fe/">whatever you fancy from here</Link>
    </div>
  </div>
</div>
    </div>
  )
}
