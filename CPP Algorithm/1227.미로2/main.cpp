#include <iostream>
#include <stdio.h>
#include <stack>

using namespace std;

int map[100][100];
stack<int> x_pos, y_pos;  // 교차로 저장 스택
int cnt = 0; // 주변의 길 갯수
bool up1, down1, right1, left1;
int startx, starty;
int found = 0;

void go(int x, int y) {
	if (map[x][y] == 3)
	{
		found = 1;
		return;
	}
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
		return;
	else if (!x_pos.empty() && cnt == 0) {
		int xx = x_pos.top();
		int yy = y_pos.top();
		x_pos.pop();
		y_pos.pop();
		go(xx, yy);
		return;
	}
	else { // 갈길이 있는 상황
		if (cnt > 1) {
			x_pos.push(x);
			y_pos.push(y);
		}
		if (down1)
		{
			go(x + 1, y);
			return;
		} // 아래로 가기
		else if (right1)
		{
			go(x, y + 1);
			return;
		} // 오른쪽으로 가기
		else if (up1)
		{
			go(x - 1, y);
			return;
		} // 위로 가기
		else if (left1)
		{
			go(x, y - 1);
			return;
		} // 왼쪽으로 가기
	}
}

int main() {
	for (int tc = 1; tc <= 10; tc++) {
		int a;
		found = 0;
		cin >> a;
		while (!x_pos.empty())
			x_pos.pop();
		while (!y_pos.empty())
			y_pos.pop();
		for (int i = 0; i < 100; i++) {
			for (int j = 0; j < 100; j++) {
				scanf_s("%1d", &a);
				map[i][j] = a; // 지도 저장
				if (a == 2) {
					startx = i;
					starty = j; // 시작점 저장
				}
			}
		}
		go(startx, starty);
		cout << "#" << tc << " " << found << endl;
	}
}

// 12,784kb / 18ms / 1,759 오른쪽 아래를 더 먼저 하면 1ms 빨라졌다. 코드가 짧아져서 그런지 뭔지 모르겠다
// 근데 문제가 너무 쉬웠음. 미로1이랑 데이터가 커진거 말곤 달라진 것이 없다.