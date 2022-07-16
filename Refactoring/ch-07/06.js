class Shipment {
  _shippingCompany;
  _trackingNumber;

  get trackingInfo() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }

  get shippingCompany() {
    return this._shippingCompany;
  }

  set shippingCompany(arg) {
    this._shippingCompany = arg;
  }

  get trackingNumber() {
    return this._trackingNumber;
  }

  set trackingNumber(arg) {
    this._trackingNumber = arg;
  }
}

const client1 = () => {
  const aShipment = new Shipment();
  const request = { vendor: "A-SHIP", number: "010-1234-5678" };
  aShipment.shippingCompany = request.vendor;
  aShipment.trackingNumber = request.number;
  return aShipment.trackingInfo;
};

console.log(client1());
