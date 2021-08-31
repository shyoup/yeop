#include <iostream>
#include <string>
#include <vector>
#include <stack>

using namespace std;
int num;
string infix;
stack<char> stk;
stack<int> calstk;
vector<char> result;
const string isp("(+*)"), icp("+*(");

void compare(char &str) {
	int cm1, cm2;
	cm1 = isp.find(str);
	cm2 = isp.find(stk.top());
	if (cm1 > cm2)
		stk.push(str);
	else {
		result.push_back(stk.top());
		stk.pop();
		compare(str);
		return;
	}
	return;
}

void postfix(string &str) {
	for (int i = 0; i < str.size(); i++) {
		int post = isp.find(str[i]);

		if (str[i] >= 49 && str[i] <= 57)
			result.push_back(str[i]);

		else if (post == 0) 
			stk.push(str[i]);
		else if (post == 1 || post == 2) {
			compare(str[i]);
		}
		else if (post == 3) {
			while (1) {
				if (stk.top() != '(')
				{
					result.push_back(stk.top());
					stk.pop();
				}
				else {
					stk.pop();
					break;
				}
			}
		}
	}
}

int cal(vector<char> str) {
	for (int i = 0; i < str.size(); i++) {
		if (str[i] >= 49 && str[i] <= 57)
			calstk.push(str[i]-48);
		else if (str[i] == '+')
		{
			int m1 = calstk.top();
			calstk.pop();
			int m2 = calstk.top();
			calstk.pop();
			int m3 = m1 + m2;
			calstk.push(m3);
		}
		else if (str[i] == '*')
		{
			int m1 = calstk.top();
			calstk.pop();
			int m2 = calstk.top();
			calstk.pop();
			int m3 = m1 * m2;
			calstk.push(m3);
		}
	}
	return calstk.top();
}

int main() {
	for (int tc = 1; tc <= 10; tc++) {
		cin >> num;
		cin >> infix;
		postfix(infix); // ����ǥ��� ����

		unsigned int ret = cal(result);
		cout << "#" << tc << " " << ret << endl;
	}
	return 0;
}


// �޸� 12,644kb / ����ð� 7ms / �ڵ���� 1,579  => infix�� postfix�� ��ġ�� �ڵ�
// ������ �ٲٴ°� ������ �˰��� ������ �ű�����.