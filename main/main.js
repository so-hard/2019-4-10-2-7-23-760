/*
1. 停车等待计价

2. 起步价

3.2-8公里

4. 8公里以上

5. 四舍五入

*/
let result = '';
//停车费
function parkPrice(time) {
    return time*0.25
}
//2～8
function twoAndEight(distance) {

    return 6 + (distance-2)*0.8
}
// >8
function overflowEight(distance){
   return twoAndEight(8) + (distance-8)*0.8*1.5 
}



module.exports = function main(inputs) {
    // write your code here...
    let {distance,parkTime} = inputs;
    // console.log(distance,parkTime)
    switch (true) {
        case distance>0 && distance<=2:
                result = 6 + parkPrice(parkTime)
            break;
        case distance>2 && distance<=8:
                result = twoAndEight(distance) + parkPrice(parkTime)
            break;
        case distance> 8:
                result = overflowEight(distance) + parkPrice(parkTime)
            break;
    }
    

    return Math.round(result);
};
