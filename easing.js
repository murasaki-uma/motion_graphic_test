/*
t : 0～1
b : 0
c : 100
d : 1

t : 時間(進行度)
b : 開始の値(開始時の座標やスケールなど)
c : 開始と終了の値の差分
d : Tween(トゥイーン)の合計時間

*/

function ease_in(t, b, c, d){
    t /= d;
	return c*t*t + b;
}
	
function ease_out(t, b, c, d){
    t /= d
	return -c*t*(t-2.0) + b
}
	
function ease_in_out(t, b, c, d){
    t /= d/2.0;
	if (t < 1) {
        return c/2.0*t*t + b;
    }
	t = t - 1;
	return -c/2.0 * (t*(t-2) - 1) + b;
}
	