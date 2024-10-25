import React from 'react'

const Sidebar = () => {
  return (
		<div className="w-1/5 bg-medium-red p-4">
            <div className="border rounded-md p-2 text-center">
                <h2 className="font-bold bg-dark-red">Logo</h2>
            </div>
            <nav className="mt-6">
                <ul>
                    <li className="my-2 p-2 border-b">Navbar Item 1</li>
                    <li className="my-2 p-2 border-b">Navbar Item 2</li>
                    <li className="my-2 p-2 border-b">Navbar Item 3</li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar