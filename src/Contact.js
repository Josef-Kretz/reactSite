import { Form, useActionData } from "react-router-dom"
import { Button } from 'react-bootstrap'

import CustomAlert from "./components/CustomAlert"

export async function action({ request, params }) {
       const defaultMsg = 'Message not sent: either suspected spam e-mail address or some unknown issue'

       const formData = await request.formData()
       formData.set('replyto', formData.get('email'))
       try {
              const res = await fetch('https://api.web3forms.com/submit', {
                     method: 'POST',
                     body: formData
              })

              if (!res.ok) throw new Error(`${res.status}: ${res.statusText || defaultMsg}`)
              const data = await res.json()

              //{success, message}
              return data
       } catch (err) {
              return { success: false, message: err.toString() }
       }

}

const Contact = () => {
       const alert = useActionData()

       return <section className='contactCon'>
              <h1>Send A Message</h1>
              {alert ? <CustomAlert alert={alert} /> : <></>}
              <section className='formCon'>
                     <Form className="contact" action="/contact" method='POST'>

                            {/* REQUIRED: Your Access key here. Don't worry this can be public */}
                            <input type="hidden" name="access_key" value="e3079f71-d6c1-4b9f-ad0a-4105c49b544a" />

                            {/* Optional: Subject an be prefilled using type="hidden"
     or type="text" for normal user submitted input */}
                            <input type="hidden" name="subject" value="New Submission from Josef Kretz Web Developer" />

                            {/* Optional: From Name you want to see in the email
     Default is "Notifications". you can overwrite here */}
                            <input type="hidden" name="from_name" value="Josef Kretz" />

                            {/* Optional: Default replyto will be "email" (if available)
     you may overwrite replyto with different email here */}
                            <input type="hidden" name="replyto" value="" />

                            {/* Required: If submitting form without Javascript.
     Default web3forms output is in JSON format. */}
                            {/* Not Required: If javascript, use "window.location.hash" instead */}
                            {/* <input type="hidden" name="redirect" value="https://web3forms.com/success" /> */}

                            {/* Optional: But Recommended: To Prevent SPAM Submission.
     Make sure its hidden by default */}
                            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                            {/* Custom Form Data: Form data you wish to receive in email. */}
                            <input type="email" name="email" required placeholder='E-mail' />
                            <input type="text" name="First Name" required placeholder='First name' />
                            <input type="tel" name="Phone Number" placeholder='Phone Number (optional)' />
                            <textarea rows='5' name="message" required placeholder='Enter your message'></textarea>

                            <Button type="submit">Submit Form</Button>

                     </Form>
                     <ul>
                            <li>Feel free to send a message about:</li>
                            <li>your project or idea</li>
                            <li>anything in my portfolio</li>
                            <li>how I can improve your business</li>
                            <li>reaching out to network</li>
                     </ul>
              </section>
       </section>
}

export default Contact