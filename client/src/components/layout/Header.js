import React from 'react'

export default function Header() {
    return (
        <header>
            <nav className="mb-3 navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
                <a className="navbar-brand" href="/">Song Voter</a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar-menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-menu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Vote</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
