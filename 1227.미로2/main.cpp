#include <iostream>
#include <stdio.h>
#include <stack>

using namespace std;

int map[100][100];
stack<int> x_pos, y_pos;  // ������ ���� ����
int cnt = 0; // �ֺ��� �� ����
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

	if (x_pos.empty() && cnt == 0) // ��� ���� ���̰ų� ���� ���� ��Ȳ
		return;
	else if (!x_pos.empty() && cnt == 0) {
		int xx = x_pos.top();
		int yy = y_pos.top();
		x_pos.pop();
		y_pos.pop();
		go(xx, yy);
		return;
	}
	else { // ������ �ִ� ��Ȳ
		if (cnt > 1) {
			x_pos.push(x);
			y_pos.push(y);
		}
		if (down1)
		{
			go(x + 1, y);
			return;
		} // �Ʒ��� ����
		else if (right1)
		{
			go(x, y + 1);
			return;
		} // ���������� ����
		else if (up1)
		{
			go(x - 1, y);
			return;
		} // ���� ����
		else if (left1)
		{
			go(x, y - 1);
			return;
		} // �������� ����
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
				map[i][j] = a; // ���� ����
				if (a == 2) {
					startx = i;
					starty = j; // ������ ����
				}
			}
		}
		go(startx, starty);
		cout << "#" << tc << " " << found << endl;
	}
}

// 12,784kb / 18ms / 1,759 ������ �Ʒ��� �� ���� �ϸ� 1ms ��������. �ڵ尡 ª������ �׷��� ���� �𸣰ڴ�
// �ٵ� ������ �ʹ� ������. �̷�1�̶� �����Ͱ� Ŀ���� ���� �޶��� ���� ����.