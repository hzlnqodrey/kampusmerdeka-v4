import Link from 'next/link'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

import styles from './navbar.module.css'

interface Routes {
    name: string,
    path: string,
    desc: string,
}

const routes: Routes[] = [
    { name: "Magang Merdeka", path: "/magang", desc: "List semua mitra magang merdeka yang bisa kamu daftar di Periode Batch 4 MSIB" },
    { name: "Studi Independen", path: "/studi-independen", desc: "List semua mitra studi independen yang bisa kamu daftar di Periode Batch 4 MSIB" },
    { name: "Saweria", path: "https://saweria.co/hzlnqodrey", desc: "My Saweria Profile." },

]

export default function Navbar() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.grid}>
                    {routes.map((r: Routes, index: number) => 
                        <Link
                            className={styles.card}
                            target="_blank"
                            rel="noopener noreferrer"

                            key={index}
                            href={r.path}
                        >
                            <h2 className={inter.className}>
                                {r.name} <span>-&gt;</span>
                            </h2>
                            <p className={inter.className}> 
                                {r.desc} 
                            </p>
                        </Link>
                    )}
                </div>
            </div>
        </>
    )
}