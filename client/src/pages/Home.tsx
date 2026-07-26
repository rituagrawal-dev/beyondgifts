import { Button } from "@/components/ui/button";
import { Heart, Truck, Gift, Award } from "lucide-react";
import { useState } from "react";

/**
 * Beyond Gifts by Ritu Agrawal - Premium Landing Page
 * Design Philosophy: Elegant Traditionalism with Modern Minimalism
 * - Reverence for Craft: Generous whitespace and careful typography
 * - Warmth Through Restraint: Limited, intentional color palette
 * - Narrative-Driven: Each section tells a story
 * - Accessibility Through Elegance: Intuitive navigation and frictionless UX
 */

export default function Home() {
  const [whatsappHovered, setWhatsappHovered] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold text-lg">B</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary">Beyond Gifts</h1>
              <p className="text-xs text-muted-foreground">by Ritu Agrawal</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8">
            <a href="#home" className="text-sm font-medium hover:text-accent transition">
              Home
            </a>
            <a href="#shop" className="text-sm font-medium hover:text-accent transition">
              Shop
            </a>
            <a href="#corporate" className="text-sm font-medium hover:text-accent transition">
              Corporate
            </a>
            <a href="#about" className="text-sm font-medium hover:text-accent transition">
              About
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition">
              Contact
            </a>
          </nav>

          <a
            href="https://wa.me/919987092449"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
          >
            <span className="text-sm font-medium">WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30"
      >
        <div className="container mx-auto px-4 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-accent font-semibold text-sm tracking-widest uppercase">
                Premium Gifting & Décor
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                Every celebration begins with a thoughtful idea.
              </h1>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
              Premium keepsakes, handcrafted décor, and curated hampers for life's most cherished moments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/919987092449?text=Hi%20Beyond%20Gifts!%20I%27m%20interested%20in%20exploring%20your%20collection%20for%20a%20special%20occasion.%20Can%20you%20help%20me%20find%20the%20perfect%20gift%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full"
                >
                  Shop the Collection
                </Button>
              </a>
              <a
                href="https://wa.me/919987092449?text=Hi%20Beyond%20Gifts!%20I%27m%20interested%20in%20bulk%20gifting%20for%20my%20company.%20Can%20we%20discuss%20customized%20options%20and%20pricing%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5 w-full"
                >
                  Explore Corporate Gifting
                </Button>
              </a>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <img
              src="/manus-storage/hero_german_silver_c1a89540.png"
              alt="German Silver Décor Collection"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>

        {/* Value Proposition Bar */}
        <div className="border-t border-border">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex gap-4">
                <Heart className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Handcrafted with Love</h3>
                  <p className="text-sm text-muted-foreground">Every piece tells a story of tradition.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Award className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Premium Quality</h3>
                  <p className="text-sm text-muted-foreground">Only the finest materials.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Gift className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Thoughtful Packaging</h3>
                  <p className="text-sm text-muted-foreground">First impression matters.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Truck className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Pan-India Delivery</h3>
                  <p className="text-sm text-muted-foreground">Elegance to your doorstep.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section id="shop" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Curated Collections for Every Occasion
            </h2>
            <p className="text-lg text-foreground/70">
              From intimate family moments to grand celebrations, discover the perfect gift.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* For the Home */}
            <div className="group cursor-pointer">
              <div className="relative h-64 md:h-72 overflow-hidden rounded-xl mb-6">
                <img
                  src="/manus-storage/home_decor_collection_1bab28c3.png"
                  alt="Home Décor Collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">For the Home</h3>
              <p className="text-foreground/70 mb-4">
                Elevate your living spaces with our curated collection of antique urlis, designer planters, and
                statement table décor.
              </p>
              <a
                href="https://wa.me/919987092449?text=Hi%20Beyond%20Gifts!%20I%27m%20interested%20in%20your%20home%20d%C3%A9cor%20collection.%20Can%20you%20tell%20me%20more%20about%20your%20products%20and%20pricing%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" className="text-accent hover:text-primary p-0">
                  Shop Now →
                </Button>
              </a>
            </div>

            {/* Festive & Pooja */}
            <div className="group cursor-pointer">
              <div className="relative h-64 md:h-72 overflow-hidden rounded-xl mb-6">
                <div className="w-full h-full bg-gradient-to-br from-primary/5 to-accent/10 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-4xl mb-2">🪔</p>
                    <p className="text-sm text-muted-foreground">Festive & Pooja Décor</p>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Festive & Pooja</h3>
              <p className="text-foreground/70 mb-4">
                Traditional elegance for your spiritual corners. Explore handcrafted torans, elephant diyas, and
                aarthi sets.
              </p>
              <a
                href="https://wa.me/919987092449?text=Hi%20Beyond%20Gifts!%20I%27m%20interested%20in%20your%20festive%20and%20pooja%20d%C3%A9cor%20collection.%20Can%20you%20share%20details%20about%20your%20handcrafted%20torans%20and%20diyas%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" className="text-accent hover:text-primary p-0">
                  Explore →
                </Button>
              </a>
            </div>

            {/* Wedding & Events */}
            <div className="group cursor-pointer">
              <div className="relative h-64 md:h-72 overflow-hidden rounded-xl mb-6">
                <div className="w-full h-full bg-gradient-to-br from-accent/10 to-primary/5 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-4xl mb-2">💝</p>
                    <p className="text-sm text-muted-foreground">Wedding & Events</p>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Wedding & Events</h3>
              <p className="text-foreground/70 mb-4">
                Make your special day unforgettable with return favors that guests will cherish forever. Shagun
                bhi, yaad bhi.
              </p>
              <a
                href="https://wa.me/919987092449?text=Hi%20Beyond%20Gifts!%20I%27m%20looking%20for%20wedding%20return%20favors%20and%20event%20gifts.%20Can%20you%20help%20me%20find%20something%20special%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" className="text-accent hover:text-primary p-0">
                  Discover →
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Gifting Section */}
      <section id="corporate" className="py-20 md:py-32 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-96 md:h-full min-h-96 order-2 md:order-1">
              <img
                src="/manus-storage/corporate_gifting_hero_3790416d.png"
                alt="Corporate Gifting Hamper"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>

            {/* Copy */}
            <div className="space-y-6 order-1 md:order-2">
              <div className="space-y-2">
                <p className="text-accent font-semibold text-sm tracking-widest uppercase">
                  B2B Solutions
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                  Excellence in Corporate Gifting
                </h2>
              </div>

              <p className="text-lg text-foreground/80 leading-relaxed">
                Thoughtful gifts that build relationships and leave a lasting impression. From employee appreciation
                to client milestones, we curate premium hampers that reflect your brand's excellence.
              </p>

              <div className="space-y-3 pt-4">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </div>
                  <p className="text-foreground/80">End-to-end solutions from curation to delivery</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </div>
                  <p className="text-foreground/80">Customization options for your brand identity</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </div>
                  <p className="text-foreground/80">Bulk ordering with competitive pricing</p>
                </div>
              </div>

              <a
                href="https://wa.me/919987092449?text=Hi%20Beyond%20Gifts!%20I%27m%20interested%20in%20corporate%20gifting%20for%20my%20organization.%20We%20have%20approximately%20%5BNUMBER%5D%20employees%2Fclients%20and%20a%20budget%20of%20%5BBUDGET%5D%20per%20unit.%20Can%20we%20discuss%20customized%20hamper%20options%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold mt-6"
                >
                  Request a Bulk Quote
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">The Heart Behind the Gift</h2>

            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                At <span className="font-semibold text-primary">Beyond Gifts</span>, we believe that a gift is more
                than just an object—it's a bridge between hearts, a token of appreciation, and a lasting memory.
              </p>

              <p>
                Founded by <span className="font-semibold text-primary">Ritu Agrawal</span>, our brand was born out of
                a passion for finding beauty in tradition and sharing it with the world.
              </p>

              <p>
                Our journey began with a simple idea: to create keepsakes that people would cherish long after the
                occasion is over. Whether it's the intricate <em>nakkashi</em> work on a German silver dry fruit box
                or the vibrant colors of a handcrafted toran, every product in our collection is selected for its
                quality, elegance, and soul.
              </p>

              <p>
                Based in Mumbai, we take pride in supporting traditional craftsmanship while catering to the modern
                aesthetic. From intimate family functions to grand corporate celebrations, Beyond Gifts is dedicated
                to making every moment special, one thoughtful gift at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-2xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Let's Create Something Beautiful Together
            </h2>
            <p className="text-lg text-foreground/70">
              Reach out to discuss your gifting needs, bulk orders, or any questions.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="https://wa.me/919987092449"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-semibold text-lg"
              onMouseEnter={() => setWhatsappHovered(true)}
              onMouseLeave={() => setWhatsappHovered(false)}
            >
              <span>💬</span>
              WhatsApp: +91 9987092449
            </a>

            <div className="space-y-2 text-foreground/70">
              <p className="text-sm">
                <span className="font-semibold">Email:</span> info@beyondgifts.in
              </p>
              <p className="text-sm">
                <span className="font-semibold">Location:</span> Mumbai, India
              </p>
              <p className="text-sm">
                <span className="font-semibold">Follow us:</span>{" "}
                <a
                  href="https://www.instagram.com/beyondgiftsbyrituagrawal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-primary transition"
                >
                  @beyondgiftsbyrituagrawal
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center space-y-4">
          <p className="font-semibold text-lg">© 2026 Beyond Gifts by Ritu Agrawal</p>
          <p className="text-primary-foreground/80">Designed for celebrations, crafted for memories.</p>
          <p className="text-sm text-primary-foreground/60">All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
