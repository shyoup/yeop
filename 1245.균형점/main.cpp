#include <iostream>
#include <vector>
#include <stdlib.h>
#include <algorithm>
using namespace std;

double tc, N, Nx, Nm;
double y;
vector<double> x;
vector<double> m;
vector<double> x_pos;

int main() {
	cin >> tc;
	for (int c = 1; c <= tc; c++) {
		x.clear();
		m.clear();
		x_pos.clear();
		double ave = 0;
		cin >> N;
		for (int i = 0; i < N; i++) {
			cin >> Nx;
			x.push_back(Nx);
		}
		for (int j = 0; j < N; j++) {
			cin >> Nm;
			m.push_back(Nm);
		}

		for (int a = 0; a < N - 1; a++) {
			double left = x[a];
			double right = x[a + 1];
			double center = 0.0;

			while (1) {
				if (abs(right - left) < 0.000000000001)
					break;

				center = (left + right) / 2;
				double ret = 0.0;

				for (int k = 0; k < N; k++) {
					double d = m[k] / pow(center - x[k], 2);
					if (x[k] < center)
						ret -= d;
					else
						ret += d;
				}

				if (ret < 0.0)
					left = center;
				else if (ret > 0.0)
					right = center;
				else
					break;
			}
			x_pos.push_back(center);
		}

		cout << "#" << c << " ";
		for (int s = 0; s < N - 1; s++) {
			printf("%.10f ", x_pos[s]);
		}
		cout << endl;

	}
}