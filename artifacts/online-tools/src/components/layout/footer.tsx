import { Link } from 'wouter';
import { Hammer } from 'lucide-react';

const popularTools = [
  { slug: 'age-calculator',        name: 'Age Calculator' },
  { slug: 'bmi-calculator',        name: 'BMI Calculator' },
  { slug: 'percentage-calculator', name: 'Percentage Calculator' },
  { slug: 'gpa-calculator',        name: 'GPA Calculator' },
  { slug: 'qr-code-generator',     name: 'QR Code Generator' },
];

export function Footer() {
  return (
    <footer className="border-t bg-card mt-auto">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-primary/10 text-primary p-1.5 rounded-md">
                <Hammer className="h-5 w-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                ToolBox
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              A fast, no-nonsense hub of free browser-based utilities for everyday calculations and text tasks.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">All Tools</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Popular Tools</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {popularTools.map(tool => (
                <li key={tool.slug}>
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} ToolBox. All rights reserved.</p>
          <p>Built for speed and reliability.</p>
        </div>
      </div>
    </footer>
  );
}
