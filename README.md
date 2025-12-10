# AI/ML Engineer Portfolio

A modern, responsive portfolio website showcasing AI/ML projects with an elegant design and smooth animations.

## 🌟 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Hero Section**: Background image with parallax effects and animated name display
- **Circular Project Carousel**: Horizontal scrolling with pagination dots and infinite loop
- **Project Modals**: Detailed project descriptions with technology tags
- **Smooth Animations**: Parallax scrolling and hover effects throughout
- **Professional Styling**: Purple and grey color scheme with gradients
- **Social Integration**: Direct links to GitHub, LinkedIn, and email

## 🎨 Design

- **Color Palette**: Purple (#4D2C59), Grey (#9CA3AF), and light accents
- **Typography**: Inter font family for clean, modern text
- **Interactive Elements**: Smooth hover effects and transitions
- **Navigation**: Fixed top navigation with smooth scrolling to sections

## 📁 Project Structure

```
website/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and responsive design
├── script.js           # JavaScript functionality
├── image4.jpg          # Hero background image
├── README.md           # This file
└── .gitignore          # Git ignore file
```

## 🚀 Getting Started

### Option 1: Simple File Opening
1. Clone this repository
2. Open `index.html` in your web browser

### Option 2: Local Server (Recommended)
```bash
# Navigate to project directory
cd website

# Start Python HTTP server
python3 -m http.server 8000

# Open browser to http://localhost:8000
```

### Option 3: Live Server (VS Code)
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## ✨ Customization

### Update Personal Information
- Edit your name in `index.html` (line ~28)
- Update social media links to your profiles
- Replace `dummy@dummymail.com` with your email

### Add Your Projects
Edit the `projects` array in `script.js` to include your own projects:

```javascript
const projects = [
    {
        id: 1,
        title: "Your Project Title",
        shortDescription: "Brief description for the tile",
        fullDescription: "Detailed description for the modal...",
        tags: ["Python", "TensorFlow", "etc"],
        links: [
            { text: "View Project", url: "your-project-url" },
            { text: "GitHub", url: "your-github-url", secondary: true }
        ]
    }
    // Add more projects...
];
```

### Replace Background Image
- Replace `image4.jpg` with your preferred background image
- Update the reference in `styles.css` if you change the filename

## 🌐 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Social media icons
- **Google Fonts**: Inter typography

## 🔧 Features in Detail

### Hero Section
- Background image with overlay
- Animated name box with transparent text effect
- Smooth parallax scrolling
- Scroll indicator with animation

### Projects Section
- Horizontal scrolling carousel
- Shows 3 projects at once on desktop
- Infinite circular scrolling
- Pagination dots for navigation
- Hover effects with gradients

### About Section
- Personal information and bio
- Social media icons (Email, GitHub, LinkedIn)
- Responsive text layout

## 📱 Responsive Design

- **Desktop**: Full-featured layout with all animations
- **Tablet**: Adapted spacing and navigation
- **Mobile**: Stacked layout with touch-friendly navigation

## 🎯 Performance

- Optimized animations with CSS transforms
- Efficient JavaScript with throttled scroll handlers
- Minimal external dependencies
- Fast loading with compressed assets

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, pull requests are welcome!

## License

This project is open source and available under the [MIT License](LICENSE).