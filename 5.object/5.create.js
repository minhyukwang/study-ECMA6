function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.dispaly = () => {
    console.log(`${this.name} : ${this.emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
