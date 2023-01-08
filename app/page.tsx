import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <a 
          href="https://github.com/hzlnqodrey"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="inline">
            Github&nbsp; 
            <Image
              src="./images/github-logo.svg"
              alt="github logo"
              width={20}
              height={20}
              className="inline"
              priority
            >
            </Image>
            &nbsp;
            <code className={styles.code}>hzlnqodrey</code>
          </p>
        </a>

        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/images/KampusMerdeka.svg"
          alt="Next.js Logo"
          width={400}
          height={87}
          priority
          quality={100}
        />
        <div className={styles.thirteen}>
          <Image 
            src="/images/v4.svg" 
            alt="13" 
            width={40} 
            height={31} 
            priority 
          />
        </div>
      </div>

      <div className="container mx-auto w-5/12 sm:text-sm md:text-base lg:text-lg xl:text-xl text-lg text-center">
        <p className={inter.className}>
          <span className="underline decoration-solid"><a href="https://kampusmerdeka.kemdikbud.go.id/" target="_blank" rel="noopener noreferrer">Kampus Merdeka</a></span> adalah bagian dari kebijakan Merdeka Belajar oleh Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbudristek) yang memberikan seluruh mahasiswa <span className="text-yellow-400">kesempatan untuk mengasah kemampuan sesuai bakat dan minat</span> dengan <span className="text-yellow-400">terjun langsung ke dunia kerja</span> sebagai <span className="text-yellow-400">langkah persiapan karier.</span>
        </p>
      </div>
    </main>
  )
}
