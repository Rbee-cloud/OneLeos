# LeoCytte Pharmaceutical Consulting - Design Guidelines

## Design Approach
**Reference-Based Design**: Inspired by SPINX Digital and Adalvo's modern agency aesthetics, combined with pharmaceutical industry credibility. Bold, dynamic, and globally-focused visual language that conveys confidence and innovation.

## Typography System
**Primary Font**: Exo (Google Fonts) - Modern, geometric sans-serif for headlines and key statements
**Secondary Font**: Montserrat (Google Fonts) - Clean, professional for body text and supporting content

**Hierarchy**:
- Hero Headlines: Exo, 64px (desktop) / 40px (mobile), bold weight
- Section Headers: Exo, 48px (desktop) / 32px (mobile), semi-bold
- Subsection Titles: Montserrat, 24px, semi-bold
- Body Text: Montserrat, 16-18px, regular/medium weight
- Captions/Stats: Montserrat, 14px, medium weight

## Color Palette
**Primary Colors**:
- Bold Blue: #0066CC (primary brand, CTAs, headers)
- Deep Navy: #1a2849 (text, accents)
- Vibrant Orange: #FF6B35 (energy, highlights, hover states)
- Pure White: #FFFFFF (backgrounds, contrast)

**Gradients**:
- Hero Overlay: Linear gradient from rgba(0,102,204,0.9) to rgba(26,40,73,0.7)
- Section Backgrounds: Subtle gradients from white to light blue (#F0F7FF)
- Card Hovers: Orange-to-coral gradient overlays

## Layout System
**Spacing**: Use Tailwind units of 4, 8, 12, 16, 20, 24, 32 for consistent rhythm
**Container**: Max-width 1280px for content sections, full-width for hero and visual sections
**Section Padding**: py-20 to py-32 on desktop, py-12 to py-16 on mobile
**Grid System**: CSS Grid for services (3 columns desktop, 1 mobile), team showcase (4 columns desktop, 2 tablet, 1 mobile)

## Component Library

### Hero Section
- Full-viewport height (100vh) with large background image (pharmaceutical lab/global connectivity)
- Centered content with gradient overlay for text readability
- Bold tagline: "Shaping Pharma Success, Worldwide"
- Animated fade-in for headline and subtext
- Primary CTA button with blurred background overlay, no hover states on button itself
- Subtle scroll indicator animation at bottom

### About Us Section
- Two-column layout: left image (team collaboration/office), right text content
- Fade-in animations on scroll
- Key stats displayed as large numbers with subtle counter animation
- White background with generous spacing

### Services Cards
- Interactive 3-column grid (desktop) with hover lift effect
- Each card: icon at top, service title, description, "Learn More" link
- Background: white cards with subtle shadow, hover elevates with orange accent border
- Icons: Modern line icons representing each service

### Market Focus Section
- Interactive world map or regional cards with hover states
- Five key markets displayed as large, clickable cards with country flags/imagery
- Each card reveals brief facts/stats on hover with smooth transition
- Background: light blue gradient

### Team Showcase
- 4-column grid of team members (placeholder diverse photos from Unsplash)
- Photo avatars in circular frames with subtle border
- Name, title, region of expertise beneath each
- Hover reveals brief bio with fade-in animation
- Staggered fade-in on scroll

### Global Impact Stats
- Full-width section with gradient background
- Animated counter numbers: Countries Served, Projects Delivered, Years Experience, Partners Worldwide
- Large typography (72px numbers) with descriptive labels
- Trigger animation when section enters viewport

### Testimonials Carousel
- Auto-rotating carousel with 3-4 testimonials
- Each testimonial: quote text, client name, company (fictional), country
- Subtle fade transitions between slides
- Navigation dots below, auto-advance every 5 seconds

### Contact Form
- Clean, modern form with floating labels
- Fields: Name, Email, Company, Country dropdown, Message textarea
- Submit button with orange background, white text
- Form validation styling (no backend)
- Placed on white background with subtle shadow container

### Footer
- Three-column layout: Company info, Quick Links, Contact details
- Copyright notice, small company story
- Social media icon placeholders
- Dark navy background with white/light blue text

## Animation Strategy
**On Page Load**:
- Hero content fade-in with slight upward motion (0.8s delay)
- Navigation bar slides down from top

**On Scroll**:
- Section elements fade-in when 20% visible
- Stats counters animate from 0 to target value
- Cards stagger animate (0.1s delay between each)

**Hover Effects**:
- Service cards: lift 8px with shadow increase, orange border appears
- Team photos: slight zoom (scale 1.05), overlay with bio appears
- Buttons: subtle color brightening, no background blur changes
- Market cards: rotate slightly, reveal additional info overlay

**Smooth Scrolling**: Enable for anchor links, 0.8s easing

## Images
**Required Images** (use Unsplash placeholders):

1. **Hero Background**: Pharmaceutical lab with scientists, modern facility, or abstract molecular visualization (1920x1080, overlay with gradient)

2. **About Section**: Collaborative team meeting or international office scene (800x600)

3. **Market Focus**: Country-specific images for India, Colombia, Brazil, Portugal, Mexico - modern cityscapes or pharmaceutical distribution

4. **Team Photos**: 8-12 diverse professional headshots, global representation (400x400, circular crop)

5. **Services Icons**: Use Font Awesome or Heroicons for regulatory, market access, strategy, lifecycle management

6. **Background Textures**: Subtle geometric patterns or abstract pharmaceutical imagery for section variety

## Responsive Behavior
**Breakpoints**:
- Mobile: <768px - Single column, stacked sections, reduced font sizes
- Tablet: 768px-1024px - Two columns where appropriate, medium spacing
- Desktop: >1024px - Full multi-column layouts, maximum spacing

**Mobile Optimizations**:
- Hamburger menu for navigation
- Touch-friendly button sizes (min 48px)
- Simplified animations (reduce motion for performance)
- Stacked cards instead of grids
- Hero height: 70vh on mobile

## Accessibility
- High contrast ratios (WCAG AA minimum)
- Focus states: 2px orange outline on interactive elements
- Alt text for all images
- Semantic HTML5 structure
- Keyboard navigation support
- Skip-to-content link

## Technical Notes
- Single index.html file with embedded CSS and JavaScript
- Vanilla JavaScript for animations (Intersection Observer API)
- CSS Grid and Flexbox for layouts
- Google Fonts loaded via CDN
- Font Awesome icons via CDN
- Optimized for GitHub Pages deployment
- SEO meta tags, Open Graph tags included