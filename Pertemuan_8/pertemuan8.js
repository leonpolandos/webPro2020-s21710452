/*
    EXERCISE 8
*/

let account = {
    name : "Leonard",
    description : [],
    expenses : [],

    addDescription : function(description){
        this.description.push(description);
    },

    addExpenses : function (amount){
        this.expenses.push(amount);
    },

    getAccountSummary: function () {
        let totalExpenses = 0;
        this.expenses.forEach(function(el){
            totalExpenses = totalExpenses + el;        
        });
        return console.log("Total Pengeluaran " + this.name + " Rp." + totalExpenses)
    },
    
}
account.addDescription("Beli Makanan")
account.addDescription("Beli Minuman")
account.addDescription("Ongkos Antar");
account.addExpenses(20000);
account.addExpenses(7000);
account.addExpenses(10000)

console.log(account.description)
console.log(account.expenses)
console.log(account)

account.getAccountSummary()
console.log("Sorry sir kita ada kasih pisah description dengan expenses, soalnya kalo se gabung kita sudah coba-coba nda bisa di calculate sir.")

/* Sorry sir kita ada kasih pisah description dengan expenses, soalnya kalo se gabung kita sudah coba-coba nda bisa di calculate sir. */




 


