'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Navbar = () => {
    const pathname = usePathname()
    return (
        <div className="navbar bg-base-300">
            <div className="flex-1">
                <Link className="btn btn-ghost text-xl font-bold" href="/">
                    Home
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/history">
                            History
                        </Link></li>
                    <li>
                        <Link href="/apps">
                            Apps
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar