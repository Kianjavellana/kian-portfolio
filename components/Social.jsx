import { icons } from "lucide-react";
import Link from "next/link";
import path from "path";

import { FaGithub, FaLinkedinIn, FaYoutube, FaFacebook } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/Kianjavellana", // GitHub path here
  },
  {
    icon: <FaLinkedinIn />,
    path: "", // LinkedIn path here
  },
  {
    icon: <FaYoutube />,
    path: "", // YouTube path here
  },
  {
    icon: <FaFacebook />,
    path: "https://www.facebook.com/kian.javellana.397", // Facebook path here
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};
export default Social;
