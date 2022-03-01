-- https://programmers.co.kr/learn/courses/30/lessons/59414

SELECT ANIMAL_ID, NAME, DATE_FORMAT(DATETIME, "%Y-%M-%D") AS 날짜 FROM ANIMAL_INS


-- DATE_FORMAT 
-- %Y(4자리 연도), %y(2자리 연도), %M(월, 영어로 표시), %m(월, 숫자로 표시), %D(일, 서수로 표시), %d(일, 숫자로 표시), %H(24시간), %h(12시간), %i, %s