import React from 'react';

export default function BuyNewTiresPage() {
    return (
        <div className="container mx-auto px-4 py-24">
            <h1 className="text-4xl font-bold text-brand-dark mb-6">Find New Tires</h1>
            <p className="text-lg text-slate-600 mb-8">
                Browse our wide selection of tires from top brands. We bring the tire shop to you!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Dummy content placeholders */}
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="p-6 border border-slate-200 rounded-lg shadow-sm bg-white">
                        <div className="h-40 bg-slate-100 rounded-md mb-4 flex items-center justify-center text-slate-400">
                            Tire Image Placeholder
                        </div>
                        <h3 className="text-xl font-semibold text-brand-dark mb-2">Tire Model {item}</h3>
                        <p className="text-slate-500 mb-4">High performance all-season tire.</p>
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-brand-light">$150.00</span>
                            <button className="px-4 py-2 bg-brand-light text-white rounded-md hover:bg-brand-light/90 transition-colors">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
