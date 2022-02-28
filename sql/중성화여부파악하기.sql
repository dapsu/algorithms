-- https://programmers.co.kr/learn/courses/30/lessons/59409

SELECT 
    ANIMAL_ID, 
    NAME,
    CASE
        WHEN SEX_UPON_INTAKE LIKE "Neutered%" OR SEX_UPON_INTAKE LIKE "Spayed%"
            THEN "O"
        ELSE "X"
    END AS "중성화"
FROM ANIMAL_INS


-- CASE THEN 구문
-- CASE 컬럼  
--      WHEN 조건1 THEN 값1
--      WHEN 조건2 THEN 값2 
--      ELSE 값3 
--      END