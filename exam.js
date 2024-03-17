// console.log("Answer to the qustion no 1")
// function passmark(a,b,c,d,e){

//     if(a >=40 && b >= 40 && c>= 40 && d>=40 && e>=40){
//         console.log("you are pass")
//     }
//     else console.log("your are flii")
// }
// passmark(80,60,55,51,40)

// console.log("Answer to the qustion no 2")


console.log("My name is Shovon. now I ntroduce my Family.")

class my_family {
    constructor(nike_name,full_name,relationship,age,bolad_gorup,gender) {
      this.nike_name = nike_name;
      this.full_name = full_name;
      this.relationship = relationship;
      this.ages = age;
      this.bl_group = bolad_gorup;
      this.gender = gender;
  
    }
   
    my_family_member() {
      console.log(`My {${this.relationship} (${this.gender}==m)?console.log('m'):console.log('f') }nick is ${this.nike_name} and my ${this.relationship} full nmae is  ${this.full_name} , ${this.ages} and Bload group is ${this.bl_group}`);
    }
// show in console here but Declare value below on const (fater) and shoe with (show).(my_family_member)
// console.log(
//   `The word "${word}" ${
//     sentence.includes(word) ? 'is' : 'is not'
//   } in the sentence`,
// );

  }
  
  const father = new my_family('Ruba', 'Rubayetul haque', 'Father','47 ','O+' , 'm')
  const mother = new my_family('swapna', 'Swapna Khatun', 'Mother','42 ','B+' , 'f')
  const sister = new my_family('Sara', 'Sara Khan', 'Sister','18','AB+', 'm')
  father.my_family_member();
  mother.my_family_member();
  sister.my_family_member();
 
//   console.log("Answer to the qustion no 4")
// function namota(y){
//     for(x=1;x<31;x++){
//         console.log('student no ' +x + ': ' + x + '*' +y + '=' + x*y ) 
//     }
    
// }
// namota(60)