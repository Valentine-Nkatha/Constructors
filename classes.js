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
        days=rentalEndDate-rentalEndDate

    }
}
const rentalDays=("Toyota","Total",20,30)
console.log(rentalDays.rentalStartDate)
console.log(rentalDays.rentalEndDate)
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

    this.checkAnswer=function(submittedAnswer){
        return submittedAnswer===this.correctAnswer
    }
}


function Quiz(questions,currentQuestionIndex,score){
    this.questions=questions
    this.currentQuestionIndex=currentQuestionIndex
    this.score=score

    this.addQuestion=function(query){
      this.questions.push(query)
    }
    this.nextQuestion=function(){
        this.currentQuestionIndex++

    }
    this.submitAnswer=function(submittedAnswer){
        const questionNow=this.questions[this.currentQuestionIndex];
        if(questionNow.checkAnswer(submittedAnswer)){
            this.score++
        }

        
    }
}
const quizes=new Quiz()
const firtstQuestion=new Question("This is good",["This is good","This is bad"])
quizes.addQuestion(query);

const submittedAnswer="This bad"
quizes.submitAnswer(submittedAnswer)
console.log(quizes.score)