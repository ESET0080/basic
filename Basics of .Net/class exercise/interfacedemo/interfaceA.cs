using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace interfacedemo
{
    public class PrinterA : IPrinter
    {
        public void Print(string document)
        {
            Console.WriteLine($"Printer A is working: '{document}'");
        }
    }
}
