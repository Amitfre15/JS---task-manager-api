const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'amitfrework@gmail.com',
        subject: 'Thanks for joining!',
        text: `Welcome to the app, ${name}, feel free to contact us`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'amitfrework@gmail.com',
        subject: "Sorry to see you go!",
        text: `${name}, We hope to see you back soon, would you like to inform us what made you leave?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}


