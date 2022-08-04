import dayjs from "dayjs";

class Booking {
  #show;
  #date;
  _premiumDelegate;
  constructor(show, date) {
    this.#show = show;
    this.#date = date;
  }

  get date() {
    return this.#date;
  }

  get show() {
    return this.#show;
  }

  get basePrice() {
    let result = this.show.price;
    if (this.isPeakDay) result += Math.round(result * 0.15);
    return result;
  }

  get isPeakDay() {
    return this.date.isAfter(dayjs("2021-07-15")) && this.date.isBefore(dayjs("2021-07-31"));
  }

  _bePremium(extras) {
    this._premiumDelegate = new PremiumBookingDelegate(this, extras);
  }
}

class PremiumBooking extends Booking {
  #extras;
  constructor(show, date, extras) {
    super(show, date);
    this.#extras = extras;
  }

  get hasTalkback() {
    return this.show.hasOwnProperty("talkback");
  }

  get basePrice() {
    return Math.round(super.basePrice + this.#extras.premiumFee);
  }

  get hasDinner() {
    return this.#extras.hasOwnProperty("dinner") && !this.isPeakDay;
  }
}

class PremiumBookingDelegate {
  _host;
  _extras;
  constructor(hostBooking, extras) {
    this._host = hostBooking;
    this._extras = extras;
  }
}

const createBooking = (show, date) => new Booking(show, date);
const createPremiumBooking = (show, date, extras) => {
  const res = new PremiumBooking(show, date, extras);
  res._bePremium(extras);
  return res;
};

const booking = createBooking({ price: 100, talkback: true }, dayjs("2021-07-11"));
const premiumBooking1 = createPremiumBooking({ price: 100, talkback: true }, dayjs("2021-07-13"), {
  dinner: true,
  premiumFee: 10,
});
const premiumBooking2 = createPremiumBooking({ price: 100 }, dayjs("2021-07-17"), {
  dinner: true,
  premiumFee: 10,
});

console.log({
  price: booking.basePrice,
  dinner: booking.hasDinner,
  talkback: booking.hasTalkback,
  peakDay: booking.isPeakDay,
});

console.log({
  price: premiumBooking1.basePrice,
  dinner: premiumBooking1.hasDinner,
  talkback: premiumBooking1.hasTalkback,
  peakDay: premiumBooking1.isPeakDay,
});

console.log({
  price: premiumBooking2.basePrice,
  dinner: premiumBooking2.hasDinner,
  talkback: premiumBooking2.hasTalkback,
  peakDay: premiumBooking2.isPeakDay,
});
