'use client';

import { useState } from 'react';
import { Search, Car, Disc } from 'lucide-react';

export default function TireWidget() {
    const [activeTab, setActiveTab] = useState<'vehicle' | 'size'>('vehicle');

    return (
        <div className="w-full max-w-4xl rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-slate-900/5 sm:p-8">
            <div className="mb-6 flex space-x-4 border-b border-slate-100">
                <button
                    onClick={() => setActiveTab('vehicle')}
                    className={`flex items-center pb-4 text-sm font-bold uppercase tracking-wider transition-colors ${activeTab === 'vehicle'
                            ? 'border-b-2 border-orange-500 text-orange-600'
                            : 'text-slate-400 hover:text-slate-600'
                        }`}
                >
                    <Car className="mr-2 h-5 w-5" />
                    Search by Vehicle
                </button>
                <button
                    onClick={() => setActiveTab('size')}
                    className={`flex items-center pb-4 text-sm font-bold uppercase tracking-wider transition-colors ${activeTab === 'size'
                            ? 'border-b-2 border-orange-500 text-orange-600'
                            : 'text-slate-400 hover:text-slate-600'
                        }`}
                >
                    <Disc className="mr-2 h-5 w-5" />
                    Search by Size
                </button>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
                {activeTab === 'vehicle' ? (
                    <>
                        <select className="rounded-lg border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-orange-500 focus:ring-orange-500">
                            <option>Year</option>
                            <option>2025</option>
                            <option>2024</option>
                        </select>
                        <select className="rounded-lg border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-orange-500 focus:ring-orange-500">
                            <option>Make</option>
                        </select>
                        <select className="rounded-lg border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-orange-500 focus:ring-orange-500">
                            <option>Model</option>
                        </select>
                        <select className="rounded-lg border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-orange-500 focus:ring-orange-500">
                            <option>Trim</option>
                        </select>
                    </>
                ) : (
                    <>
                        <select className="rounded-lg border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-orange-500 focus:ring-orange-500">
                            <option>Width</option>
                        </select>
                        <select className="rounded-lg border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-orange-500 focus:ring-orange-500">
                            <option>Ratio</option>
                        </select>
                        <select className="rounded-lg border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-orange-500 focus:ring-orange-500">
                            <option>Diameter</option>
                        </select>
                        <div className="hidden md:block"></div>
                    </>
                )}
            </div>

            <div className="mt-6 flex justify-end">
                <button className="flex w-full items-center justify-center rounded-xl bg-orange-500 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30 md:w-auto">
                    <Search className="mr-2 h-5 w-5" />
                    Find My Tires
                </button>
            </div>
        </div>
    );
}
