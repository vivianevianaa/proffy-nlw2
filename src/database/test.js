const Database = require('./db.js');
const createProffy = require('./createProffy.js');


Database.then(async (db) => {
    //Inserir dados
    proffyValue = {
        name: "Viviane Viana",
        avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQHJNep3d3Blzw/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=bm3YYJyvrFQo-53AmQDIfhqkinRjuWlKTc1tjX1UAig",
        whatsapp: "858495322154",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    };

    classValue = {
        subject: 1,
        cost: "80",
        //o proffy_id virá pelo db
    };

    classScheduleValues = [
        //o class_id virá pelo db
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ];

    //await createProffy(db, {proffyValue, classValue, classScheduleValues});

    //Consultar os dados inseridos

    //Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //Consultar as classes de um determinado professor
    //e trazer junto os dados do professor
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectedClassesAndProffys)

    //Se o horário que a pessoa trabalha é de 8h às 18h
    //o horário de time_from precisa ser antes ou igual ao horário solicitado
    //o time_to precisa ser acima 
    const selectedClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300";
    `)
    console.log(selectedClassesSchedules)
}); 