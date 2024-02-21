// class Employee {
//   constructor(name, birth, gender) {
//     this.name = name;
//     this.age = new Date().getFullYear() - new Date(birth).getFullYear();
//     this.gender = gender;
//   }
// }

// class FullTimeEmployee extends Employee {
//   #totalSalary = 0;
//   #salaryPerHour = 100000;
//   #overtimeSalayPerHour = 75000;
//   #normalWorkPerDay = 6;

//   constructor(name, birth, gender) {
//     super(name, birth, gender);
//   }

//   addWorkingHour(checkIn, checkOut) {
//     const [inHour] = checkIn.split(":");
//     const [outHour] = checkOut.split(":");
//     const totalWorkHour = Number(outHour) - Number(inHour);

//     if (totalWorkHour <= this.#normalWorkPerDay) {
//       this.#totalSalary += totalWorkHour * this.#salaryPerHour;
//     } else {
//       const overtime = totalWorkHour - this.#normalWorkPerDay;
//       this.#totalSalary +=
//         this.#normalWorkPerDay * this.#salaryPerHour +
//         overtime * this.#overtimeSalayPerHour;
//     }
//   }

//   calculateSalary() {
//     return this.#totalSalary;
//   }
// }

// class PartTimeEmployee extends Employee {
//   #totalSalary = 0;
//   #salaryPerHour = 50000;
//   #overtimeSalayPerHour = 30000;
//   #normalWorkPerDay = 6;

//   constructor(name, birth, gender) {
//     super(name, birth, gender);
//   }

//   addWorkingHour(checkIn, checkOut) {
//     const [inHour] = checkIn.split(":");
//     const [outHour] = checkOut.split(":");
//     const totalWorkHour = Number(outHour) - Number(inHour);

//     if (totalWorkHour <= this.#normalWorkPerDay) {
//       this.#totalSalary += totalWorkHour * this.#salaryPerHour;
//     } else {
//       const overtime = totalWorkHour - this.#normalWorkPerDay;
//       this.#totalSalary +=
//         this.#normalWorkPerDay * this.#salaryPerHour +
//         overtime * this.#overtimeSalayPerHour;
//     }
//   }

//   calculateSalary() {
//     return this.#totalSalary;
//   }
// }

// const ardi = new FullTimeEmployee("Ardhi", "1997-12-20", "Male");
// const edo = new PartTimeEmployee("Edo", "1997-12-30", "Female");
// ardi.addWorkingHour("09:00", "16:00");
// ardi.addWorkingHour("09:00", "15:00");
// console.log(ardi.calculateSalary());

// edo.addWorkingHour("09:00", "16:00");
// edo.addWorkingHour("09:00", "15:00");
// console.log(edo.calculateSalary());

// Calculate Salary
// 1. Membuat cetakan object untuk menyimpan data pegawai
class Employee {
  constructor(fullName, birth, gender, email, phone) {
    this.fullName = fullName;
    this.birth = birth;
    this.gender = gender;
    this.email = email;
    this.phone = phone;
  }
}

// 2. Menyiapkan class turunan untuk menentukan type pegawai
class FullTime extends Employee {
  #salary;
  constructor(fullName, birth, gender, email, phone) {
    super(fullName, birth, gender, email, phone);
    this.attendances = [];
    this.#salary = {
      fullTime: 100000,
      overTime: 75000,
    };
  }

  addWorking(clockIn, clockOut) {
    /**
     * INPUT:
     * clockIn: string, clockOut: string
     * PROCESS:
     * 1. Menghitung jumlah jam dari input clockIn dan clockOut
     *    formula: clockOut - clockIn
     * 2. Ketika didapat jumlah jamnya maka diperiksa apakah melebihi 6 jam
     *    IF jam > 6 maka perlu dicatat jumlah overtimenya
     *      lalu dihitung gajinya untuk mainSalary 6 * 100.000 dan overtime * 75.000
     *    ELSE langsung hitung mainSalary jam * 100.000
     * 3. Menyimpan data clockIn, clockOut, jam, dan salary ke dalam property this.attendances
     * */

    // 1. Menghitung jumlah jam dari input clockIn dan clockOut
    const [inHour] = clockIn.split(":");
    const [outHour] = clockOut.split(":");
    const workHour = Number(outHour) - Number(inHour);

    // 2. Melakukan pengkondisian agar mendapatkan mainSalary
    let salary = 0;
    if (workHour > 6) {
      const overTime = workHour - 6;
      salary = 6 * this.#salary.fullTime + overTime * this.#salary.overTime;
    } else {
      salary = workHour * this.#salary.fullTime;
    }

    // 3. Menyimpan data kedalam property this.attendances
    this.attendances.push({
      clockIn,
      clockOut,
      workHour,
      salary,
    });
  }

  totalSalary() {
    let amount = 0;
    this.attendances.forEach((item) => (amount += item.salary));
    return amount;
  }
}

const pegawaiB = new FullTime(
  "Ade Sujana",
  "1978-12-23",
  "MALE",
  "as@mail.com",
  "087998753675"
);

pegawaiB.addWorking("09:00", "16:00");
console.log(pegawaiB.totalSalary());
