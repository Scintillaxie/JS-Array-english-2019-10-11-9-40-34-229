// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(Array.isArray(a)); //false
console.log(Array.isArray(b)); //true

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
var b = Array.from(a,x=>x*2);
console.log(b);

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join('+')); //case 2
console.log(colors.join(',')); //case 3

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
var compare = function (x, y) {
			    if (x < y) {
			        return -1;
			    } else if (x > y) {
			        return 1;
			    } else {
			        return 0;
			    }
			}
			// console.log(a.sort(compare)); 
b = a.sort(compare);
console.log(b.reverse());

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function findMost(arr){
		if(!arr.length) return;			
		let res = {};
		let maxItem = 0;
		let maxNum = 0;		
		arr.forEach((item) => {
		res[item] ? res[item] += 1: res[item] = 1;
				})
				
				for(let i in res){
					if(res[i] > maxNum){
						maxNum = res[i];
						maxItem = i;
					}
				}
				return maxItem;
							}
console.log(findMost(a));
