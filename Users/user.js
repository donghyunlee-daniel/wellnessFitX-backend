class user extends coreClass{
 constructor(firstName, lastName, gender, dateOfBirth, email, contact, joinedDate){
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.dateOfBirth = dateOfBirth;
    this.email = email;
    this.contact = contact;
    this.joinedDate = joinedDate;
 }   
 addData(){
    console.log("Adding user Data");
 }

}
