-- https://programmers.co.kr/learn/courses/30/lessons/59046

SELECT ANIMAL_ID, NAME, SEX_UPOn_INTAKE FROM ANIMAL_INS
WHERE NAME IN ("Lucy", "Ella", "Pickle", "Rogan", "Sabrina", "Mitty")   -- IN 연산자로 여러 값을 지정하여 검색 가능
ORDER BY ANIMAL_ID