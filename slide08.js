class Employee {
  constructor(name, birth, gender) {
    this.name = name;
    this.age = new Date().getFullYear() - new Date(birth).getFullYear();
    this.gender = gender;
  }
}

class FullTimeEmployee extends Employee {
  #totalSalary = 0;
  #salaryPerHour = 100000;
  #overtimeSalayPerHour = 75000;
  #normalWorkPerDay = 6;

  constructor(name, birth, gender) {
    super(name, birth, gender);
  }

  addWorkingHour(checkIn, checkOut) {
    const [inHour] = checkIn.split(":");
    const [outHour] = checkOut.split(":");
    const totalWorkHour = Number(outHour) - Number(inHour);

    if (totalWorkHour <= this.#normalWorkPerDay) {
      this.#totalSalary += totalWorkHour * this.#salaryPerHour;
    } else {
      const overtime = totalWorkHour - this.#normalWorkPerDay;
      this.#totalSalary +=
        this.#normalWorkPerDay * this.#salaryPerHour +
        overtime * this.#overtimeSalayPerHour;
    }
  }

  calculateSalary() {
    return this.#totalSalary;
  }
}

class PartTimeEmployee extends Employee {
  #totalSalary = 0;
  #salaryPerHour = 50000;
  #overtimeSalayPerHour = 30000;
  #normalWorkPerDay = 6;

  constructor(name, birth, gender) {
    super(name, birth, gender);
  }

  addWorkingHour(checkIn, checkOut) {
    const [inHour] = checkIn.split(":");
    const [outHour] = checkOut.split(":");
    const totalWorkHour = Number(outHour) - Number(inHour);

    if (totalWorkHour <= this.#normalWorkPerDay) {
      this.#totalSalary += totalWorkHour * this.#salaryPerHour;
    } else {
      const overtime = totalWorkHour - this.#normalWorkPerDay;
      this.#totalSalary +=
        this.#normalWorkPerDay * this.#salaryPerHour +
        overtime * this.#overtimeSalayPerHour;
    }
  }

  calculateSalary() {
    return this.#totalSalary;
  }
}

const ardi = new FullTimeEmployee("Ardhi", "1997-12-20", "Male");
const edo = new PartTimeEmployee("Edo", "1997-12-30", "Female");
ardi.addWorkingHour("09:00", "16:00");
ardi.addWorkingHour("09:00", "15:00");
console.log(ardi.calculateSalary());

edo.addWorkingHour("09:00", "16:00");
edo.addWorkingHour("09:00", "15:00");
console.log(edo.calculateSalary());
