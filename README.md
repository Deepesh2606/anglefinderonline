# Online Angle Finder

A professional-grade, free online angle measurement tool that runs entirely in your browser. Measure angles from photos, diagrams, or live camera input with precision up to 0.1°.

![Online Angle Finder](https://anglefinderonline.com/og-image.png)

## Features

### 🔧 Core Tools
- **Image Angle Finder** - Upload any photo and measure angles by dragging interactive handles
- **Webcam Angle Finder** - Use your camera for real-time angle measurement with freeze-frame capability
- **Roof Pitch Calculator** - Convert between roof pitch ratios and degrees
- **Woodworking Angle Finder** - Calculate miter and bevel angles for woodworking projects

### ✨ Key Features
- **100% Client-Side Processing** - All calculations happen in your browser. No data is ever sent to servers.
- **Ad-Free Experience** - Clean workspace without distracting ads or pop-ups
- **High Precision** - Measure angles with accuracy up to 0.1°
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode Support** - Automatic theme detection with manual toggle
- **Free to Use** - No registration or payment required

### 📐 Measurement Capabilities
- Measure angles between two lines
- View complementary and supplementary angles
- Toggle between degrees and radians
- Snap to common angles (5°, 10°, 30°)
- Lock center pivot for stable measurements
- Adjustable line thickness and colors

## Usage

### Measuring from an Image
1. Navigate to the [Image Tool](/tool/image)
2. Upload a photo, diagram, or screenshot
3. Drag the vertex (V) to the angle's corner
4. Position handles A and B along the angle's edges
5. Read the angle value instantly

### Measuring with Webcam
1. Navigate to the [Webcam Tool](/tool/webcam)
2. Allow camera access
3. Point your camera at the angle
4. Click "Freeze Frame" to capture
5. Position the protractor handles and measure

### Roof Pitch Calculation
1. Go to [Roof Pitch Calculator](/roof-pitch-calculator)
2. Enter the rise value or angle
3. View the converted pitch ratio and rafter multiplier
4. Reference the standard pitch chart

## Technology

Built with modern web technologies for optimal performance:

- **[Astro](https://astro.build/)** - Static site generation with partial hydration
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Lucide Icons](https://lucide.dev/)** - Beautiful, consistent icons

## Project Structure

```
anglefinderonline.com/
├── public/                 # Static assets
│   ├── favicon.svg
│   ├── favicon.ico
│   └── logo.svg
├── src/
│   ├── components/         # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── FAQ.astro
│   │   ├── ImageAngleFinder.astro
│   │   └── WebcamAngleFinder.astro
│   ├── layouts/            # Page layouts
│   │   └── Layout.astro
│   ├── pages/              # Application routes
│   │   ├── index.astro
│   │   ├── tool/
│   │   │   ├── image.astro
│   │   │   └── webcam.astro
│   │   ├── roof-pitch-calculator.astro
│   │   ├── woodworking-angle-finder.astro
│   │   ├── pricing.astro
│   │   ├── blog/
│   │   └── ...
│   ├── styles/             # Global styles
│   │   └── global.css
│   └── content/            # Blog content
├── astro.config.mjs
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Commands

| Command           | Description                                    |
| :---------------- | :--------------------------------------------- |
| `npm install`     | Install dependencies                           |
| `npm run dev`     | Start development server at `localhost:4321`   |
| `npm run build`   | Build production site to `./dist/`             |
| `npm run preview` | Preview production build locally               |

## Development

```bash
# Clone the repository
git clone https://github.com/Deepesh2606/anglefinderonline.git

# Navigate to project directory
cd anglefinderonline.com

# Install dependencies
npm install

# Start development server
npm run dev
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Privacy

Your privacy is our priority:
- **No data collection** - We don't collect, store, or transmit any user data
- **No cookies** - No tracking cookies or analytics
- **Local processing** - All calculations happen in your browser
- **No server uploads** - Images and camera feeds never leave your device

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](/LICENSE).

## Links

- [Website](https://anglefinderonline.com)
- [Image Angle Finder](https://anglefinderonline.com/tool/image)
- [Webcam Angle Finder](https://anglefinderonline.com/tool/webcam)
- [Roof Pitch Calculator](https://anglefinderonline.com/roof-pitch-calculator)
- [Woodworking Angle Finder](https://anglefinderonline.com/woodworking-angle-finder)
- [Blog & Guides](https://anglefinderonline.com/blog)