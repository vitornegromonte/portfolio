
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", data);
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white min-h-screen">
      <main className="p-8">
        <div className="pb-14">
          <span className="text-sm uppercase tracking-wider text-accent mb-2 inline-block">Get In Touch</span>
          <h1 className="text-gray-900 font-display text-3xl md:text-4xl mb-4">Contact Me</h1>
          <p className="text-gray-600 max-w-2xl">
            Feel free to reach out for collaborations, research opportunities, or just to say hello!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-display mb-4">Send a Message</h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="What's this about?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message..." 
                          className="min-h-[150px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h2 className="text-xl font-display mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium uppercase text-accent mb-2">Email</h3>
                <p className="text-gray-600">contato.vnco@gmail.com</p>
              </div>
              
              
              <div>
                <h3 className="text-sm font-medium uppercase text-accent mb-2">Social Media</h3>
                <div className="flex space-x-4 mt-2">
                  <ul>  
                    <li> <a href="https://instagram.com/vitor.ncabral" className="text-gray-600 hover:text-accent transition-colors"> Instagram </a> </li>
                    <li> <a href="https://linkedin.com/in/vitornegromonte" className="text-gray-600 hover:text-accent transition-colors">LinkedIn </a> </li>
                    <li> <a href="https://github.com/vitornegromonte" className="text-gray-600 hover:text-accent transition-colors">GitHub </a> </li>
                    <li> <a href="https://medium.com/@vitornegromonte" className="text-gray-600 hover:text-accent transition-colors">Medium</a> </li>
                  </ul>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
