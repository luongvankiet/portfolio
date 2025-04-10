import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { MailIcon } from '../assets/icons/mail';
import { PhoneIcon } from '../assets/icons/phone';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function Contact() {
  const FormSchema = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    message: z.string().min(1, { message: 'Message is required' }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit() {
    toast.success('Message sent successfully');
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
      }}
    >
      <Card className="px-2">
        <CardHeader className="pt-8">
          <CardTitle>
            <div className="flex items-center space-x-5">
              <h1 className="text-4xl font-bold">Contacts</h1>
              <div className="h-0.5 w-[35%] rounded-full bg-gradient-to-r from-red-500 to-pink-600 md:w-[200px]"></div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="px-5">
          <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            <Card className="gap-1 border-0 bg-neutral-50 dark:border-1 dark:bg-transparent">
              <CardHeader>
                <h4 className="text-md flex flex-row items-center gap-2 font-bold whitespace-nowrap text-neutral-600 dark:text-gray-200">
                  <PhoneIcon />
                  Phone
                </h4>
              </CardHeader>
              <CardContent className="mb-0 pb-0">
                <p className="text-md tracking-wide text-gray-500 dark:text-gray-400">
                  <a className="transition duration-300 hover:text-[#FA5252]" href="tel:+61 421 915 789">
                    +61 421 915 789
                  </a>
                </p>
              </CardContent>
            </Card>
            <Card className="gap-1 border-0 bg-stone-50 dark:border-1 dark:bg-transparent">
              <CardHeader>
                <h4 className="text-md flex flex-row items-center gap-2 font-bold whitespace-nowrap text-stone-600 dark:text-gray-200">
                  <MailIcon />
                  Email
                </h4>
              </CardHeader>
              <CardContent className="mb-0 pb-0">
                <p className="text-md tracking-wide text-gray-500 dark:text-gray-400">
                  <a className="transition duration-300 hover:text-[#FA5252]" href="mailto:luongvankiet.97@gmail.com">
                    luongvankiet.97@gmail.com
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <h3 className="text-2xl dark:text-gray-200">
                I'm always open to discussing product <span className="font-bold">design work or partnerships.</span>
              </h3>
              <span className="text-sm text-zinc-400">
                Or maybe just say <span className="italic">"hi!"</span>
              </span>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Name" {...field} />
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
                          <Input placeholder="Email" {...field} />
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
                          <Textarea placeholder="Message..."  className="min-h-50 resize-none" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit">Submit</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </motion.div>
  );
}
