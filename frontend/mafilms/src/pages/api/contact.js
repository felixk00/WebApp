import nodemailer from "nodemailer";



export default async function ContactAPI(req, res) {
    const { name, email, message } = req.body;

    const user = process.env.SMTP_USERNAME;

    

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: user,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    try {
        const mail = await transporter.sendMail({
            from: user,
            bcc: "kienlefe@hs-pforzheim.de",
            to: email,
            subject: `Contact request from ${name}`,
            html: `
            <h1>Hi ${name}!</h1>
            <h2>Thanks for your message.</h2>
            <p>We are looking in to it. You will hear from us soon.</p>
            <p>Message: ${message}</p>
            <p>Your email adress: ${email}</p>
            </br>
            </br>
            </br>
            </br>
            <img src="cid:contactmafilms@gmail.com" height="100" width="100"/>
            <p></p>
            <b>MA Films</b>
            <p>Rainweg 3</p>
            <p>75181 Pforzheim</p>
            <p>Melih Dihya</p>
            <p>Felix Kienle</p>
            `,
            attachments: [{
                filename: 'mafilms_Email_logo.jpg',
                path: './public/assets/logos/mafilms_Email_logo.jpg',
                cid: 'contactmafilms@gmail.com'
            }]
        });

        console.log("message sent: ", mail.messageId);


        return res.status(200).json({ message: "succes" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Could not send email. Your message was not sent.",
        });
    }

}