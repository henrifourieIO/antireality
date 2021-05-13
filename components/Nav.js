import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {

    return (
        <nav className="navbar navbar-expand-lg fixed-top active">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img className="w-75 p-2 h-25" src="/logo.png" />
                </a>
                {/* <button className="navbar-toggler" 
                type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-1 mb-lg-1">
                        <li className="nav-item ms-3">
                            <a className="nav-link active text-uppercase" aria-current="page" href="#">Virtual reality</a>
                        </li>
                        <li className="nav-item ms-3">
                            <a className="nav-link text-uppercase" href="#">Augmented reality</a>
                        </li>
                        <li className="nav-item ms-3">
                            <a className="nav-link text-uppercase" href="#">Mixed reality</a>
                        </li>
                        <li className="nav-item ms-3">
                            <a className="nav-link text-uppercase" href="#">Game dev</a>
                        </li>
                        <li className="nav-item ms-3">
                            <button class="btn btn-outline-light me-2 text-uppercase" type="button">Let’s get talking</button>
                        </li>
                    </ul>

                </div> */}
            </div>
        </nav>
    )
}