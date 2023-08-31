import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

interface iSocialMediaValues {
  id: string;
  icon: React.ReactNode;
  href: string;
}

const SocialMedias: iSocialMediaValues[] = [
  {
    id: "Unimar Facebook",
    icon: (
      <AiFillFacebook className="text-2xl" />
    ),
    href: "https://www.facebook.com/universidadedemarilia/",
  },
  {
    id: "Unimar Instagram",
    icon: (
      <AiFillInstagram className="text-2xl" />
    ),
    href: "https://www.instagram.com/unimaroficial/",
  },
  {
    id: "Unimar Twitter",
    icon: (
      <AiFillTwitterCircle className="text-2xl" />
    ),
    href: "https://twitter.com/unimar_oficial",
  },
  {
    id: "Unimar LinkedIn",
    icon: (
      <AiFillLinkedin className="text-2xl" />
    ),
    href: "https://www.linkedin.com/school/universidade-de-mar%C3%ADlia/",
  },
  {
    id: "Unimar YouTube",
    icon: (
      <AiFillYoutube className="text-2xl" />
    ),
    href: "https://www.youtube.com/user/UnimarTV",
  },
];

const MediaList = () => {
  return (
    <ul className="flex gap-2">
      {SocialMedias.map((value) => (
        <li
          className="flex items-center justify-center"
          key={value.id}
          title={value.id}
        >
          <a
            target="_blank"
            href={value.href}
            className="flex flex-col items-center transition-colors duration-[.3s] hover:text-forest-200"
          >
            {value.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MediaList;
