function kitchenAppliances(stateFlag) {
    this.brend = "Bork";
  // 0 - выключен, 1 - включен
    this.stateFlag = stateFlag;
}

function Toaster(type, color, power){
    this.type = type;
    this.color = color;
    this.power = power;
}

function Kettle (type, color, power){
    this.type = type;
    this.color = color;
    this.power = power;
}


Toaster.prototype = new kitchenAppliances();
Kettle.prototype = new kitchenAppliances();


const iToaster = new Toaster('toaster', 'red', 500);
const iKettle = new Kettle('kettle', 'silver', 1500);


iToaster.stateFlag = 0;
iKettle.stateFlag = 1;

iToaster.material = "plastic";
iKettle.material = "steel";


// Создаем собственные методы и проверям их
iToaster.reminderToAddBread = function(){
    console.log('Please put the bread to ' + this.type + ' ' + this.brend);
}
iToaster.reminderToAddBread();


iToaster.getMaterial = function(){
    console.log('This ' + this.type + ' is made from ' + this.material)
}
iToaster.getMaterial();


iKettle.reminderToAddWater = function(){
    console.log('Please add water to the ' + this.type + ' ' + this.brend)
}
iKettle.reminderToAddWater();


iKettle.getMaterial = function(){
    console.log('This ' + this.type + ' is made from ' + this.material)
}
iKettle.getMaterial();



//Проверяем статус вкл/выкл
kitchenAppliances.prototype.state = function(){
    if (this.stateFlag == 0) {
      console.log(this.type + ' is turn OFF');
    } else if (this.stateFlag == 1) {
      console.log(this.type + ' is turn ON');
    } else {
      console.log('undefined stateFlag!');
    }
  }


// Суммируем мощность включенных устройств
let totalPower = 0;

if (iToaster.stateFlag == 1) {
  totalPower = totalPower + iToaster.power;
}
if (iKettle.stateFlag == 1) {
  totalPower = totalPower + iKettle.power;
}



console.log(iKettle.state()); //Проверка состояния вкл/выкл
console.log(iToaster.state()); //Проверка состояния вкл/выкл
console.log(totalPower); //Суммарная мощность включенных устройств
console.log (iKettle); //Информация об устройстве
console.log(iToaster); //Информация об устройстве