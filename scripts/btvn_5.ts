function tong_tu_1_den_n(n: number) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function tinh_giai_thua(n: number) {
  let multiply = 1;
  if (n == 0) {
    return 1;
  }
  for (let i = 1; i <= n; i++) {
    multiply *= i;
  }
  return multiply;
}

function in_ra_tam_giac_vuong_co_chieu_cao_n(n: number) {
  for (let i = 1; i <= n; i++) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

function in_ra_tam_giac_can_co_chieu_cao_n(n: number) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      row += "*";
    }
    console.log(row);
  }
}

function in_ra_hinh_chu_nhat_co_chieu_dai_m_va_chieu_rong_n(
  m: number,
  n: number
) {
  for (let i = 1; i <= m; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += "*";
    }
    console.log(row);
  }
}

function day_fibonacci(n: number) {
  if (n == 1) {
    return 0;
  } else if (n == 2) {
    return 0 + " " + 1;
  } else {
    let result = "0 1";
    let n1 = 0;
    let n2 = 1;
    for (let i = 3; i <= n + 1; i++) {
      result += n2 + n1;
      n2 = n1 + n2;
      n1 = n2;
    }
    return result;
  }
}
