let pacientesRadiologia = [
    {
        paciente: "FRANCISCA ROJAS",
        rut: "9878782-1",
        especialista: "IGNACIO SCHULZ",
        hora: "11:00",
        prevision: "FONASA"
    },

    {
        paciente: "PAMELA ESTRADA",
        rut: "15345241-3",
        especialista: "FEDERICO SUBERCASEAUX",
        hora: "11:30",
        prevision: "ISAPRE"
    },

    {
        paciente: "ARMANDO LUNA",
        rut: "16445345-9",
        especialista: "FERNANDO WURTHZ",
        hora: "3:00",
        prevision: "ISAPRE"
    },

    {
        paciente: "MANUEL GODOY",
        rut: "17666419-0",
        especialista: "ANA MARIA GODOY",
        hora: "3:30",
        prevision: "FONASA"
    },

    {
        paciente: "RAMON ULLOA",
        rut: "14989389-K",
        especialista: "PATRICIA SUAZO",
        hora: "4:00",
        prevision: "FONASA"
    },
];

let pacientesTraumatologia = [
    {
        paciente: "PAULA SANCHEZ",
        rut: "15554774-5",
        especialista: "MARIA PAZ ALTUZARRA",
        hora: "8:00",
        prevision: "FONASA"
    },

    {
        paciente: "ANGÉLICA NAVAS",
        rut: "15444147-9",
        especialista: "RAUL ARAYA",
        hora: "10:00",
        prevision: "ISAPRE"
    },

    {
        paciente: "ANA KLAPP",
        rut: "17879423-9",
        especialista: "MARIA ARRIAGADA",
        hora: "10:30",
        prevision: "ISAPRE"
    },

    {
        paciente: "FELIPE MARDONES",
        rut: "1547423-6",
        especialista: "ALEJANDRO BADILLA",
        hora: "11:00",
        prevision: "ISAPRE"
    },

    {
        paciente: "DIEGO MARRE",
        rut: "16554741-K",
        especialista: "CECILIA BUDNIK",
        hora: "11:30",
        prevision: "FONASA"
    },

    {
        paciente: "CECILIA MENDEZ",
        rut: "9747535-8",
        especialista: "ARTURO CAVAGNARO",
        hora: "12:00",
        prevision: "ISAPRE"
    },

    {
        paciente: "MARCIAL SUAZO",
        rut: "11254785-5",
        especialista: "ANDRES KANACRI",
        hora: "12:30",
        prevision: "ISAPRE"
    },

];

let pacientesDental = [
    {
        paciente: "MARCELA RETAMAL",
        rut: "11123425-6",
        especialista: "ANDREA ZUÑIGA",
        hora: "8:30",
        prevision: "ISAPRE"
    },

    {
        paciente: "ANGEL MUÑOZ",
        rut: "9878789-2",
        especialista: "MARIA PIA ZAÑARTU",
        hora: "11:00",
        prevision: "ISAPRE"
    },

    {
        paciente: "MARIO KAST",
        rut: "7998789-5",
        especialista: "SCARLETT WITTING",
        hora: "11:30",
        prevision: "FONASA"
    },

    {
        paciente: "KARIN FERKARIN FERNANDEZ",
        rut: "18887662-K",
        especialista: "FRANCISCO VON TEUBER",
        hora: "1:00",
        prevision: "FONASA"
    },

    {
        paciente: "HUGO SANCHEZ",
        rut: "17665461-4",
        especialista: "EDUARDO VIÑUELA",
        hora: "1:30",
        prevision: "FONASA"
    },

    {
        paciente: "ANA SEPULVEDA",
        rut: "14441281-0",
        especialista: "RAQUEL VILLASECA",
        hora: "2:00",
        prevision: "ISAPRE"
    }
];



let firstPatientRadiologia = pacientesRadiologia[0];
let lastPatientRadiologia = pacientesRadiologia[pacientesRadiologia.length - 1]

let firstPatientTraumatologia = pacientesTraumatologia[0];
let lastPatientTraumatologia = pacientesTraumatologia[pacientesTraumatologia.length - 1]

let firstPatientDental = pacientesDental[0];
let lastPatientDental = pacientesDental[pacientesDental.length - 1];

document.getElementById(`pacientes`).innerHTML = `<h1>Estadisticas centro médico ñuñoa</h1> </br> 

<h2>Radiología</h2> <p>Primer paciente: ${firstPatientRadiologia.paciente} - ${firstPatientRadiologia.prevision} |
Ultimo paciente ${lastPatientRadiologia.paciente} - ${lastPatientRadiologia.prevision} </p> 

<h2>Traumatología</h2> <p>Primer paciente: ${firstPatientTraumatologia.paciente} - ${firstPatientTraumatologia.prevision} | 
Ultimo paciente  ${lastPatientTraumatologia.paciente} - ${lastPatientTraumatologia.prevision} </p>

<h2>Dental</h2> <p>Primer paciente: ${firstPatientDental.paciente} - ${firstPatientDental.prevision} | 
Ultimo paciente  ${lastPatientDental.paciente} - ${lastPatientDental.prevision}</p>`;



// Tabla radiología

let radiologia = `<caption>Tabla Radiología</caption> <tr><th>Nombre</th><th>Rut</th><th>Especialista</th><th>Hora</th><th>Previsión</th></tr>`;


for (let i = 0; i < pacientesRadiologia.length; i++) {
radiologia += `<tr style="border: solid 2px green">
<td style="border: solid 2px green">${pacientesRadiologia[i].paciente}</td>
<td style="border: solid 2px green">${pacientesRadiologia[i].rut}</td>
<td style="border: solid 2px green">${pacientesRadiologia[i].especialista}</td>
<td style="border: solid 2px green">${pacientesRadiologia[i].hora}</td>
<td style="border: solid 2px green">${pacientesRadiologia[i].prevision}</td>
</tr>`;


}

document.querySelector('.tabla1').innerHTML = radiologia;

// tabla traumatología

let traumatologia = `<caption>Tabla traumatología</caption> <tr><th>Nombre</th><th>Rut</th><th>Especialista</th><th>Hora</th><th>Previsión</th></tr>`;


for (let i = 0; i < pacientesTraumatologia.length; i++) {
traumatologia += `<tr style="border: solid 2px green">
<td style="border: solid 2px green">${pacientesTraumatologia[i].paciente}</td>
<td style="border: solid 2px green">${pacientesTraumatologia[i].rut}</td>
<td style="border: solid 2px green">${pacientesTraumatologia[i].especialista}</td>
<td style="border: solid 2px green">${pacientesTraumatologia[i].hora}</td>
<td style="border: solid 2px green">${pacientesTraumatologia[i].prevision}</td>
</tr>`;


}

document.querySelector('.tabla2').innerHTML = traumatologia;

// tabla dental

let dental = `<caption>Tabla Dental</caption> <tr><th>Nombre</th><th>Rut</th><th>Especialista</th><th>Hora</th><th>Previsión</th></tr>`;


for (let i = 0; i < pacientesDental.length; i++) {
dental += `<tr style="border: solid 2px green">
<td style="border: solid 2px green">${pacientesDental[i].paciente}</td>
<td style="border: solid 2px green">${pacientesDental[i].rut}</td>
<td style="border: solid 2px green">${pacientesDental[i].especialista}</td>
<td style="border: solid 2px green">${pacientesDental[i].hora}</td>
<td style="border: solid 2px green">${pacientesDental[i].prevision}</td>
</tr>`;


}

document.querySelector('.tabla3').innerHTML = dental;