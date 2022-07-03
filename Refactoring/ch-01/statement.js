import createStatementData from "./createStatementData.js";

const usd = (aNumber) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(aNumber / 100);
};

const renderPlainText = (data) => {
  let result = `청구내역 (고객명: ${data.customer})\n`;
  for (let perf of data.performances) {
    // 청구 내역을 출력한다.
    result += `${perf.play.name}: ${usd(perf.amount)} (${perf.audience}석)\n`;
  }
  result += `총액: ${data.totalAmount}\n`;
  result += `적립 포인트: ${data.totalVolumeCredits}점\n`;
  return result;
};

const renderHTML = (data) => {
  let result = `<h1>청구내역 (고객명: ${data.customer})</h1>
  <table>
  <tr><th>연극</th><th>좌석수</th><th>금액</th></tr>
  `;
  for (let perf of data.performances) {
    // 청구 내역을 출력한다.
    result += `<tr><td>${perf.play.name}</td><td>(${
      perf.audience
    }석)</td><td>${usd(perf.amount)}</td></tr>`;
  }
  result += `</table>
  <p>총액: <em>${data.totalAmount}</em></p>
  <p>적립 포인트: <em>${data.totalVolumeCredits}</em></p>
  `;
  return result;
};

const statement = (invoice, plays) => {
  return renderPlainText(createStatementData(invoice, plays));
};

const htmlStatement = (invoice, plays) => {
  return renderHTML(createStatementData(invoice, plays));
};

export default statement;
