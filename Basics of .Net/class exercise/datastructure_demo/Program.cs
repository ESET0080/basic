using System;
using System.Collections.Generic;

namespace datastructure_demo
{
    internal class Student;
    public int id { get; set; }
    public string Name { get; set; }
    public int Age { get; set; }

    public Student(int id, string Name, int Age)
    {
        Id = id;
        Name = name;
        Age = age;
    }
    public void Display()
    {
        Console.WriteLine($"ID: {id}, Name: (Name), Age: (Age)");
    }

    class program
    {
        static void main(string[] args) {
        }
    {
        static void Main(string[] args)
        {
            List<Student> student_list = new List<Student>();
            student_list.Add(new Student(1, "Atharv", 22));
            student_list.Add(new Student(2, "Ayush", 23));
            student_list.Add(new Student(3, "Abhishek", 21));

            Console.WriteLine(("Student List:");
            foreach (Student student in student_list) {
                {
                    student.Display();
                }
                Console.ReadLine()
            }
        }
    } 
}
    


// student class list
// 3 student object in a list

// Create a Console application to store 3 Student Objects in a list called 'student_list' and display them.
// You need to use Constructors to initialize Student objects

