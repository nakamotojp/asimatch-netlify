import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '#services', label: 'サービス' },
    { href: '#clients', label: '取引先' },
    { href: '#pricing', label: '料金プラン' },
    { href: '#about', label: '会社概要' },
    { href: '#contact', label: 'お問い合わせ' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-base-100 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="https://asimatch.com" className="flex items-center space-x-2 text-2xl font-bold text-primary">
            <Zap className="h-8 w-8" />
            <span>Asimatch</span>
          </a>

          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base-content hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニュー"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden py-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-base-content hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}