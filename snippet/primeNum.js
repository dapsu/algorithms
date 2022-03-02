// 소수일 때 true 반환하는 함수
function primeNum(num) {
    for (let i=2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}