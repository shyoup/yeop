#include <iostream>
#include <vector>
#include <string>
#include <chrono>
#include <algorithm>

using namespace std;

void normalize (vector<int> &num) {
	num.push_back(0);
	//자릿수 올림을 처리한다
	for (int i = 0; i < num.size() - 1; i++) //num.size()-1 중요
	{
		if (num[i] < 0)	{
			int borrow = (abs(num[i]) + 9) / 10;
			num[i + 1] -= borrow;
			num[i] += borrow * 10;
		}
		else {
			num[i + 1] += num[i] / 10;
			num[i] %= 10;
		}
	}
	while (num.size() > 1 && num.back() == 0)
		num.pop_back();
}
vector<int> multiply(const vector<int> &a, const vector<int> &b){

	vector<int> c(a.size() + b.size() + 1, 0);
	for (int i = 0; i < a.size(); i++)
		for (int j = 0; j < b.size(); j++)
			c[i + j] += (a[i] * b[j]);
	normalize(c);
	return c;
}


//a+=b*(10^k)를 구현한다
void addTo(vector<int> &a, const vector<int> &b, int k) {
	int length = b.size();
	a.resize(max(a.size() + 1, b.size() + k));
	for (int i = 0; i< length; i++)
		a[i + k] += b[i];       

	for (int i = 0; i < a.size(); i++)
	{
		if (a[i] >= 10) {
			a[i + 1] += a[i] / 10;
			a[i] %= 10;
		}
	}
}



//a-=b;를 구현한다 a>=b를 가정한다
void subFrom(vector<int> &a, const vector<int> &b) {
	int length = b.size();
	a.resize(max(a.size() + 1, b.size()) + 1);
	for (int i = 0; i< length; i++)
		a[i] -= b[i];
	for (int i = 0; i < a.size(); i++)	{
		if (a[i] < 0) {
			a[i] += 10;
			a[i + 1] -= 1;
		}
	}
}



vector<int> karatsuba(const vector<int> &a, const vector<int>& b) {
	int an = a.size(), bn = b.size(); 
	if (an < bn) return karatsuba(b, a); // a가 b보다 짧을 경우 둘을 바꾼다.
	if (an == 0 || bn == 0) return vector<int>(); // 기저 사례, a나 b가 비어있는 경우
	if (an <= 50) return multiply(a, b); // 계산이 비교적 짧은 경우 곱셈한다.
	int half = an / 2;

	vector<int> a0(a.begin(), a.begin() + half);
	vector<int> a1(a.begin() + half, a.end());
	vector<int> b0(b.begin(), b.begin() + half);
	vector<int> b1(b.begin() + half, b.end());

	vector <int> z2 = karatsuba(a1, b1); // z2=a1+b1
	vector <int> z0 = karatsuba(a0, b0); // z0=a0*b0

	addTo(a0, a1, 0);
	addTo(b0, b1, 0); // //a0=a0+a1;   //b0=b0+b1

	vector<int> z1 = karatsuba(a0, b0); // z1=(a0+a1)*(b0+b1)-z0-z2

	subFrom(z1, z0);
	subFrom(z1, z2);

	vector<int> result; // result=z0+z1*10^half+z2*10^(half+2)

	addTo(result, z0, 0);
	addTo(result, z1, half);
	addTo(result, z2, half + half);
	return result;
}

int main(void) {
	vector<int> a, b, result;
	string number;
	
	cin >> number;
	for (int i = number.size() - 1; i >= 0; i--)
		a.push_back(number[i] - '0');

	cin >> number;
	for (int i = number.size() - 1; i >= 0; i--)
		b.push_back(number[i] - '0');

	cout << endl;
	result = karatsuba(a, b);

	for (int i = result.size() - 1; i >= 0; i--)
		cout << result[i];
	cout << endl;

	return 0;
}
