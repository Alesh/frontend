import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { PropsWithChildren } from "react";
import { clsx } from "clsx";

import Logo from "@/assets/react.svg";
import { Link } from "@nextui-org/link";

type Props = PropsWithChildren<{
  className?: string;
  actions: { action: string; title: string }[];
}>;
/// Верхняя панель навигации и статуса
const TopBar = ({ className, actions = [], children }: Props) => {
  return (
    <Navbar className={clsx(className)}>
      <NavbarBrand>
        <Logo className="w-10" />
        <p className="font-bold text-inherit">Sample</p>
      </NavbarBrand>
      {actions && (
        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          {actions.map(({ action, title }, index) => (
            <NavbarItem key={index}>
              <Link color="foreground" href={action}>
                {title}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      )}
      {children && <NavbarContent justify="end">{children}</NavbarContent>}
    </Navbar>
  );
};
export default TopBar;
