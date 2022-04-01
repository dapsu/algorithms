-- https://programmers.co.kr/learn/courses/30/lessons/59413

SET @hour := -1;    -- 변수 선언. hour라는 변수에 -1 값 대입

SELECT (@hour := @hour +1) AS HOUR, 
       (SELECT COUNT(*) FROM ANIMAL_OUTS WHERE HOUR(DATETIME) = @hour) AS COUNT FROM ANIMAL_OUTS
WHERE @hour < 23

-- SET함수: 어떠한 변수에 특정한 값을 넣을 때 사용. 변수명과 초기값 설정 가능
--  - @가 붙은 변수는 프로시저가 종료되어도 유지됨

-- := : sql문법에서 := 는 비교 연산자인 = 과 혼동을 피하기 위한 대입 연산!