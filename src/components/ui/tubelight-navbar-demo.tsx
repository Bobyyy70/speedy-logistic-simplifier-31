
import { Home, MailQuestion, CircleDollarSign, Info, FileQuestion } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Accueil', url: '/', icon: Home },
    { name: 'Services', url: '/services', icon: MailQuestion },
    { name: 'Tarification', url: '/pricing', icon: CircleDollarSign },
    { name: 'À Propos', url: '/about', icon: Info },
    { name: 'FAQ', url: '/faq', icon: FileQuestion }
  ]

  return <NavBar items={navItems} />
}
