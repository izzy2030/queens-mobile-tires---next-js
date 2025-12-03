import React from 'react';

export default function TireInstallationPage() {
    return (
        <div className="container mx-auto px-4 py-24">
            <h1 className="text-4xl font-bold text-brand-dark mb-6">Schedule Installation</h1>
            <p className="text-lg text-slate-600 mb-8">
                Book your mobile tire installation appointment today. We come to your home or office.
            </p>

            <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-slate-100">
                <h2 className="text-2xl font-semibold text-brand-dark mb-6">Book an Appointment</h2>
                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                            <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-brand-light focus:border-transparent outline-none" placeholder="John" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                            <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-brand-light focus:border-transparent outline-none" placeholder="Doe" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                        <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-brand-light focus:border-transparent outline-none" placeholder="john@example.com" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                        <input type="tel" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-brand-light focus:border-transparent outline-none" placeholder="(555) 123-4567" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Vehicle Details</label>
                        <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-brand-light focus:border-transparent outline-none" placeholder="Year Make Model" />
                    </div>

                    <button type="button" className="w-full py-3 bg-brand-light text-white font-bold rounded-md hover:bg-brand-light/90 transition-colors mt-4">
                        Check Availability
                    </button>
                </form>
            </div>
        </div>
    );
}
