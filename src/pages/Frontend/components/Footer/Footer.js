import React from 'react'

export default function Footer() {

    const year = new Date().getFullYear();
    
  return (
    <footer>
        <div className="container-fluid bg-dark">
            <div className="row">
                <div className="col text-white text-center">
                  <p className="mb-0 py-2">&copy; {year}. Muhammad Ahmed</p>
                </div>
            </div>
        </div>
    </footer>
  )
}
