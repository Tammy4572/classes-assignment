

class FactoryClass {
     constructor(make, location, airbags, abs, warranty) {
          this.make = "Mazda";
          this.location = "USA";
          this.airbags = true;
          this.abs = true;
          this.warranty = "60,000 miles / 3 years";
     };
     this.massBuild = function(quantity, options) {
          "use strict";
          this.quantity = quantity;
          this.options = options;
          console.log(quantity);
          console.log(options);
     };

     this.customerBuild = function (color, options) {
          "use strict";
          this.color = color;
          this.options = options;       //"Building one red Sport Mazda3 with the following options: heated seats, rear spoiler"
          console.log(color);
          console.log(options);
     };
}

class Car extends FactoryClass {
     constructor(model, doors, color, enginetype, transmission, trim, wheelstrim, audio, seatstrim, moonroof,warranty) {
          super ({ warranty });
          this.model = model;
          this.doors = 4;
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
class SportClass extends Car {
     constructor ( model, trim, transmission, top, color, seatstrim, audio, wheelstrim) {
          super({moonroof, enginetype, doors});
          this.moonroof = false;
          this.enginetype = gasoline;
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
     constructor(model, color, enginesize, hitch, bed, navigation){
          super({ warranty });
               this.transmission = standard;
               this.backupcamera = true;
               this. audio = basic;
               this.warranty = "150,000 miles / 6 years ";
     }
}

let mazda3 = new Car("mazda3", 4, "red", "hybrid", "automatic", "touring", "base", "premium", "leather", true);

console.log(mazda3);

console.log("Calling massBuid - building 35000 cars ");
// It should print: "Building 35000 Red Touring Mazda3's."
FactoryClass.massBuild();
console.log(FactoryClass.massBuild());

// let redMazdas = massBuild(35000, red, touring);




// Print, calling customerBuild(), building one yellow mazda3 with the following options, as an array: weather package, satellite radio, rear spoiler.
// It should read: "Building one yellow Touring Mazda3 with the following options: weather package, satellite radio, rear spoiler"
// Write your code below:





// MIATA-RF MASS PRODUCTION
// Create an instance  Sport.
// The following properties must be specified: model (Miata-RF), trim (Grand Touring), transmission (manual),  top (hard top), color (red), seats (leather), audio (premium), wheels (premium).

// Write your 'miataRf' instance below:
// Write your code below:





// Print miataRf. It should have all of the above properties. Plus, the extended warranty.
// Write your code below:





// Print miataRf, calling massBuild(), building 15,000
// It should print: "Building 15000 Red Grand Touring Miata-RF's."
// Write your code below:





// Print miataRf, calling customerBuild(), building one black Miata-Rf with the following options, as an array: hid headlights, sports suspension, leather steering wheel, heated seats, adaptive cruise control.
// It should read: "Building one black Grand Touring Miata-RF with the following options: hid headlights, sports suspension, leather steering wheel, heated seats, adaptive cruise control"
// Write your code below:




// TRAIL BLAZER MASS PRODUCTION
// The Trail Blazer should inherit from truck.
// The following properties must be specified: model (Trail Blazer), color (blue), trim (Sport), enginesize (8), hitch (true), bed (standard), navigation (true), doors (2)

// Write your 'trailBlazer' instance below:
// Write your code below:





// Print trailBlazer. It should have all the above properties. Plus, the extended warranty.
// Write your code below:




// Print trailBlazer, calling massBuid(). It should build 35000 trucks.
// It should print: "Building 35000 blue Sport Trail Blazer's."
// Wrint your code below:





// Print trailBlazer, calling customerBuild(). It should build a red Trail Blazer with the following options, as an array: seat warmers, tinted windows, fog lamps.
// It should print: "Building one red Sport Trail Blazer with the following options: seat warmers, tinted windows, fog lamps"
// Write your code below:
