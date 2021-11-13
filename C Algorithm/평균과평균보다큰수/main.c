#include <stdio.h>
int main() {
	int idx;
	int sum = 0;
	scanf("%d", &idx);
	int arr[idx];
	for(int i=0; i<idx; i++) {
		int num;
		scanf("%d", &num);
		arr[i] = num;
		sum += num;
	}
	double avg = (double)sum / (double)idx;
	int cnt = 0;
	for(int i=0; i<idx; i++) {
		if(avg < arr[i]) cnt++;
	}
	printf("%0.1f %d", avg, cnt);
	
	return 0;
}