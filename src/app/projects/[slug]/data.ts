// Project data - in a real app, this would come from a CMS or database
export const projectData = {
  'logistics-shipment-management-saas': {
    title: 'Logistics & Shipment Management SaaS',
    role: 'Fullstack Developer & System Architect',
    duration: '6 months',
    team: '3 developers',
    description: 'Designed and built a comprehensive SaaS platform for logistics companies to manage shipments, import/export clearance, accounting, and documentation.',
    longDescription: `This project involved creating a complete SaaS solution for small to medium logistics companies. The platform streamlines the entire logistics workflow from shipment initiation to completion, including real-time tracking, financial management, and regulatory compliance.

Key challenges included designing a scalable architecture that could handle multiple companies' data securely, implementing real-time tracking systems, and creating an intuitive interface for users with varying technical backgrounds.`,
    features: [
      'Shipment tracking with real-time status updates',
      'Order management and route optimization',
      'Accounting module for invoicing and expense tracking',
      'Documentation system for regulatory compliance',
      'Multi-tenant architecture for multiple companies',
      'Real-time notifications and alerts',
      'Financial reporting and analytics',
      'API integration with shipping carriers'
    ],
    tech: ['Laravel', 'MySQL', 'Docker', 'Typesense', 'Real-time Updates'],
    challenges: [
      'Designing scalable multi-tenant architecture',
      'Implementing real-time tracking across multiple carriers',
      'Ensuring data security and compliance',
      'Optimizing database queries for large datasets'
    ],
    solutions: [
      'Implemented database partitioning for better performance',
      'Used WebSockets for real-time updates',
      'Created comprehensive role-based access control',
      'Integrated Typesense for fast search capabilities'
    ],
    screenshots: [
      '/images/logistics/Screenshot from 2025-08-13 21-06-56.png',
      '/images/logistics/Screenshot from 2025-08-13 21-07-02.png',
      '/images/logistics/Screenshot from 2025-08-13 21-07-09.png',
      '/images/logistics/Screenshot from 2025-08-13 21-07-38.png',
      '/images/logistics/Screenshot from 2025-08-13 21-07-57.png'
    ],
    github: '#',
    live: '#'
  },
  'e-commerce-multi-merchant-platform': {
    title: 'E-commerce Multi-Merchant Platform',
    role: 'Full Stack Developer',
    duration: '10 months',
    team: '3 developers',
    description: 'Comprehensive e-commerce platform with multi-merchant support, shipping integration, and advanced order management system.',
    longDescription: `Developed a full-featured e-commerce platform that serves multiple merchants with comprehensive product management, order processing, and shipping integration. The system handles the entire e-commerce workflow from product creation to order fulfillment and delivery tracking.

Key features include multi-tenant architecture for multiple merchants, integration with multiple shipping providers (Kargoturk, Hepsijet, Aras), WhatsApp notifications, cash-on-delivery payment processing, and advanced inventory management. The platform is built with Laravel 10 and includes performance optimizations like page caching and database query optimization.`,
    features: [
      'Multi-tenant e-commerce platform for multiple merchants',
      'Product management with variations and pricing',
      'Advanced order processing and tracking system',
      'Integration with multiple shipping providers (Kargoturk, Hepsijet, Aras)',
      'WhatsApp integration for order notifications',
      'Cash-on-delivery (COD) payment processing',
      'Inventory management with stock tracking',
      'Customer management and analytics',
      'Role-based access control and permissions',
      'Two-factor authentication for security',
      'Push notifications and real-time updates',
      'Media library for product images and videos',
      'Page caching for performance optimization',
      'Comprehensive admin dashboard',
      'API endpoints for third-party integrations'
    ],
    tech: ['Laravel 10', 'MySQL', 'Multi-tenant Architecture', 'Shipping APIs', 'WhatsApp Integration', 'Redis', 'Vite'],
    challenges: [
      'Designing scalable multi-tenant architecture',
      'Integrating multiple shipping provider APIs',
      'Implementing real-time order tracking',
      'Managing complex product variations and pricing',
      'Ensuring data security across multiple merchants',
      'Optimizing performance for high-traffic scenarios'
    ],
    solutions: [
      'Implemented database partitioning and indexing strategies',
      'Created unified shipping API abstraction layer',
      'Used WebSockets for real-time order updates',
      'Built flexible product variation system',
      'Applied comprehensive security measures and data isolation',
      'Implemented caching strategies and query optimization'
    ],
    screenshots: [
      '/images/cod/Screenshot from 2025-08-13 20-46-59.png',
      '/images/cod/Screenshot from 2025-08-13 20-47-18.png',
      '/images/cod/Screenshot from 2025-08-13 20-47-44.png',
      '/images/cod/Screenshot from 2025-08-13 20-48-40.png'
    ],
    github: '#',
    live: '#'
  },
  'hospital-management-system': {
    title: 'Hospital Management System',
    role: 'Full Stack Developer',
    duration: '8 months',
    team: '4 developers',
    description: 'Built comprehensive role-based dashboards for hospital directorates with custom reporting, access control, and streamlined operations.',
    longDescription: `Developed a comprehensive hospital management system with role-specific dashboards for various hospital directorates including Director, DAGS, DMS, DNS, DMLS, DHM, and DPRS. The system streamlines hospital operations and provides custom reporting features for each administrative role.

The project required deep understanding of hospital workflows and regulatory requirements while building a secure, scalable system that could handle sensitive patient and administrative data.`,
    features: [
      'Role-based access control and permissions',
      'Separate, tailored dashboards for different roles',
      'Patient management and medical records',
      'Staff scheduling and resource management',
      'Financial management and billing',
      'Custom reporting and analytics',
      'Audit trails and compliance tracking',
      'Integration with medical devices and systems'
    ],
    tech: ['Laravel', 'MySQL', 'Role-based Access', 'Custom Dashboards'],
    challenges: [
      'Designing complex role-based permissions',
      'Ensuring HIPAA compliance and data security',
      'Integrating with existing hospital systems',
      'Handling large volumes of medical data'
    ],
    solutions: [
      'Implemented granular permission system',
      'Used encryption for sensitive data',
      'Created API interfaces for system integration',
      'Optimized database for medical data queries'
    ],
    screenshots: [
      '/images/kshmb/Screenshot from 2025-08-13 20-59-31.png',
      '/images/kshmb/Screenshot from 2025-08-13 20-59-38.png',
      '/images/kshmb/Screenshot from 2025-08-13 21-00-11.png',
      '/images/kshmb/Screenshot from 2025-08-13 21-00-32.png',
      '/images/kshmb/Screenshot from 2025-08-13 21-00-52.png',
      '/images/kshmb/Screenshot from 2025-08-13 21-01-09.png',
      '/images/kshmb/Screenshot from 2025-08-13 21-02-01.png'
    ],
    github: '#',
    live: '#'
  },
  'hotel-booking-platform': {
    title: 'Hotel Booking Platform',
    role: 'PHP Developer',
    duration: '12 months',
    team: '6 developers',
    description: 'Maintained and optimized commercial hotel booking application with improved performance, database optimization, and enhanced API endpoints.',
    longDescription: `Worked on a commercial hotel booking platform that handles thousands of bookings daily. My role involved maintaining and optimizing the existing Laravel application, improving performance, and enhancing API endpoints for better integration with third-party services.

The platform needed to handle high traffic during peak booking seasons while maintaining fast response times and ensuring data consistency.`,
    features: [
      'Hotel search and booking functionality',
      'Real-time availability checking',
      'Payment processing integration',
      'Email notifications and confirmations',
      'Admin dashboard for hotel management',
      'API for third-party integrations',
      'Multi-language support',
      'Mobile-responsive design'
    ],
    tech: ['Laravel', 'MySQL', 'API Development', 'Performance Optimization'],
    challenges: [
      'Optimizing slow database queries',
      'Handling high traffic during peak seasons',
      'Integrating multiple payment gateways',
      'Maintaining legacy code while adding features'
    ],
    solutions: [
      'Refactored and optimized legacy code',
      'Improved database queries and indexing',
      'Enhanced API endpoints for better integration',
      'Implemented caching strategies for better performance'
    ],
    screenshots: [
      '/images/hng/hotelsng_homepage.png',
      '/images/hng/hotelsng_homepage_2.png',
      '/images/hng/hotelsng_booking_page.png',
      '/images/hng/hotelsng_hotel_page.png',
      '/images/hng/hotelsng_listing_page.png'
    ],
    github: '#',
    live: '#'
  }
};

export function generateStaticParams() {
  return Object.keys(projectData).map((slug) => ({
    slug: slug,
  }));
} 