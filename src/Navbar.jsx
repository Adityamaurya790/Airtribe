import React from 'react'

export const Navbar = () => {
  return (
    <div>

<nav class="bg-gray-800 p-4">
        <div class="container mx-auto flex justify-between items-center">
           
            <a href="#" class="text-white text-2xl font-bold">Logo</a>

            
            <div class="space-x-4">
                <a href="#" class="text-white">Home</a>
                <a href="#" class="text-white">About</a>
                <a href="#" class="text-white">Services</a>
                <a href="#" class="text-white">Contact</a>
            </div>
        </div>
    </nav>
    </div>
  )
}
