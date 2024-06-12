let Detections = document.querySelectorAll(".detect_change")
let acrh_ele = document.getElementById("acrhitecture")
let Arch_ele_str = "";
let Running_Copy_str = "";
let Ready_Copy_str = "";

let element_ele = document.getElementById("acrhitectureMain")
let Run_btn = document.getElementById("btn")
let Gen_length = document.getElementById("inpt_win")
let Ele_str = ""
let Running_Ele_Copy_str = "";
let Ele_copy_string = ""

let copyArch = document.getElementById("copy_arch")
let copyData = document.getElementById("copy_data")


let namesArray = [
    "Akira",
    "Haruka",
    "Haru",
    "Hikaru",
    "Kai",
    "Kei",
    "Kimi",
    "Kou",
    "Mio",
    "Ren",
    "Sora",
    "Tsubasa",
    "Yuki",
    "Aki",
    "Hana",
    "Kazumi",
    "Mika",
    "Nori",
    "Rin",
    "Sakura",
    "Tai",
    "Yoshi",
    "Asuka",
    "Chihiro",
    "Hinata",
    "Kokoro",
    "Michi",
    "Rika",
    "Satsuki",
    "Tomo"
]

let EmailArray = [
    "akira@gmail.com",
    "haruka@yahoo.com",
    "haru@gmail.com",
    "hikaru@yahoo.com",
    "kai@gmail.com",
    "kei@yahoo.com",
    "kimi@gmail.com",
    "kou@yahoo.com",
    "mio@gmail.com",
    "ren@yahoo.com",
    "sora@gmail.com",
    "tsubasa@yahoo.com",
    "yuki@gmail.com",
    "aki@yahoo.com",
    "hana@gmail.com",
    "kazumi@yahoo.com",
    "mika@gmail.com",
    "nori@yahoo.com",
    "rin@gmail.com",
    "sakura@yahoo.com",
    "tai@gmail.com",
    "yoshi@yahoo.com",
    "asuka@gmail.com",
    "chihiro@yahoo.com",
    "hinata@gmail.com",
    "kokoro@yahoo.com",
    "michi@gmail.com",
    "rika@yahoo.com",
    "satsuki@gmail.com",
    "tomo@yahoo.com"
]

let CountryArray = [
    "India",
    "Brazil",
    "Canada",
    "Australia",
    "United States",
    "Peru",
    "United Kingdom",
    "Germany",
    "Philippines",
    "Thailand",
    "South Korea",
    "Taiwan",
    "China",
    "Indonesia",
    "Malaysia",
    "Vietnam",
    "France",
    "Russia",
    "Mexico",
    "Argentina",
    "Chile"
]

let ProfessionsArray = [
    "Accountant",
    "Architect",
    "Artist",
    "Baker",
    "Barber",
    "Carpenter",
    "Chef",
    "Dentist",
    "Doctor",
    "Electrician",
    "Engineer",
    "Farmer",
    "Firefighter",
    "Graphic Designer",
    "Journalist",
    "Lawyer",
    "Librarian",
    "Mechanic",
    "Nurse",
    "Pharmacist",
    "Photographer",
    "Pilot",
    "Plumber",
    "Police Officer",
    "Scientist",
    "Software Developer",
    "Teacher",
    "Translator",
    "Veterinarian",
    "Writer"
]

let passionArray = [
    "Traveling",
    "Cooking",
    "Reading",
    "Writing",
    "Photography",
    "Gardening",
    "Music",
    "Dancing",
    "Painting",
    "Hiking",
    "Cycling",
    "Running",
    "Yoga",
    "Meditation",
    "Gaming",
    "Crafting",
    "Volunteering",
    "Sports",
    "Fishing",
    "Sewing",
    "Knitting",
    "Baking",
    "Birdwatching",
    "Astronomy",
    "Collecting",
    "Blogging",
    "Film Making",
    "Martial Arts",
    "Programming"
]

let BehaviourArray = [
    "Empathetic",
    "Aggressive",
    "Curious",
    "Optimistic",
    "Pessimistic",
    "Sociable",
    "Introverted",
    "Extroverted",
    "Honest",
    "Deceptive",
    "Generous",
    "Selfish",
    "Cooperative",
    "Competitive",
    "Patient",
    "Impatient",
    "Polite",
    "Rude",
    "Responsible",
    "Irresponsible",
    "Cautious",
    "Reckless",
    "Independent",
    "Dependent",
    "Hardworking",
    "Lazy",
    "Forgiving",
    "Vindictive",
    "Organized",
    "Disorganized"
]




let genID = () => {
    let ans = '';
    let work_Arr = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
    ]

    for (let index = 1; index < 7; index++) {
        const location = Math.floor(work_Arr.length * Math.random());
        if (location === work_Arr.length) location = location - 1;
        ans += work_Arr[location]
    }
    return ans
}

let Ph = () => {
    let ans = '9';
    let work_Arr = [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
    ]

    for (let index = 1; index < 10; index++) {
        const location = Math.floor(work_Arr.length * Math.random());
        if (location === work_Arr.length) location = location - 1;
        ans += work_Arr[location]
    }
    return Number(ans);
}


let UserData = () => {
    let name = "";
    let Email = ""

    if (namesArray.length === EmailArray.length) {
        let location = Math.floor(namesArray.length * Math.random());

        if (location === namesArray.length) {
            location = location - 1;
        }

        const final_location = location;

        name = namesArray[final_location];
        Email = EmailArray[final_location];

    }

    let obj = {
        "name": name,
        "Email": Email
    }

    return obj;
}


let Cntry = () => {

    let name = "";

    let location = Math.floor(CountryArray.length * Math.random());
    if (location === namesArray.length) {
        location = location - 1;
    }

    name = CountryArray[location];
    return name;
}

let Proffsn = () => {

    let profession = "";

    let location = Math.floor(ProfessionsArray.length * Math.random());
    if (location === ProfessionsArray.length) {
        location = location - 1;
    }

    profession = ProfessionsArray[location];
    return profession;
}


let passhn = () => {

    let passion = "";

    let location = Math.floor(passionArray.length * Math.random());
    if (location === passionArray.length) {
        location = location - 1;
    }

    passion = passionArray[location];
    return passion;
}

let Behvr = () => {

    let Behaviour = "";

    let location = Math.floor(BehaviourArray.length * Math.random());
    if (location === BehaviourArray.length) {
        location = location - 1;
    }

    Behaviour = BehaviourArray[location];
    return Behaviour;
}

let AgeGen = () => {
    let age = Math.floor(Math.random() * 100)
    if (age < 24) age = 24;
    return age;
}

let intelligence = () => {
    let HI = 90; // gernally least average human intelligence
    let CI = Math.floor(Math.random() * 60) // calculative intelligence
    HI = HI + CI
    return HI
}

let Gendr = () => {
    let Gender = ""
    let identifier = Math.floor(Math.random() * 100)
    if (identifier % 2 == 0) Gender = "Male"
    else Gender = "Female"
    return Gender;
}

let bool = () => {
    let bool = Math.floor(Math.random() * 100);

    if (bool % 2 == 0) return true
    return false;
}

let today = () => {
    let epoch = new Date()
    let date = `${epoch.getDate()}-${epoch.getMonth()}-${epoch.getFullYear()}`
    return date;
}


console.log(genID())
console.log(Ph())
console.log(AgeGen())
console.log(Gendr())
console.log(UserData())
console.log(Cntry())
console.log(Proffsn())
console.log(intelligence())
console.log(passhn())
console.log(Behvr())
console.log(bool())
console.log(today())


let Name = document.getElementById("Name")
let Email = document.getElementById("E-mail")
let ID = document.getElementById("ID")
let Age = document.getElementById("Age")
let Gender = document.getElementById("Gender")
let Country = document.getElementById("Country")
let Phnno = document.getElementById("Phn-no")
let Profession = document.getElementById("Profession")
let Intell = document.getElementById("intell")
let Passion = document.getElementById("Passion")
let Behaviour = document.getElementById("Behaviour")
let Booln = document.getElementById("Boolean");
let Dates = document.getElementById("Date")


const clrCpyStr = () => Running_Copy_str = ""
const clearStr = () => Arch_ele_str = ""
const clrCpyStr_ele = () => Running_Ele_Copy_str = ""
const clearStr_ele = () => Ele_str = ""




function add_str_arch(str) {
    Running_Copy_str += str
}
function add_str_ele(str) {
    Running_Ele_Copy_str += str
}
function ele_element_final(str) {
    Ele_str += str
}

function RemoveComa_Arch_ele(str) {
    let rmvd_coma_arr = str.split("")
    rmvd_coma_arr.pop()
    rmvd_coma_arr.push('}')
    return rmvd_coma_arr.join(''); // remove "," from last
}

function RemoveComa_Arch_ele_output(str) {
    let rmvd_coma_arr = str.split("")
    rmvd_coma_arr.pop()
    rmvd_coma_arr.pop()
    rmvd_coma_arr.pop()
    rmvd_coma_arr.push(']')
    return rmvd_coma_arr.join(''); // remove "," from last
}



function runner(element, params, idname) {


    if (params.checked && idname !== "Age" && idname !== "Phn-no" && idname !== "IQ" && idname !== "Boolean") {
        Arch_ele_str += `<p class="block">"<span class="text-blue">${idname}</span>": <span class="text-orange">String</span>,</p>`  // arch ele string
        add_str_arch(`"${idname}": String,`) //running copy string

    }
    else if (params.checked) {

        if (idname === "Boolean") {
            Arch_ele_str += `<p class="block">"<span class="text-blue">${idname}</span>": <span class="text-orange">Boolean</span>,</p>` // arch ele string
            add_str_arch(`"${idname}": Boolean, `) //running copy string
        }
        else {
            Arch_ele_str += `<p class="block">"<span class="text-blue">${idname}</span>": <span class="text-orange">Number</span>,</p>` // arch ele string
            add_str_arch(`"${idname}": Number,`) //running copy string
        }


    }


    element.innerHTML = Arch_ele_str


}

function runner_ele(Personal_data, params, idname) {

    
    if (params.checked) {
        if (idname === "Name") {
            let funcVal = Personal_data.name
            Ele_str += `<p class="block">"<span class="text-blue">${idname}</span>": <span class="text-orange">${funcVal}</span>,</p>`
            Running_Ele_Copy_str += `"${idname}": ${funcVal}, `
        }
        if (idname === "Email") {
            let funcVal = Personal_data.Email
            Ele_str += `<p class="block">"<span class="text-blue">${idname}</span>": <span class="text-orange">${funcVal}</span>,</p>`
            Running_Ele_Copy_str += `"${idname}": ${funcVal}, `

        }
        if (idname === "ID") {
            let funcVal = genID()
            Ele_str += `<p class="block">"<span class="text-blue">${idname}</span>": <span class="text-orange">${funcVal}</span>,</p>`
            Running_Ele_Copy_str += `"${idname}": ${funcVal}, `

        }
        if (idname === "Age") {
            let funcVal = AgeGen()
            Ele_str += `<p class="block">"<span class="text-blue">${idname}</span>": <span class="text-orange">${funcVal}</span>,</p>`
            Running_Ele_Copy_str += `"${idname}": ${funcVal}, `

        }
        if (idname === "Age") {
            let funcVal = AgeGen()
            Ele_str += `<p class="block">"<span class="text-blue">${idname}</span>": <span class="text-orange">${funcVal}</span>,</p>`
            Running_Ele_Copy_str += `"${idname}": ${funcVal}, `

        }
        if (idname === "Gender") {
            let funcVal = Gendr()
            Ele_str += `<p class="block">"<span class="text-blue">${idname}</span>": <span class="text-orange">${funcVal}</span>,</p>`
            Running_Ele_Copy_str += `"${idname}": ${funcVal}, `

        }
        if (idname === "Country") {
            let funcVal = Cntry()
            Ele_str += `<p class="block">"<span class="text-blue">${idname}</span>": <span class="text-orange">${funcVal}</span>,</p>`
            Running_Ele_Copy_str += `"${idname}": ${funcVal}, `

        }
        if (idname === "Country") {
            let funcVal = Cntry()
            Ele_str += `<p class="block">"<span class="text-blue">${idname}</span>": <span class="text-orange">${funcVal}</span>,</p>`
            Running_Ele_Copy_str += `"${idname}": ${funcVal}, `

        }
        if (idname === "Phn-no") {
            let funcVal = Ph()
            Ele_str += `<p class="block">"<span class="text-blue">${idname}</span>": <span class="text-orange">${funcVal}</span>,</p>`
            Running_Ele_Copy_str += `"${idname}": ${funcVal}, `

        }
        if (idname === "Profession") {
            let funcVal = Proffsn()
            Ele_str += `<p class="block">"<span class="text-blue">${idname}</span>": <span class="text-orange">${funcVal}</span>,</p>`
            Running_Ele_Copy_str += `"${idname}": ${funcVal}, `

        }
        if (idname === "IQ") {
            let funcVal = intelligence()
            Ele_str += `<p class="block">"<span class="text-blue">${idname}</span>": <span class="text-orange">${funcVal}</span>,</p>`
            Running_Ele_Copy_str += `"${idname}": ${funcVal}, `

        }
        if (idname === "Passion") {
            let funcVal = passhn()
            Ele_str += `<p class="block">"<span class="text-blue">${idname}</span>": <span class="text-orange">${funcVal}</span>,</p>`
            Running_Ele_Copy_str += `"${idname}": ${funcVal}, `

        }
        if (idname === "Behaviour") {
            let funcVal = Behvr()
            Ele_str += `<p class="block">"<span class="text-blue">${idname}</span>": <span class="text-orange">${funcVal}</span>,</p>`
            Running_Ele_Copy_str += `"${idname}": ${funcVal}, `

        }
        if (idname === "Boolean") {
            let funcVal = bool()
            Ele_str += `<p class="block">"<span class="text-blue">${idname}</span>": <span class="text-orange">${funcVal}</span>,</p>`
            Running_Ele_Copy_str += `"${idname}": ${funcVal}, `

        }
        if (idname === "Date") {
            let funcVal = today()
            Ele_str += `<p class="block">"<span class="text-blue">${idname}</span>": <span class="text-orange">${funcVal}</span>,</p>`
            Running_Ele_Copy_str += `"${idname}": ${funcVal}, `

        }

        

    }


}


function Runner_ele(){

    let Personal_data = UserData(); // contains Name and Email

    ele_element_final('<p class="block">{</p>')
    runner_ele(Personal_data, Name, "Name")
    runner_ele(Personal_data, Email, "Email")
    runner_ele(Personal_data, ID, "ID")
    runner_ele(Personal_data, Age, "Age")
    runner_ele(Personal_data, Gender, "Gender")
    runner_ele(Personal_data, Country, "Country")
    runner_ele(Personal_data, Phnno, "Phn-no")
    runner_ele(Personal_data, Profession, "Profession")
    runner_ele(Personal_data, Intell, "IQ")
    runner_ele(Personal_data, Passion, "Passion")
    runner_ele(Personal_data, Behaviour, "Behaviour")
    runner_ele(Personal_data, Booln, "Boolean")
    runner_ele(element_ele, Dates, "Date")

    let copy_str_arr = Running_Ele_Copy_str.split("") // removing last "," from running copy string
    copy_str_arr.pop()
    copy_str_arr.pop()
    copy_str_arr.push(" ")
    Running_Ele_Copy_str = copy_str_arr.join('');

    ele_element_final("}")
    ele_element_final(",")
    element_ele.innerHTML = Ele_str
}

const checkEvent = () => {
    add_str_arch("{") // running copy string
    runner(acrh_ele, Name, "Name")
    runner(acrh_ele, Email, "Email")
    runner(acrh_ele, ID, "ID")
    runner(acrh_ele, Age, "Age")
    runner(acrh_ele, Gender, "Gender")
    runner(acrh_ele, Country, "Country")
    runner(acrh_ele, Phnno, "Phn-no")
    runner(acrh_ele, Profession, "Profession")
    runner(acrh_ele, Intell, "IQ")
    runner(acrh_ele, Passion, "Passion")
    runner(acrh_ele, Behaviour, "Behaviour")
    runner(acrh_ele, Booln, "Boolean")
    runner(acrh_ele, Dates, "Date")

    Ready_Copy_str = RemoveComa_Arch_ele(Running_Copy_str) // ready copy string
    clrCpyStr() // clearing running copy string

    clearStr() // clearing arch ele string

    console.log(Ready_Copy_str)
}
checkEvent()

Detections.forEach((capture) => {
    capture.addEventListener("click", () => {
        checkEvent()
    })
})
Run_btn.addEventListener("click",()=>{

    add_str_ele("[") // for copy string
    add_str_ele("{ ")

    Json_length = Number(Gen_length.value);
    for(let i = 1; i<= Json_length;i++){
        Runner_ele() 
        add_str_ele("}")
        add_str_ele(", ")
        add_str_ele("{")
    }

    Ele_copy_string = RemoveComa_Arch_ele_output(Running_Ele_Copy_str)


    clearStr_ele()
    clrCpyStr_ele()

    console.log(Ele_copy_string)

})
copyArch.addEventListener('click',()=>{
    navigator.clipboard.writeText(Ready_Copy_str)
})
copyData.addEventListener('click',()=>{
    navigator.clipboard.writeText(Ele_copy_string)
})