import Link from "next/link";
import { AluraLogo } from "../AluraLogo";
import footerStyles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <AluraLogo />
      <p>
        Orgulhosamente criado por <Link href="https://www.yllion.com.br">Sarah Sophia Pinto</Link>.
      </p>
    </footer>
  )
}