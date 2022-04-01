-- https://programmers.co.kr/learn/courses/30/lessons/59042

SELECT OUTS.ANIMAL_ID, OUTS.NAME FROM ANIMAL_OUTS AS OUTS
LEFT OUTER JOIN ANIMAL_INS AS INS
ON OUTS.ANIMAL_ID = INS.ANIMAL_ID
WHERE INS.ANIMAL_ID is NULL
ORDER BY OUTS.ANIMAL_ID


-- JOIN: 두 개 이상의 테이블들을 연관된 컬럼을 기반으로 하여 행을 합치는 것

-- ref: https://www.w3schools.com/sql/sql_join.asp