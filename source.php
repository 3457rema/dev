<?php
// Download source code functionality
header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename="teresia-portfolio-vanilla.zip"');
header('Cache-Control: must-revalidate');
header('Pragma: public');

// Create a temporary zip file
$zip = new ZipArchive();
$zipFilename = tempnam(sys_get_temp_dir(), 'portfolio') . '.zip';

if ($zip->open($zipFilename, ZipArchive::CREATE) !== TRUE) {
    die('Cannot create zip file');
}

// Files to include in the zip
$files = [
    'index.html' => 'index.html',
    'styles.css' => 'styles.css',
    'script.js' => 'script.js',
    'contact-handler.php' => 'contact-handler.php'
];

// Add files to zip
foreach ($files as $file => $zipPath) {
    if (file_exists($file)) {
        $zip->addFile($file, $zipPath);
    }
}

// Create README file
$readme = "# Teresia Mamrema Mbiu - Portfolio Website

## Professional UI/UX Designer & Web Developer Portfolio

This is a complete vanilla HTML, CSS, JavaScript, and PHP portfolio website for Teresia Mamrema Mbiu.

### Features
- Responsive design that works on all devices
- Smooth scrolling navigation
- Contact form with PHP backend
- Professional project showcase
- Skills and experience sections
- Client testimonials
- Social media integration

### Files Included
- `index.html` - Main HTML structure
- `styles.css` - Complete CSS styling with responsive design
- `script.js` - JavaScript functionality and animations
- `contact-handler.php` - PHP contact form handler
- `README.md` - This documentation file

### Setup Instructions

1. **Local Development:**
   - Extract all files to your web server directory
   - Make sure PHP is enabled on your server
   - Open index.html in your browser

2. **Web Hosting:**
   - Upload all files to your web hosting provider
   - Ensure PHP is supported (most hosting providers support PHP)
   - Update email address in contact-handler.php if needed
   - Set proper file permissions (755 for directories, 644 for files)

3. **GitHub Pages (Static hosting):**
   - Upload HTML, CSS, and JS files only
   - Contact form will need alternative solution (Formspree, Netlify Forms, etc.)

### Customization

**Contact Information:**
- Update email addresses in index.html and contact-handler.php
- Update phone number in index.html
- Update social media links throughout the site

**Content:**
- Modify projects, skills, and testimonials in script.js
- Update personal information and descriptions in index.html
- Replace placeholder images with your own

**Styling:**
- Customize colors by modifying CSS variables in styles.css
- Adjust fonts, spacing, and layout as needed

### Contact Form
The contact form uses PHP to send emails. Make sure to:
1. Update the recipient email in contact-handler.php
2. Configure your server's mail settings
3. Test the form functionality after deployment

### Browser Support
- Chrome (latest)
- Firefox (latest) 
- Safari (latest)
- Edge (latest)
- Mobile browsers

### Performance
- Optimized images from Unsplash
- Minimal external dependencies
- Clean, efficient code
- Fast loading times

For questions or support, contact: mamrembiu@gmail.com

---
© 2024 Teresia Mamrema Mbiu. All rights reserved.
";

$zip->addFromString('README.md', $readme);

// Close zip file
$zip->close();

// Output the file
header('Content-Length: ' . filesize($zipFilename));
readfile($zipFilename);

// Clean up
unlink($zipFilename);
?>