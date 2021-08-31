#include <iostream>
#include <stdio.h>
#include <stack>

using namespace std;

int map[16][16];
stack<int> x_pos, y_pos;  // ������ ���� ����
int cnt = 0; // �ֺ��� �� ����
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

	if (x_pos.empty() && cnt == 0) // ��� ���� ���̰ų� ���� ���� ��Ȳ
		return 0;
	else if (!x_pos.empty() && cnt == 0) {
		int xx = x_pos.top();
		int yy = y_pos.top();
		x_pos.pop();
		y_pos.pop();
		go(xx, yy);
	}
	else { // ������ �ִ� ��Ȳ
		if (cnt > 1) {
			x_pos.push(x);
			y_pos.push(y);
		}
		if (up1)
			go(x - 1, y); // ���� ����
		else if (down1)
			go(x + 1, y); // �Ʒ��� ����
		else if (right1)
			go(x, y + 1); // ���������� ����
		else if (left1)
			go(x, y - 1); // �������� ����
	}
}

int main() {
	for (int tc = 1; tc <= 10; tc++) {
		int a;
		cin >> a;
		for (int i = 0; i < 16; i++) {
			for (int j = 0; j < 16; j++) {
				scanf("%1d", &a);
				map[i][j] = a; // ���� ����
				if (a == 2) {
					startx = i;
					starty = j; // ������ ����
				}
			}
		}
		int ret = go(startx, starty);
		cout << "#" << tc << " " << ret << endl;
	}
}

// �޸� 12,628kb / ����ð� 7ms / �ڵ���� 1536
// bfs�� Ǯ����°� ������ �׳� dfs �� Ǯ����
