// Exercise 01
class Student {
  #birth = "";
  constructor(_name, _email, _birth, _score) {
    this.#birth = _birth;
    this.name = _name;
    this.email = _email;
    this.age = this.getAge();
    this.score = _score;
  }

  getAge() {
    return new Date().getFullYear() - new Date(this.#birth).getFullYear();
  }
}

const dbStudent = [
  new Student("Edo", "edo@mail.com", "1997-04-25", 85),
  new Student("Andrew", "and@mail.com", "1998-11-12", 65),
  new Student("Zafran", "zaf@mail.com", "1992-02-01", 95),
  new Student("Budi", "budi@mail.com", "1996-11-11", 35),
];

const calculateStudent = (students) => {
  const scores = [];
  const ages = [];

  for (let i = 0; i < students.length; i++) {
    scores.push(students[i].score);
    ages.push(students[i].age);
  }

  const maxScore = Math.max(...scores);
  const minScore = Math.min(...scores);
  let totalScore = scores.reduce((acc, cur) => acc + cur, 0);
  const avgScore = totalScore / scores.length;

  const minAge = Math.min(...ages);
  const maxAge = Math.max(...ages);
  let totalAge = ages.reduce((acc, cur) => acc + cur, 0);
  const avgAge = totalAge / ages.length;

  const iMaxScore = scores.indexOf(maxScore);
  const iMinScore = scores.indexOf(minScore);
  const scoreStatus = {
    higest: students[iMaxScore],
    lowest: students[iMinScore],
    average: avgScore,
  };

  const iMaxAge = ages.indexOf(maxAge);
  const iMinAge = ages.indexOf(minAge);
  const ageStatus = {
    higest: students[iMaxAge],
    lowest: students[iMinAge],
    average: avgAge,
  };

  return {
    score: scoreStatus,
    age: ageStatus,
  };
};

console.log(calculateStudent(dbStudent));

// Exercise 02
class Product {
  constructor(_name, _price) {
    this.name = _name;
    this.price = _price;
  }
}

const dbProduct = [new Product("Apel", 5000), new Product("Lemon", 10000)];

class Transaction {
  #total = 0;
  constructor() {
    this.cart = [];
  }

  addToCart(product, qty) {
    this.cart.push({
      product: { ...product, qty },
      total: product.price * qty,
    });
    this.#total += product.price * qty;
  }

  showTotal() {
    return this.#total;
  }

  checkout() {
    let display = "";
    for (let i = 0; i < this.cart.length; i++) {
      const { name, price, qty } = this.cart[i].product;
      const total = this.cart[i].total;
      const priceIDR = price.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      });
      const totalIDR = total.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      });
      display += `${i + 1}. ${name}, ${priceIDR}, Qty: ${qty}, ${totalIDR}\n`;
    }

    const result = `${display}Total Price: ${this.#total}`;
    this.#total = 0;
    this.cart = [];
    return result;
  }
}

const transaction = new Transaction();
transaction.addToCart(dbProduct[0], 3);
transaction.addToCart(dbProduct[1], 1);
console.log(transaction.showTotal());
console.log(transaction.cart);
console.log(transaction.checkout());

transaction.addToCart(dbProduct[0], 2);
console.log(transaction.showTotal());
