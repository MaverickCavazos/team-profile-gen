const Employee = requirer('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officenumber){
        this.officenumber = officenumber
        super(name, id, email)
    }
    getOfficenumber(){
        return this.officenumber
    } 
    getRole(){
        return 'Manager'
    }
}
module.exports = Manager



