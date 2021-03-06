//Day06 reviews the different loops you can use in programming

//Excersize 1:

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]


// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
// ]


// const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// 1: Iterate 0 to 10 using for loop, while loop, and do-while loop


// for (i = 0; i <= 10; i ++) {
//     console.log(i)
// }

// let i = 0
// while(i <=10) {
//     console.log(i)
//     i++
// }

// let i = 0
// do {
//     console.log(i)
//     i++
// } while (i <=10)


// 2 : Iterate 10 to 0 using for loop, while loop, and do-while loop

// for (i = 10; i >= 0; i --) {
//     console.log(i)
// }

// let i = 10
// while(i >=0) {
//     console.log(i)
//     i--
// }

// let i = 10
// do {
//     console.log(i)
//     i--
// } while (i >=0)


// 3: Iterate 0 to n using for loop

// for(n = 0; n <= 10; n++) {
//     console.log(n)
// }


/* 4: Write a loop with the following pattern using console.log:
    #
    ##
    ###
    ####
    #####
    ######
    ####### */

// for(i ='#'; i.length < 8; i+= '#') {
//     console.log(i)
// }


/* 5: Use loop to print the following pattern:
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100 */

// for(i = 0; i <= 10; i++) {
//     console.log(i * i)
// }

/* 6: Using loop print the following pattern:
 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000 */

// for(i = 0; i<=10; i++){
//     console.log(i**2, i**3)
// }


// 7: Use for loop to iterate from 0 to 100 and print only even numbers

// for (i=0;i<=100;i++){
//     if(i%2!=0){
//         continue
//     }
//     console.log(i)
// }


// 8: Use for loop to iterate from 0 to 100 and print only odd numbers

// for (i=0;i<=100;i++){
//     if(i%2==0){
//         continue
//     }
//     console.log(i)
// }


// 9: Use for loop to iterate from 0 to 100 and print only prime numbers
