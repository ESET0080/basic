﻿using System;
using System.Reflection;
namespace interfacedemo
{
    public interface IPrinter
    {
        void Print(string document);
    }

    public class Program
    {
        public static void Main()
        {
            IPrinter printer1 = new PrinterA();
            IPrinter printer2 = new PrinterB();

            string doc = "Quarterly Report";
            Console.WriteLine(" Starting Print Job 1 ");
            printer1.Print(doc);

            string docs = "Annual Report";
            Console.WriteLine("\n Starting Print Job 2 ");
            printer2.Print(docs);
        }
    }
}
