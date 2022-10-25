import { Github, Dribbble, Props, Linkedin } from '@icons-pack/react-simple-icons'
import { FC } from 'react'
import Zhihu from '../assets/zhihu.svg'
import Weibo from '../assets/Weibo.svg'
import Bilibili from '../assets/Bilibili.svg'

export type LinkType = {
    url: string,
    icon: FC<Props> | string,
    color: string,
    fill: string,
    border: string,
    text: string,
    shadow: string,
    id?: string,
    name?: string,
}


export const links : readonly [LinkType, LinkType, LinkType, LinkType, LinkType] = [
  {
      url: 'https://github.com/gejianya',
      icon: Github,
      color: 'from-bg-[#24292f] to-bg-[#040d21]',
      fill: "fill-[#181717]",
      border: "border-[#181717]",
      text:"text-[#181717]",
      shadow: "shadow-true-gray-400",
      id: "戈建亚",
      name: "GitHub"
  },
  {
      url: 'https://sspai.com/u/mannycooper/updates',
      icon: Weibo,
      color: 'from-bg-[#F8D65F] to-bg-[#FCEEBE]',
      fill: "fill-[#F7D55E]",
      border: "border-[#FFCA03]",
      shadow: "shadow-yellow-300",
      text:"text-[#F7D55E]",
      name: "微博"
  },
  {
      url: 'https://www.zhihu.com/people/xiao-ya-47-25',
      icon: Zhihu,
      color: 'from-bg-[#2B64F5] to-bg-[#4BA5F7]',
      fill: "fill-[#0084FF]",
      border: "border-[#0084FF]",
      shadow: "shadow-blue-300",
      text:"text-[#0084FF]",
      id: "gejianya",
      name: "知乎"
  },
  {
      url: 'https://space.bilibili.com/8533657?spm_id_from=333.1007.0.0',
      icon: Bilibili,
      color: 'from-bg-[#EA4773] to-bg-[#ED749C]',
      fill: "fill-[#E94973]",
      border: "border-[#E94973]",
      shadow: "shadow-pink-300",
      text:"text-[#E94973]",
      name: 'Bilibili'
  },
  {
      url: 'https://www.linkedin.cn/in/%E5%BB%BA%E4%BA%9A-%E6%88%88-252742172',
      icon: Linkedin,
      fill: "fill-[#0A66C2]",
      border: "border-[#0A66C2]",
      shadow: "shadow-blue-300",
      text:"text-[#0A66C2]",
      color: 'from-bg-[#0b66c2] to-bg-[#008bff]',
      name: 'LinkedIn'
  }
]
