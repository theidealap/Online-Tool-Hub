import { SEO } from '@/components/seo';
import { Hammer, Zap, Shield, Sparkles } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <>
      <SEO 
        title="About ToolBox - Free, Fast Online Utilities" 
        description="Learn why we built ToolBox: a no-nonsense, ad-free collection of essential browser tools that just work."
      />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6">
            <Hammer className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Built for speed. Designed for clarity.</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We were tired of ad-stuffed, cluttered, and slow utility websites. So we built our own.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-card border rounded-2xl p-8 shadow-sm">
            <Zap className="w-8 h-8 text-amber-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
            <p className="text-muted-foreground">Every tool runs completely in your browser. No server calls, no loading spinners, no waiting. Just instant results as you type.</p>
          </div>
          <div className="bg-card border rounded-2xl p-8 shadow-sm">
            <Shield className="w-8 h-8 text-emerald-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Privacy First</h3>
            <p className="text-muted-foreground">Your data never leaves your device. We don't track what you calculate, count, or convert. It's just you and the math.</p>
          </div>
          <div className="bg-card border rounded-2xl p-8 shadow-sm">
            <Sparkles className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Zero Clutter</h3>
            <p className="text-muted-foreground">No popups, no intrusive ads, no confusing interfaces. We focus on clean typography, clear inputs, and precise outputs.</p>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert mx-auto">
          <h2>The Story</h2>
          <p>
            How many times have you needed to quickly check a word count, calculate a percentage difference, or find out exactly how many days are between two dates? 
          </p>
          <p>
            If you're like us, you google it, click the first result, and are immediately bombarded by cookie banners, video ads, and a tool that requires three page loads to give you a simple number.
          </p>
          <p>
            <strong>ToolBox</strong> is our answer to that. We're building a registry of essential tools that you can rely on. It's a progressive web app, meaning it works beautifully on mobile, scales to any screen size, and feels like a native application rather than a webpage from 2005.
          </p>
          
          <h2>What's Next?</h2>
          <p>
            We are constantly expanding our registry of tools. Have an idea for a tool that you use every day? Head over to our contact page and let us know.
          </p>
        </div>
        
        <div className="mt-16 text-center border-t pt-16">
          <h2 className="text-2xl font-bold mb-6">Ready to get things done?</h2>
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
