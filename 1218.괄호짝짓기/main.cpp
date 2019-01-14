#include <iostream>
#include <string>
#include <stack>

using namespace std;

stack<char> openingstk;

int cal(const string &str) {
	const string opening("{[(<"), closing("}])>");

	for (int i = 0; i < str.size(); i++) {
		if (opening.find(str[i]) != -1) {
			openingstk.push(str[i]);
		}
		else
		{
			if (openingstk.empty())
				return 0;
			if (opening.find(openingstk.top()) != closing.find(str[i])) {
				return 0;
			}
			openingstk.pop();
		}
	}

	if (openingstk.empty() == false)
		return 0;
	else
		return 1;
}

int main() {
	for (int tc = 1; tc <= 10; tc++) {
		while (openingstk.empty() == false)
			openingstk.pop();

		int strsize;
		cin >> strsize;
		string str;
		cin >> str;
		int ret = cal(str);
		cout << "#" << tc << " " << ret << endl;
	}
	return 0;
}