import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {

    return (
        <nav className="navbar navbar-expand-lg fixed-top active">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img className="w-75 p-2 h-25" src="/logo.png" />
                </a>
                
            </div>
        </nav>
    )
}