#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int tc, people, mi, ei;

int main() {
	cin >> tc;
	for (int t = 1; t <= tc; t++) {
		cin >> people;
		int *boil = new int[people];
		int *eat = new int[people];
		int total = 0;
		for (int p = 0; p < people; p++) {
			cin >> mi;
			boil[p] = mi;
		}
		for (int p = 0; p < people; p++) {
			cin >> ei;
			eat[p] = ei;
		}

		vector<pair<int, int>> order;
		for (int i = 0; i < people; i++)
			order.push_back(make_pair(-eat[i], i)); // 정렬하는 법 잘 기억해 놓기.
		sort(order.begin(), order.end());

		int ret = 0, beginEat = 0;
		for (int i = 0; i < people; i++) {
			int box = order[i].second;
			beginEat += boil[box];
			ret = max(ret, beginEat + eat[box]);
		}

		cout << ret << endl;

	}
}