#include <vector>
#include <set>
#include <unordered_set>

using namespace std;

int solution(int n, vector<int> lost, vector<int> reserve) {
  unordered_set<int> l(lost.begin(), lost.end()); // unordered_map, unordered_set에 수를 넣는 시간 상수시간
  set<int> r;
  unordered_set<int> inter;
  for (auto& x: reserve) {
    if (l.find(x) == l.end()) r.insert(x);  // insert가 logk의 시간
    else inter.insert(x);  // 상수시간
  }  // O(klogk)
  for (auto& x : inter) l.erase(x); // 무시 가능 시간
  for (auto& x: r) {
    if (l.find(x-1) != l.end()) l.erase(x-1);
    else if (l.find(x+1) != l.end()) l.erase(x+1);
  } // k 시간
  return n - l.size();
}  // klogk 시간 비례