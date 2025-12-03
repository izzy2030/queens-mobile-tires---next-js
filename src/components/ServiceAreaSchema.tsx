import Script from 'next/script';

export default function ServiceAreaSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "Queens Mobile Tires",
        "image": "https://queensmobiletires.com/wp-content/uploads/2023/01/logo.png", // Replace with actual logo URL
        "@id": "https://queensmobiletires.com",
        "url": "https://queensmobiletires.com",
        "telephone": "+15551234567", // Replace with actual
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Serving Queens & Surrounding Areas",
            "addressLocality": "Queens",
            "addressRegion": "NY",
            "postalCode": "11375",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 40.7282,
            "longitude": -73.7949
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "07:00",
            "closes": "21:00"
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Queens"
            },
            {
                "@type": "City",
                "name": "Brooklyn"
            },
            {
                "@type": "City",
                "name": "Long Island"
            }
        ],
        "sameAs": [
            "https://www.facebook.com/queensmobiletires",
            "https://www.instagram.com/queensmobiletires"
        ]
    };

    return (
        <Script
            id="service-area-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
