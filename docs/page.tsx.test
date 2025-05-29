import { ThemeToggle } from "../components/theme-toggle"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { Alert, AlertDescription, AlertTitle } from "@workspace/ui/components/alert"
import { Progress } from "@workspace/ui/components/progress"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-primary">OKLCH Color System Test</h1>
            <p className="text-sm text-muted-foreground">Testing Tailwind CSS with OKLCH colors</p>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Color Showcase */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Color Palette Test</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Primary Colors */}
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Primary Colors</CardTitle>
                <CardDescription>Main brand colors using OKLCH</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-primary rounded"></div>
                  <span className="text-sm">Primary</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-primary-foreground border rounded"></div>
                  <span className="text-sm">Primary Foreground</span>
                </div>
              </CardContent>
            </Card>

            {/* Secondary Colors */}
            <Card>
              <CardHeader>
                <CardTitle className="text-secondary-foreground">Secondary Colors</CardTitle>
                <CardDescription>Secondary palette variations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-secondary rounded"></div>
                  <span className="text-sm">Secondary</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-accent rounded"></div>
                  <span className="text-sm">Accent</span>
                </div>
              </CardContent>
            </Card>

            {/* Muted Colors */}
            <Card>
              <CardHeader>
                <CardTitle className="text-muted-foreground">Muted Colors</CardTitle>
                <CardDescription>Subtle tones and backgrounds</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-muted rounded"></div>
                  <span className="text-sm">Muted</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-card border rounded"></div>
                  <span className="text-sm">Card</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Component Test */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Component Showcase</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
                <CardDescription>Testing different button styles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
                <div className="flex gap-2">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Form Elements</CardTitle>
                <CardDescription>Input fields and labels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="test-input">Test Input</Label>
                  <Input id="test-input" placeholder="Type something..." />
                </div>
                <div className="space-y-2">
                  <Label>Progress Indicator</Label>
                  <Progress value={75} className="w-full" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Status Messages */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Status & Alerts</h2>
          <div className="space-y-4">
            <Alert>
              <AlertTitle>OKLCH Colors Active!</AlertTitle>
              <AlertDescription>
                Your color system is working perfectly. Notice how colors adapt between light and dark modes.
              </AlertDescription>
            </Alert>

            <div className="flex gap-2 flex-wrap">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </div>
        </section>

        {/* Chart Colors Preview */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Chart Color Palette</h2>
          <Card>
            <CardHeader>
              <CardTitle>Data Visualization Colors</CardTitle>
              <CardDescription>OKLCH-based chart colors for better data visualization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-5 gap-4">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="text-center space-y-2">
                    <div
                      className={`w-full h-12 rounded bg-chart-${num}`}
                    ></div>
                    <span className="text-xs text-muted-foreground">Chart {num}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Instructions */}
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="text-green-600 dark:text-green-400">✅ Test Instructions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>🌞 <strong>Light Mode Test:</strong> Click the theme toggle to switch to light mode and observe the colors.</p>
            <p>🌙 <strong>Dark Mode Test:</strong> Switch to dark mode and see how all colors adapt using OKLCH values.</p>
            <p>🎨 <strong>Color Consistency:</strong> Notice how the OKLCH color space provides better perceptual uniformity.</p>
            <p>🔧 <strong>System Integration:</strong> All shadcn/ui components use the OKLCH color variables seamlessly.</p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
