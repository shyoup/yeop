#include <iostream>
#include <string>
#include <deque>
#include <vector>
#include <algorithm>

using namespace std;
string str1;
string str2;
string str;
string input;
int ret, T, result1, result2;
bool yes = false;

int cal(string &n) {
	if (n.size() == 1 || n.size() == 0) {
		yes = true;
		return 1;
	}
	if (n[0] == n[n.size() - 1]) {
		string newstr;
		newstr = n.substr(1, n.size() - 2);
		cal(newstr);
		if (yes == true)
			return 1;
		else
			return 0;
	}
	else
		return 0;
}

int main() {
	for (int tc = 1; tc <= 10; tc++) {
		ret = 0;
		yes = false;
		str1 = "";
		str2 = "";
		cin >> T;
		for (int a = 0; a < 100; a++) {
			cin >> str;
			str1.append(str);
		}
		for (int n = 0; n < 100; n++) {
			for (int m = 0; m < 100; m++) {
				str2 += str1[(100 * m) + n];
			}
		} // 세로 데이터 벡터에 저장
		for (int index = 100; index >= 2; index--) {
			for (int i = 0; i < 10000; i++) {
				if ((i + index - 1) % 100 == 0) {
					i = 100 + i - (i % 100) - 1;
				}
				else {
					input = str1.substr(i, index);
					ret = cal(input);
					if (ret == 1)
						break;
				}
			}
			if (ret == 1) {
				result1 = index;
				break;
			}
		}
		for (int index = 100; index >= 2; index--) {
			ret = 0;
			yes = false;
			for (int i = 0; i < 10000; i++) {
				if ((i + index - 1) % 100 == 0) {
					i = 100 + i - (i % 100) - 1;
				}
				else {
					input = str2.substr(i, index);
					ret = cal(input);
					if (ret == 1)
						break;
				}
			}
			if (ret == 1) {
				result2 = index;
				break;
			}
		}
		int result = max(result1, result2);

		cout << "#" << tc << " " << result << endl;
	}
}

// 최적의 방법은 아님이 분명하다. 다행히 통과... 메모리 12,628kb/ 실행시간 1099ms / 코드길이 1624
// 실행시간 너무 길다... ㅠㅠ