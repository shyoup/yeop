#include <string>
#include <vector>

using namespace std;

int solution(int n) {
    if(n == 1 || n == 2)
        return 1;
    int num1 = 1;
    int num2 = 1;
    int result = 0;
    for(int i=3; i<=n; i++) {
        result = (num1 + num2)%1234567;
        num1 = num2;
        num2 = result;
    }
    return result;
}