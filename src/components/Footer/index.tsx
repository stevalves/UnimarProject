import { tv } from "tailwind-variants";
import Logo from "../Logo";
import MediaList from "./SocialMedia";

const tv_footer = tv({
  base: "py-4 w-full bg-forest-900 h-max",
});

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={tv_footer({ className })}>
      <div className="container flex text-forest-50 mx-auto items-center justify-between h-full p-2 font-semibold text-xl">
        <Logo className="w-1/3 md:w-[10%]" />
        <MediaList />
      </div>
    </footer>
  );
};

export default Footer;
