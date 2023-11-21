namespace myshop;

entity Product {
  key ID: Integer;
  name: String;
  price: Decimal(9, 2);
  quantity: Integer;
  status: String;
  description: String;
  img: String;
}

entity Order {
  key ID: Integer;
  productID: Integer;
  quantity: Integer;
  total: Decimal(9, 2);
  customer_ID: Integer;
  // Define association to Product
  product: Association to Product on product.ID = $self.productID;

  // Define association to Customer
  customer: Association to Customer on customer.ID = $self.customer_ID;
}

entity Customer {
  key ID: Integer;
  name: String;
  address: String;
  mobile: Integer;
  pin_code: Integer;
  // Define association to Orders
  orders: Composition of many Order on orders.customer_ID = $self.ID;
}
