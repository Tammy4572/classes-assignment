class FactoryClass {
    constructor() {
        this.make = "Mazda";
        this.location = "USA";
        this.airbags = true;
        this.abs = true;
        this.warranty = "60,000 miles / 3 years";

        this.massBuild = function (quantity, options) {
        this.quantity = quantity;
        this.options = options;
        console.log("Building " + quantity + " " + options );
        }
        this.customerBuild = function (color, options) {
        this.color = color;
        this.options = options;
        console.log("Building one " + color + " with the following options: " + options );
        }
    }
}

class Car extends FactoryClass {
    constructor(model, doors, color, enginetype, transmission, trim, wheelstrim, audio, seatstrim, moonroof,warranty) {
          super (warranty);
          this.model = model;
          this.doors = doors;
          this.color = color;
          this.enginetype = enginetype;
          this.transmission = transmission;
          this.trim = trim;
          this.wheelstrim = wheelstrim;
          this.audio = audio;
          this.seatstrim = seatstrim;
          this.moonroof = moonroof;
          this.enginesize = 4;
          this.navigation = true;
          this.backupcamera = true;
          this.warranty = "100,000 miles / 5 years";
    }
}

class Sport extends Car {
     constructor ( model, trim, transmission, top, color, seatstrim, audio, wheelstrim, moonroof, enginetype, convertible, doors ) {
          super({moonroof, enginetype, convertible, doors });
          this.moonroof = false;
          this.enginetype = "gasoline";
          this.convertible = true;
          this.doors = 2;
          this.model = model;
          this.trim = trim;
          this.transmission = transmission;
          this.top = top;
          this.color = color;
          this.seatstrim = seatstrim;
          this.audio = audio;
          this.wheelstrim = wheelstrim;
     }
}

class TruckClass extends FactoryClass {
     constructor(model, color, enginesize, hitch, bed, navigation, warranty){
          super({ warranty });
               this.transmission = "standard";
               this.backupcamera = true;
               this. audio = "basic";
               this.warranty = "150,000 miles / 6 years ";
     }
}

let mazda3 = new Car("mazda3", 4, "red", "hybrid", "automatic", "touring", "base", "premium", "leather", true);

console.log(mazda3);

let massFactory = new FactoryClass();
massFactory.massBuild(35000, "Red Touring Mazda3's");


var yellowMazdaOpts = [ "weather package", "satellite radio", "rear spoiler"];
massFactory.customerBuild("yellow Touring Mazda3", yellowMazdaOpts);


// MIATA-RF MASS PRODUCTION
// Create an instance  Sport.
// The following properties must be specified: model (Miata-RF), trim (Grand Touring), transmission (manual),  top (hard top), color (red), seats (leather), audio (premium), wheels (premium).

// Write your 'miataRf' instance below:
// Write your code below:
let miataRf = new Sport("Miata-RF", "Grand Touring", "manual", "hard top", "red", "leather", "premium", "premium");
console.log(miataRf);

// Print miataRf. It should have all of the above properties. Plus, the extended warranty.
// Write your code below:



// Print miataRf, calling massBuild(), building 15,000
// It should print: "Building 15000 Red Grand Touring Miata-RF's."
// Write your code below:

miataRf.massBuild(15000, "Red Grand Touring Miata-RF's. ");

// Print miataRf, calling customerBuild(), building one black Miata-Rf with the following options, as an array: hid headlights, sports suspension, leather steering wheel, heated seats, adaptive cruise control.
// It should read: "Building one black Grand Touring Miata-RF with the following options: hid headlights, sports suspension, leather steering wheel, heated seats, adaptive cruise control"
// Write your code below:

var blackMiata = ['hid headlights', ' sports suspension', ' leather steering wheel', ' heated seats', ' adaptive cruise control'];
miataRf.customerBuild("black Miata-RF", blackMiata );

// TRAIL BLAZER MASS PRODUCTION
// The Trail Blazer should inherit from truck.
// The following properties must be specified: model (Trail Blazer), color (blue), trim (Sport), enginesize (8), hitch (true), bed (standard), navigation (true), doors (2)

// Write your 'trailBlazer' instance below:
// Write your code below:

var trailBlazer = new TruckClass("trailBlazer", "blue", 8, true, "standard", true);

// Print trailBlazer. It should have all the above properties. Plus, the extended warranty.
// Write your code below:

console.log(trailBlazer);


// Print trailBlazer, calling massBuid(). It should build 35000 trucks.
// It should print: "Building 35000 blue Sport Trail Blazer's."
// Wrint your code below:

trailBlazer.massBuild(35000, "blue Sport Trail Blazer's. ");



// Print trailBlazer, calling customerBuild(). It should build a red Trail Blazer with the following options, as an array: seat warmers, tinted windows, fog lamps.
// It should print: "Building one red Sport Trail Blazer with the following options: seat warmers, tinted windows, fog lamps"
// Write your code below:

var trailBlazerOpt = ["seat warmers", "tinted windows", "fog lamps"];
trailBlazerOpt.customerBuild("Red Sport Trail Blazer " , trailBlazerOpt);
