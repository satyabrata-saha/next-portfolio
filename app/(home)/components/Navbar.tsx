import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { SiGithub } from "react-icons/si";
import { SiX } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

export default function Navbar({className}: {className?: string}) {

    const socials = [
        {
            link: "https://www.linkedin.com/in/satyabrata-saha/",
            label: "Linkedin",
            icon: SiLinkedin,
        },
        {
            link: "https://www.linkedin.com/in/satyabrata-saha/",
            label: "Github",
            icon: SiGithub,
        },
        {
            link: "https://www.linkedin.com/in/satyabrata-saha/",
            label: "x",
            icon: SiX,
        }
    ]
  return (
    <nav className={cn('py-10 flex justify-between items-center animate-move-down', className)}>
        <h1 className='text-2xl font-bold underline underline-offset-8 decration-green-500 -rotate-2'>Satyabrata 👨🏻‍💻</h1>
        <div className='flex items-center gap-5'>
            {socials.map((social, index)=>{
                const Icon = social.icon;
                
                return <Link href={social.link} key={index} aria-Label={social.label}>
                    <Icon className='w-5 h-5 hover:scale-125 transition-all'/>
                </Link>
            })}
        </div>
    </nav>
  )
}
