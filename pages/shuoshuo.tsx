import { GetStaticProps, NextPage } from "next";
import ContentLayout from "../components/layout/ContentLayout";
import ListLayout from "../components/layout/ListLayout";
import { getDatabase } from "../lib/notion";
import { Post } from "../lib/types";
import { me } from "../config/me";
import { Colors } from "../lib/colors";
import Image from "next/image"
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react"
import { useTheme } from "next-themes";

const CardLayout = ({ children }: any) => {
    return (
        <div data-aos="fade-up" className={`bg-white rounded-3xl border-[0.5px] border-true-gray-100 relative overflow-hidden my-5 transform rotate-0`} dark="bg-true-gray-900 border-true-gray-800">
            <div className="m-5 xs:m-8 md:m-8">
                {children}
            </div>
        </div>
    )
}

const LocationMap = () => {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    const emptyImage = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    let src
    switch (resolvedTheme) {
        case 'light':
            src = "/static/images/map_light.png"
            break
        case 'dark':
            src = "/static/images/map_dark.png"
            break
        default:
            src = emptyImage
            break
    }

    return <Image className="absolute left-0 z-0 -top-1/4 sm:-top-3/5 lg:-top-9/10" layout='fill' objectFit="cover" src={src} alt="map" />
}

const Overview = () => {
    const style = "bg-white rounded-3xl p-4 xs:p-4.5 sm:p-6 md:p-8 min-h-25 sm:min-h-37 flex flex-col justify-between transform rotate-0 overflow-hidden dark:bg-true-gray-900"
    const social = me.social
    const publication = me.publications[0]
    const skills = me.skills
    const education = me.education
    const [more, setMore] = useState(false);

    const handleMore = () => {
        setMore(!more);
    };

    return (
        <div className="grid grid-cols-2 gap-3 select-none md:gap-6">
            <div data-aos="fade-up" data-aos-duration="800" className={`${style} justify-between`}>
                <p className="text-xs font-semibold xs:text-lg md:text-xl">
                    {`I'm a`}
                </p>
                <div className="text-sm font-semibold xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    <div>
                        <span className="inline-block mr-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                            Developer
                        </span>
                        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
                            Designer
                        </span>
                    </div>
                    <div>
                        <span className="inline-block mr-2 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-500">
                            Gamer
                        </span>
                        <span className="inline-block mr-2 text-transparent bg-clip-text bg-gradient-to-r from-true-gray-400 to-gray-500">
                            Writer
                        </span>
                        <span className="inline-block text-xs text-red-500 line-through xs:text-sm ">
                            Musician
                        </span>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" className={`${style} text-center`}>
                <p className="text-sm font-semibold text-left xs:text-lg sm:text-xl md:text-3xl lg:text-4xl">
                    Love <span className="text-white text-stroke-1 text-stroke-orange-500">Logical</span>
                </p>
                <p className="text-xs font-semibold xs:text-lg sm:text-xl lg:text-2xl">&</p>
                <p className="text-sm font-semibold text-right xs:text-lg sm:text-xl md:text-3xl lg:text-4xl whitespace-nowrap">
                    <span className="italic text-transparent bg-gradient-to-br from-pink-300 to-purple-300 bg-clip-text">Exquisite</span> Things
                </p>
                {/* {` and `} */}
            </div>
            <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" className={`${style} overflow-hidden !justify-end relative`}>
                {/* p-4 xs:p-4.5 sm:p-6 md:p-8  */}
                <p className="z-10 py-2 px-4 xs:px-4.5 sm:px-3 md:px-6 -m-4 xs:-m-4.5 sm:-m-6 md:-m-8 text-xs sm:text-lg font-semibold opacity-90 bg-gray-200 md:text-xl" dark="bg-gray-700">
                    <span className="text-gray-600" dark="text-gray-400">Located in</span> Seattle, WA
                </p>
                <LocationMap />
            </div>
                        )
                    }

}

export default Shuoshuo
