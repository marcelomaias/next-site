"use client"

import Link from "next/link"
import styles from './NavLink.module.css'
import { usePathname } from "next/navigation"

function NavLink({ item }) {

    const pathName = usePathname()

    return (
        <Link href={item.path} key={item.path} className={`${pathName === item.path && styles.active}`}>{item.title}</Link>
    )
}

export default NavLink