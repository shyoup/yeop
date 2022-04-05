#include <string>
#include <vector>

using namespace std;

string solution(string number, int k) {
  string s = "";
  for (int i =0; i< number.length(); i++) {  // n회
    while (!s.empty() && s.back() < number[i] && k > 0) {  // 2중 루프. n 제곱일수 있지만? 한 글자 입장에서 한번 추가, 한번 빠짐. 2n 회
      s.pop_back();
      k--;
    }
    if (k==0) {
      s += number.substr(i, number.length() - i);
      break;
    }
    s.push_back(number[i]);
  }
  return s.substr(0, s.length() - k);
} // O(n)