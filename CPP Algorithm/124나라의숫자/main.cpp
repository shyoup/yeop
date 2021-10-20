#include <string>
#include <vector>

using namespace std;

string cal(int n) {
    int next = n / 3;
    if(n == 0)
        return string();
    int num = n % 3;
    if(num == 1) {
        string a = cal(next);
        return a+'1';
    } else if(num == 2) {
        string b = cal(next);
        return b+'2';
    } else if(num == 0) {
        string c = cal(next-1);
        return c+'4';
    }
}

string solution(int n) {
    return cal(n);
}