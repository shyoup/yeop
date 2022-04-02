#include <string>
#include <vector>
#include <algorithm>

using namespace std;

bool cmp(int a, int b) {
  string s1 = to_string(a) + to_string(b);
  string s2 = to_string(b) + to_string(a);
  return s1 > s2;
} // 시간 영향을 받지않음

string solution(vector<int> numbers) {
  string answer = "";
  sort(numbers.begin(), numbers.end(), cmp); // nlogn 배열 정렬
  for (auto& i : numbers)
    answer += to_string(i);  // n
  return answer[0] == '0' ? "0" : answer;
}  // nlogn 시간 복잡도