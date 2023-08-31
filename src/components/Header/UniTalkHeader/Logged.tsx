import { Link } from "react-router-dom";
import { tv } from "tailwind-variants";
import useAuth from "../../../hooks/useAuth";
import { useEffect, useRef, useState } from "react";

const list_tv = tv({
  base: "absolute left-0 right-0 bg-white top-[81px] rounded-top text-forest-900 flex flex-col justify-center items-center overflow-y-hidden h-0 invisible transition-all text-2xl",
  variants: {
    open: {
      true: "h-[160px] visible z-10",
    },
  },
  defaultVariants: {
    open: false,
  },
});

const Logged = () => {

  const [open, setOpen] = useState<boolean>(false)
  const { user, logOut } = useAuth()

  const handleOpen = () => setOpen(value => !value)

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref.current) {
        return;
      }

      if (!event.target) {
        return;
      }

      if (!ref.current.contains(event.target as HTMLElement)) {
        if (open) handleOpen()
      }
    };

    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, [handleOpen]);

  return (
    <nav ref={ref} className="flex items-center gap-4 border-l border-forest-50 pl-4 h-max sm:relative">
      <Link to="/profile" className="border border-forest-50 px-2 py-1 hover:bg-forest-50 hover:text-forest-900 duration-300 transition-colors sm:w-max w-1/3 text-center rounded sm:flex hidden">{user.split(" ")[0]}</Link>
      <button onClick={handleOpen} className="border w-12 h-12 flex items-center justify-center rounded-full bg-forest-900 text-forest-50 font-semibold text-3xl border-forest-50 pb-1 hover:bg-forest-50 hover:text-forest-900 duration-300">{user.split("")[0].toUpperCase()}</button>
      <div className={list_tv({ open })}>
        <Link to="/dashboard" className="w-full text-center border-b py-2 hover:text-forest-700">Dashboard</Link>
        <Link to="/profile" className="w-full text-center border-b py-2 hover:text-forest-700">Perfil</Link>
        <button onClick={logOut} className="w-full text-center border-t py-2 hover:text-forest-700">Sair</button>
      </div>
    </nav>
  )
}

export default Logged