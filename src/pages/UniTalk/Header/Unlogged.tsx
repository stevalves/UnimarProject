import { Link } from "react-router-dom";
import { tv } from "tailwind-variants";

const list_tv = tv({
  base: "absolute py-1 sm:border-l sm:pl-4 overflow-hidden flex transition-all sm:static sm:h-max text-[.75rem] sm:text-[1.5rem] justify-evenly sm:gap-4 w-0 sm:bg-transparent sm:w-max sm:visible overflow-x-hidden bg-forest-800 invisible -bottom-9 h-max right-0",
  variants: {
    open: {
      true: "w-full visible z-10",
    },
  },
  defaultVariants: {
    open: false,
  },
});

interface iUnloggedProps {
  open: boolean
}

const Unlogged = ({ open }: iUnloggedProps) => {
  return (
    <ul className={list_tv({ open })}>
      <Link
        to="/unitalk/register"
        className="border px-2 py-1 hover:bg-forest-50 hover:text-forest-900 duration-300 transition-colors sm:w-max w-1/3 text-center"
      >
        Registro
      </Link>
      <Link
        to="/unitalk/login"
        className="border px-2 py-1 hover:bg-forest-50 hover:text-forest-900 duration-300 transition-colors sm:w-max w-1/3 text-center"
      >
        Login
      </Link>
    </ul>
  )
}

export default Unlogged