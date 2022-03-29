#include <string>
#include <vector>
#include <unordered_map>

using namespace std;

string solution(vector<string> participant, vector<string> completion) {
    string answer = "";

    unordered_map<string, int> d;
    for (auto& i : participant) d[i]++; // 상수시간
    for (auto& i : completion) d[i]--;  // 상수시간
    for (auto& i : d) {
      if (i.second > 0) {
        answer = i.first;
        break;
      }
    }  // 상수시간
    return answer;   // O(n)
}