-- https://programmers.co.kr/learn/courses/30/lessons/59047

SELECT ANIMAL_ID, NAME FROM ANIMAL_INS
WHERE ANIMAL_TYPE = "Dog" AND NAME LIKE "%el%"
ORDER BY NAME

-- LIKE: 특정 부분 일치하는 데이터 찾을 때 사용
-- 이때 "_" 혹은 "%" 사용. 
---- _ 는 여기에 무슨 값이 들어가는지는 모르지만 _ 개수만큼 데이터 있다는 뜻. e.g. __EL__ 이면 앞에 2글자, 뒤에 2글자이면서 EL 포함하는 데이터
---- %는 글자수와 상관없이 찾음. e.g. %EL 이면 끝자리가 EL인 모든 데이터, %EL%이면 어딘가에 EL만 포함하면 됨