"use strict";
//Interfaces
// Abstract bank
class Bank {
    constructor(bankName, clients, balance) {
        this.bankName = bankName;
        this.clients = clients;
        this.balance = balance;
        //Account creating method
    }
    createAccount(cl) {
        cl.followingBanks.push(this.bankName) & this.clients.push(cl);
    }
    //Client checkig method
    isClient(cl) {
        for (let clBank of cl.followingBanks) {
            if (this.bankName === clBank) {
                return true;
            }
        }
    }
    //Loan Method
    getLoan(cl, amount) {
        //Checking client
        if (this.isClient(cl)) {
            if (cl.salary * 5 >= amount) {
                this.balance.dram -= amount;
                cl.money.dram += amount;
                console.log(`${this.bankName} gives you ${amount} dram, now your credit account is ${cl.money.dram + amount}dram`);
            }
            else {
                console.log(`your current money is ${cl.money.dram}dram, we can give you maximum ${cl.salary * 5} dram`);
            }
        }
        else {
            console.log(`Client ${cl.firstName} ${cl.secondName} is not our client`);
        }
    }
    //Exchange method (1)
    exchangeAmdToUsd(cl, amd) {
        //Checking client
        if (this.isClient(cl)) {
            if (cl.money.dram >= amd) {
                cl.money.dram -= amd;
                cl.money.dollar += amd / 500;
                console.log(`${cl.firstName} changed ${amd} AMD to ${amd / 500} USD`);
            }
            else {
                console.log(`You dont have enough money, your AMD balance is ${cl.money.dram}`);
            }
        }
        else {
            console.log(`Client ${cl.firstName} ${cl.secondName} is not our client`);
        }
    }
    //Exchange method (2)
    exchangeUsdToDram(cl, usd) {
        //Checking client
        if (this.isClient(cl)) {
            if (cl.money.dollar >= usd) {
                cl.money.dollar -= usd;
                cl.money.dram += usd * 500;
                console.log(`${cl.firstName} changed ${usd} USD to ${usd * 500} AMD`);
            }
            else {
                console.log(`You dont have enough money, your USD balance is ${cl.money.dollar}`);
            }
        }
        else {
            console.log(`Client ${cl.firstName} ${cl.secondName} is not our client`);
        }
    }
}
//Banks
class Ameriabank extends Bank {
    constructor(bankName = "Ameriabank", clients = [], balance = { dram: 145000000, dollar: 785000000 }) {
        super(bankName, clients, balance);
        this.bankName = bankName;
        this.clients = clients;
        this.balance = balance;
    }
}
class IDbank extends Bank {
    constructor(bankName = "IDbank", clients = [], balance = { dram: 123840000, dollar: 485000000 }) {
        super(bankName, clients, balance);
        this.bankName = bankName;
        this.clients = clients;
        this.balance = balance;
    }
}
class Araratbank extends Bank {
    constructor(bankName = "Araratbank", clients = [], balance = { dram: 452840000, dollar: 6855000000 }) {
        super(bankName, clients, balance);
        this.bankName = bankName;
        this.clients = clients;
        this.balance = balance;
    }
}
//Abstract Person
class Person {
    constructor(firstname, secondname, age, job, salary, money) {
        this.firstName = firstname;
        this.secondName = secondname;
        this.age = age;
        this.job = job;
        this.salary = salary;
        this.money = money;
    }
}
//Clients
class Client extends Person {
    constructor(firstname, secondname, age, job, salary, followingBanks, money, loan) {
        super(firstname, secondname, age, job, salary, money);
        this.followingBanks = followingBanks;
        this.loan = loan;
    }
}
//Creating a clients
const client1 = new Client("Client1", "Client1yan", 25, "Software Engineer", 800000, [], { dram: 1500000, dollar: 4000 }, { loanAmount: 0 });
const client2 = new Client("Client2", "Client2yan", 25, "QA Engineer", 520000, [], { dram: 1500000, dollar: 4000 }, { loanAmount: 0 });
const client3 = new Client("Client3", "Client3yan", 25, "WEB Developer", 300000, [], { dram: 1500000, dollar: 4000 }, { loanAmount: 0 });
//Creating a banks
const ameria = new Ameriabank();
const idbank = new IDbank();
const araratbank = new Araratbank();
//Creating account method check
// ameria.createAccount(client1)
// ameria.createAccount(client2)
// ameria.createAccount(client3)
// idbank.createAccount(client1)
// idbank.createAccount(client2)
// idbank.createAccount(client3)
//Loan method check
// ameria.getLoan(client1, 5000)
// ameria.getLoan(client2, 50000)
// ameria.getLoan(client3, 500000)
// idbank.getLoan(client1, 5000)
// idbank.getLoan(client2, 50000)
// idbank.getLoan(client3, 500000)
//Exchange method check
// console.log(client1.money)
// ameria.exchangeAmdToUsd(client1, 500)
// console.log(client1.money)
// console.log(client1.money)
// ameria.exchangeUsdToDram(client1, 500)
// console.log(client1.money)
//Banks logs
// console.log(ameria)
// console.log(idbank)
// console.log(araratbank)
//# sourceMappingURL=script.js.map