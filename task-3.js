const logins = ["Pyton", "C++", "C#", "PHP"];
const loginToFind = 'Java Script';
if(logins !== loginToFind){
    console.log(`Значення Java Script в списку немає, додаємо в масив.`);
};
    logins.push(loginToFind)
    console.table(logins);