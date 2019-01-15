#include <iostream>
#include <vector>

using namespace std;;

int vec[100][2];
bool visited[100];
int t, num;
int i1, i2;
int big;

int dfs(int index) {
	for (int i = 0; i < 2; i++) {
		visited[index] = true;
		if (vec[index][i] == 99)
			return 1;
		if (vec[index][i] < 0) {
			return 0;
		}
		if (visited[vec[index][i]] == false)
		{
			int ret = dfs(vec[index][i]);
			if (ret == 1)
				return 1;
		}
		
	}
}
int dfsAll() {
	int ret1 = 0;
	ret1 = dfs(0); 	
	if (ret1 == 1)
		return 1;
	else
		return 0;
}

int main() {
	for (int tc = 1; tc <= 10; tc++) {
		memset(vec, -1, sizeof(vec));
		memset(visited, false, sizeof(visited));
		cin >> t >> num;
		for (int i = 0; i < num; i++) {
			cin >> i1 >> i2;
			if (big < i2 && i2!=99)
				big = i2;
			if (vec[i1][0] > 0)
				vec[i1][1] = i2;
			else
				vec[i1][0] = i2;
		}
		int ret = dfsAll();
		cout << "#" << tc << " " << ret << endl;
	}
}

//가장 간단한 dfs를 만들어봤다. 문제가 굉장히 쉬움에도 불구하고 꼼꼼히 안읽어서 틀린줄;; ㅋㅋㅋ