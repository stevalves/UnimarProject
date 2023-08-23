import {
    TbBrandReact,
} from "react-icons/tb";
import { tv } from "tailwind-variants";

interface iNavValues {
    id: string
    value: React.ReactNode;
    href: string;
}

const navValues: iNavValues[] = [
    {
        id: "Icon1",
        value: (
            <>
                <TbBrandReact />
                <h4 className="flex sm:hidden mt-1 text-[1.5rem] tracking-wide font-light">Icon1</h4>
            </>
        ),
        href: "#",
    },
    {
        id: "Icon2",
        value: (
            <>
                <TbBrandReact />
                <h4 className="flex sm:hidden mt-1 text-[1.5rem] tracking-wide font-light">Icon2</h4>
            </>
        ),
        href: "#",
    },
    {
        id: "Icon3",
        value: (
            <>
                <TbBrandReact />
                <h4 className="flex sm:hidden mt-1 text-[1.5rem] tracking-wide font-light">Icon3</h4>
            </>
        ),
        href: "#",
    },
    {
        id: "Icon4",
        value: (
            <>
                <TbBrandReact />
                <h4 className="flex sm:hidden mt-1 text-[1.5rem] tracking-wide font-light">Icon4</h4>
            </>
        ),
        href: "#",
    },
    {
        id: "Icon5",
        value: (
            <>
                <TbBrandReact />
                <h4 className="flex sm:hidden mt-1 text-[1.5rem] tracking-wide font-light">Icon5</h4>
            </>
        ),
        href: "#",
    },
];

interface iNavList {
    open: boolean;
}

const NavList = ({ open }: iNavList) => {
    const list_tv = tv({
        base: "fixed sm:py-4 overflow-hidden flex flex-col transition-all sm:static sm:h-max text-[2rem] sm:text-[1.5rem] justify-between py-24 sm:gap-2 w-0 sm:bg-transparent sm:flex-row sm:w-max sm:visible overflow-x-hidden bg-forest-700/95 invisible top-0 h-screen right-0 duration-1",
        variants: {
            open: {
                true: "w-full visible z-10",
            },
        },
        defaultVariants: {
            open: false,
        },
    });

    return (
        <ul className={list_tv({ open })}>
            {navValues.map((value) => (
                <li className="flex items-center justify-center" key={value.id} title={value.id}>
                    <a
                        target="_blank"
                        href={value.href}
                        className="flex flex-col items-center transition-colors duration-[.3s] hover:text-forest-200"
                    >
                        {value.value}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default NavList;
