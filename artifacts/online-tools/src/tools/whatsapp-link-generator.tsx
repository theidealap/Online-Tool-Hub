import { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { MessageCircle, Copy, ExternalLink, ChevronsUpDown, Check, AlertCircle, Store, Headset, Megaphone, Contact } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ToolEmptyState } from '@/components/tool-empty-state';
import { ToolResultBadge } from '@/components/tool-result-badge';
import { useToast } from '@/hooks/use-toast';
import { countries, findCountryByIso2, DEFAULT_COUNTRY_ISO2 } from '@/lib/countries';
import { cn } from '@/lib/utils';

const USE_CASES = [
  { icon: Store, label: 'QR codes for storefronts and packaging' },
  { icon: Headset, label: 'Customer support links on your website' },
  { icon: Megaphone, label: 'Marketing campaigns and social bios' },
  { icon: Contact, label: 'Digital business & personal contact cards' },
];

export default function WhatsAppLinkGenerator() {
  const [iso2, setIso2] = useState(DEFAULT_COUNTRY_ISO2);
  const [countryOpen, setCountryOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();

  const selectedCountry = findCountryByIso2(iso2) ?? countries[0];

  const digits = phone.replace(/\D/g, '').replace(/^0+/, ''); // drop local trunk "0" prefix (e.g. Saudi 05XXXXXXXX -> 5XXXXXXXX)
  const dialDigits = selectedCountry.dialCode.replace(/\D/g, '');
  const fullNumber = digits ? `${dialDigits}${digits}` : '';

  const phoneTooShort = phone.trim().length > 0 && digits.length < 6;

  const link = fullNumber && !phoneTooShort
    ? `https://wa.me/${fullNumber}${message.trim() ? `?text=${encodeURIComponent(message.trim())}` : ''}`
    : '';

  useEffect(() => {
    if (!link || !canvasRef.current) return;
    QRCode.toCanvas(canvasRef.current, link, { width: 180, margin: 1 }).catch(() => {});
  }, [link]);

  const handleCopy = () => {
    if (!link) return;
    navigator.clipboard.writeText(link);
    toast({ title: 'Link copied to clipboard', duration: 2000 });
  };

  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground bg-muted/40 border border-border/60 rounded-lg p-4">
        Turn any phone number into a one-tap WhatsApp chat link — perfect for business contact buttons, customer
        support pages, QR codes on printed materials, or a quick way to share your number on social media without
        exposing it as plain text.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4">
        <div className="space-y-2">
          <Label htmlFor="country-code">Country</Label>
          <Popover open={countryOpen} onOpenChange={setCountryOpen}>
            <PopoverTrigger asChild>
              <Button
                id="country-code"
                variant="outline"
                role="combobox"
                aria-expanded={countryOpen}
                className="h-12 w-full justify-between font-normal"
              >
                <span className="flex items-center gap-2 truncate">
                  <span className="text-lg">{selectedCountry.flag}</span>
                  <span className="truncate">{selectedCountry.name}</span>
                  <span className="text-muted-foreground">{selectedCountry.dialCode}</span>
                </span>
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[320px] p-0">
              <Command>
                <CommandInput placeholder="Search country or code..." />
                <CommandList>
                  <CommandEmpty>No country found.</CommandEmpty>
                  <CommandGroup>
                    {countries.map((c) => (
                      <CommandItem
                        key={c.iso2}
                        value={`${c.name} ${c.dialCode}`}
                        onSelect={() => {
                          setIso2(c.iso2);
                          setCountryOpen(false);
                        }}
                      >
                        <Check className={cn('h-4 w-4', c.iso2 === iso2 ? 'opacity-100' : 'opacity-0')} />
                        <span className="text-lg">{c.flag}</span>
                        <span className="flex-1 truncate">{c.name}</span>
                        <span className="text-muted-foreground text-sm">{c.dialCode}</span>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            inputMode="numeric"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/[^\d\s\-()]/g, ''))}
            placeholder="5X XXX XXXX"
            className="h-12 font-mono"
            aria-invalid={phoneTooShort}
          />
        </div>
      </div>

      {phoneTooShort && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>Enter a complete phone number (at least 6 digits, without the country code).</AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="message">Welcome Message (optional)</Label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Hi! I'd like to know more about..."
          rows={3}
          className="resize-none"
        />
      </div>

      <div className="pt-2">
        {!link ? (
          <ToolEmptyState icon={MessageCircle} message="Enter a phone number to generate a WhatsApp link" className="h-56" />
        ) : (
          <Card className="relative p-6 bg-primary/5 border-primary/20 flex flex-col items-center gap-4">
            <ToolResultBadge />
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <canvas ref={canvasRef} data-testid="canvas-whatsapp-qr" />
            </div>
            <div className="w-full space-y-1">
              <Label className="text-xs text-muted-foreground uppercase tracking-wide">Generated Link</Label>
              <div className="w-full text-center text-sm font-mono text-muted-foreground break-all bg-background border rounded-lg px-3 py-2">
                {link}
              </div>
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              <Button onClick={handleCopy} data-testid="button-copy-link">
                <Copy className="w-4 h-4 mr-2" /> Copy Link
              </Button>
              <Button variant="outline" asChild>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" /> Open in WhatsApp
                </a>
              </Button>
            </div>
          </Card>
        )}
      </div>

      <div className="pt-2 space-y-2">
        <Label className="text-sm text-muted-foreground">Common uses</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {USE_CASES.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 rounded-lg px-3 py-2">
              <Icon className="w-4 h-4 shrink-0" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
