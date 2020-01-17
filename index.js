const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'pedroocferreira@gmail.com',
        pass: ''
    }
});


transporter.sendMail({
    from: "Pedro Ferreira <pedroocferriera@gmail.com>",
    to: "pedroocferreira@gmail.com",
    subject: "Olá estou fazedendo apenas um teste vlw flw",
    text: "TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE",
    html: " TESTE TESTE TESTE TESTE <a href='https://i0.wp.com/www.fatosdesconhecidos.com.br/wp-content/uploads/2018/05/124-590.jpg?resize=600,450'> CLICK</a> TOMA"

}).then(message => {
    console.log(message);
}).catch(err => {
    console.log(err);
})  