
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, User, MessageSquare } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface LeadCaptureFormProps {
  title?: string;
  subtitle?: string;
  context?: string;
  className?: string;
  onSuccess?: () => void;
}

const LeadCaptureForm = ({ 
  title = "Get In Touch", 
  subtitle = "Let us help you find your dream property",
  context = "general",
  className = "",
  onSuccess
}: LeadCaptureFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Lead captured:', { ...formData, context, timestamp: new Date().toISOString() });
      
      toast({
        title: "Thank you for your interest!",
        description: "Our team will contact you within 24 hours.",
      });

      setFormData({ name: '', phone: '', email: '', message: '' });
      
      // Call onSuccess callback if provided
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className={`border-0 shadow-xl ${className}`}>
      <CardHeader className="text-center">
        <CardTitle className="font-playfair text-2xl md:text-3xl font-bold text-navy-900">
          {title}
        </CardTitle>
        <p className="text-charcoal-600">{subtitle}</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+91 98765 43210"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Message (Optional)
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your requirements..."
              rows={4}
            />
          </div>

          <Button 
            type="submit" 
            className="premium-button w-full text-lg py-6"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit Inquiry"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LeadCaptureForm;
