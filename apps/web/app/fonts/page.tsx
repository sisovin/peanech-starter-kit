import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"

export default function FontShowcase() {
    const sampleText = "The quick brown fox jumps over the lazy dog"
    const numbersText = "1234567890 !@#$%^&*()"

    const fontCategories = [
        {
            title: "Sans Serif Fonts",
            fonts: [
                { name: "Inter (Primary)", class: "font-sans-primary", description: "Clean, modern, highly readable" },
                { name: "DM Sans (Modern)", class: "font-sans-modern", description: "Geometric, contemporary feel" },
                { name: "Lexend (Readable)", class: "font-sans-readable", description: "Optimized for reading proficiency" },
            ]
        },
        {
            title: "Display Fonts",
            fonts: [
                { name: "Clash Display (Modern)", class: "font-display", description: "Bold, distinctive headlines" },
                { name: "Playfair Display (Fancy)", class: "font-display-fancy", description: "Elegant, sophisticated serif" },
            ]
        },
        {
            title: "Serif Fonts",
            fonts: [
                { name: "Source Serif Pro", class: "font-serif", description: "Professional, readable serif" },
                { name: "Crimson Text (Elegant)", class: "font-serif-elegant", description: "Classic, editorial style" },
            ]
        },
        {
            title: "Monospace Fonts",
            fonts: [
                { name: "JetBrains Mono", class: "font-mono", description: "Perfect for code, ligatures" },
                { name: "Fira Code (Alt)", class: "font-mono-alt", description: "Programming ligatures" },
            ]
        }
    ]

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Header */}
            <header className="border-b border-border bg-card sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-primary font-display">Font Showcase</h1>
                        <p className="text-sm text-muted-foreground font-sans-readable">
                            Beautiful local fonts for your project
                        </p>
                    </div>
                    <ThemeToggle />
                </div>
            </header>

            <main className="container mx-auto px-4 py-8 space-y-12">
                {/* Hero Section */}
                <section className="text-center space-y-6 py-12">
                    <h1 className="text-headline font-display-fancy font-bold text-primary">
                        Typography Showcase
                    </h1>
                    <p className="text-display font-sans-readable text-muted-foreground max-w-2xl mx-auto">
                        Explore our collection of carefully selected fonts, optimized for web performance and accessibility.
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <Badge variant="secondary" className="font-mono text-xs">Self-Hosted</Badge>
                        <Badge variant="secondary" className="font-mono text-xs">No External Dependencies</Badge>
                        <Badge variant="secondary" className="font-mono text-xs">Performance Optimized</Badge>
                    </div>
                </section>

                {/* Font Categories */}
                {fontCategories.map((category, categoryIndex) => (
                    <section key={categoryIndex} className="space-y-6">
                        <div className="text-center">
                            <h2 className="text-title font-display font-semibold text-foreground mb-2">
                                {category.title}
                            </h2>
                            <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
                            {category.fonts.map((font, fontIndex) => (
                                <Card key={fontIndex} className="overflow-hidden">
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <CardTitle className={`${font.class} text-lg`}>
                                                {font.name}
                                            </CardTitle>
                                            <Badge variant="outline" className="font-mono text-xs">
                                                {font.class}
                                            </Badge>
                                        </div>
                                        <CardDescription className="font-sans-readable">
                                            {font.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {/* Sample Text */}
                                        <div className="space-y-2">
                                            <p className={`${font.class} text-xs text-muted-foreground uppercase tracking-wide`}>
                                                Sample Text
                                            </p>
                                            <p className={`${font.class} text-lg leading-relaxed`}>
                                                {sampleText}
                                            </p>
                                        </div>

                                        {/* Numbers & Symbols */}
                                        <div className="space-y-2">
                                            <p className={`${font.class} text-xs text-muted-foreground uppercase tracking-wide`}>
                                                Numbers & Symbols
                                            </p>
                                            <p className={`${font.class} text-base font-mono-alt`}>
                                                {numbersText}
                                            </p>
                                        </div>

                                        {/* Weight Variations */}
                                        <div className="space-y-2">
                                            <p className={`${font.class} text-xs text-muted-foreground uppercase tracking-wide`}>
                                                Weight Variations
                                            </p>
                                            <div className="space-y-1">
                                                <p className={`${font.class} font-light text-sm`}>Light (300)</p>
                                                <p className={`${font.class} font-normal text-sm`}>Regular (400)</p>
                                                <p className={`${font.class} font-medium text-sm`}>Medium (500)</p>
                                                <p className={`${font.class} font-semibold text-sm`}>Semibold (600)</p>
                                                <p className={`${font.class} font-bold text-sm`}>Bold (700)</p>
                                            </div>
                                        </div>

                                        {/* Size Demo */}
                                        <div className="space-y-2">
                                            <p className={`${font.class} text-xs text-muted-foreground uppercase tracking-wide`}>
                                                Size Demonstration
                                            </p>
                                            <div className="space-y-1">
                                                <p className={`${font.class} text-xs`}>Extra Small (12px)</p>
                                                <p className={`${font.class} text-sm`}>Small (14px)</p>
                                                <p className={`${font.class} text-base`}>Base (16px)</p>
                                                <p className={`${font.class} text-lg`}>Large (18px)</p>
                                                <p className={`${font.class} text-xl`}>Extra Large (20px)</p>
                                                <p className={`${font.class} text-2xl`}>2X Large (24px)</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>
                ))}

                {/* Usage Examples */}
                <section className="space-y-6">
                    <div className="text-center">
                        <h2 className="text-title font-display font-semibold text-foreground mb-2">
                            Typography in Action
                        </h2>
                        <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-2">
                        {/* Article Example */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-display text-xl">Article Layout</CardTitle>
                                <CardDescription>How fonts work together in content</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <h1 className="text-2xl font-display-fancy font-bold">
                                    The Future of Web Typography
                                </h1>
                                <p className="text-sm text-muted-foreground font-sans-readable">
                                    Published on January 15, 2024 • 5 min read
                                </p>
                                <p className="font-serif-elegant text-base leading-relaxed">
                                    Typography is the art and technique of arranging type to make written language
                                    legible, readable, and appealing when displayed. The arrangement of type involves
                                    selecting typefaces, point sizes, line lengths, line-spacing, and letter-spacing.
                                </p>
                                <blockquote className="border-l-4 border-primary/20 pl-4 font-serif-elegant italic">
                                    "Typography is the craft of endowing human language with a durable visual form."
                                </blockquote>
                                <p className="font-sans-primary text-sm text-muted-foreground">
                                    Continue reading to discover more about modern typography trends...
                                </p>
                            </CardContent>
                        </Card>

                        {/* UI Example */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-display text-xl">Interface Elements</CardTitle>
                                <CardDescription>Fonts in UI components</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-3">
                                    <Button className="font-sans-modern font-medium">
                                        Primary Action
                                    </Button>
                                    <Button variant="outline" className="font-sans-readable">
                                        Secondary Action
                                    </Button>
                                    <Button variant="ghost" className="font-mono text-xs">
                                        {"console.log('Hello World')"}
                                    </Button>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="font-display font-semibold">Navigation Menu</h3>
                                    <nav className="flex gap-4 text-sm">
                                        <a href="#" className="font-sans-modern hover:text-primary">Home</a>
                                        <a href="#" className="font-sans-modern hover:text-primary">About</a>
                                        <a href="#" className="font-sans-modern hover:text-primary">Contact</a>
                                    </nav>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="font-display font-semibold">Data Display</h3>
                                    <div className="font-mono text-sm bg-muted p-3 rounded">
                                        <div>Status: <span className="text-green-500">Active</span></div>
                                        <div>Users: <span className="font-bold">1,234</span></div>
                                        <div>Last Update: <span>2024-01-15 14:30:00</span></div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Installation Guide */}
                <Card className="bg-muted/50">
                    <CardHeader>
                        <CardTitle className="font-display">✨ Font Installation Complete!</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-semibold mb-2 font-sans-modern">Available Fonts:</h4>
                                <ul className="space-y-1 font-mono text-xs">
                                    <li>• Inter (Primary Sans)</li>
                                    <li>• DM Sans (Modern Sans)</li>
                                    <li>• Lexend (Readable Sans)</li>
                                    <li>• Playfair Display (Fancy)</li>
                                    <li>• Source Serif Pro</li>
                                    <li>• Crimson Text (Elegant)</li>
                                    <li>• JetBrains Mono</li>
                                    <li>• Fira Code</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2 font-sans-modern">Tailwind Classes:</h4>
                                <ul className="space-y-1 font-mono text-xs">
                                    <li>• <code>font-sans-primary</code></li>
                                    <li>• <code>font-sans-modern</code></li>
                                    <li>• <code>font-sans-readable</code></li>
                                    <li>• <code>font-display</code></li>
                                    <li>• <code>font-display-fancy</code></li>
                                    <li>• <code>font-serif</code></li>
                                    <li>• <code>font-serif-elegant</code></li>
                                    <li>• <code>font-mono</code></li>
                                </ul>
                            </div>
                        </div>
                        <p className="font-sans-readable text-muted-foreground">
                            All fonts are self-hosted for better performance and privacy. No external requests to Google Fonts or other CDNs.
                        </p>
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}
