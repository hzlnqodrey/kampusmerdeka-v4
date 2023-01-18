"use client"
import Image from "next/image";
import { useEffect, useState } from "react"

namespace API {
    export interface Datum {
        no_mitra: number
        id_posisi: string
        nama_posisi: string
        nama_mitra: string;
        id_mitra: string;
        nama_kegiatan: string;
        kuota_posisi: number;
        lokasi_kerja: string;
        tipe_aktivitas: string;
        url_logo: string;
    }

    export interface RootObject {
        status_code: number
        message: string
        data: Datum[]
    }
}

export default function Magang() {
    const [items, setItems] = useState<API.RootObject[]>([])
    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState(6)

    const handlerLoadMore = () => {
        setVisible((prevValue) => prevValue + 10)
    }

    const getDataMagang = async () => {
        setLoading(true)

        try {
            const res = await fetch("https://raw.githubusercontent.com/hzlnqodrey/collect-mbkm-api-data/main/app/DATA/COMPACT/compact.json")
            const dataPosts = await res.json()
            setItems(dataPosts)
            setLoading(false)
        } catch (error) {
            setLoading(true)
        }
    }

    useEffect(() => {
        getDataMagang()
    }, [])

    return (
        <div className="bg-black py-12 relative max-w-7xl mx-auto px-4 ">
            {loading ? (
                <div className="text-center text-white text-xl">Loading...</div>
            ) : (
                <div className="flex flex-col-reverse grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {items.slice(0, visible).map((magang: any, index: number) => (
                        <div
                            key={index}
                            className="rounded-lg p-6 bg-slate-500 backdrop-filter backdrop-blur-xl bg-clip-padding bg-opacity-50 hover:scale-110 transition ease-in-out duration-50"
                        >
                            <Image
                                src={magang.url_logo}
                                alt={magang.nama_mitra}
                                quality={90}
                                width="0"
                                height="0"
                                sizes="100vw"
                                className="w-full h-auto"
                            />
                            <h1 className="text-white text-2xl mt-4">
                                {magang.nama_posisi}
                            </h1>
                            <p className="text-gray-400 text-lg mt-2">
                                Mitra: {magang.nama_mitra}
                            </p>
                            <p className="text-gray-400 text-lg mt-2">
                                Quota: {magang.kuota_posisi}
                            </p>
                            <p className="text-gray-400 text-lg mt-2">
                                Status: {magang.tipe_aktivitas}
                            </p>
                            <p className="text-gray-400 text-lg mt-2">
                                Location: {magang.lokasi_kerja}
                            </p>
                            <p className="text-gray-400 text-lg mt-2">
                                Requirements:{" "}
                                <a
                                    href={`https://kampusmerdeka.kemdikbud.go.id/program/magang/browse/${magang.id_mitra}/${magang.id_posisi}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="underline underline-offset-2"
                                >
                                    Check Requirements
                                </a>
                            </p>
                        </div>
                    ))}
                </div>
            )}
            <div className="flex justify-center items-center">
                <button
                    className="flex py-6 mt-4 relative bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center bg-slate-700 hover:bg-slate-600 pointer-events-auto"
                    onClick={handlerLoadMore}
                >
                    Show More
                </button>
            </div>
        </div>
    )
}