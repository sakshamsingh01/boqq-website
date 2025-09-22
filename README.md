# Company Website

A modern, responsive static website built with Bootstrap 5 and vanilla JavaScript. This website is designed to showcase your company's products, services, and information in a professional and engaging manner.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Bootstrap 5**: Latest version with improved performance and features
- **Contact Forms**: Interactive contact forms with validation
- **Product Showcase**: Dedicated pages for products and services
- **SEO Friendly**: Semantic HTML structure for better search engine optimization
- **Fast Loading**: Optimized for quick loading times
- **Accessibility**: Built with accessibility best practices

## File Structure

```
sis/
├── index.html              # Home page
├── css/
│   └── style.css          # Custom CSS styles
├── js/
│   └── main.js            # Custom JavaScript functionality
├── images/                # Image assets (placeholder folder)
├── pages/
│   ├── about.html         # About us page
│   ├── contact.html       # Contact page
│   ├── products.html      # Products page
│   └── services.html      # Services page
└── README.md              # This file
```

## Quick Start

1. **Open the website**: Simply open `index.html` in your web browser to view the website locally.

2. **Customize content**: Edit the HTML files to add your company's specific information:
   - Replace "Your Company" with your actual company name throughout all files
   - Update contact information (phone, email, address)
   - Add your company's product and service information
   - Replace placeholder content with your actual business details

3. **Add images**: Place your company images in the `images/` folder and update the image sources in the HTML files:
   - `hero-image.jpg` - Main hero section image
   - `about-story.jpg` - About page story image
   - `product-*.jpg` - Product images
   - `service-*.jpg` - Service images
   - `team-member-*.jpg` - Team member photos
   - `client-logo-*.png` - Client logos

## Customization Guide

### Colors and Branding
- Edit `css/style.css` to change the color scheme
- Update the CSS variables at the top of the file for consistent theming
- The primary color is currently set to Bootstrap's blue (`#0d6efd`)

### Content Updates
1. **Company Information**: Update all instances of company name, contact details, and business information
2. **Navigation**: Modify navigation links in all HTML files if you add/remove pages
3. **Footer**: Update footer content across all pages for consistency
4. **Products/Services**: Customize the products and services sections with your actual offerings

### Adding New Pages
1. Create a new HTML file in the `pages/` folder
2. Copy the structure from an existing page
3. Update the navigation links in all files to include the new page
4. Ensure the new page follows the same styling and structure

### Forms
The contact form is currently set up for demonstration purposes. To make it functional:
1. Add a backend service to handle form submissions
2. Update the form action attribute
3. Implement server-side form processing
4. Set up email notifications

## Browser Support

This website supports all modern browsers:
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Dependencies

- **Bootstrap 5.3.2**: CSS framework (loaded from CDN)
- **Bootstrap Icons**: Icon font (loaded from CDN)
- **Custom CSS**: Additional styling in `css/style.css`
- **Custom JavaScript**: Interactive functionality in `js/main.js`

## Performance Optimization

The website is optimized for performance:
- External dependencies loaded from CDN
- Optimized images (you should compress your images before adding them)
- Minimal custom CSS and JavaScript
- Semantic HTML for better loading and SEO

## Mobile Responsiveness

The website is fully responsive and includes:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized layouts for different screen sizes
- Fast loading on mobile devices

## SEO Features

- Semantic HTML structure
- Meta tags for better search engine indexing
- Descriptive alt text for images (update with your content)
- Clean URL structure
- Fast loading times

## Next Steps

1. **Add Your Content**: Replace all placeholder content with your actual company information
2. **Add Images**: Upload and optimize your company images
3. **Test**: Test the website on different devices and browsers
4. **Deploy**: Upload to your web hosting service
5. **Set up Analytics**: Add Google Analytics or similar tracking
6. **Set up Forms**: Connect contact forms to your backend service

## Support

For any questions or modifications needed, you can:
- Edit the HTML, CSS, and JavaScript files directly
- Refer to Bootstrap 5 documentation for additional components
- Use browser developer tools for testing and debugging

## License

This template is provided as-is for your company's use. You can modify and customize it as needed for your business requirements.

---

**Ready to customize?** Start by replacing "Your Company" with your actual company name throughout all files and adding your business-specific content and images.