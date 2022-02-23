SELECT ANIMAL_ID, NAME FROM ANIMAL_INS
WHERE INTAKE_CONDITION <> "Aged"
ORDER BY ANIMAL_ID

-- 조건문에서 != 대신 <> 사용 이유: !=를 사용해도 <>로 변환해서 값을 출력함. 성능 측면을 고려한다면 <> 사용하는 것이 더 효율적