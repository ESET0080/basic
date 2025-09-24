using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace interfacedemo
{
    public class PrinterB : IPrinter
    {
        public void Print(string document)
        {
            Console.WriteLine($"Printer B is working: '{document}'");
        }
    }
}
