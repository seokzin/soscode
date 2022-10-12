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

const {
  base: baseCharge,
  unit: chargePerUnit,
  discountThreshold,
  discountFactor,
} = retrievePricingPlan();

const { units, isRepeat } = retrieveOrder();
const discountableUnits = Math.max(units - discountThreshold, 0);
const discount = discountableUnits * discountFactor + (isRepeat ? 20 : 0);
chargeOrder(baseCharge + units * chargePerUnit - discount);
