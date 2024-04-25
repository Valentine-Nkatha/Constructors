function Car(make,model,year,isAvailable){
    this.make = make
    this.model = model
    this.year = year
    this.isAvailable = isAvailable

    this.toggleAvailability=function(){
    this.isAvailable=!this.isAvailable
    }

}
const familyCar = new Car("Ranger","Ford","2023","false");
console.log(familyCar.isAvailable)
familyCar.toggleAvailability()
console.log(familyCar.isAvailable)

function Rental(car,renterName,rentalStartDate,rentalEndDate){
    this.car=car
    this.renterName=renterName
    this.rentalStartDate=rentalStartDate
    rentalEndDate=rentalEndDate

    this.calculationRentalDuration=function(){
        console.log(this.rentalEndDate-this.rentalEndDate)

    }
}
const rentalDays=("Toyota","Total",20,30)
console.log(rentalDays.calculationRentalDuration)


const newCar = new Car("Subaru","Impreza,2023","true")
console.log(newCar)

const newRentalDays=new Rental("Subaru","Forester",30,10)
console.log(newRentalDays)

//Question2
function Question(text,options,corrrectAnswer){
    this.text=text
    this.options=options
    this.correctAnswer=this.correctAnswer

    this.checkAnswer=function(){

    }
}

function Quiz(questions,currentQuestionIndex,score){
    this.questions=questions
    this.currentQuestionIndex=currentQuestionIndex
    this.score=score

    this.addQuestion=function(){

    }
    this.nextQuestion=function(){

    }
    this.submitAnswer=function(){
        
    }
}
