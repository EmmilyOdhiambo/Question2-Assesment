#question one

class Story:
    def __init__(self, title, length, target_users):
        self.title = title
        self.length = length
        self.target_users= target_users

    def get_title(self):
        return self.title
    
    def get_length(self):
        return self.length

    def get_target_users(self):
        return self.target_users


# StoryTeller Class
class StoryTeller:
    def __init__(self, name):
        self.name = name
        self.stories = []

    def get_name(self):
        return self.name

    def get_stories(self):
        return self.stories

    def add_story(self, story):
        self.stories.append(story)

    def remove_story(self, story):
        self.stories.remove(story)


# Translator Class
class Translator:
    def __init__(self, name, language_pairs):
        self.name = name
        self.language


#Question5

class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

    def calculate_total_value(self):
        return self.price * self.quantity

# Create multiple objects of the Product class
product1 = Product("Mango", 25, 100)
product2 = Product("Orange", 10, 200)

total_value1 = product1.calculate_total_value()
total_value2 = product2.calculate_total_value()


# Print the total values
print(f"Total value of {product1.name}: {total_value1}")
print(f"Total value of {product2.name}: {total_value2}")



# QUESTION 6
class Student:
    def __init__(self, name, age, grades):
        self.name = name
        self.age = age
        self.grades = grades

    def calculate_average_grade(self):
        return sum(self.grades) / len(self.grades)

    def display_student_info(self):
        print("Name:", self.name)
        print("Age:", self.age)
        print("Grades:", self.grades)

    def has_passed(self):
        average_grade = self.calculate_average_grade()
        return average_grade >= 60


student1 = Student("John", 18, [80, 75, 90, 85])
student2 = Student("Emma", 17, [70, 65, 75, 80])

student1.display_student_info()
print("Average Grade:", student1.calculate_average_grade())
print("Passed:", student1.has_passed())

student2.display_student_info()
print("Average Grade:", student2.calculate_average_grade())
print("Passed:", student2.has_passed())


#QUESTION 8

class Book:
    def __init__(self, title, author, available_copies):
        self.title = title
        self.author = author
        self.available_copies = available_copies

class LibraryCatalog:
    def __init__(self):
        self.books = []

    def add_book(self, book):
        self.books.append(book)

    def search_by_title(self, title):
        found_books = []
        for book in self.books:
            if book.title.lower() == title.lower():
                found_books.append(book)
        return found_books

    def search_by_author(self, author):
        found_books = []
        for book in self.books:
            if book.author.lower() == author.lower():
                found_books.append(book)
        return found_books

    def book_details(self, book):
        print("Title:", book.title)
        print("Author:", book.author)
        print("Available Copies:", book.available_copies)
