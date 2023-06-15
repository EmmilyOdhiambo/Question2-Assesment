
//**Ancestral Stories:** In many African cultures, the art of storytelling is passed
// down from generation to generation. Imagine you're creating an application that
// records these oral stories and translates them into different languages. The
// stories vary by length, moral lessons, and the age group they are intended for.
// Think about how you would model `Story`, `StoryTeller`, and `Translator`
// objects, and how inheritance might come into play if there are different types of
// stories or storytellers.

//Atrributes = title,lenth of the story,users,names

//class Story-
// Properties:
// title: Title of the story
// length: Length of the story (e.g., short, medium, long)
// target-users: Intended usersfor the story (such as children,Youths,adults)
// Methods:
// get_title(): Returns the title of the story
// get_length(): Returns the length of the story
// get_target-users(): Returns the intended age group for the story

// StoryTeller Class:---Name,stories
//methods-----get name of the storyteller,get stories produced by the storytellers


class Story {
    constructor(title, length, targetUsers) {
      this.title = title;
      this.length = length;
      this.targetUsers = targetUsers;
    }
  
    getTitle() {
        const title = "Born a crime"
        if (this.title === "Born a crime"){
            return 'its valid'
        }else{
            return 'Not recognised '

        }
      return this.title;
    }
  
    getLength() {
        const lenth = long
        if (this.lenth === long){
            return 'lenth is truly correct'
        }else{
            return 'lenth not truely correct'

        }
    }
  
    getTargetUsers() {
        const targetUsers = Adults
        if (this.targetUsers === Adults){
            return 'Users are exactly Adults'
        }else{
            return 'Users not found'

        }
          
    }
    
  }
  
  // StoryTeller Class
  class StoryTeller {
    constructor(name) {
      this.name = name;
      this.stories = [];
    }
  
    get_name() {
      return this.name;
    }
  
    get_stories() {
      return this.stories;
    }
  
    add_story(story) {
      this.stories.push(story);
    }
  
    remove_story(story) {
      const index = this.stories.indexOf(story);
      if (index > -1) {
        this.stories.splice(index, 1);
      }
    }
  }
  
  // Translator Class
  class Translator {
    constructor(name, language_pairs) {
      this.name = name;
      this.language_pairs = language_pairs;
    }
  
    get_name() {
      return this.name;
    }
  
    get_language_pairs() {
      return this.language_pairs;
    }
  }



  // Question 5:
//   Create a class called Product with attributes for name, price, and quantity.
// Implement a method to calculate the total value of the product (price * quantity).
// Create multiple objects of the Product class and calculate their total values.

// class Product:
//     attributes:
//         name: 
//         price: 
//         quantity: 

//     method calculateTotalValue():
//         return price * quantity

class Product {
  constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
  }

  calculateTotalValue() {
      return this.price * this.quantity;
  }
}

// Create multiple objects of the Product class
const product1 = new Product("Mango", 6.5, 100);
const product2 = new Product("Orange", 20, 240);

const totalValue1 = product1.calculateTotalValue();
const totalValue2 = product2.calculateTotalValue();
// Print the total values
console.log(`Total value of ${product1.name}: ${totalValue1}`);
console.log(`Total value of ${product2.name}: ${totalValue2}`);

//QUESTION8

//Create a LibraryCatalog class that handles the cataloging and management of
// books in a library. Implement methods to add new books, search for books by
// title or author, keep track of available copies, and display book details.

// Class Book
    // Properties:
    //     title
    //     author
    //     availableCopies

    // Constructor(title, author, availableCopies)
    //Metods(addBook,searchBook by title or author)



class Book {
  constructor(title, author, availableBooks) {
      this.title = title;
      this.author = author;
      this.availableBooks = this.availableBooks;
  }
}

class Library {
  constructor() {
      this.books = [];
  }

  addBook(book) {
      this.books.push(book);
  }

  searchByTitle(title) {
      const foundBooks = [];
      for (let book of this.books) {
          if (book.title.toLowerCase() === title.toLowerCase()) {
              foundBooks.push(book);
          }
      }
      return foundBooks;
  }
}


 


//QUESTION6
// Class Student
// Attributes:
// name: string
// age: integer
// grades: list of integers


class Student {
  constructor(name, age, grades) {
      this.name = name;
      this.age = age;
      this.grades = grades;
  }
}

  function calculateAverageGrade(number){
      const sum = this.grades.reduce((sum, grade) => sum + grade, 0);
      return sum / this.grades.length;
  }

  function studentInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Grades: ${this.grades}`);
  }

   function hasPassed() {
      const averageGrade = this.calculateAverageGrade();
      return averageGrade >= 60;
  }


const student1 = new Student("Emmily", 18, [90, 85, 70, 65]);
const student2 = new Student("Stephanie", 24, [40, 55, 65, 70]);

student1.studentInfo();
console.log(`Average Grade: ${student1.calculateAverageGrade()}`);
console.log(`Passed: ${student1.hasPassed()}`);

student2.studentInfo();
console.log(`Average Grade: ${student2.calculateAverageGrade()}`);
console.log(`Passed: ${student2.hasPassed()}`);
