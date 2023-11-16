namespace myshop;
entity Product {
  key ID: Integer;
  name: String;
  price: Decimal(9, 2);
  quantity: Integer;
}
entity Order {
  key ID: Integer;
  productID: Integer;
  quantity: Integer;
  total: Decimal(9, 2);
}
entity Customer {
  key ID: Integer;
  name: String;
  address: String;
}