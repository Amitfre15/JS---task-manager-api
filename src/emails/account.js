const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'amitfrework@gmail.com',
        subject: 'Thanks for joining!',
        text: `Welcome to the app, ${name}, feel free to contact us`
    })
}

module.exports = {
    sendWelcomeEmail
}


