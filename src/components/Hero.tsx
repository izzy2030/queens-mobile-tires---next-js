import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, CheckCircle2 } from "lucide-react";
import TireWidget from "./TireWidget";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden bg-white pt-32 text-center">
            {/* Background Gradients */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <div className="absolute -left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-brand-light/10 blur-[100px]" />
                <div className="absolute -right-[10%] top-[10%] h-[500px] w-[500px] rounded-full bg-orange-50/60 blur-[100px]" />
                <div className="absolute left-[50%] top-[40%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-slate-50/50 blur-[120px]" />
            </div>

            <div className="container relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4">
                {/* Badge */}
                <Badge
                    variant="secondary"
                    className="mb-8 rounded-full border border-brand-light/20 bg-brand-light/10 px-4 py-1.5 text-sm font-medium text-brand-light shadow-sm backdrop-blur-sm"
                >
                    <Star className="mr-1.5 h-3.5 w-3.5 fill-brand-light text-brand-light" />
                    #1 Rated Mobile Tire Service in Queens
                </Badge>

                {/* Headline */}
                <h1 className="mb-6 text-6xl font-bold tracking-tight text-brand-dark sm:text-7xl md:text-8xl">
                    <span className="font-inter block">We Bring The</span>
                    <span className="block mt-2">
                        Tire Shop <span className="font-serif italic font-normal text-brand-light">To You</span>
                    </span>
                </h1>

                {/* Subheadline */}
                <p className="mb-10 max-w-2xl text-xl leading-relaxed text-slate-500">
                    Queens Mobile Tires brings tire services right to your doorstep. Whether you're
                    at home, at work, or on the road, we make getting your tires done easy and
                    convenient.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-4 sm:flex-row">
                    <Button size="lg" className="h-14 rounded-full bg-brand-light px-8 text-lg font-bold text-white hover:bg-brand-light/90 shadow-lg shadow-brand-light/20 transition-all hover:scale-105">
                        Buy New Tires
                    </Button>
                    <Button size="lg" variant="secondary" className="h-14 rounded-full bg-slate-100 px-8 text-lg font-medium text-slate-700 hover:bg-slate-200 hover:text-brand-dark">
                        Schedule Install
                    </Button>
                </div>

                {/* Social Proof */}
                <div className="mt-10 flex items-center gap-4 text-sm font-medium text-slate-600">
                    <div className="flex items-center gap-1">
                        {/* Google G Logo SVG */}
                        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                            <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4"
                            />
                            <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"
                            />
                            <path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335"
                            />
                        </svg>
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-current" />
                            ))}
                        </div>
                    </div>
                    <span className="h-4 w-px bg-slate-300" />
                    <span>5.0 Rating based on 250+ reviews</span>
                </div>

                {/* Dashboard/Widget Preview */}
                <div className="relative mt-20 w-full max-w-4xl">
                    <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/50">
                        {/* Simple Mockup Header */}
                        <div className="flex h-12 items-center border-b border-slate-100 bg-slate-50/50 px-4">
                            <div className="flex gap-2">
                                <div className="h-3 w-3 rounded-full bg-red-400/20" />
                                <div className="h-3 w-3 rounded-full bg-yellow-400/20" />
                                <div className="h-3 w-3 rounded-full bg-green-400/20" />
                            </div>
                            <div className="mx-auto text-xs font-medium text-slate-400">
                                queensmobiletires.com
                            </div>
                        </div>

                        {/* Content: Tire Widget */}
                        <div className="bg-slate-50 p-6 md:p-10">
                            <div className="mx-auto max-w-2xl">
                                <TireWidget />
                            </div>

                            {/* Additional Trust Indicators below widget */}
                            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                                <div className="flex items-center justify-center gap-2 rounded-lg bg-white p-3 shadow-sm">
                                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                                    <span className="text-sm font-medium text-slate-700">Full Warranty</span>
                                </div>
                                <div className="flex items-center justify-center gap-2 rounded-lg bg-white p-3 shadow-sm">
                                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                                    <span className="text-sm font-medium text-slate-700">Same Day Service</span>
                                </div>
                                <div className="flex items-center justify-center gap-2 rounded-lg bg-white p-3 shadow-sm">
                                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                                    <span className="text-sm font-medium text-slate-700">Best Price Guarantee</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
