-- https://programmers.co.kr/learn/courses/30/lessons/59045

SELECT OUTS.ANIMAL_ID, OUTS.ANIMAL_TYPE, OUTS.NAME FROM ANIMAL_OUTS AS OUTS
LEFT OUTER JOIN ANIMAL_INS AS INS
ON OUTS.ANIMAL_ID = INS.ANIMAL_ID
WHERE INS.SEX_UPON_INTAKE LIKE "%Intact%" AND (OUTS.SEX_UPON_OUTCOME LIKE "%Spayed%" OR OUTS.SEX_UPON_OUTCOME LIKE "%Neutered%")
ORDER BY OUTS.ANIMAL_ID