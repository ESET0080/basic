namespace inheritancedemo
{
    internal class Program
    {
        static void Main(string[] args)
        {
            SavingAccount acc = new SavingAccount("SB001", "Amit Kumar", 1000.0);
            acc.DisplayBalance();
            acc.Deposit(500);
            acc.Withdraw(200);
            acc.ApplyInterest();

            Console.ReadLine();
        }
    }
}
