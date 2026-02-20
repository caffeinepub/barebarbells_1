import Text "mo:core/Text";
import List "mo:core/List";
import Storage "blob-storage/Storage";
import MixinStorage "blob-storage/Mixin";

actor {
  include MixinStorage();

  type Product = {
    id : Nat;
    name : Text;
    description : Text;
    price : Float;
    image : Storage.ExternalBlob;
  };

  var nextProductId = 0;
  let products = List.empty<Product>();

  public shared ({ caller }) func addProduct(name : Text, description : Text, price : Float, image : Storage.ExternalBlob) : async Nat {
    let productId = nextProductId;
    let newProduct : Product = {
      id = productId;
      name;
      description;
      price;
      image;
    };

    products.add(newProduct);
    nextProductId += 1;
    productId;
  };

  public query ({ caller }) func getProduct(id : Nat) : async ?Product {
    products.find(func(product) { product.id == id });
  };

  public query ({ caller }) func getAllProducts() : async [Product] {
    products.toArray();
  };

  public shared ({ caller }) func updateProduct(id : Nat, name : Text, description : Text, price : Float, image : Storage.ExternalBlob) : async () {
    let updatedProducts = products.map<Product, Product>(
      func(product) {
        if (product.id == id) {
          { id; name; description; price; image };
        } else {
          product;
        };
      }
    );
    products.clear();
    products.addAll(updatedProducts.values());
  };

  public shared ({ caller }) func deleteProduct(id : Nat) : async () {
    let filteredProducts = products.filter(func(product) { product.id != id });
    products.clear();
    products.addAll(filteredProducts.values());
  };
};
