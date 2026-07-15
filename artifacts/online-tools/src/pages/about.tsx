import { SEO } from '@/components/seo';
import { Hammer, Zap, Shield } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <>
      <SEO
        title="About ToolBox - Free, Fast Online Utilities"
        description="ToolBox is a collection of free, browser-based tools for everyday calculations and tasks."
      />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6">
            <Hammer className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">About ToolBox</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A collection of free online tools for the small calculations and tasks you run into every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-card border rounded-2xl p-8 shadow-sm">
            <Zap className="w-8 h-8 text-amber-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Runs in Your Browser</h3>
            <p className="text-muted-foreground">Every tool works client-side, so results appear instantly as you type — no page reloads or waiting.</p>
          </div>
          <div className="bg-card border rounded-2xl p-8 shadow-sm">
            <Shield className="w-8 h-8 text-emerald-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Nothing You Enter Is Stored</h3>
            <p className="text-muted-foreground">Whatever you type into a tool stays on your device. We don't collect or store it.</p>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert mx-auto">
          <h2>What ToolBox Is</h2>
          <p>
            ToolBox is a small set of free calculators and utilities — things like checking an age, a percentage, or a word count — built to be quick and easy to use, without ads or unnecessary steps in the way.
          </p>
          <p>
            We're adding more tools over time, based on what people find useful.
          </p>

          <h2>Suggest a Tool</h2>
          <p>
            If there's a tool you'd find useful that we don't have yet, let us know on our{' '}
            <Link href="/contact" className="text-primary hover:underline">contact page</Link>.
          </p>
        </div>

        <div className="mt-16 text-center border-t pt-16">
          <h2 className="text-2xl font-bold mb-6">Browse the tools</h2>
          <Link href="/">
            <Button size="lg" className="rounded-full px-8">
              Explore All Tools
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
