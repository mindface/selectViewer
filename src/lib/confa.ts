export function t() {
  console.log("fwafewfae");
}

export function Animal(name: string, sound: string) {
  console.time("lplpl");
  this.name = name;
  this.sound = sound;
}

Animal.prototype.makeSound = function () {
  console.timeEnd("lplpl");
  return this.name + " says " + this.sound;
};

export class classAnimal {
  name: string;
  sound: string;

  constructor(name: string, sound: string) {
    console.time("lplpl@");
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.timeEnd("lplpl@");
    return this.name + " says " + this.sound;
  }
}
