-- https://programmers.co.kr/learn/courses/30/lessons/59408

SELECT COUNT(DISTINCT NAME) AS "count" FROM ANIMAL_INS
WHERE NAME IS NOT NULL


-- DISTINCT: 옆에 있는 모든 컬럼을 고려하여 중복 제거 진행
-- 컬럼이 여러 개 있을 경우, 하나의 컬럼에만 중복을 제거하는 것이 불가능. row를 하나로 치기 때문