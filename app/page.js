// app/page.js
'use client'

import { useState } from 'react'
import { Home, Car, Phone, Mail, Instagram} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa';
import { PiTiktokLogo } from "react-icons/pi";

export default function Page() {
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    { name: 'Basic Wash', price: '$30' },
    { name: 'Full Detail', price: '$100' },
    { name: 'Interior Clean', price: '$50' },
    { name: 'Exterior Polish', price: '$75' }
  ]

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="bg-red-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Daniel&apos;s Detailing</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#home" className="hover:underline"><Home size={20} /></a></li>
              <li><a href="#services" className="hover:underline"><Car size={20} /></a></li>
              <li><a href="#contact" className="hover:underline"><Phone size={20} /></a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Home section */}
        <section id="home" className="py-20 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Mobile Auto Cleaning Solutions</h2>
            <p className="text-xl mb-8">Professional detailing at your convenience</p>
            <a href="#services" className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300">
              Our Services
            </a>
          </div>
        </section>

        {/* Services section */}
        <section id="services" className="py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.price}</p>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
                  >
                    Select
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="py-20 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <p className="mb-4">
              {selectedService
                ? `You've selected: ${selectedService.name} (${selectedService.price})`
                : 'Select a service above to get started'}
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              <a href="mailto:contact@danielsdetailing.com" className="text-red-600 hover:text-red-700">
                <Mail size={24} />
              </a>
              <a href="https://wa.me/1234567890" className="text-green-600 hover:text-green-700">
  <FaWhatsapp size={24} />
</a>
              <a href="https://instagram.com/danielsdetailing" className="text-pink-600 hover:text-pink-700">
                <Instagram size={24} />
              </a>
              <a href="https://tiktok.com" className="text-black hover:text-gray-700">
                <PiTiktokLogo size={24} />
              </a>
            </div>
            <form className="max-w-md mx-auto">
              <input type="text" placeholder="Name" className="w-full mb-4 p-2 border rounded" />
              <input type="email" placeholder="Email" className="w-full mb-4 p-2 border rounded" />
              <textarea placeholder="Message" className="w-full mb-4 p-2 border rounded h-32"></textarea>
              <button type="submit" className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Daniel&apos;s Detailing. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}