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
            <div data-aos="fade-up" data-aos-duration="800" className={`${style} bg-gradient-to-br from-[#ffa0a8] to-[#fffcdc] text-white`}
            // style={{ background: "linear-gradient(135deg, #ffa0a8, #fffcdc)" }}
            // style={{ background:"linear-gradient(90deg, rgba(255,167,69,1) 0%, rgba(254,134,159,1) 25%, rgba(239,122,200,1) 50%, rgba(160,131,237,1) 75%, rgba(67,174,255,1) 100%)"}}
            >
                {/* <div className="flex flex-col justify-between"> */}
                <div className="text-xs font-semibold xs:text-lg md:text-xl">
                    Hey there 👋
                </div>
                <div className="text-lg font-semibold xs:text-2xl sm:text-3xl md:text-4xl whitespace-nowrap">
                    {`I'm Jianya Ge `}
                    {/* <span className="text-sm">(a guy)</span> */}
                </div>
                {/* </div> */}
                {/* <img className="h-full rounded-full" src="/static/images/portrait.png" alt="portrait" /> */}
            </div>
            <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" className={`${style} row-span-2 text-white bg-gradient-to-br from-green-400 to-blue-500`}>
                <p className="text-xs font-semibold xs:text-lg md:text-xl">
                    Intersted in</p>
                <div className="text-center">
                    <p className="text-sm font-semibold xs:text-xl sm:text-2xl md:text-3xl">
                        Web & Mobile Development, Machine Learning
                    </p>

                </div>
                <p className="text-xs text-center sm:text-sm text-true-gray-100">... and any other interesting or challenging technology</p>
            </div>
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
            <div data-aos="fade-up" data-aos-duration="800" className={`${style} col-span-2 gap-3  relative !flex-row items-center`}>
                <p className="z-10 text-sm font-semibold text-left xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl whitespace-nowrap">
                    Find me on 👉
                </p>
                {/* <div className="absolute bottom-0 left-0 z-0 w-full bg-indigo-200 h-5/7 sm:h-3/5"/> */}
                <div className="flex items-center justify-center gap-0 my-4 text-white sm:gap-1 md:gap-1 lg:gap-2">
                    {
                        social.map((s: any) =>
                            <a last-after="absolute content-. text-transparent  w-4 h-4 rounded-full bg-red-500 right-0 top-0" last-before="absolute content-. text-transparent  w-4 h-4 animate-ping  rounded-full bg-red-400 right-0 top-0" target="_blank" rel="noopener noreferrer" className={`relative shadow-inner translate-y-5 even:(-translate-y-5) -ml-3 sm:ml-0  rounded-full p-3 sm:p-4 md:p-5 lg:p-6  flex justify-center items-center transform transition ease-in-out duration-200 hover:scale-105 md:hover:scale-95 aspect-ratio h-full bg-gradient-to-tr text-white  shadow-lg-middle dark:shadow-none ${s.shadow} ${s.color} `} href={s.url} key={s.name}>
                                <s.icon className={`h-3 w-3 xs:(h-4 w-4) sm:(w-5 h-5) lg:(w-6 h-6) fill-white`}></s.icon>
                                {/* <p className={`hidden md:block whitespace-nowrap`}>{s.name}</p>                */}
                            </a>
                        )
                    }
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="800" className={`bg-white rounded-3xl overflow-hidden min-h-25 sm:min-h-37 col-span-2 sm:col-span-1 flex flex-col relative justify-between`} dark="bg-true-gray-900">
                <div className={`absolute transition duration-200  ease-in-out h-full w-full bg-true-gray-900 z-40 rounded-3xl text-white ${more ? "opacity-100" : "opacity-0"} overflow-auto scrollbar-hide justify-between flex flex-col`}>
                    <p className={`p-4 xs:p-4.5 sm:p-6 md:p-8  text-sm font-semibold text-left xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl z-50 line-clamp-1 text-transparent`}>Technical Skills</p>
                    <div className="flex flex-col justify-end items-start w-full p-4 xs:p-4.5 sm:p-6 md:p-8 gap-3 lg: gap-4">
                        {skills.map((skill: any, index: number) =>
                            <div className="flex flex-wrap gap-1 lg:gap-3" key={index}>
                                {
                                    skill.map((s: any, i: number) =>
                                        <div className="flex flex-row gap-1 text-xs xs:text-sm md:text-normal lg:text-lg place-items-center" key={s.name + i.toString()}>
                                            <s.icon className={`w-3 h-3 lg:(w-5 h-5) p-1 rounded-full ${s.color}`} />
                                            {s.name}
                                        </div>
                                    )}
                                ...
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between p-4 xs:p-4.5 sm:p-6 md:p-8">
                    <p className={`text-2xl font-semibold text-left sm:text-2xl md:text-3xl lg:text-4xl z-10 z-50  line-clamp-1 ${more ? "text-white dark:text-black" : "text-black dark:text-white"}`}>Technical Skills</p>
                    <div className={`h-full aspect-square grid place-items-center transition duration-500  ease-in-out z-50 hover:cursor-pointer transform ${more ? "rotate-45 bg-white text-black hover:bg-true-gray-200" : "rotate-0 bg-black text-white hover:bg-true-gray-500"} rounded-full`} onClick={handleMore} dark="bg-true-gray-900">
                        <FontAwesomeIcon className="md:(transform scale-150)" icon={faPlus} />
                    </div>
                </div>
                <div className="pb-4 xs:pb-4.5 sm:pb-6 lg:pb-8">
                    {
                        skills.map((s: any, i: number) =>
                            <div className={`${i === 1 ? "my-1 md:my-1 lg:my-2" : ""}`} key={i}>
                                <div className="w-[1560px] animate-scroll-md lg:(w-[2200px] animate-scroll-lg) flex justify-between">
                                    {Array(20).fill(0).map((_, index) => s[index % s.length]).map((s, s_i) =>
                                        <div className={`w-[78px] mx-[4px] h-[70px] rounded-xl lg:(w-[110px] mx-[5px] h-[100px] rounded-3xl) text-white grid place-items-center ${s.color} ${i === 1 ? "transform -translate-x-5 sm:-translate-x-10 lg:-translate-x-15" : ""}`} key={s.name + s_i.toString()}>
                                            <s.icon className="w-9 h-9 lg:(w-12 h-12)"></s.icon>

                                        </div>)
                                    }
                                </div>
                            </div>
                        )
                    }

}

export default Shuoshuo
