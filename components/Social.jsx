import Link from "next/link"

import {FaGithub , FaLinkedin , FaYoutube , FaCode} from "react-icons/fa";

const socials = [
    {icons: <FaGithub /> , path:"https://github.com/Tanaykumar01"},
    {icons: <FaLinkedin /> , path:"https://www.linkedin.com/in/tanay-kumar-jhunjhunwala-3256b9237/"},
    {icons: <FaYoutube /> , path:"youtube.com"},
    {icons: <FaCode /> , path:"https://leetcode.com/u/tanaykumar01/"},
]
const Social = ({containerStyles , iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item , index)=> {
        return <Link key={index} href={item.path} className={iconStyles}>{item.icons}</Link>
      })}
    </div>
  )
}

export default Social
