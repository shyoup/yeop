#include <iostream>
#include <string>
#include <deque>
#include <vector>

using namespace std;
vector<char> vec1;
vector<char> vec2;
deque<char> deq;
string str;
int index, ret;

int cal(deque<char> &n){
	if (n.size() == 1 || n.size() == 0) {
		return 1;
	}
	
	if (n.front() == n.back()) {
		deq.pop_back();
		deq.pop_front();
		cal(n);
		//return 0;
	}
	else
		return 0;
}


int main() {
	for (int tc = 1; tc <= 10; tc++) {
		ret = 0;
		vec1.clear();
		vec2.clear();
		cin >> index;
		for (int a = 0; a < 8; a++) {
			cin >> str;
			for (int i = 0; i < 8; i++) {
				vec1.push_back(str[i]); // ���� ������ ���Ϳ� ����
			}
		}
		for (int n = 0; n < 8; n++) {
			for (int m = 0; m < 64; m++) {
				if (m % 8 == n)
					vec2.push_back(vec1[m]);
			}
		} // ���� ������ ���Ϳ� ����

		for (int b = 0; b < 8; b++) {
			for (int c = 8*b; c < 8*(b+1) - index + 1; c++) {
				deq.clear();
				for (int d = c; d < c + index; d++) {
					deq.push_back(vec1[d]);
				}
				ret += cal(deq);
			}
			for (int c = 8 * b; c < 8 * (b + 1) - index + 1; c++) {
				deq.clear();
				for (int d = c; d < c + index; d++) {
					deq.push_back(vec2[d]);
				}
				ret += cal(deq);
			}
		}

		cout << "#" << tc << " " << ret << endl;
	}
}

// for���� �ʹ� ���Ƽ� ���� �ɸ��� �˾����� �޸� 12,632kb/ ����ð� 7ms/ �ڵ���� 1217 => �ſ� ��ȣ�����̴�.