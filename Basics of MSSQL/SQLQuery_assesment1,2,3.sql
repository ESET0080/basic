create database smartmeter
use smartmeter

-- Task 0-  Create the database tables needed to store smart meter readings, and customer details.

create table Customers(CustomerId int primary key, Name varchar(50), Address varchar(250), Region varchar(250));

--drop table SmartMeterReadings

create table SmartMeterReadings(MeterId int primary key, CustomerId int, Location varchar(250),
InstalledDate date, ReadingDateTime datetime, EnergyConsumed float,
foreign key(CustomerId) references Customers(CustomerId)
);

select * from SmartMeterReadings

insert into Customers values (1,'Atharv Ranjan','Muzaffarpur,Bihar','East'),
(2,'Shubham Joshi','Pune,Maharastra','West'),
(3,'Ganesh A','Banglore,Karnataka','South'),
(4,'Shantanu Swaraj','New Delhi,Delhi','North')

insert into SmartMeterReadings values(101, 1, 'Basement', '2025-01-01', '2025-01-20 12:00:00', 50.0),
(102, 2, 'Basement', '2024-01-10', '2024-01-30 17:00:00', 45.0),
(103, 3, 'Rooftop', '2025-02-03', '2025-02-28 09:00:00', 100.0),
(104, 4, 'Basement', '2024-03-29', '2024-04-20 11:00:00', 150.0)

--Task 1-  fetch all readings where energy consumed between 10 and 50, Reading date and Time with the given constrains and exclude 

select * from SmartMeterReadings where EnergyConsumed between 10 and 50 and ReadingDateTime between '2024-01-01' and '2024-01-31' and InstalledDate '2024-06-30'


-- Task2- Calculate avg energy, max energy for each customer  for current year

select CustomerId, AVG(EnergyConsumed) as AvgEnergyConsumed, MAX(EnergyConsumed) as MaxEnergyConsumed 
FROM SmartMeterReadings WHERE ReadingDateTime > '2025-01-01' 
GROUP BY CustomerId 

