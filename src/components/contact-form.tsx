"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"

const formSchema = z.object({
 name: z.string(),
 email: z.string(),
 message: z.string()
})

const ContactForm = () => {
 const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
   name: "",
   email: "",
   message: ""
  }
 })

 const onSubmit = (values: z.infer<typeof formSchema>) => {
  console.log(values)
 }

 return (
  <Form {...form}>
   <form
    onSubmit={form.handleSubmit(onSubmit)}
    className="max-w-md w-full mx-auto space-y-4"
    action="https://public.herotofu.com/v1/c6c2f510-d64f-11ee-afc9-dd7ac292df82"
    method="POST"
    acceptCharset="UTF-8"
   >
    <FormField
     control={form.control}
     name="name"
     render={({ field }) => (
      <FormItem>
       <FormLabel>Name</FormLabel>
       <FormControl>
        <Input placeholder="Name" {...field} />
       </FormControl>
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
        <Textarea placeholder="Message" {...field} />
       </FormControl>
      </FormItem>
     )}
    />
    <Button type="submit" variant="custom" size="lg">Submit</Button>
   </form>
  </Form>
 )
}

export default ContactForm