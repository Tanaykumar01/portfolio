import Link from "next/link"

import {FaGithub , FaLinkedin , FaYoutube , FaCode} from "react-icons/fa";

const socials = [
    {icons: <FaGithub /> , path:""},
    {icons: <FaLinkedin /> , path:""},
    {icons: <FaYoutube /> , path:""},
    {icons: <FaCode /> , path:""},
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
