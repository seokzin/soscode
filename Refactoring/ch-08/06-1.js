const retrievePricingPlan = () => ({
  base: 50, // 기본요금
  unit: 100, // 제품 하나당 가격
  discountThreshold: 7, // 몇개 이상부터 할인 적용할지 (8개: 0개 할인. 8개: 1개 할인. 10개: 3개 할인)
  discountFactor: 20, // 개당 할인액
});

const retrieveOrder = () => ({
  units: 8,
  isRepeat: true, // 반복주문시 추가할인
});

const chargeOrder = (charge) => console.log(charge);

// 반복주문, 8개 주문시:
// 기본요금50 + 주문액 100 * 8 = 850
// threshold 초과 1개에 대한 할인액 20
// 반복주문에 대한 추가할인액 20
// result: 810

const pricingPlan = retrievePricingPlan();
const baseCharge = pricingPlan.base;
const chargePerUnit = pricingPlan.unit;

const order = retrieveOrder();
const units = order.units;

const discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);

const discount =
  discountableUnits * pricingPlan.discountFactor + (order.isRepeat ? 20 : 0);

chargeOrder(baseCharge + units * chargePerUnit - discount);
