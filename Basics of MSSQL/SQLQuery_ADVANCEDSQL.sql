select * from employe 

select id, name, salary,
ROW_NUMBER() OVER (order by salary desc) as popularity,
RANK() OVER (order by salary desc) as popularity_rank,
DENSE_RANK() OVER (order by salary desc) as popularity_dense_rank
from employe

insert into employe values (7, 'shantanu', 'GATEKEEPER', 400000)