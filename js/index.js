//3. Напишите цыкл, который выводит в консоль
//числа от max до min по убыванию

const max = 50;
const min = 23;
for (let i = max; i >= min ; i-=1) {
        if (i % 2 !== 0) {
        continue;
    } 
   console.log(i)
} 