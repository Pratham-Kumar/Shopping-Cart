using myshop as my from '../db/data-model';
 
service CatalogService {
    entity Products as projection on my.Product;
    entity Orders as projection on my.Order;
    entity Customers as projection on my.Customer;
}