import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import CustomCursor from '../components/common/CustomCursor'

import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Hero from '../pages/Hero'

export default function RootLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-black text-white cursor-none pt-[15px]">
      <CustomCursor />
      <Navbar />
      
      
      <Outlet key={pathname} />
    </div>
  )
}
