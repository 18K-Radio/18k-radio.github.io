'use client'
const Navbar = () => {
    return (
        <div className="navbar bg-base-300">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl font-bold">18K</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>History</a></li>
                    <li>
                        <a href="">Apps</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar