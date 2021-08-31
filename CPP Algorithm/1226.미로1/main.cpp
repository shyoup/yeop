#include <iostream>
#include <stdio.h>
#include <stack>

using namespace std;

int map[16][16];
stack<int> x_pos, y_pos;  // 교차로 저장 스택
int cnt = 0; // 주변의 길 갯수
bool up1, down1, right1, left1;
int startx, starty;

int go(int x, int y) {
	if (map[x][y] == 3)
		return 1;
	map[x][y] = 1;
	cnt = 0;
	up1 = false;
	down1 = false;
	left1 = false;
	right1 = false;

	if (map[x][y + 1] == 0 || map[x][y + 1] == 3) {
		++cnt;
		right1 = true;
	}
	if (map[x + 1][y] == 0 || map[x + 1][y] == 3) {
		++cnt;
		down1 = true;
	}
	if (map[x][y - 1] == 0 || map[x][y - 1] == 3) {
		++cnt;
		left1 = true;
	}
	if (map[x - 1][y] == 0 || map[x - 1][y] == 3) {
		++cnt;
		up1 = true;
	}

	if (x_pos.empty() && cnt == 0) // 모두 갔던 길이거나 길이 막힌 상황
		return 0;
	else if (!x_pos.empty() && cnt == 0) {
		int xx = x_pos.top();
		int yy = y_pos.top();
		x_pos.pop();
		y_pos.pop();
		go(xx, yy);
	}
	else { // 갈길이 있는 상황
		if (cnt > 1) {
			x_pos.push(x);
			y_pos.push(y);
		}
		if (up1)
			go(x - 1, y); // 위로 가기
		else if (down1)
			go(x + 1, y); // 아래로 가기
		else if (right1)
			go(x, y + 1); // 오른쪽으로 가기
		else if (left1)
			go(x, y - 1); // 왼쪽으로 가기
	}
}

int main() {
	for (int tc = 1; tc <= 10; tc++) {
		int a;
		cin >> a;
		for (int i = 0; i < 16; i++) {
			for (int j = 0; j < 16; j++) {
				scanf("%1d", &a);
				map[i][j] = a; // 지도 저장
				if (a == 2) {
					startx = i;
					starty = j; // 시작점 저장
				}
			}
		}
		int ret = go(startx, starty);
		cout << "#" << tc << " " << ret << endl;
	}
}

// 메모리 12,628kb / 실행시간 7ms / 코드길이 1536
// bfs로 풀으라는거 같은데 그냥 dfs 로 풀었다
