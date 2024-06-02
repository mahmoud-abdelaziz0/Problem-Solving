//! pass unknown numbers of values to function and take these values and multiply it with 3 and extract from it the even numbers

function extractEven(...nums) {
  // console.log(nums);

  let vlues = nums.map((ele) => ele * 3).filter((ele) => ele % 2 === 0);
  console.log(vlues);
}

extractEven(2, 5, 6, 7, 8, 9, 3);
