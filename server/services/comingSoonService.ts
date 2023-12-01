import transporter from '../config/mailConfig';
import 'dotenv/config';

async function sendEmail(request: any) {
    const expression: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const validate: boolean = expression.test(request.email);

    if (!validate) {
        return { Message: 'Моля дайте валиден email.' };
    }

    if (!request.security) {
        const info = await transporter.sendMail({
            from: `${request.firstName} ${request.lastName} ${process.env.MAIL_USERNAME}`,
            to: 'ivet_mutafchieva@mutafchievapsychologist.bg',
            subject: `Съобщение от ${request.firstName} ${request.lastName}`,
            text: `${request.message}


            Можете да ме откриете на emeil: ${request.email}`
        });
        return { Message: 'Съобщението Ви е изпратено успешно!' };
    } else {
        return {Message: 'No spam bots!'}
    }
}

export default sendEmail