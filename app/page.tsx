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
        <div>
          <Image
            className={styles.logo}
            src="/images/KampusMerdeka.svg"
            alt="Kampus Merdeka Logo"
            width={500}
            height={87}
            priority
            quality={100}
          />
        </div>
        <div className={styles.thirteen}>
          <Image 
            src="/images/v4.svg" 
            alt="v4 Logo" 
            width={40} 
            height={31} 
            priority
            quality={100}
          />
        </div>
      </div>

      <div className="grid grid-rows-2 justify-items-center items-center px-1 lg:px-2 xl:px-2 2xl:20">
        <div className="w-full text-base text-center top-2 sm:w-full md:w-full sm:text-sm md:text-base lg:text-lg xl:text-2xl">
          <p className={inter.className}>
            Periode Registrasi <span className="text-yellow-400">Batch 4 MSIB</span> | 20 Desember 2022 - 20 Januari 2023
          </p>
        </div>
        <div className="w-full text-sm text-center sm:w-10/12 sm:mt-10 md:max-w-2xl sm:text-sm md:text-base lg:text-lg xl:text-base xl:mt-1">
          <p className={inter.className}>
            <span className="underline decoration-solid"><a href="https://kampusmerdeka.kemdikbud.go.id/" target="_blank" rel="noopener noreferrer">Kampus Merdeka</a></span> adalah bagian dari kebijakan Merdeka Belajar oleh Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbudristek) yang memberikan seluruh mahasiswa <span className="text-yellow-400">kesempatan untuk mengasah kemampuan sesuai bakat dan minat</span> dengan <span className="text-yellow-400">terjun langsung ke dunia kerja</span> sebagai <span className="text-yellow-400">langkah persiapan karier.</span>
          </p>
        </div>
      </div>
    </main>
  )
}
