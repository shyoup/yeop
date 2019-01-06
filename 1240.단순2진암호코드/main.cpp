#include <iostream>
#include <vector>
using namespace std;

int num[10][7]{
{ 0,0,0,1,1,0,1 },
{ 0,0,1,1,0,0,1 },
{ 0,0,1,0,0,1,1 },
{ 0,1,1,1,1,0,1 },
{ 0,1,0,0,0,1,1 },
{ 0,1,1,0,0,0,1 },
{ 0,1,0,1,1,1,1 },
{ 0,1,1,1,0,1,1 },
{ 0,1,1,0,1,1,1 },
{ 0,0,0,1,0,1,1 }
};

const int index = 6;



int main() {
	int C;
	cin >> C;
	for (int tc = 0; tc < C; tc++) {
		int pass[8] = { 0, };
		int N, M, x;
		int ii;
		int result = 0;
		int full = 0;

		bool ret = false;
		result = 0;
		cin >> N;
		cin >> M;
		int **password = new int*[N];
		for (int a = 0; a < N; a++) {
			password[a] = new int[M];
			for (int b = 0; b < M; b++) {
				scanf_s("%1d", &x);
				password[a][b] = x;
				if (x == 1)
					ii = a;
			}
		} // 데이터 넣기
		for (int i = 0; i < M - 6; i++) {
			if (password[ii][index + i] == 1 && password[ii][index + i - 6] == 0 && password[ii][index + i + 1] != 1) {
				for (int numindex = 0; numindex < 10; numindex++) {
					for (int aa = 0; aa < 7; ++aa) {
						if (password[ii][index + i - 6 + aa] == num[numindex][aa]) {
							if (aa == 6)
							{
								pass[full] = numindex;
								full++;
								i += 6;
							}
						}
						else
							break;
					}
				}
			}
		}

		if (0 == (((pass[0] + pass[2] + pass[4] + pass[6]) * 3) + pass[1] + pass[3] + pass[5] + pass[7]) % 10) {
			for (int r = 0; r < 8; r++) {
				result += pass[r];
			}
		}

		cout << "#" << tc + 1 << " " << result << endl;
		for (int i = 0; i < N; i++) {
			delete[] password[i];
		}
		delete[] password;

	}
	return 0;
}
// 사실 for문이 너무 많아서 timecomplexity가 굉장히 높을 것이다. 다음에는 좋은 코드를 짜도록 해보자