import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useContactForm } from '@/hooks/useContactForm';
const ContactForm = () => {
  const {
    form,
    onSubmit,
    isSubmitting
  } = useContactForm();
  return <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-[60px]">
        <div className="grid grid-cols-2 gap-4">
          <FormField control={form.control} name="name" render={({
          field
        }) => <FormItem>
                <FormControl>
                  <Input placeholder="Your Name" className="bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>} />
          <FormField control={form.control} name="email" render={({
          field
        }) => <FormItem>
                <FormControl>
                  <Input type="email" placeholder="your.email@example.com" className="bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>} />
        </div>
        
        <FormField control={form.control} name="subject" render={({
        field
      }) => <FormItem>
              <FormControl>
                <Input placeholder="What's this about?" className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>} />
        
        <FormField control={form.control} name="message" render={({
        field
      }) => <FormItem>
              <FormControl>
                <Textarea placeholder="Tell me about your project or just say hello!" rows={6} className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>} />
        
        <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3">
          <MessageSquare className="w-5 h-5 mr-2" />
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </Form>;
};
export default ContactForm;