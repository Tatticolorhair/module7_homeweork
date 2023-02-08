class KitchenAppliances{
    constructor(stateFlag) {
        this.brend = "Bork";
        this.stateFlag = stateFlag;
    }
}

class Toaster extends KitchenAppliances {
    constructor(type, color, power, brend, stateFlag){
        super(brend, stateFlag);
        this.type = type;
        this.color = color;
        this.power = power;
    }
    getSatus(){
        if (this.stateFlag == 1){
        return 'This' + ' ' + this.color +' ' + this.type + ' '+ this.brend + ' is turn ON'
        }else{
        return 'This' + ' ' + this.color +' ' + this.type + ' '+ this.brend + ' is turn OFF'
        }
    }
}


class Kettle extends KitchenAppliances {
    constructor(type, color, power, brend, stateFlag){
        super(brend, stateFlag);
        this.type = type;
        this.color = color;
        this.power = power;
    }
    getSatus(){
        if (this.stateFlag == 1){
        return 'This' + ' ' + this.color + ' ' + this.type + ' '+ this.brend + ' is turn ON'
        }else{
        return 'This' + ' ' + this.color +' ' + this.type + ' '+ this.brend + ' is turn OFF'
        }
    }
}    
   

const iToaster = new Toaster("toaster", "red", 1500, 1);
const iKettle = new Kettle("kettle", "silver", 500, 0);



let totalPower = 0;

if (iToaster.stateFlag == 1) {
  totalPower = totalPower + iToaster.power;
}
if (iKettle.stateFlag == 1) {
  totalPower = totalPower + iKettle.power;
}



console.log(iKettle.getSatus()); //Проверка состояния вкл/выкл
console.log(iToaster.getSatus()); //Проверка состояния вкл/выкл
console.log('Суммарная мощность включенных устройств ' + totalPower + ' Вт');
console.log (iKettle); //Информация об устройстве
console.log(iToaster); //Информация об устройстве


