import React from 'react'

function Navbar() {
  return (
    <nav className="py-12 flex justify-between  px-8">
      <div className="flex flex-row justify-center">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.9999 40C31.0456 40 39.9999 31.0457 39.9999 20C39.9999 8.9543 31.0456 0 19.9999 0C8.95424 0 -6.10352e-05 8.9543 -6.10352e-05 20C-6.10352e-05 31.0457 8.95424 40 19.9999 40Z"
            fill="white"
            fillOpacity="0.1"
          />
          <path
            d="M18.8424 28.0463C14.9124 27.4707 11.8964 24.0828 11.8964 19.9891C11.8964 15.8954 14.9124 12.5075 18.8424 11.9322V7.69238C12.5855 8.29084 7.69232 13.5677 7.69232 19.9891C7.69232 26.4104 12.5855 31.687 18.8424 32.2858V28.0463Z"
            fill="white"
          />
          <path
            d="M26.9983 12L26.8892 12.3711V23.1393L26.9983 23.2483L31.9968 20.2937L26.9983 12Z"
            fill="white"
          />
          <path
            d="M26.9984 12L21.9999 20.2937L26.9984 23.2483V18.0217V12Z"
            fill="white"
          />
          <path
            d="M26.9986 24.8742L26.9371 24.9492V28.7851L26.9986 28.9648L32.0001 21.9211L26.9986 24.8742Z"
            fill="white"
          />
          <path
            d="M26.9984 28.9648V24.8742L21.9999 21.9211L26.9984 28.9648Z"
            fill="white"
          />
          <path
            d="M26.9984 23.2482L31.9968 20.2937L26.9984 18.0217V23.2482Z"
            fill="white"
          />
          <path
            d="M21.9999 20.2937L26.9983 23.2482V18.0217L21.9999 20.2937Z"
            fill="white"
          />
        </svg>
        <h1 className="px-2 text-xl text-center my-auto uppercase font-bold">
          Crypto
        </h1>
      </div>
      <div className="flex flex-row justify-center space-x-8">
        <div className="flex flex-row justify-center my-auto space-x-4">
          <a href="www.google.com" className="px-2">
            Products
          </a>
          <a href="www.google.com" className="px-2">
            Features
          </a>
          <a href="www.google.com" className="px-2">
            About
          </a>
          <a href="www.google.com" className="px-2">
            Contact
          </a>
        </div>
        {/* <div className="flex flex-row justify-center items-center my-auto space-x-4">
          <a href="www.google.com" className="px-2">
            Login
          </a>
          <div className="w-0.5 h-6 bg-gray-700 opacity-50" />
          <a
            href="www.google.com"
            className="px-6 py-2 bg-brand-button rounded-full"
          >
            Register
          </a>
        </div> */}
      </div>
    </nav>
  )
}

export default Navbar
