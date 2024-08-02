import { Button } from "./ui/button"

const Form = () => {
 return (
  <form
   action="https://public.herotofu.com/v1/c6c2f510-d64f-11ee-afc9-dd7ac292df82"
   method="POST"
   acceptCharset="UTF-8"
   className="flex flex-col gap-4 max-w-md mx-auto"
  >
   <input
    type="text"
    id="name"
    name="Name"
    placeholder="Name"
    className="input input-bordered input-lg"
    required
   />
   <input
    type="text"
    id="email"
    name="Email"
    placeholder="Email"
    className="input input-bordered input-lg"
    required
   />
   <textarea
    id="message"
    name="Message"
    placeholder="Message"
    className="textarea textarea-bordered textarea-lg"
    required
   />
   <Button variant="custom">Submit</Button>
  </form>
 )
}

export default Form