#include <iostream>
#include <string>

using namespace std;

int tc;
int ret = 0;
int cnt = 0;
void cal(string a, string b, int aN, int bN) {
	if (bN >= b.size()) // 끝까지 찾은것
		return;
	if (aN == 0 && a[aN] == b[bN]) // 발견한것
	{
		ret++;
		cal(a, b, a.size() - 1, bN + cnt + 2);
		return;
	}
	else if (aN == 0 && a[aN] != b[bN]) {
		cal(a, b, a.size() - 1, bN + cnt + 2);
		return;
	}
	if (a[aN] == b[bN]) {
		cnt += 1;
		cal(a, b, aN-1, bN-1);
		return;
	}
	else
	{
		int c = 0;
		for (int aa = a.size()-1; aa >= 0; aa--)
		{
			if (a[aa] != b[bN])
				c++;
			else
				break;

		}
		cnt = 0;
		cal(a, b, a.size()-1, bN + c);
		return;
	}


}

int main() {
	for (int i = 0; i <= 10; i++) {
		string text1;
		string text2;
		ret = 0;
		cin >> tc;
		cin >> text1;
		cin >> text2;

		cal(text1, text2, text1.size()-1, text1.size()-1);
		cout <<"#" <<i+1<<" " <<ret << endl;
	}
}

// 완벽한 코드는 아니지만 기초부터 다시 시작하자!!