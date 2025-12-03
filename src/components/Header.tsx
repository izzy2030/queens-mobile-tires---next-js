import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-20 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl font-black italic tracking-tighter text-brand-dark">
                        QUEENS <span className="text-brand-light">MOBILE</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    <Link
                        href="/"
                        className="text-sm font-medium text-slate-600 hover:text-brand-light transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        href="/buy-new-tires"
                        className="text-sm font-medium text-slate-600 hover:text-brand-light transition-colors"
                    >
                        Find New Tires
                    </Link>
                    <Link
                        href="/tire-installation"
                        className="text-sm font-medium text-slate-600 hover:text-brand-light transition-colors"
                    >
                        Schedule Install
                    </Link>
                    <Link
                        href="/faq"
                        className="text-sm font-medium text-slate-600 hover:text-brand-light transition-colors"
                    >
                        FAQ
                    </Link>
                </nav>

                {/* CTA & Mobile Menu */}
                <div className="flex items-center gap-4">
                    <Button className="hidden bg-brand-light font-bold hover:bg-brand-light/90 md:inline-flex">
                        Book Now
                    </Button>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-6 w-6" />
                    </Button>
                </div>
            </div>
        </header>
    );
}
