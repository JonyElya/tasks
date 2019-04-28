/**
 * Напишите функцию rle(input), реализующую примитивное RLE-сжатие входящей строки input.
 * Подробнее об RLE: https://ru.wikipedia.org/wiki/Кодирование_длин_серий
 *
 * Входящая строка сооттветствует regex паттерну /^[A-Z]+$/
 *
 * Пример:
 * rle('AAAB') === 'A3B'
 * rle('BCCDDDEEEE') === 'BC2D3E4'
 *
 * Больше примеров в тестах.
 *
 * @param  {string} input
 * @return {string}
 */
export function rle(input) {
  let result = new Array();
  let count = 1;
  let r = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] != input[i + 1] || input[i] >= 3 || count == 30) {
      result[r] = input[i];
      result[r + 1] = count;
      count = 0;
      r += 2;
      console.log(result);
    }
    count++;
  }

  return result.join("");
}
